import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get activities from the last month
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    const activities = await prisma.activity.findMany({
      where: {
        timestamp: {
          gte: oneMonthAgo,
        },
      },
      orderBy: {
        timestamp: 'desc',
      },
      take: 5, // Limit to 5 most recent
    });
    
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch activities',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}