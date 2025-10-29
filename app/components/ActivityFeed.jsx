'use client';

import { useEffect, useState } from 'react';

const getActivityEmoji = (activity) => {
    if (activity.type === 'github') return '💻';

    const stravaType = activity.metadata?.type;

    switch(stravaType) {
        case 'Run':
            return '🏃‍♀️';
        case 'Ride':
            return '🚲';
        case 'Ski':
            return '⛷️';
        case 'Hike':
            return '🥾';
        case 'MountainBike':
            return '🚵‍♂️';
        default:
            return '🏔️';
    }
};

export default function ActivityFeed() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/activities')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setActivities(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load activities');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Recent Activity</h2>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Recent Activity</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Recent Activity</h2>
        <p className="text-gray-600">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Recent Activity</h2>
      <div className="space-y-4">
        {activities.map(activity => (
          <div 
            key={activity.id} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="text-2xl">
                {getActivityEmoji(activity)}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{activity.title}</h3>
                {activity.description && (
                  <p className="text-gray-700 mt-1">{activity.description}</p>
                )}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>
                    {new Date(activity.timestamp).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </span>
                  {activity.url && (
                    <a 
                      href={activity.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}