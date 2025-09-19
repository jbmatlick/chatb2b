// Vercel/Express serverless function to handle contact form email sending via Brevo (Sendinblue)
// Sends two emails: 1) Notification to site owner, 2) Auto-reply to submitter

require('dotenv').config({ path: './env.local' });
const SibApiV3Sdk = require('sib-api-v3-sdk');
const fs = require('fs');
const path = require('path');
const Airtable = require('airtable');

// Company branding constants
const COMPANY_NAME = 'RiptideB2B';
const COMPANY_SLUG = COMPANY_NAME.toLowerCase().replace(/\s+/g, '-');
const COMPANY_EMAIL = `sales@${COMPANY_SLUG}.com`;
const COMPANY_APP_URL = `https://app.${COMPANY_SLUG}.com`;
const COMPANY_PRIVACY_EMAIL = `privacy@${COMPANY_SLUG}.com`;
const COMPANY_EU_REP_EMAIL = `eurep@${COMPANY_SLUG}.com`;
const COMPANY_LINKEDIN_URL = `https://linkedin.com/company/${COMPANY_SLUG}`;
const COMPANY_TWITTER_URL = `https://twitter.com/${COMPANY_SLUG}`;
const COMPANY_LOGO_URL = `https://${COMPANY_SLUG}.com/riptideb2b-logo.png`;
const COMPANY_SITE_URL = `https://${COMPANY_SLUG}.com`;

// --- CONFIGURATION ---
// Set up Brevo API key from environment variable
const apiKey = process.env.BREVO_API_KEY;
const ownerEmail = process.env.OWNER_EMAIL || 'your@email.com'; // Set this in env.local or Vercel env vars

// Set up Airtable configuration
const airtableToken = process.env.AIRTABLE_API_TOKEN;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;
const airtableTableName = process.env.AIRTABLE_TABLE_NAME;

// Initialize Airtable
let airtable;
if (airtableToken && airtableBaseId && airtableTableName) {
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtableToken
  });
  airtable = Airtable.base(airtableBaseId);
}

// Enhanced logging function
function logEvent(level, message, data = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data
  };
  
  console.log(`[${level.toUpperCase()}] ${timestamp}: ${message}`, data);
  
  // In production, you might want to send logs to a service like LogRocket, Sentry, or DataDog
  // For now, we'll just use console.log which Vercel captures
}

// Store form submission to Airtable
async function storeSubmissionInAirtable(formData, requestId) {
  if (!airtable || !airtableTableName) {
    logEvent('warn', 'Airtable not configured, skipping database storage', { requestId });
    return null;
  }

  try {
    const submissionData = {
      'Lead Name': formData.name,
      'Email Address': formData.email,
      'Company': formData.company || '',
      'Message': formData.message,
      'Status': 'New',
      'Phone Number': '' // Empty since we don't collect phone in the form
      // Note: 'Create Date' is computed automatically by Airtable
    };

    logEvent('info', 'Storing submission in Airtable', { 
      requestId, 
      tableName: airtableTableName,
      data: {
        name: submissionData['Lead Name'],
        email: submissionData['Email Address'],
        company: submissionData.Company,
        messageLength: submissionData.Message.length
      }
    });

    const record = await airtable(airtableTableName).create(submissionData);
    
    logEvent('info', 'Successfully stored submission in Airtable', { 
      requestId, 
      recordId: record.id,
      tableName: airtableTableName
    });

    return {
      id: record.id,
      requestId: requestId,
      timestamp: submissionData['Submission Date'],
      status: 'stored_in_airtable'
    };

  } catch (error) {
    logEvent('error', 'Failed to store submission in Airtable', { 
      requestId, 
      error: error.message,
      errorType: error.constructor.name,
      tableName: airtableTableName
    });
    throw error;
  }
}

// Store form submission to JSON file (fallback for local development)
function storeSubmissionLocally(formData, requestId) {
  try {
    const submission = {
      id: requestId,
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      message: formData.message,
      source: 'contact_form',
      status: 'new'
    };

    // Only write to local file in development
    if (process.env.NODE_ENV === 'development') {
      const submissionsFile = path.join(process.cwd(), 'submissions.json');
      let submissions = [];
      
      // Read existing submissions
      if (fs.existsSync(submissionsFile)) {
        try {
          const data = fs.readFileSync(submissionsFile, 'utf8');
          submissions = JSON.parse(data);
        } catch (err) {
          console.error('Error reading submissions file:', err);
        }
      }
      
      // Add new submission
      submissions.push(submission);
      
      // Write back to file
      fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));
      logEvent('info', 'Submission stored locally', { requestId, submissionId: submission.id });
    }
    
    return submission;
  } catch (error) {
    logEvent('error', 'Failed to store submission locally', { requestId, error: error.message });
    return null;
  }
}

