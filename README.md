# Contact Tsunami Marketing Website

A modern, agentic-first marketing website for Contact Tsunami - the autonomous advertising platform that runs your ads for you.

## 🌊 Vision

Contact Tsunami isn't just another dashboard—it's an intelligent agent that transforms marketing goals into autonomous, optimized executions. This website embodies the platform's ethos of intelligent autonomy and fluid execution, drawing inspiration from oceanic reefs to symbolize depth, adaptability, and organic flow.

## ✨ Features

- **Oceanic Design**: Fluid gradients, wave animations, and reef-inspired aesthetics
- **Mobile-First**: Fully responsive design optimized for all devices
- **Agentic Messaging**: Sophisticated content that positions Contact Tsunami as an intelligent agent, not just a tool
- **Modern Tech Stack**: React 18+, Tailwind CSS, React Router
- **Performance Optimized**: Lightweight animations, semantic HTML, accessibility compliant
- **SEO Ready**: Meta tags, structured content, optimized for search engines

## 🏗️ Architecture

### Pages
- **Home (`/`)**: Heroic overture with value proposition table
- **Product (`/product`)**: Detailed workflow explanation and real-world examples
- **Contact (`/contact`)**: Minimalist contact form with oceanic aesthetics

### Components
- **Navbar**: Sticky navigation with Login button to app.contact-tsunami.com
- **Footer**: Simple copyright footer
- **Hero Sections**: Oceanic backgrounds with sophisticated messaging
- **Value Tables**: Responsive comparison tables
- **Contact Form**: Form handling with useState and validation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact-tsunami-marketing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🎨 Design System

### Colors
- **Primary Blue**: `#0284c7` (ocean-600)
- **Gradient Backgrounds**: `from-blue-50 via-blue-100 to-blue-200`
- **Accent Colors**: Various blue shades for depth and hierarchy

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Hierarchy**: Responsive text sizing with Tailwind's scale

### SEO & Accessibility
- **SEO**: Managed with [react-helmet-async](https://github.com/staylor/react-helmet-async) for dynamic meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- **Prop Validation**: All components use PropTypes for robust prop validation
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation, and color contrast meet WCAG 2.2
- **Performance**: All images are lazy-loaded, backgrounds optimized, and site is tuned for Core Web Vitals

### Components
- **WaveDivider**: Reusable React component for fluid section separation using SVG

### Animations
- **Fluid Transitions**: 0.3s ease-in-out for interactive elements
- **Wave Effects**: Subtle oceanic animations
- **Hover States**: Scale and color transitions

## 📱 Responsive Design

The website is built mobile-first with breakpoints:
- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

## �� Customization

### Company Branding
All company branding is centralized in `src/constants.js` for easy rebranding:

```javascript
export const COMPANY_NAME = 'Contact Tsunami';
export const COMPANY_SLUG = COMPANY_NAME.toLowerCase().replace(/\s+/g, '-');
export const COMPANY_EMAIL = `hello@${COMPANY_SLUG}.com`;
export const COMPANY_APP_URL = `https://app.${COMPANY_SLUG}.com`;
```

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Classes**: Defined in `src/index.css`
- **Component Styles**: Scoped to individual components

## 🎯 Key Messaging Pillars

1. **Autonomy as Liberation**: "From intent to impact – Contact Tsunami handles the 'how' so you focus on the 'why'"
2. **Intelligence as Depth**: "Beneath the waves of data lies untapped intelligence"
3. **Execution as Symphony**: "A single agent conducts the orchestra of your advertising universe"

## 🔗 External Links

- **App Login**: `https://app.contact-tsunami.com`
- **Contact Email**: `hello@contact-tsunami.com`

## 📄 License

© 2025 Contact Tsunami. All rights reserved.

---

*Built with React, Tailwind CSS, and oceanic inspiration.* 

## 🛡️ Future-Proofed for 2025
- Built to exceed modern best practices for performance, accessibility, security, and SEO (Core Web Vitals, WCAG 2.2, Google SEO guidelines)
- Easily extensible and maintainable codebase 

### Utilities
- **ScrollToTop**: Ensures the page scrolls to the top on every route change for a seamless user experience.

### Code Readability
- All main files and components are clearly commented and structured for easy onboarding and maintenance by future developers. 