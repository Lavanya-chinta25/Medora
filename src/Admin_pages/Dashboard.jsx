import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center',marginTop:'4rem' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Manage your site here.</p>
      <div style={{ marginTop: '2rem' }}>
        <button
          style={{
            margin: '1rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Manage Users
        </button>
        <button
          style={{
            margin: '1rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#28a745',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          View Messages
        </button>
        <button
          style={{
            margin: '1rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#dc3545',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
