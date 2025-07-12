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
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h1>
        <p className="text-lg text-white/90 max-w-md mx-auto mb-10">
          Connect with our visionaries. Share insights; co-shape the future of agentic marketing.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-10 space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-oceanic transition-fluid bg-white text-gray-900"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-oceanic transition-fluid bg-white text-gray-900"
              placeholder="your.email@company.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-oceanic transition-fluid resize-none bg-white text-gray-900"
              placeholder="Tell us about your marketing challenges and how AdtechAI can help..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-fluid hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed reef-shadow shadow-lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-10 space-y-6 text-center mt-8">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Your Voice Fuels Our Evolution</h2>
        <p className="text-gray-700 mb-6">
          From today's autonomy to tomorrow's expansions. Every insight helps us build a more intelligent, more responsive advertising ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.adtechai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium transition-fluid hover:bg-blue-600 hover:text-white reef-shadow text-center"
          >
            Try AdtechAI
          </a>
          <a
            href="mailto:hello@adtechai.com"
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium transition-fluid hover:bg-gray-50 text-center"
          >
            Email Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact; 