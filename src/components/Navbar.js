import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-card bg-blue-900/30 backdrop-blur border-b border-white/20 shadow-lg">
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient-oceanic transition-fluid hover:scale-105 wave-float">
              AdtechAI
            </span>
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
              Product
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
              href="https://app.adtechai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent ml-2"
            >
              Login
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-card bg-blue-900/80 backdrop-blur border border-white/20 mt-2 px-4 py-4 space-y-2 reef-shadow">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 text-white/90 hover:text-teal-400 ${
                  isActive('/') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/product"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 text-white/90 hover:text-teal-400 ${
                  isActive('/product') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 text-white/90 hover:text-teal-400 ${
                  isActive('/contact') ? 'underline underline-offset-8 decoration-teal-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://app.adtechai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full block text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 