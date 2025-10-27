require('dotenv').config();

async function testFetch() {
  // Get access token
  const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;
  
  // Fetch your recent activities
  const activitiesResponse = await fetch(
    'https://www.strava.com/api/v3/athlete/activities?per_page=5',
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );
  
  const activities = await activitiesResponse.json();
  console.log('Your recent activities:');
  console.log(JSON.stringify(activities, null, 2));
  
  // Show just the IDs
  console.log('\nActivity IDs:');
  activities.forEach(a => console.log(`- ${a.id}: ${a.name} (${a.type})`));
}

testFetch();