import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DrawingCanvas from './DrawingCanvas';

export default function ComicPanelEditor({ panels }) {
  const [editedPanels, setEditedPanels] = useState([]);

  useEffect(() => {
    if (Array.isArray(panels)) {
      setEditedPanels(panels);
    }
  }, [panels]);

  const updatePanelLayer = async (index, layer, value) => {
    const updated = [...editedPanels];
    updated[index][layer] = value;
    setEditedPanels(updated);
  
    try {
      const panelUpdate = {
        index,
        layer,
        value,
        panel: updated[index]
      };
  
      await axios.post('http://localhost:8080/update-panel', panelUpdate);
      console.log('✅ Panel update sent');
    } catch (error) {
      console.error('❌ Failed to send update:', error);
    }
  };

  return (
    <div>
      <h3>Artist: Edit Panels</h3>
      {Array.isArray(editedPanels) && editedPanels.map((panel, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', margin: '1em 0', padding: '1em' }}>
          <p><strong>Panel {idx + 1}:</strong> {panel.text}</p>
          <DrawingCanvas width={500} height={300} />
          <input
            placeholder="Pencil sketch URL"
            value={panel.penciled}
            onChange={(e) => updatePanelLayer(idx, 'penciled', e.target.value)}
          />
          <input
            placeholder="Inked URL"
            value={panel.inked}
            onChange={(e) => updatePanelLayer(idx, 'inked', e.target.value)}
          />
          <input
            placeholder="Colored URL"
            value={panel.colored}
            onChange={(e) => updatePanelLayer(idx, 'colored', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}