require('dotenv').config();

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// Verification endpoint (GET) - Strava calls this once during setup
export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get('hub.mode');
  const token = req.nextUrl.searchParams.get('hub.verify_token');
  const challenge = req.nextUrl.searchParams.get('hub.challenge');
  
  console.log('Strava verification request:', { mode, token, challenge });
  
  if (mode === 'subscribe' && token === process.env.STRAVA_VERIFY_TOKEN) {
    console.log('✅ Strava webhook verified');
    return NextResponse.json({ 'hub.challenge': challenge });
  }
  
  console.log('❌ Strava verification failed');
  return NextResponse.json({ error: 'Invalid verification' }, { status: 403 });
}

// Webhook events (POST) - Strava calls this when you upload activities
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('Strava webhook received:', data);
    
    // Process new activities and updates
    if (data.object_type === 'activity' && data.aspect_type === 'create' || data.aspect_type === 'update') {
      const activityId = data.object_id;
      
      console.log('Fetching activity details for:', activityId);
      
      // Get a fresh access token
      const accessToken = await getStravaAccessToken();
      
      // Fetch full activity details
      const response = await fetch(
        `https://www.strava.com/api/v3/activities/${activityId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`Strava API error: ${response.status}`);
      }
      
      const activity = await response.json();
      console.log('Activity details:', activity);
      
      // Only store certain activities
      const allowedTypes = ['Run', 'Ride', 'Hike', 'Ski', 'MountainBike'];

      if (allowedTypes.includes(activity.type)) {
        const distanceMiles = (activity.distance / 1609.34).toFixed(2);

        const activityUrl = `https://www.strava.com/activities/${activityId}`;

        // Check if activity already in database
        const existing = await prisma.activity.findFirst({
            where: {
            type: 'strava',
            url: activityUrl,
            },
        });
        
        const activityData = {
            type: 'strava',
            timestamp: new Date(activity.start_date),
            title: activity.name,
            description: `${distanceMiles} miles`,
            url: activityUrl,
            metadata: {
            distance: activity.distance,
            moving_time: activity.moving_time,
            type: activity.type,
            elevation_gain: activity.total_elevation_gain,
            strava_id: activityId,
            },
        };

        if (existing) {
            // Update existing activity
            await prisma.activity.update({
            where: { id: existing.id },
            data: activityData,
            });
            console.log('✅ Updated existing activity in database');
        } else {
            // Create new activity
            await prisma.activity.create({
            data: activityData,
            });
            console.log('✅ Saved new activity to database');
        }
        
      } else {
        console.log('⏭️  Skipping non-run activity:', activity.type);
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Strava webhook error:', error);
    return NextResponse.json({ 
      error: 'Internal error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Helper function to get a fresh access token
async function getStravaAccessToken() {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to refresh Strava token');
  }
  
  const data = await response.json();
  return data.access_token;
}