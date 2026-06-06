// Vercel serverless function to handle contact form submissions
module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !company || !message) {
    return res.status(400).json({ success: false, message: 'Missing required contact fields.' });
  }

  // Basic server-side validation (email format could be improved)
  console.log('[Contact]', { name, email, company, message });

  // TODO: integrate email provider, database, or external webhook here.

  return res.status(200).json({ success: true, message: 'Message received. Thank you!' });
};
