const sgMail = require('@sendgrid/mail');

// Expect environment variables to be set in Vercel / local env:
// SENDGRID_API_KEY - API key for SendGrid
// TO_EMAIL - destination inbox (your email)
// FROM_EMAIL - verified sender email (from SendGrid or your domain)

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.SENDGRID_API_KEY || !process.env.TO_EMAIL || !process.env.FROM_EMAIL) {
    console.error('Missing required env vars for sending email');
    return res.status(500).json({ error: 'Email not configured' });
  }

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `[Portfolio Contact] ${subject}`,
    text: `You have a new message from ${name} <${email}>:\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p>${message.replace(/\n/g, '<br/>')}</p>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
