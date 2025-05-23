import React, { useState } from 'react';
import axios from 'axios';

export default function ScriptUploader({ onPanelsReceived }) {
  const [script, setScript] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/convert-script', {
        script,
      });
      console.log('✅ Response from backend:', response.data);
      onPanelsReceived(response.data.panels);
    } catch (err) {
      console.error('❌ Error converting script:', err);
      alert('Backend error – check terminal or server logs.');
    }
  };

  console.log('✏️ Current script:', script);

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