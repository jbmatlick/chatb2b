import React from 'react';
import { Link } from 'react-router-dom';
import heroReef from '../assets/hero-reef.jpg';
import { ClockIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { COMPANY_NAME } from '../constants';

const advantageData = [
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-500" aria-label="Time Savings" />,
    benefit: 'Time Savings',
    traditional: 'Months of manual evaluation',
    contactTsunami: 'Days with AI automation',
  },
  {
    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-teal-500" aria-label="Unbiased Intelligence" />,
    benefit: 'Unbiased Intelligence',
    traditional: 'Pay-to-play reviews',
    contactTsunami: 'Real-time feature scoring',
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-indigo-500" aria-label="Transparent Process" />,
    benefit: 'Transparent Process',
    traditional: 'Black box decisions',
    contactTsunami: 'Open methodology',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroReef})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-teal-700/60"></div>
        <div className="absolute inset-0 reef-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 md:p-16 fade-in">
            <h1 className="section-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Revolutionize B2B Software Procurement with AI-Driven Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Say goodbye to biased reviews and manual evaluations. Our AI agent crawls features in real-time, automates demos, and benchmarks contracts for transparent, efficient decisions.
            </p>
            <p className="text-lg text-white/70 mb-8 italic">
              The trustworthy alternative to G2 and Gartner.
            </p>
            <Link
              to="/product"
              className="btn-accent text-lg"
            >
              Start Your Free Evaluation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200/50 via-blue-100/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full wave-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400/20 rounded-full wave-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400/20 rounded-full wave-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Why Company? Section */}
      <section className="relative flex flex-col items-center justify-center py-16">
        <div className="glass-card w-full max-w-3xl mx-auto py-12 px-6 md:px-12 text-center fade-in">
          <h2 className="text-3xl font-semibold text-teal-300 mb-6">Why {COMPANY_NAME}?</h2>
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              Tired of biased reviews and months-long evaluations? {COMPANY_NAME} delivers transparent, AI-powered procurement intelligence that actually works.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              This isn't another review site—it's your intelligent procurement agent. Define problems, not requirements. Get solutions, not sales pitches.
            </p>
            <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-200">
              Your needs. Our intelligence. Pure transparency.
            </p>
          </div>
        </div>
        {/* Wave divider between major sections */}
      </section>

      {/* The Company Advantage Section (Card-based) */}
              <section aria-label={COMPANY_NAME} Advantage className="py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {advantageData.map((item, idx) => (
            <div
              key={item.benefit}
              className="glass-card flex flex-col items-center p-8 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl outline-none"
              tabIndex={0}
              aria-label={item.benefit}
            >
              <div className="mb-2">{item.icon}</div>
              <div className="font-bold text-lg text-teal-400 mb-1">{item.benefit}</div>
              <div className="text-white/70 text-sm mb-1">{item.traditional}</div>
              <div className="text-teal-400 font-bold text-base">{item.contactTsunami}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="py-16 fade-in">
        <h2 className="section-title mb-4">What Our Users Say</h2>
        <p className="text-white/80 text-lg text-center mb-10 max-w-2xl mx-auto">Hear from procurement professionals who've transformed their software evaluation process with {COMPANY_NAME}.</p>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card flex flex-col items-center p-8 fade-in">
              <img src="https://ui-avatars.com/api/?name=Sarah+Chen&background=0ea5e9&color=fff" alt="Avatar of Sarah Chen" className="w-16 h-16 rounded-full mb-4" />
              <blockquote className="italic text-white/90 mb-4">"{COMPANY_NAME} cut our CRM evaluation time from 6 months to 2 weeks. The AI agent found features we never knew existed and saved us $200K in licensing costs."</blockquote>
              <div className="font-bold text-teal-300">Sarah Chen<br /><span className="font-normal text-white/70">VP of IT, TechForge Solutions</span></div>
            </div>
            <div className="glass-card flex flex-col items-center p-8 fade-in">
              <img src="https://ui-avatars.com/api/?name=Mike+Rodriguez&background=0ea5e9&color=fff" alt="Avatar of Mike Rodriguez" className="w-16 h-16 rounded-full mb-4" />
              <blockquote className="italic text-white/90 mb-4">"Finally, unbiased software intelligence. No more vendor influence or pay-to-play reviews. The real-time feature scoring gives us confidence in our decisions."</blockquote>
              <div className="font-bold text-teal-300">Mike Rodriguez<br /><span className="font-normal text-white/70">Procurement Director, InnovateBrands</span></div>
            </div>
            <div className="glass-card flex flex-col items-center p-8 fade-in">
              <img src="https://ui-avatars.com/api/?name=Elena+Vasquez&background=0ea5e9&color=fff" alt="Avatar of Elena Vasquez" className="w-16 h-16 rounded-full mb-4" />
              <blockquote className="italic text-white/90 mb-4">"The contract benchmarking feature is a game-changer. We discovered our Salesforce contract was 30% above market rate and renegotiated immediately."</blockquote>
              <div className="font-bold text-teal-300">Elena Vasquez<br /><span className="font-normal text-white/70">CFO, GlobalReach Inc.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Vision Section */}
      <section className="py-16 fade-in">
        <div className="glass-card w-full max-w-4xl mx-auto py-12 px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold text-teal-300 mb-6">Our Mission: Disrupting B2B Procurement with AI Neutrality</h2>
          <div className="space-y-6 text-left">
            <p className="text-lg text-white/80 leading-relaxed">
              {COMPANY_NAME} is disrupting B2B procurement with AI neutrality. Our mission: Democratize software evaluation, restoring trust in a market riddled with corruption and pay-to-play bias.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We believe procurement decisions should be based on objective data, not vendor influence. Our AI agents crawl real-time feature data, eliminate bias, and deliver transparent intelligence that procurement teams can trust.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Long-term vision: Replace static analyst reports with dynamic, Wall Street-ready intelligence that adapts to market changes and delivers real value to procurement professionals.
            </p>
            <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-200">
              The future of procurement is transparent, efficient, and AI-powered.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Streamline CTA Section */}
      <section className="relative overflow-hidden py-20 fade-in" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        <div className="relative z-10 py-16 text-center text-white">
          <div className="glass-card inline-block px-12 py-10">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Ready to Streamline Your Procurement?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Tired of biased reviews and months-long evaluations? What if you could define your problem and let an intelligent agent handle the rest—delivering transparent, data-driven recommendations? Transform your procurement process with {COMPANY_NAME}. It's efficient, unbiased, and built for real results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/product"
                className="btn-accent"
                aria-label="Learn How It Works"
              >
                Learn How It Works
              </Link>
              <Link
                to="/contact"
                className="btn-accent"
                aria-label="Start Free Evaluation"
              >
                Start Free Evaluation
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle bottom wave divider removed to prevent floating bar above footer */}
      </section>
    </div>
  );
};

export default Home; 