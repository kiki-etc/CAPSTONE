export default function projectMetadata(req, res) {
    const metadata = {
      version: 4,
      lastUpdated: new Date().toISOString()
    };
  
    res.json(metadata);
  }