// Initialize Brevo API client
const client = SibApiV3Sdk.ApiClient.instance;
const apiKeyInstance = client.authentications['api-key'];
apiKeyInstance.apiKey = apiKey;
const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

// --- EMAIL TEMPLATES ---
// Logo and site URL for branding in emails
const logoUrl = `https://${COMPANY_SLUG}.com/assets/${COMPANY_SLUG}-logo.png`; // Update to your actual logo URL
const siteUrl = `https://${COMPANY_SLUG}.com`; // Update to your actual site URL
const linkedInUrl = `https://linkedin.com/company/${COMPANY_SLUG}`;
const twitterUrl = `https://twitter.com/${COMPANY_SLUG}`;

// Inline SVG wave divider (base64, vibrant curved teal)
const waveSvg =
  'data:image/svg+xml;base64,' +
  Buffer.from(`
    <svg width="600" height="36" viewBox="0 0 600 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18C120 36 240 0 360 18C480 36 600 0 600 18V36H0V18Z" fill="#2DD4BF"/></svg>
  `.replace(/\s+/g, ' ')).toString('base64');

function thankYouEmailHtml({ name }) {
  return `
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thanks for Your Message!</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      body { margin:0; padding:0; background:#e0f7fa; font-family:'Poppins', Arial, sans-serif; }
      .container { max-width:600px; margin:0 auto; background:rgba(255,255,255,0.10); border-radius:28px; box-shadow:0 8px 32px rgba(20,184,166,0.13), 0 2px 12px rgba(59,130,246,0.10); overflow:hidden; }
      .header {
        background:linear-gradient(90deg,#3B82F6 0%,#2DD4BF 100%);
        padding:44px 0 24px 0;
        text-align:center;
        position:relative;
      }
      .header .logo { width:76px; height:auto; margin-bottom:18px; }
      .header h1 {
        color:#fff;
        font-size:2.3rem;
        margin:0 0 8px 0;
        letter-spacing:-1px;
        text-shadow:0 3px 16px rgba(45,212,191,0.22);
        font-weight:600;
      }
      .wave {
        width:100%;
        height:36px;
        display:block;
        margin:0;
        background:url('${waveSvg}') center/cover no-repeat;
        border:none;
      }
      .content-card {
        background:rgba(255,255,255,0.22);
        backdrop-filter:blur(14px);
        border-radius:20px;
        margin:0 18px;
        margin-top:-28px;
        box-shadow:0 6px 32px rgba(59,130,246,0.10), 0 2px 12px rgba(20,184,166,0.13);
        padding:36px 28px 32px 28px;
        color:#1E3A8A;
        text-align:left;
      }
      .content-card p {
        font-size:1.13rem;
        line-height:1.7;
        color:#1E3A8A;
        margin-bottom:20px;
      }
      .cta {
        display:inline-block;
        background:#14B8A6;
        color:#fff;
        text-decoration:none;
        font-weight:600;
        padding:16px 40px;
        border-radius:36px;
        margin:28px 0 0 0;
        font-size:1.13rem;
        box-shadow:0 2px 12px rgba(20,184,166,0.18), 0 4px 16px rgba(59,130,246,0.10);
        transition:background 0.2s, box-shadow 0.2s, transform 0.18s;
      }
      .cta:hover {
        background:#0D9488;
        box-shadow:0 6px 32px rgba(20,184,166,0.22), 0 8px 24px rgba(59,130,246,0.13);
        transform:scale(1.04);
      }
      .footer {
        background:#1E3A8A;
        color:#fff;
        text-align:center;
        font-size:0.98rem;
        padding:28px 8px 20px 8px;
        border-radius:0 0 28px 28px;
        position:relative;
      }
      .footer .social {
        margin:0 7px;
        display:inline-block;
        vertical-align:middle;
      }
      .footer .social svg {
        width:24px; height:24px; fill:#2DD4BF; background:#fff; border-radius:50%; padding:2px; transition:box-shadow 0.2s; box-shadow:0 1px 6px rgba(45,212,191,0.13);
      }
      .footer .social:hover svg {
        box-shadow:0 2px 10px #2DD4BF;
      }
      .footer a.unsubscribe {
        color:#38bdf8; text-decoration:underline; margin-left:10px; font-size:0.97em;
      }
      @media (max-width:650px) {
        .container { border-radius:0; margin:0; }
        .content-card { margin:0 2vw; padding:24px 6vw 20px 6vw; }
        .header { padding:28px 0 16px 0; }
        .footer { border-radius:0 0 18px 18px; }
      }
      @media (max-width:480px) {
        .content-card, .header, .footer { padding-left:4vw !important; padding-right:4vw !important; }
        .content-card { padding-top:18px !important; padding-bottom:16px !important; }
        .header { padding-top:18px !important; padding-bottom:10px !important; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${COMPANY_LOGO_URL}" alt="${COMPANY_NAME} Logo" class="logo" />
        <h1>Thanks for Reaching Out!</h1>
      </div>
      <div class="wave"></div>
      <div class="content-card">
        <p>Hi <b>${name}</b>,</p>
        <p>We've received your message and our team will dive in soon to help with your procurement challenges. ${COMPANY_NAME} is your AI-powered procurement intelligence platform—always working to deliver unbiased, transparent software evaluations.</p>
        <p>Questions? Just reply to this email or explore more below.</p>
        <a href="${COMPANY_SITE_URL}" class="cta">Explore ${COMPANY_NAME}</a>
      </div>
      <div class="footer">
        <div style="margin-bottom:12px;">
          <a href="${COMPANY_LINKEDIN_URL}" class="social" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="${COMPANY_TWITTER_URL}" class="social" target="_blank" rel="noopener" aria-label="Twitter">
            <svg viewBox="0 0 24 24"><path d="M24 4.56c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.23-.616v.062c0 2.386 1.697 4.374 3.95 4.827-.413.112-.849.172-1.298.172-.318 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.012-7.506 14.012-14.012 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>
        &copy; 2025 ${COMPANY_NAME} &nbsp;|&nbsp; <a href="mailto:${COMPANY_EMAIL}" style="color:#2DD4BF;text-decoration:none;">Contact</a>
        <a href="#" class="unsubscribe">Unsubscribe</a>
      </div>
    </div>
  </body>
  </html>
  `;
}

