import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-blue-100 relative">
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"></div>
      
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
              to="/product"
              className={`text-gray-700 hover:text-blue-600 transition-fluid font-medium relative group ${
                isActive('/product') ? 'text-blue-600' : ''
              }`}
            >
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 transition-fluid font-medium relative group ${
                isActive('/contact') ? 'text-blue-600' : ''
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="https://app.adtechai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md font-medium transition-fluid hover:from-blue-700 hover:to-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 reef-shadow"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-fluid focus:outline-none focus:text-blue-600"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-blue-100 reef-shadow">
              <Link
                to="/product"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-fluid ${
                  isActive('/product')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-fluid ${
                  isActive('/contact')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://app.adtechai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-fluid"
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