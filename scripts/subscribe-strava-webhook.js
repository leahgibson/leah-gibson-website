require('dotenv').config();

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const VERIFY_TOKEN = process.env.STRAVA_VERIFY_TOKEN;
const CALLBACK_URL = 'https://www.leahgibson.com/api/webhooks/strava';

async function subscribe() {
  const response = await fetch(
    `https://www.strava.com/api/v3/push_subscriptions?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&callback_url=${CALLBACK_URL}&verify_token=${VERIFY_TOKEN}`,
    { method: 'POST' }
  );

  const data = await response.json();
  console.log('Subscription response:', data);
  
  if (data.id) {
    console.log('✅ Successfully subscribed to Strava webhooks!');
    console.log('Subscription ID:', data.id);
  } else {
    console.log('❌ Subscription failed:', data);
  }
}

subscribe();