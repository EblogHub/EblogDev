const express = require('express');
const path = require('path');
const projects = require('../projects-data.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

app.get('/api/status', (req, res) => {
  res.json({ success: true, status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/projects', (req, res) => {
  res.json({ success: true, projects });
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !company || !message) {
    return res.status(400).json({ success: false, message: 'Missing required contact fields.' });
  }

  console.log('[Contact]', { name, email, company, message });

  return res.json({ success: true, message: 'Message received. Thank you!' });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
