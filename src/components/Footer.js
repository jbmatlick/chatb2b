import React from 'react';

// Footer with wave divider and copyright
const Footer = () => {
  return (
    <footer className="bg-blue-900/80 text-white/80 py-6 relative overflow-hidden mt-16">
      {/* Remove the <img ... /> wave divider from the Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © 2025 AdtechAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 