function ownerEmailHtml({ name, email, company, message }) {
  return `
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Submission Alert</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      body { margin:0; padding:0; background:#e0f7fa; font-family:'Poppins', Arial, sans-serif; }
      .container { max-width:600px; margin:0 auto; background:rgba(255,255,255,0.10); border-radius:28px; box-shadow:0 8px 32px rgba(20,184,166,0.13), 0 2px 12px rgba(59,130,246,0.10); overflow:hidden; }
      .header {
        background:linear-gradient(90deg,#3B82F6 0%,#2DD4BF 100%);
        padding:38px 0 18px 0;
        text-align:center;
        position:relative;
      }
      .header .logo { width:64px; height:auto; margin-bottom:14px; }
      .header h1 {
        color:#fff;
        font-size:2rem;
        margin:0 0 8px 0;
        letter-spacing:-1px;
        text-shadow:0 3px 16px rgba(45,212,191,0.22);
        font-weight:600;
      }
      .wave {
        width:100%;
        height:36px;
        display:block;
        margin:0;
        background:url('${waveSvg}') center/cover no-repeat;
        border:none;
      }
      .content-card {
        background:rgba(255,255,255,0.22);
        backdrop-filter:blur(14px);
        border-radius:20px;
        margin:0 18px;
        margin-top:-28px;
        box-shadow:0 6px 32px rgba(59,130,246,0.10), 0 2px 12px rgba(20,184,166,0.13);
        padding:36px 28px 32px 28px;
        color:#1E3A8A;
        text-align:left;
      }
      .details-table {
        width:100%;
        border-collapse:collapse;
        margin-bottom:18px;
      }
      .details-table th, .details-table td {
        text-align:left;
        padding:8px 0;
        font-size:1.08rem;
        color:#1E3A8A;
      }
      .details-table th {
        width:120px;
        font-weight:600;
        color:#3B82F6;
      }
      .details-table tr:not(:last-child) td, .details-table tr:not(:last-child) th {
        border-bottom:1px solid #e0f2fe;
      }
      .footer {
        background:#1E3A8A;
        color:#fff;
        text-align:center;
        font-size:0.98rem;
        padding:24px 8px 18px 8px;
        border-radius:0 0 28px 28px;
        position:relative;
      }
      .footer .social {
        margin:0 7px;
        display:inline-block;
        vertical-align:middle;
      }
      .footer .social svg {
        width:24px; height:24px; fill:#2DD4BF; background:#fff; border-radius:50%; padding:2px; transition:box-shadow 0.2s; box-shadow:0 1px 6px rgba(45,212,191,0.13);
      }
      .footer .social:hover svg {
        box-shadow:0 2px 10px #2DD4BF;
      }
      @media (max-width:650px) {
        .container { border-radius:0; margin:0; }
        .content-card { margin:0 2vw; padding:24px 6vw 20px 6vw; }
        .header { padding:22px 0 10px 0; }
        .footer { border-radius:0 0 18px 18px; }
      }
      @media (max-width:480px) {
        .content-card, .header, .footer { padding-left:4vw !important; padding-right:4vw !important; }
        .content-card { padding-top:18px !important; padding-bottom:16px !important; }
        .header { padding-top:12px !important; padding-bottom:8px !important; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${COMPANY_LOGO_URL}" alt="${COMPANY_NAME} Logo" class="logo" />
        <h1>New Submission Alert</h1>
      </div>
      <div class="wave"></div>
      <div class="content-card">
        <table class="details-table">
          <tr><th>Name:</th><td>${name}</td></tr>
          <tr><th>Company:</th><td>${company || ''}</td></tr>
          <tr><th>Email:</th><td><a href="mailto:${email}" style="color:#2DD4BF;text-decoration:underline;">${email}</a></td></tr>
          <tr><th>Message:</th><td style="white-space:pre-line;">${message}</td></tr>
        </table>
      </div>
      <div class="footer">
        <div style="margin-bottom:12px;">
          <a href="${COMPANY_LINKEDIN_URL}" class="social" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="${COMPANY_TWITTER_URL}" class="social" target="_blank" rel="noopener" aria-label="Twitter">
            <svg viewBox="0 0 24 24"><path d="M24 4.56c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.23-.616v.062c0 2.386 1.697 4.374 3.95 4.827-.413.112-.849.172-1.298.172-.318 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.012-7.506 14.012-14.012 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>
        &copy; 2025 ${COMPANY_NAME} &nbsp;|&nbsp; <a href="mailto:${COMPANY_EMAIL}" style="color:#2DD4BF;text-decoration:none;">Contact</a>
      </div>
    </div>
  </body>
  </html>
  `;
}

