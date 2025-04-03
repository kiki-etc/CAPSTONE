// frontend/App.js
import React, { useState } from 'react';
import ScriptUploader from './components/ScriptUploader';
import ComicPanelEditor from './components/ComicPanelEditor';
import Dashboard from './components/Dashboard';

function App() {
  const [panels, setPanels] = useState([]);
  const [version, setVersion] = useState(1);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  const handlePanels = (newPanels) => {
    setPanels(newPanels);
    setVersion((v) => v + 1);
    setLastUpdated(Date.now());
  };

  return (
    <div style={{ padding: '2em', fontFamily: 'sans-serif' }}>
      <h1>🖍️ Digital Comics Collab Tool (Demo)</h1>
      <ScriptUploader onPanelsReceived={handlePanels} />
      {panels.length > 0 && <ComicPanelEditor panels={panels} />}
      <Dashboard version={version} lastUpdated={lastUpdated} />
    </div>
  );
}

export default App;