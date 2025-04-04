import React, { useState } from 'react';
import axios from 'axios';

export default function ScriptUploader({ onPanelsReceived }) {
  const [script, setScript] = useState('');

  const handleSubmit = async () => {
    try {
      // Replace with real backend endpoint later
      const response = await axios.post('https://your-backend-url/convert-script', { script });
      onPanelsReceived(response.data.panels);
    } catch (err) {
      console.error('Error converting script:', err);
    }
  };

  return (
    <div>
      <h3>Writer: Upload Script</h3>
      <textarea
        rows={6}
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Enter your comic script here..."
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSubmit}>Generate Panels</button>
    </div>
  );
}