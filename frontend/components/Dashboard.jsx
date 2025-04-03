// frontend/src/components/Dashboard.jsx
import React from 'react';

export default function Dashboard({ version, lastUpdated }) {
  return (
    <div style={{ marginTop: '2em' }}>
      <h3>📊 Project Dashboard</h3>
      <p>Version: <strong>{version}</strong></p>
      <p>Last Updated: <strong>{new Date(lastUpdated).toLocaleString()}</strong></p>
    </div>
  );
}