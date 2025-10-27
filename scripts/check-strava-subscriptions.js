require('dotenv').config();

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

async function checkSubscription() {
  const response = await fetch(
    `https://www.strava.com/api/v3/push_subscriptions?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );

  const data = await response.json();
  console.log('Current subscriptions:', JSON.stringify(data, null, 2));
  
  if (Array.isArray(data) && data.length > 0) {
    console.log('✅ You have', data.length, 'active subscription(s)');
    data.forEach(sub => {
      console.log('  - ID:', sub.id);
      console.log('  - Callback URL:', sub.callback_url);
    });
  } else {
    console.log('❌ No active subscriptions found');
  }
}

checkSubscription();