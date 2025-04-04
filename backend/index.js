import express from 'express';
import cors from 'cors';
import convertScript from './routes/convertScript.js';
import updatePanel from './routes/updatePanel.js';
import projectMetadata from './routes/projectMetadata.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/convert-script', convertScript);
app.post('/update-panel', updatePanel);
app.get('/project-metadata', projectMetadata);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});