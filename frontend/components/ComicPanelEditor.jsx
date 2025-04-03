// frontend/src/components/ComicPanelEditor.jsx
import React, { useState } from 'react';

export default function ComicPanelEditor({ panels }) {
  const [editedPanels, setEditedPanels] = useState(panels);

  const updatePanelLayer = (index, layer, value) => {
    const updated = [...editedPanels];
    updated[index][layer] = value;
    setEditedPanels(updated);
  };

  return (
    <div>
      <h3>Artist: Edit Panels</h3>
      {editedPanels.map((panel, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', margin: '1em 0', padding: '1em' }}>
          <p><strong>Panel {idx + 1}:</strong> {panel.text}</p>
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