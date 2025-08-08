const fs = require('fs');
const path = require('path');

// Company branding constants
const COMPANY_NAME = 'Contact Tsunami';
const COMPANY_TAGLINE = 'The Agent That Runs Your Ads';
const COMPANY_DESCRIPTION = 'Autonomous ad agent for marketers. Transform your advertising with intelligent, agentic-first platform that runs your ads for you.';

// Generate index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0284c7" />
    <meta
      name="description"
      content="${COMPANY_NAME}: ${COMPANY_DESCRIPTION}"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>${COMPANY_NAME}: ${COMPANY_TAGLINE}</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

// Generate manifest.json
const manifestJson = {
  short_name: COMPANY_NAME,
  name: `${COMPANY_NAME}: ${COMPANY_TAGLINE}`,
  icons: [
    {
      src: "favicon.ico",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon"
    },
    {
      src: "logo192.png",
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: "logo512.png",
      type: "image/png",
      sizes: "512x512"
    }
  ],
  start_url: ".",
  display: "standalone",
  theme_color: "#0284c7",
  background_color: "#f0f9ff",
  description: `${COMPANY_NAME}: ${COMPANY_DESCRIPTION}`
};

// Write files
fs.writeFileSync(path.join(__dirname, '../public/index.html'), indexHtml);
fs.writeFileSync(path.join(__dirname, '../public/manifest.json'), JSON.stringify(manifestJson, null, 2));

console.log('Public files generated with company constants!'); 