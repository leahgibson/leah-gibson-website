require('dotenv').config();

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

async function deleteSubscription() {
  // First get the subscription ID
  const listResponse = await fetch(
    `https://www.strava.com/api/v3/push_subscriptions?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
  const subscriptions = await listResponse.json();
  
  if (!subscriptions || subscriptions.length === 0) {
    console.log('No subscriptions to delete');
    return;
  }
  
  // Delete each subscription
  for (const sub of subscriptions) {
    console.log('Deleting subscription ID:', sub.id);
    const deleteResponse = await fetch(
      `https://www.strava.com/api/v3/push_subscriptions/${sub.id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      { method: 'DELETE' }
    );
    
    if (deleteResponse.ok) {
      console.log('✅ Deleted subscription', sub.id);
    } else {
      console.log('❌ Failed to delete:', await deleteResponse.text());
    }
  }
}

deleteSubscription();