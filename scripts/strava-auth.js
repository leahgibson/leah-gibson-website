require('dotenv').config();

const express = require('express');
const app = express();

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:4000/callback';

// Step 1: Visit this URL to authorize
app.get('/authorize', (req, res) => {
  const authUrl = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=activity:read_all`;
  res.redirect(authUrl);
});

// Step 2: Strava redirects here with a code
app.get('/callback', async (req, res) => {
  const code = req.query.code;
  
  if (!code) {
    return res.send('No code provided');
  }

  try {
    // Exchange code for tokens
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();
    
    res.send(`
      <h1>Success! Copy these values:</h1>
      <pre>
STRAVA_REFRESH_TOKEN="${data.refresh_token}"
STRAVA_ACCESS_TOKEN="${data.access_token}"
STRAVA_ATHLETE_ID="${data.athlete.id}"
      </pre>
      <p>Add STRAVA_REFRESH_TOKEN to your .env file and Vercel!</p>
      <p>You can close this window.</p>
    `);
    
    console.log('\n✅ Add this to your .env file:');
    console.log(`STRAVA_REFRESH_TOKEN="${data.refresh_token}"`);
    console.log(`STRAVA_ATHLETE_ID="${data.athlete.id}"`);
    
  } catch (error) {
    res.send(`Error: ${error.message}`);
  }
});

app.listen(4000, () => {
  console.log('🚀 OAuth server running!');
  console.log('👉 Visit: http://localhost:4000/authorize');
});