require('dotenv').config({ path: './env.local' });
const express = require('express');
const path = require('path');
const sendEmail = require('./api/send-email');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    await sendEmail(req, res);
  } catch (error) {
    console.error('Email API error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Test API endpoint
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Test API endpoint is working!',
    timestamp: new Date().toISOString()
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email API available at http://localhost:${PORT}/api/send-email`);
}); 