import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Features from './pages/Features';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Main app shell with router, global backgrounds, and layout */}
      <div className="min-h-screen relative overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Oceanic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-teal-800 -z-10"></div>
        {/* Subtle ocean overlay */}
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
          <div className="w-full h-full bg-gradient-to-b from-transparent to-teal-900/40" />
        </div>
        {/* Reef pattern overlay */}
        <div className="absolute inset-0 reef-pattern opacity-30 pointer-events-none -z-10"></div>
        <Navbar />
        <main className="flex-1 relative z-10 fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 