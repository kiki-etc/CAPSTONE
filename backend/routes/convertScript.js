export default function convertScript(req, res) {
    const { script } = req.body;
  
    const lines = script.split('\n').filter(line => line.trim() !== '');
    const panels = lines.map(text => ({
      text,
      penciled: '',
      inked: '',
      colored: ''
    }));
  
    res.json({ panels });
  }