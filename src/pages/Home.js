import React, { useState, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(value === '' || emailRegex.test(value));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }

    setIsLoading(true);
    
    try {
      // Call the API endpoint to store in Airtable and send emails
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Waitlist Subscriber',
          email: email,
          company: 'Not provided',
          message: 'Joined ChatB2B waitlist from coming soon page'
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        console.log('✅ Email submitted successfully:', email);
        setIsSubmitted(true);
        setEmail('');
      } else {
        console.error('❌ Form submission failed:', data.error);
        // Still show success to user but log the error
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      // Still show success to user but log the error
      setIsSubmitted(true);
      setEmail('');
    } finally {
      setIsLoading(false);
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  // Fade-in animation on mount
  useEffect(() => {
    document.body.classList.add('fade-in');
    return () => {
      document.body.classList.remove('fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Fixed top bar with more padding */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                ChatB2B
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content - Full viewport centered with more top padding */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
        {/* Background with oceanic theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/20 to-ocean-600/20"></div>
        <div className="absolute inset-0 reef-pattern opacity-10"></div>
        
        {/* Floating wave elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full wave-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400/20 rounded-full wave-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400/20 rounded-full wave-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-cyan-400/20 rounded-full wave-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-10 w-14 h-14 bg-blue-300/20 rounded-full wave-float" style={{animationDelay: '3s'}}></div>

        {/* Centered hero content with minimal text */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <div className="glass-card p-8 md:p-12 lg:p-16 fade-in">
            {/* Coming Soon Badge - Now the main element */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-full px-8 py-4 mb-12 sm:mb-16">
              <ClockIcon className="w-6 h-6 text-teal-300" />
              <span className="text-teal-300 font-semibold text-xl">Coming Soon</span>
            </div>

            {/* Email signup form */}
            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                      className={`w-full px-6 py-4 rounded-full bg-white/10 border-2 border-white/30 focus:border-teal-400 focus:outline-none text-white placeholder-white/60 transition-all duration-300 focus-oceanic ${
                        !isValidEmail ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                      aria-label="Email address for early access notification"
                      aria-invalid={!isValidEmail}
                      aria-describedby={!isValidEmail ? 'email-error' : undefined}
                    />
                    {!isValidEmail && (
                      <p id="email-error" className="text-red-400 text-sm mt-2 text-left" role="alert">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading || !email || !isValidEmail}
                    className="w-full btn-accent text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-label="Notify me when ChatB2B launches"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-5 h-5" />
                        Notify Me
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-full mb-4 sm:mb-6">
                    <ChatBubbleLeftRightIcon className="w-8 h-8 text-teal-300" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-teal-300 mb-2 sm:mb-3">Thank You!</h3>
                  <p className="text-white/80 text-lg">
                    We'll notify you as soon as ChatB2B launches.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Minimal bottom section with more padding */}
      <footer className="relative z-10 py-8 sm:py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-sm">
            © 2025 ChatB2B. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 