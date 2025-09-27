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
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log email to console as requested
    console.log(`Email submitted: ${email}`);
    
    // Show success state
    setIsSubmitted(true);
    setEmail('');
    setIsLoading(false);
    
    // Reset success state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
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

        {/* Centered hero content with more spacing */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <div className="glass-card p-8 md:p-12 lg:p-16 fade-in">
            {/* Main headline with more bottom margin */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-10 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                Chat with Your Procurement Agent
              </span>
            </h1>

            {/* Subtext with more spacing */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-4xl mx-auto">
              Revolutionize B2B software procurement through conversational AI—transparent, unbiased, and efficient. 
              <span className="block mt-3 sm:mt-4 text-teal-300 font-semibold">
                Secure early access to ChatB2B and transform your buying process.
              </span>
            </p>

            {/* Coming Soon Badge with more margin */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-full px-6 py-3 mb-10 sm:mb-12">
              <ClockIcon className="w-5 h-5 text-teal-300" />
              <span className="text-teal-300 font-semibold">Coming Soon</span>
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

            {/* Trust indicators with more top margin */}
            <div className="mt-16 sm:mt-20 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm mb-4">Trusted by procurement professionals worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-white/40 font-semibold">Enterprise Ready</div>
                <div className="text-white/40 font-semibold">GDPR Compliant</div>
                <div className="text-white/40 font-semibold">SOC 2 Certified</div>
                <div className="text-white/40 font-semibold">24/7 Support</div>
              </div>
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
          <p className="text-white/40 text-xs mt-2">
            <a 
              href="/privacy" 
              className="hover:text-white/60 transition-colors duration-200"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 