import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coralBg from '../assets/contact-coral.jpg';
import { COMPANY_NAME, COMPANY_EMAIL } from '../constants';

// Contact page for marketing site
// Features: Glassmorphic form, feedback section, oceanic background
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission: POST to /api/send-email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);
    setErrorMessage('');
    
    // Log form submission attempt
    console.log('📧 Contact form submission started:', {
      timestamp: new Date().toISOString(),
      formData: { ...formData, message: formData.message.substring(0, 50) + '...' }, // Truncate message for privacy
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      console.log('📡 API response received:', {
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers.entries())
      });

      let data;
      try {
        data = await res.json();
        console.log('📄 API response data:', data);
      } catch (jsonErr) {
        console.error('❌ Failed to parse JSON response:', jsonErr);
        throw new Error('Server returned invalid response format');
      }

      if (res.ok && data && data.success) {
        console.log('✅ Form submission successful');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        // Handle specific error cases
        let errorMsg = 'Something went wrong. Please try again.';
        
        if (res.status === 400) {
          errorMsg = 'Please check your information and try again.';
        } else if (res.status === 429) {
          errorMsg = 'Too many requests. Please wait a moment and try again.';
        } else if (res.status === 500) {
          errorMsg = 'Server error. Please try again later or contact us directly.';
        } else if (res.status === 503) {
          errorMsg = 'Service temporarily unavailable. Please try again later.';
        } else if (data && data.error) {
          errorMsg = data.error;
        } else if (res.status >= 400 && res.status < 500) {
          errorMsg = 'There was a problem with your request. Please check your information.';
        } else if (res.status >= 500) {
          errorMsg = 'Server error. Please try again later.';
        }

        console.error('❌ Form submission failed:', {
          status: res.status,
          error: data?.error || 'Unknown error',
          message: errorMsg
        });

        setErrorMessage(errorMsg);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setErrorMessage('');
        }, 8000);
      }
    } catch (err) {
      console.error('❌ Form submission error:', {
        error: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
      });

      let errorMsg = 'Network error. Please check your connection and try again.';
      
      if (err.message.includes('Failed to fetch')) {
        errorMsg = 'Unable to connect to server. Please check your internet connection.';
      } else if (err.message.includes('timeout')) {
        errorMsg = 'Request timed out. Please try again.';
      } else if (err.message) {
        errorMsg = err.message;
      }

      setErrorMessage(errorMsg);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setErrorMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url(${coralBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-800/70 to-blue-900/80" aria-hidden="true"></div>
      <main className="relative max-w-lg mx-auto px-4 py-20 space-y-16 z-10 fade-in">
        <div className="text-center">
          <h1 className="section-title">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-md mx-auto mb-10">
            Ready to explore intelligent procurement solutions? Let's discuss how {COMPANY_NAME} can transform your decision-making process with advanced AI automation.
          </p>
        </div>

        {/* Inline Success/Error Banner */}
        {(showSuccess || showError) && (
          <div
            className={`transition-opacity duration-500 mb-6 rounded-lg px-4 py-3 text-white font-semibold shadow-lg ${showSuccess ? 'bg-green-500' : 'bg-red-500'}`}
            role="status"
            aria-live="polite"
          >
            {showSuccess
              ? "Thanks! Your message is sent—we've emailed you a confirmation."
              : errorMessage || "Oops, something went wrong—try again."}
          </div>
        )}

        <div className="bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden p-10 fade-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-white mb-3">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-modern w-full text-white placeholder-white/50"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-base font-semibold text-white mb-3">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="input-modern w-full text-white placeholder-white/50"
                placeholder="Your company"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-white mb-3">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-modern w-full text-white placeholder-white/50"
                placeholder="your.email@company.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-semibold text-white mb-3">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="input-modern w-full text-white placeholder-white/50 resize-none"
                placeholder={`Tell us about your software procurement needs and how ${COMPANY_NAME} can assist...`}
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-accent w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Wave divider above evolution section */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden mt-12 p-8 text-center fade-in">
          <h2 className="text-2xl font-semibold text-teal-300 mb-2">Your Vision Shapes Our Innovation</h2>
          <p className="text-base text-white/80 mb-0">
            Every insight helps us evolve. From today's intelligent automation to tomorrow's breakthrough innovations—your perspective drives the future of procurement excellence.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="btn-accent flex-1 text-center"
                >
                  Email Us
                </a>
                <Link
                  to="/features"
                  className="btn-accent flex-1 text-center"
                >
                  Learn More
                </Link>
              </div>
        </div>
      </main>
    </div>
  );
};

export default Contact; 