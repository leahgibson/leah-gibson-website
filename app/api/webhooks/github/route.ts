import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    // Get the raw body and signature from GitHub
    const payload = await req.text();
    const signature = req.headers.get('x-hub-signature-256');
    
    // Verify this request actually came from GitHub
    const secret = process.env.GITHUB_WEBHOOK_SECRET || '';
    const hmac = crypto.createHmac('sha256', secret);
    const digest = 'sha256=' + hmac.update(payload).digest('hex');
    
    if (signature !== digest) {
      console.error('Invalid signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
    
    const data = JSON.parse(payload);
    const event = req.headers.get('x-github-event');
    
    console.log('Received GitHub event:', event);
    
    // Handle push events (when you commit code)
    if (event === 'push') {
      const commits = data.commits || [];
      const repo = data.repository.full_name;
      
      console.log(`Processing ${commits.length} commits to ${repo}`);
      
      // Save each commit as an activity
      for (const commit of commits) {
        await prisma.activity.create({
          data: {
            type: 'github',
            timestamp: new Date(commit.timestamp),
            title: `Pushed to ${repo}`,
            description: commit.message,
            url: commit.url,
            metadata: {
              repo,
              sha: commit.id.substring(0, 7), // Short commit hash
              author: commit.author.name,
            },
          },
        });
        console.log('Saved commit:', commit.message);
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('GitHub webhook error:', error);
    return NextResponse.json({ 
      error: 'Internal error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}