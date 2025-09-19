# RiptideB2B Marketing Site

A modern, agentic-first marketing website for RiptideB2B - the autonomous advertising platform that turns your ads into sales.

## Features

- **Modern React Frontend**: Built with React, Tailwind CSS, and modern web technologies
- **Contact Form with Email**: Integrated contact form that sends emails via Brevo (Sendinblue)
- **Responsive Design**: Mobile-first, responsive design that works on all devices
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Privacy Policy**: Complete privacy policy page with GDPR compliance

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `env.local` file with:
   ```
   BREVO_API_KEY=your_brevo_api_key_here
   OWNER_EMAIL=your_email@example.com
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components (Home, Contact, Product, Privacy)
├── assets/             # Images and static assets
├── constants.js        # Company branding constants
└── App.js              # Main app component with routing

api/
└── send-email.js       # Email sending API endpoint

scripts/
└── generate-public-files.js  # Script to generate public files with branding
```

## Customization

The project uses centralized branding constants in `src/constants.js` for easy rebranding:

```javascript
export const COMPANY_NAME = 'RiptideB2B';
export const COMPANY_TAGLINE = 'The agent that turns your ads into sales';
export const COMPANY_DESCRIPTION = '...';
```

### Logo
- Put your UI logo image in `public/` as `riptideb2b-logo.png` (used in `Navbar`).
- Replace favicons: `public/favicon.ico`, `public/logo192.png`, `public/logo512.png`.
- Emails load a public URL set in `api/send-email.js` via `COMPANY_LOGO_URL`.

To rebrand, simply update these constants and run:
```bash
npm run generate-public
```

## Deployment

The site is configured for deployment on Vercel with automatic deployments from GitHub.

## Email Configuration

The contact form uses Brevo (Sendinblue) for email delivery. Configure your API key in the environment variables.

## License

Private - All rights reserved. 