// --- MAIN HANDLER ---
// Handles POST requests from the contact form, sends notification and auto-reply emails
module.exports = async (req, res) => {
  const requestId = Math.random().toString(36).substr(2, 9);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    logEvent('info', 'CORS preflight request', { requestId });
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    logEvent('warn', 'Invalid HTTP method', { 
      requestId, 
      method: req.method, 
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress 
    });
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed. Please use POST.' 
    });
  }

  // Log request start
  logEvent('info', 'Contact form submission started', {
    requestId,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    userAgent: req.headers['user-agent'],
    contentLength: req.headers['content-length']
  });

  try {
    // Check if API key is configured
    if (!apiKey) {
      logEvent('error', 'Brevo API key not configured', { requestId });
      return res.status(500).json({ 
        success: false,
        error: 'Email service not configured. Please try again later.' 
      });
    }

    // Check if owner email is configured
    if (!ownerEmail || ownerEmail === 'your@email.com') {
      logEvent('error', 'Owner email not configured', { requestId });
      return res.status(500).json({ 
        success: false,
        error: 'Email service not configured. Please try again later.' 
      });
    }

    // Extract and validate form fields
    const { name, email, message, company } = req.body;

    // Log form data (sanitized for privacy)
    logEvent('info', 'Form data received', {
      requestId,
      hasName: !!name,
      hasCompany: !!company,
      hasEmail: !!email,
      hasMessage: !!message,
      messageLength: message?.length || 0
    });

    // Enhanced validation
    const validationErrors = [];
    
    if (!name || name.trim().length < 2) {
      validationErrors.push('Name must be at least 2 characters long');
    }
    
    if (!email || email.trim().length === 0) {
      validationErrors.push('Email is required');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        validationErrors.push('Please enter a valid email address');
      }
    }
    
    if (!message || message.trim().length < 10) {
      validationErrors.push('Message must be at least 10 characters long');
    }

    if (validationErrors.length > 0) {
      logEvent('warn', 'Form validation failed', { 
        requestId, 
        errors: validationErrors 
      });
      return res.status(400).json({ 
        success: false,
        error: validationErrors.join('. ') + '.'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      company: company?.trim() || '',
      email: email.trim().toLowerCase(),
      message: message.trim()
    };

    // Store the submission in Airtable
    let storedSubmission = null;
    try {
      storedSubmission = await storeSubmissionInAirtable(sanitizedData, requestId);
      // Also store locally in development for backup
      storeSubmissionLocally(sanitizedData, requestId);
    } catch (airtableError) {
      logEvent('error', 'Airtable storage failed, continuing with email sending', { 
        requestId, 
        error: airtableError.message 
      });
      // Continue with email sending even if Airtable fails
    }

    logEvent('info', 'Sending emails', { 
      requestId, 
      toOwner: ownerEmail,
      toSubmitter: sanitizedData.email 
    });

    // Send notification email to site owner
    let ownerResult, thankYouResult;
    let ownerError, thankYouError;

    try {
      ownerResult = await tranEmailApi.sendTransacEmail({
        sender: { email: COMPANY_EMAIL, name: COMPANY_NAME },
        to: [{ email: ownerEmail, name: `${COMPANY_NAME} Site Owner` }],
        subject: `New Contact Form Submission from ${COMPANY_NAME} Site`,
        htmlContent: ownerEmailHtml(sanitizedData),
        replyTo: { email: sanitizedData.email, name: sanitizedData.name },
      });
      logEvent('info', 'Owner notification email sent', { 
        requestId, 
        messageId: ownerResult.messageId 
      });
    } catch (err) {
      ownerError = err;
      logEvent('error', 'Failed to send owner notification email', { 
        requestId, 
        error: err.message,
        statusCode: err.statusCode
      });
    }

    // Send auto-reply to submitter
    try {
      thankYouResult = await tranEmailApi.sendTransacEmail({
        sender: { email: COMPANY_EMAIL, name: COMPANY_NAME },
        to: [{ email: sanitizedData.email, name: sanitizedData.name }],
        subject: `Thanks for Reaching Out to ${COMPANY_NAME}!`,
        htmlContent: thankYouEmailHtml({ name: sanitizedData.name }),
      });
      logEvent('info', 'Thank you email sent', { 
        requestId, 
        messageId: thankYouResult.messageId 
      });
    } catch (err) {
      thankYouError = err;
      logEvent('error', 'Failed to send thank you email', { 
        requestId, 
        error: err.message,
        statusCode: err.statusCode
      });
    }

    // Determine response based on results
    if (ownerError && thankYouError) {
      logEvent('error', 'Both emails failed to send', { 
        requestId, 
        ownerError: ownerError.message,
        thankYouError: thankYouError.message
      });
      return res.status(500).json({ 
        success: false,
        error: 'Unable to send emails. Please try again later or contact us directly.' 
      });
    } else if (ownerError) {
      logEvent('warn', 'Owner notification failed, but thank you email sent', { 
        requestId, 
        ownerError: ownerError.message,
        thankYouMessageId: thankYouResult?.messageId
      });
      return res.status(200).json({
        success: true,
        message: 'Thank you email sent. We received your message.',
        thankYouEmailId: thankYouResult?.messageId,
        warning: 'Notification email failed, but your message was received.'
      });
    } else if (thankYouError) {
      logEvent('warn', 'Thank you email failed, but owner notification sent', { 
        requestId, 
        thankYouError: thankYouError.message,
        ownerMessageId: ownerResult?.messageId
      });
      return res.status(200).json({
        success: true,
        message: 'We received your message and will respond soon.',
        ownerEmailId: ownerResult?.messageId,
        warning: 'Confirmation email failed, but your message was received.'
      });
    } else {
      logEvent('info', 'Both emails sent successfully', { 
        requestId, 
        ownerMessageId: ownerResult?.messageId,
        thankYouMessageId: thankYouResult?.messageId
      });
      return res.status(200).json({
        success: true,
        message: 'Emails sent successfully',
        ownerEmailId: ownerResult?.messageId,
        thankYouEmailId: thankYouResult?.messageId,
      });
    }

  } catch (error) {
    logEvent('error', 'Unexpected error in contact form handler', { 
      requestId, 
      error: error.message,
      stack: error.stack,
      type: error.constructor.name
    });
    
    return res.status(500).json({ 
      success: false,
      error: 'An unexpected error occurred. Please try again later.' 
    });
  }
}; 