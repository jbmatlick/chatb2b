# Quick Setup Guide

Get the RiptideB2B project running locally in 5 minutes.

## Prerequisites

- **Node.js 22.x** (use `.nvmrc` file)
- **npm** (comes with Node.js)
- **Git**

## 1. Clone & Install

```bash
git clone <repository-url>
cd riptideb2b-site
npm install
```

## 2. Environment Setup

Create `env.local` file:

```bash
# Copy the template
cp env.local.example env.local
# Edit with your values
```

Required variables:
```
BREVO_API_KEY=your_brevo_api_key_here
OWNER_EMAIL=sales@riptideb2b.com
AIRTABLE_API_TOKEN=your_airtable_token_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=your_airtable_table_name_here
```

## 3. Run Locally

```bash
# Option 1: Full development (recommended)
npm run dev

# Option 2: Separate servers
npm start          # React dev server (port 3000)
npm run server     # API server (port 3001)
```

## 4. Test Everything

```bash
# Unit tests
npm run test:unit

# Integration tests (requires Airtable setup)
npm run test:integration

# All tests
npm test
```

## 5. Build for Production

```bash
npm run build
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill
```

### Environment Variables Not Loading
- Check `env.local` file exists
- Verify no trailing spaces in values
- Restart the server after changes

### Airtable Connection Issues
- Verify API token permissions
- Check base ID and table name
- Run `npm run test:integration` to debug

## External Services Setup

### Brevo (Email Service)
1. Create account at [brevo.com](https://brevo.com)
2. Generate API key
3. Configure DNS records for deliverability

### Airtable (Database)
1. Create base and table
2. Set up fields: `Lead Name`, `Email Address`, `Company`, `Message`, `Status`, `Phone Number`, `Create Date`
3. Generate API token with `data.records:read` and `data.records:write` permissions

## Development Workflow

1. **Make changes** to source files
2. **Test locally** with `npm run dev`
3. **Run tests** with `npm run test:unit`
4. **Commit changes** to git
5. **Deploy** with `npx vercel --prod`

## File Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Images and static files
└── constants.js   # Branding constants

api/
└── send-email.js  # Email + Airtable API

__tests__/         # Unit tests
test-utils/        # Test helpers
```

## Need Help?

- Check the [README.md](./README.md) for detailed documentation
- Review [DEPENDENCIES.md](./DEPENDENCIES.md) for dependency information
- Run tests to verify everything is working
