import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 relative">
      {/* Oceanic background overlay */}
      <div className="absolute inset-0 wave-gradient opacity-20"></div>
      
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-oceanic">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-700">
            Connect with our visionaries. Share insights; co-shape the future of agentic marketing.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
          {/* Wave accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-oceanic transition-fluid bg-white/80 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-oceanic transition-fluid bg-white/80 backdrop-blur-sm"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-oceanic transition-fluid resize-none bg-white/80 backdrop-blur-sm"
                placeholder="Tell us about your marketing challenges and how AdtechAI can help..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-fluid hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed reef-shadow"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 reef-shadow relative overflow-hidden">
            {/* Wave accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Voice Fuels Our Evolution
              </h3>
              <p className="text-gray-700 mb-6">
                From today's autonomy to tomorrow's expansions. Every insight helps us build a more intelligent, 
                more responsive advertising ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.adtechai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium transition-fluid hover:bg-blue-600 hover:text-white reef-shadow"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Try AdtechAI
                </a>
                <a
                  href="mailto:hello@adtechai.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium transition-fluid hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Oceanic decorative element */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 bg-blue-100 rounded-full reef-shadow">
            <div className="text-4xl wave-ripple">🌊</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 