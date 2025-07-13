// Vercel/Express serverless function to handle contact form email sending via Brevo (Sendinblue)
// Sends two emails: 1) Notification to site owner, 2) Auto-reply to submitter

const SibApiV3Sdk = require('sib-api-v3-sdk');

// --- CONFIGURATION ---
// Set up Brevo API key from environment variable
const apiKey = process.env.BREVO_API_KEY;
const ownerEmail = process.env.OWNER_EMAIL || 'your@email.com'; // Set this in env.local or Vercel env vars

// Initialize Brevo API client
const client = SibApiV3Sdk.ApiClient.instance;
const apiKeyInstance = client.authentications['api-key'];
apiKeyInstance.apiKey = apiKey;
const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

// --- EMAIL TEMPLATES ---
// Logo and site URL for branding in emails
const logoUrl = 'https://yourdomain.com/assets/adtechai-logo.png'; // Update to your actual logo URL
const siteUrl = 'https://yourdomain.com'; // Update to your actual site URL

// Owner notification email template (HTML)
function ownerEmailHtml({ name, email, company, message }) {
  return `
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Inquiry Received</title>
    <style>
      body { margin:0; padding:0; font-family:'Poppins',Arial,sans-serif; background:#f8fafc; }
      .container { max-width:600px; margin:0 auto; background:#fff; border-radius:18px; box-shadow:0 4px 24px rgba(30,58,138,0.08); overflow:hidden; }
      .header { background:linear-gradient(90deg,#2563EB 0%,#14B8A6 100%); padding:32px 0 16px 0; text-align:center; }
      .logo { width:64px; height:auto; margin-bottom:12px; }
      h1 { color:#fff; font-size:2rem; margin:0 0 8px 0; letter-spacing:-1px; }
      .wave { border:none; border-bottom:8px solid #14B8A6; border-radius:0 0 50% 50%/0 0 16px 16px; height:0; margin:0; background:linear-gradient(90deg,#2563EB 0%,#14B8A6 100%); }
      .content { padding:32px 24px 24px 24px; color:#1E3A8A; background:#f8fafc; }
      .details { background:#e0f2fe; border-radius:12px; padding:20px; margin-bottom:24px; }
      .details p { margin:8px 0; font-size:1rem; }
      .cta { display:inline-block; background:#2563EB; color:#fff; text-decoration:none; font-weight:600; padding:12px 28px; border-radius:8px; margin:16px 0 0 0; transition:background 0.2s; }
      .cta:hover { background:#1E3A8A; }
      .footer { background:#1E3A8A; color:#fff; text-align:center; font-size:0.95rem; padding:18px 8px; }
      @media (max-width:600px) { .container { border-radius:0; } .content { padding:18px 8px; } }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${logoUrl}" alt="AdtechAI Logo" class="logo" />
        <h1>New Inquiry Received</h1>
      </div>
      <hr class="wave" />
      <div class="content">
        <p style="font-size:1.1rem;">Diving into a new inquiry from your AdtechAI site:</p>
        <div class="details">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#2563EB;">${email}</a></p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
        <a href="mailto:${email}" class="cta">Reply Now</a>
      </div>
      <div class="footer">
        &copy; 2025 AdtechAI &nbsp;|&nbsp; <a href="${siteUrl}" style="color:#14B8A6;text-decoration:none;">View Site</a>
      </div>
    </div>
  </body>
  </html>
  `;
}

// Thank-you auto-reply email template (HTML)
function thankYouEmailHtml({ name }) {
  return `
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thanks for Your Message!</title>
    <style>
      body { margin:0; padding:0; font-family:'Poppins',Arial,sans-serif; background:#f8fafc; }
      .container { max-width:600px; margin:0 auto; background:#fff; border-radius:18px; box-shadow:0 4px 24px rgba(30,58,138,0.08); overflow:hidden; }
      .header { background:linear-gradient(90deg,#2563EB 0%,#14B8A6 100%); padding:32px 0 16px 0; text-align:center; }
      .logo { width:64px; height:auto; margin-bottom:12px; }
      h1 { color:#fff; font-size:2rem; margin:0 0 8px 0; letter-spacing:-1px; }
      .wave { border:none; border-bottom:8px solid #14B8A6; border-radius:0 0 50% 50%/0 0 16px 16px; height:0; margin:0; background:linear-gradient(90deg,#2563EB 0%,#14B8A6 100%); }
      .content { padding:32px 24px 24px 24px; color:#1E3A8A; background:#f8fafc; }
      .cta { display:inline-block; background:#14B8A6; color:#fff; text-decoration:none; font-weight:600; padding:12px 28px; border-radius:8px; margin:24px 0 0 0; transition:background 0.2s; }
      .cta:hover { background:#2563EB; }
      .footer { background:#1E3A8A; color:#fff; text-align:center; font-size:0.95rem; padding:18px 8px; }
      @media (max-width:600px) { .container { border-radius:0; } .content { padding:18px 8px; } }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${logoUrl}" alt="AdtechAI Logo" class="logo" />
        <h1>Thanks for Your Message!</h1>
      </div>
      <hr class="wave" />
      <div class="content">
        <p style="font-size:1.1rem;">Hi ${name},</p>
        <p>We've got your note and will dive in soon to help with your marketing goals—like turning data waves into ad surges.</p>
        <a href="${siteUrl}" class="cta">Explore More</a>
      </div>
      <div class="footer">
        &copy; 2025 AdtechAI &nbsp;|&nbsp; <a href="mailto:hello@adtechai.com" style="color:#14B8A6;text-decoration:none;">Contact</a>
      </div>
    </div>
  </body>
  </html>
  `;
}

// --- MAIN HANDLER ---
// Handles POST requests from the contact form, sends notification and auto-reply emails
module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract and validate form fields
    const { name, email, message, company } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // --- Send notification email to site owner ---
    await tranEmailApi.sendTransacEmail({
      sender: { email: 'jbmatlick@gmail.com', name: 'AdtechAI' }, // Use verified sender
      to: [{ email: ownerEmail, name: 'AdtechAI Site Owner' }],
      subject: 'New Contact Form Submission from AdtechAI Site',
      htmlContent: ownerEmailHtml({ name, email, company, message }),
      replyTo: { email, name },
    });

    // --- Send auto-reply to submitter ---
    await tranEmailApi.sendTransacEmail({
      sender: { email: 'jbmatlick@gmail.com', name: 'AdtechAI' }, // Use verified sender
      to: [{ email, name }],
      subject: 'Thanks for Reaching Out to AdtechAI!',
      htmlContent: thankYouEmailHtml({ name }),
    });

    // Respond with success
    return res.status(200).json({ success: true });
  } catch (error) {
    // Log and respond with error
    console.error('Brevo email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}; 