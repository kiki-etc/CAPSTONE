export default function updatePanel(req, res) {
    const updatedPanel = req.body;
  
    console.log('🛠 Panel updated:', updatedPanel);
  
    res.json({ status: 'success' });
  }