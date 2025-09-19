# Dependencies Overview

This document explains the purpose of each major dependency in the RiptideB2B project.

## Frontend Dependencies

### Core React
- **react** (^18.2.0) - Core React library
- **react-dom** (^18.2.0) - React DOM rendering
- **react-router-dom** (^6.8.1) - Client-side routing

### UI & Styling
- **@heroicons/react** (^2.2.0) - Icon library
- **tailwindcss** (^3.2.7) - Utility-first CSS framework
- **autoprefixer** (^10.4.14) - CSS vendor prefixing
- **postcss** (^8.4.21) - CSS processing

### SEO & Meta
- **react-helmet-async** (^2.0.5) - Dynamic meta tag management

## Backend & API Dependencies

### Server & Runtime
- **express** (^4.21.2) - Web server framework (local development)
- **dotenv** (^17.2.0) - Environment variable loading

### External Services
- **sib-api-v3-sdk** (^8.5.0) - Brevo (Sendinblue) email service
- **airtable** (^0.12.2) - Airtable database integration

## Development Dependencies

### Testing
- **jest** (^27.5.1) - JavaScript testing framework
- **@testing-library/react** (^13.3.0) - React component testing
- **@testing-library/jest-dom** (^5.16.4) - Jest DOM matchers
- **@testing-library/user-event** (^13.5.0) - User interaction testing

### Build Tools
- **react-scripts** (5.0.1) - Create React App build system
- **webpack** (^5.100.1) - Module bundler
- **babel-loader** (^10.0.0) - JavaScript transpilation

### Deployment
- **vercel** (^44.4.1) - Vercel CLI for deployment

## Environment Requirements

### Node.js
- **Version**: 22.x (specified in package.json engines)
- **File**: `.nvmrc` contains exact version

### Environment Variables
Required in `env.local` or Vercel environment:
```
BREVO_API_KEY=your_brevo_api_key
OWNER_EMAIL=sales@riptideb2b.com
AIRTABLE_API_TOKEN=your_airtable_token
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_NAME=your_airtable_table_name
```

## Security Considerations

### External API Dependencies
- **Brevo API**: Requires API key, handles email delivery
- **Airtable API**: Requires token with specific permissions
- **Vercel**: Deployment platform with environment variables

### Data Handling
- All sensitive data stored in environment variables
- Input validation and sanitization implemented
- CORS headers configured for API endpoints

## Version Management

- **package-lock.json**: Locks exact versions for reproducible builds
- **Semantic versioning**: Uses caret (^) for compatible updates
- **Node.js**: Pinned to 22.x for consistency

## Installation

```bash
npm install
```

This will install all dependencies listed in `package.json` and lock them to exact versions in `package-lock.json`.
