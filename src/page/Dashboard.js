// Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  // Example state to store data for demonstration purposes
  const [totalURLs, setTotalURLs] = useState(0);
  const [urlsPerDay, setURLsPerDay] = useState(0);
  const [urlsPerMonth, setURLsPerMonth] = useState(0);

  // Example: Fetch data from your backend API on component mount
  useEffect(() => {
    // Replace the following with actual API calls to fetch your data
    // For demonstration purposes, setting some random data
    setTotalURLs(100);
    setURLsPerDay(10);
    setURLsPerMonth(300);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <p>Total URLs Created: {totalURLs}</p>
        <p>URLs Created Today: {urlsPerDay}</p>
        <p>URLs Created This Month: {urlsPerMonth}</p>
      </div>
      {/* Add more content based on your application's dashboard requirements */}
    </div>
  );
};

export default Dashboard;
