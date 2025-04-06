import React, { useState } from 'react';
import ScriptUploader from './components/ScriptUploader';
import ComicPanelEditor from './components/ComicPanelEditor';
import Dashboard from './components/Dashboard';

function App() {
  const [panels, setPanels] = useState([]);
  const [version, setVersion] = useState(1);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [history, setHistory] = useState([]);

  const handlePanels = (newPanels) => {
    const timestamp = new Date().toISOString();

    if (panels.length > 0) {
      setHistory((prev) => [
        ...prev,
        { version, panels: panels, timestamp }
      ]);
    }

    setPanels([...newPanels]);
    setVersion((v) => v + 1);
    setLastUpdated(Date.now());
  };

  console.log('Rendering App - panels:', panels);
  return (
    <div style={{ padding: '2em', fontFamily: 'sans-serif' }}>
      <h1>🖍️ Digital Comics Collab Tool (Demo)</h1>

      <p>🔍 ScriptUploader should appear below</p>
      <ScriptUploader onPanelsReceived={handlePanels} />
      <p>✅ ScriptUploader rendered</p>

      {panels && panels.length > 0 ? (
        <>
          <p>🖌️ ComicPanelEditor should appear below</p>
          <ComicPanelEditor key={version} panels={panels} />
        </>
      ) : (
        <p>⚠️ No panels to show yet</p>
      )}

      <Dashboard version={version} lastUpdated={lastUpdated} />
      <div style={{ marginTop: '2em' }}>
        <h3>📜 Version History</h3>
        {history.length === 0 ? (
          <p>No previous versions yet.</p>
        ) : (
          <ul>
            {history.map((entry, idx) => (
              <li key={idx}>
                <strong>Version {entry.version}</strong> — {new Date(entry.timestamp).toLocaleString()} ({entry.panels.length} panels)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;