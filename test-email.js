require('dotenv').config({ path: './env.local' });
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Company branding constants
const COMPANY_NAME = 'RiptideB2B';

console.log('Testing Brevo API...');
console.log('API Key:', process.env.BREVO_API_KEY ? 'Present' : 'Missing');
console.log('Owner Email:', process.env.OWNER_EMAIL);

const client = SibApiV3Sdk.ApiClient.instance;
const apiKeyInstance = client.authentications['api-key'];
apiKeyInstance.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

async function testEmail() {
  try {
    console.log('Sending test email...');

    const result = await tranEmailApi.sendTransacEmail({
      sender: { email: 'test@example.com', name: 'Test User' },
      to: [{ email: process.env.OWNER_EMAIL, name: 'Test Recipient' }],
      subject: `Test Email from ${COMPANY_NAME}`,
      htmlContent: `<h1>Test Email</h1><p>This is a test email from the ${COMPANY_NAME} contact form.</p>`,
    });

    console.log('Email sent successfully!');
    console.log('Message ID:', result.messageId);
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Full error:', error);
  }
}

testEmail(); 