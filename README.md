# RiptideB2B - AI-Powered Procurement Intelligence Platform

A modern, responsive website for RiptideB2B - the AI-driven B2B software procurement intelligence platform that delivers unbiased, real-time software evaluation and automation.

## 🚀 Features

- **AI-Powered Procurement Intelligence**: Unbiased software evaluation with real-time feature scoring
- **Autonomous Procurement Agent**: AI agent that handles demos, requirements refinement, and solution briefs
- **Contact Form with Email + Airtable**: Integrated contact form with email notifications and database storage
- **Responsive Design**: Mobile-first, glassmorphic design with oceanic theme
- **Comprehensive Testing**: Unit tests and integration tests for reliability
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Privacy Policy**: Complete privacy policy page with GDPR compliance

## 🏗️ Architecture

### Frontend
- **React 18** with modern hooks and functional components
- **Tailwind CSS** for styling with custom oceanic theme
- **React Router DOM** for client-side routing
- **Heroicons** for consistent iconography

### Backend & Integrations
- **Vercel Serverless Functions** for API endpoints
- **Brevo (Sendinblue)** for email delivery
- **Airtable** for lead storage and management
- **Express.js** for local development server

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `env.local` file with:
   ```
   BREVO_API_KEY=your_brevo_api_key_here
   OWNER_EMAIL=sales@riptideb2b.com
   AIRTABLE_API_TOKEN=your_airtable_token_here
   AIRTABLE_BASE_ID=your_airtable_base_id_here
   AIRTABLE_TABLE_NAME=your_airtable_table_name_here
   ```

3. **Run locally**:
   ```bash
   npm run dev          # Build and serve with API
   npm start           # React dev server only
   npm run server      # API server only (port 3001)
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🧪 Testing

The project includes comprehensive testing:

```bash
npm run test:unit        # Fast unit tests (16 tests) - 0.2s
npm run test:integration # Full Airtable integration test
npm test                 # React component tests
```

### Test Coverage
- **Form Validation**: Email, name, message validation
- **Data Sanitization**: Input cleaning and formatting
- **Airtable Integration**: Schema compliance and data formatting
- **Error Handling**: Comprehensive error scenarios
- **Field Types**: Data type validation

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.js       # Navigation with contact CTAs
│   └── Footer.js       # Footer with links
├── pages/              # Page components
│   ├── Home.js         # Hero, features, testimonials
│   ├── Product.js      # "How It Works" workflow
│   ├── Features.js     # Detailed features and pricing
│   ├── Contact.js      # Contact form with validation
│   ├── Admin.js        # Form submissions viewer
│   └── Privacy.js      # Privacy policy
├── assets/             # Images and static assets
├── constants.js        # Company branding constants
└── App.js              # Main app with routing

api/
└── send-email.js       # Email + Airtable integration

__tests__/
└── contact-form.test.js # Unit tests

test-utils/
└── contact-form-helpers.js # Test helper functions

scripts/
└── generate-public-files.js # Branding script
```

## 🎯 Key Pages & Features

### Home Page (`/`)
- **Hero Section**: "Revolutionize B2B Software Procurement with AI-Driven Intelligence"
- **Features Overview**: Real-time feature scoring, autonomous agents, contract benchmarking
- **Testimonials**: Social proof from procurement professionals
- **CTAs**: Multiple paths to contact form and evaluation

### How It Works (`/product`)
- **4-Step Workflow**: Define problem → AI refinement → Real-time analysis → Solution delivery
- **Value Propositions**: Unbiased intelligence, efficiency, transparency
- **Contact CTAs**: Clear paths to engagement

### Features (`/features`)
- **Detailed Feature Breakdown**: Technical capabilities and benefits
- **Pricing Information**: Freemium model for buyers, vendor subscriptions
- **Contact Integration**: Multiple engagement points

### Contact (`/contact`)
- **Glassmorphic Form**: Modern, accessible contact form
- **Dual Storage**: Emails sent + Airtable database storage
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation emails and on-screen messages

### Admin (`/admin`)
- **Submission Viewer**: View and manage form submissions
- **Local Storage**: JSON file storage for development
- **Production Ready**: Prepared for Airtable integration

## 🔧 Customization

The project uses centralized branding constants in `src/constants.js`:

```javascript
export const COMPANY_NAME = 'RiptideB2B';
export const COMPANY_TAGLINE = 'AI-Powered Procurement Intelligence: Unbiased Software Evaluation and Automation';
export const COMPANY_DESCRIPTION = 'AI-driven B2B software procurement intelligence platform...';
export const COMPANY_EMAIL = 'sales@riptideb2b.com';
```

### Logo & Assets
- Logo: `public/riptideb2b-logo.png`
- Favicon: `public/favicon.ico`
- Email logo: Configured in `api/send-email.js`

To rebrand, update constants and run:
```bash
npm run generate-public
```

## 📧 Email & Database Configuration

### Brevo (Sendinblue) Setup
1. Create account at [brevo.com](https://brevo.com)
2. Generate API key
3. Add to `BREVO_API_KEY` in environment variables
4. Configure DNS records for deliverability

### Airtable Setup
1. Create base and table for lead storage
2. Set up fields: `Lead Name`, `Email Address`, `Company`, `Message`, `Status`, `Phone Number`, `Create Date`
3. Generate API token with `data.records:read` and `data.records:write` permissions
4. Add credentials to environment variables

## 🚀 Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```

The site is configured for:
- **Automatic deployments** from GitHub
- **Environment variables** in Vercel dashboard
- **Serverless functions** for API endpoints
- **CDN optimization** for static assets

### Manual Deployment
1. Build: `npm run build`
2. Deploy `build/` folder to your hosting provider
3. Configure API endpoints and environment variables

## 🔒 Security & Best Practices

- **Input Validation**: Comprehensive form validation
- **Data Sanitization**: XSS protection and input cleaning
- **Error Handling**: Graceful error handling with user feedback
- **Environment Variables**: Sensitive data in environment variables
- **CORS Configuration**: Proper cross-origin resource sharing
- **Rate Limiting**: Consider implementing for production

## 📊 Monitoring & Logging

- **Comprehensive Logging**: Detailed request/response logging
- **Error Tracking**: Structured error logging with context
- **Performance Monitoring**: Built-in performance tracking
- **Email Delivery**: Brevo dashboard for email metrics
- **Lead Management**: Airtable for submission tracking

## 🛠️ Development

### Local Development
```bash
npm start           # React dev server (port 3000)
npm run server      # API server (port 3001)
npm run dev         # Build + serve (recommended)
```

### Testing
```bash
npm run test:unit        # Unit tests
npm run test:integration # Integration tests
npm test                 # React tests
```

### Code Quality
- **ESLint**: Configured for React and JavaScript
- **Prettier**: Code formatting (if configured)
- **Git Hooks**: Pre-commit validation (if configured)

## 📝 License

Private - All rights reserved.

---

**RiptideB2B** - AI for Transparent Procurement