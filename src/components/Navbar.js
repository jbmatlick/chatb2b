import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_APP_URL } from '../constants';

// Responsive glassmorphic navbar with sticky positioning and mobile overlay
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 glass-card bg-blue-900/30 backdrop-blur border-b border-white/20 shadow-lg rounded-none">
        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/riptideb2b-logo.png" alt={`${COMPANY_NAME} logo`} className="h-12 md:h-14 w-auto object-contain origin-left transform scale-[1.8] md:scale-[2]" />
              <span className="sr-only">{COMPANY_NAME}</span>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-white/90 hover:text-teal-400 transition-all duration-300 font-medium relative group ${
                  isActive('/') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/product"
                className={`text-white/90 hover:text-teal-400 transition-all duration-300 font-medium relative group ${
                  isActive('/product') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/features"
                className={`text-white/90 hover:text-teal-400 transition-all duration-300 font-medium relative group ${
                  isActive('/features') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className={`text-white/90 hover:text-teal-400 transition-all duration-300 font-medium relative group ${
                  isActive('/contact') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a
                href={COMPANY_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent ml-2"
                aria-label={`Sign Up Free for ${COMPANY_NAME}`}
              >
                Sign Up Free
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/90 hover:text-teal-400 transition-all duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Overlay - now sibling to <nav> */}
      {isMenuOpen &&
        <div className="md:hidden fixed inset-0 z-[9999] w-full h-full bg-white/10 backdrop-blur-xl flex items-center justify-center overflow-y-auto">
          <div className="glass-card bg-white/20 backdrop-blur-xl max-w-xs w-full mx-auto my-16 p-6 shadow-2xl border border-white/20 rounded-none md:rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <span className="text-2xl font-bold text-white drop-shadow-md">{COMPANY_NAME}</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-ocean-700 hover:text-teal-500 transition-all duration-300 text-3xl focus:outline-none ml-4"
                aria-label="Close menu"
                style={{ lineHeight: 1 }}
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-4 mb-6">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 text-ocean-700 hover:text-teal-500 ${
                  isActive('/') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/product"
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 text-ocean-700 hover:text-teal-500 ${
                  isActive('/product') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/features"
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 text-ocean-700 hover:text-teal-500 ${
                  isActive('/features') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 text-ocean-700 hover:text-teal-500 ${
                  isActive('/contact') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <a
              href={COMPANY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up Free
            </a>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar; 