import React from 'react';
import WaveDivider from '../assets/wave-divider.svg';

const Footer = () => {
  return (
    <footer className="glass-card bg-blue-900/50 text-white/80 py-6 relative overflow-hidden mt-16">
      {/* Wave SVG divider at the top */}
      <img src={WaveDivider} alt="wave divider" className="wave-svg absolute -top-10 left-0 w-full pointer-events-none select-none" loading="lazy" />
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