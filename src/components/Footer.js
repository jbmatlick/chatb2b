import React from 'react';
import { COMPANY_NAME } from '../constants';

// Footer with wave divider and copyright
const Footer = () => {
  return (
    <footer className="bg-blue-900/80 text-white/80 py-6 relative overflow-hidden mt-16">
      {/* Remove the <img ... /> wave divider from the Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/privacy" className="underline hover:text-white transition-colors" tabIndex={0} aria-label="Privacy Policy">
              Privacy Policy
            </a>
            <a href="/terms" className="underline hover:text-white transition-colors" tabIndex={0} aria-label="Terms of Service">
              Terms
            </a>
            <a href="/contact" className="underline hover:text-white transition-colors" tabIndex={0} aria-label="Contact Us">
              Contact
            </a>
          </div>
          <p className="text-sm">
            © 2025 {COMPANY_NAME} – AI for Transparent Procurement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 