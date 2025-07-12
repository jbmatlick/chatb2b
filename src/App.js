import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen oceanic-bg relative">
        {/* Subtle wave pattern overlay */}
        <div className="absolute inset-0 reef-pattern opacity-30 pointer-events-none"></div>
        
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 