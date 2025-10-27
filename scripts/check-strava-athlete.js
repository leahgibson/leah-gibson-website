require('dotenv').config();

async function checkAthlete() {
  console.log('CLIENT_ID:', process.env.STRAVA_CLIENT_ID);
  console.log('CLIENT_SECRET:', process.env.STRAVA_CLIENT_SECRET ? 'Found' : 'Missing');
  console.log('REFRESH_TOKEN:', process.env.STRAVA_REFRESH_TOKEN ? 'Found' : 'Missing');
  
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
  console.log('\nFull response:', JSON.stringify(tokenData, null, 2));
  
  if (tokenData.errors) {
    console.log('\n❌ Error from Strava:', tokenData.errors);
  } else {
    console.log('\n✅ Token refresh successful');
    console.log('Scopes granted:', tokenData.scope);
  }
}

checkAthlete();