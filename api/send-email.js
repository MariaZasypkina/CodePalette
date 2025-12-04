/* global process */
import { Resend } from 'resend';

/**
 * Vercel Function to send emails via Resend
 * Requires RESEND_API_KEY and CONTACT_EMAIL environment variables
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, subject } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get environment variables
  const apiKey = process.env.RESEND_API_KEY;
  // Default recipient (site owner) — correct address for this project
  const contactEmail = process.env.CONTACT_EMAIL || 'creative.code.palette@gmail.com';

  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const resend = new Resend(apiKey);

    // Build payload. Use FROM_EMAIL if provided, otherwise use a safe Resend onboarding address for testing.
    const fromEnv = process.env.FROM_EMAIL;
    const fromAddress = fromEnv || 'Code Palette <onboarding@resend.dev>';
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
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    if (email) payload.replyTo = email;

    const result = await resend.emails.send(payload);

    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: result.data?.id,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
