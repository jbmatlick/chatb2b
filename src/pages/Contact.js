import React, { useState } from 'react';
import coralBg from '../assets/contact-coral.jpg';
import { COMPANY_NAME, COMPANY_APP_URL, COMPANY_EMAIL } from '../constants';

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
    try {
      console.log('Submitting formData:', formData);
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log('API response status:', res.status);
      let data;
      try {
        data = await res.json();
        console.log('API response body:', data);
      } catch (jsonErr) {
        console.log('Failed to parse JSON response:', jsonErr);
      }
      if (res.ok && data && data.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
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
            Got questions? Ready to transform your marketing? Let's talk. Share your challenges; we'll show you how {COMPANY_NAME} can help.
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
              : "Oops, something went wrong—try again."}
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
                placeholder={`Tell us about your marketing challenges and how ${COMPANY_NAME} can help...`}
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
          <h2 className="text-2xl font-semibold text-teal-300 mb-2">Your Feedback Drives Our Growth</h2>
          <p className="text-base text-white/80 mb-0">
            Every insight helps us build better. From today's autonomy to tomorrow's innovations—your voice shapes the future of agentic marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={COMPANY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex-1 text-center"
            >
                              Try {COMPANY_NAME}
            </a>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="btn-accent flex-1 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact; 