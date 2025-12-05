/* global process */
import fs from 'fs';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { Resend } from 'resend';

// Load environment variables for local development.
// Prefer `.env.local` (used by Vite) but fall back to `.env`.
const envPath = fs.existsSync('.env.local') ? '.env.local' : '.env';
const result = dotenv.config({ path: envPath });
console.log(`Using env file: ${envPath}`);
if (result.error) {
  console.warn('dotenv failed to load env file:', result.error);
} else if (result.parsed) {
  console.log('dotenv parsed keys:', Object.keys(result.parsed).join(', '));
}
const _key = process.env.RESEND_API_KEY;
if (_key) {
  const masked = `${_key.slice(0, 4)}...${_key.slice(-4)}`;
  console.log('RESEND_API_KEY loaded (masked):', masked);
} else {
  console.log('RESEND_API_KEY not present in process.env');
}

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message, subject } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Default recipient (site owner) — correct address for this project
  const contactEmail = process.env.CONTACT_EMAIL || 'creative.code.palette@gmail.com';

  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    const resend = new Resend(apiKey);

    // Ensure `to` is an array per Resend examples and `from` includes a display name
    // Allow overriding FROM address via env for testing/production.
    // Default to Resend onboarding address for quick tests (no domain verification required).
    const fromEnv = process.env.FROM_EMAIL;
    const fromAddress = fromEnv ? fromEnv : `Code Palette <onboarding@resend.dev>`;
    const toRecipients = Array.isArray(contactEmail) ? contactEmail : [contactEmail];

    const payload = {
      from: fromAddress,
      to: toRecipients,
      subject: subject || `New message from ${name}`,
      html: `
        <h2>New message from your website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    // Optional: add replyTo header if available (Resend may accept replyTo)
    if (email) payload.replyTo = email;

    console.log('Sending email with payload:', {
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
    });

    const result = await resend.emails.send(payload);
    console.log('Resend response:', result);

    // Return the whole result for easier debugging in the browser
    return res.status(200).json({ success: true, result });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Local API server listening on http://localhost:${PORT}`);
});
