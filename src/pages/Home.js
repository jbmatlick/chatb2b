import React from 'react';
import { Link } from 'react-router-dom';
import heroReef from '../assets/hero-reef.jpg';
import { ClockIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/outline';
import waveDivider from '../assets/wave-divider.svg';

const advantageData = [
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-500" aria-label="Time Savings" />,
    benefit: 'Time Savings',
    traditional: 'Manual hours lost to dashboards',
    adtechai: '80% reclaimed for strategy',
  },
  {
    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-teal-500" aria-label="ROAS Uplift" />,
    benefit: 'ROAS Uplift',
    traditional: 'Static bids; guesswork',
    adtechai: '2-3x via AI optimization',
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-indigo-500" aria-label="Cognitive Load" />,
    benefit: 'Cognitive Load',
    traditional: 'Tool overload',
    adtechai: 'Invisible autonomy',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section (unchanged) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroReef})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 reef-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 reef-shadow border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient-oceanic">AdtechAI: The Agent That Runs Your Ads</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              An agentic-first platform that transforms marketing goals into autonomous, optimized executions – because your vision deserves intelligent action.
            </p>
            <Link
              to="/product"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-fluid hover:from-blue-700 hover:to-blue-800 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 reef-shadow"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200/50 via-blue-100/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full wave-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400/20 rounded-full wave-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400/20 rounded-full wave-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Modernized Bottom Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* Why AdtechAI? Section */}
        <section className="relative flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl py-12 px-6 md:px-12 shadow-lg reef-shadow text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6" style={{textShadow: '0 2px 8px rgba(16, 42, 67, 0.08)'}}>Why AdtechAI?</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                In the turbulent ocean of digital advertising, fragmentation drowns potential. AdtechAI calms the storm, channeling data flows into strategic surges.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                This isn't just another dashboard—it's an intelligent agent handling goals to optimization. Inspired by ocean waves and reefs: fluid, adaptive, deep.
              </p>
              <p className="text-xl font-semibold text-gradient-oceanic">
                Set goals, not campaigns; harvest insights, not data.
              </p>
            </div>
          </div>
          {/* Subtle wave divider */}
          <img src={waveDivider} alt="Wave divider" className="mx-auto mt-10 w-full max-w-2xl opacity-50" loading="lazy" style={{zIndex: 1, position: 'relative'}} />
        </section>

        {/* The AdtechAI Advantage Section (Card-based) */}
        <section aria-label="AdtechAI Advantage" className="">
          <div className="grid gap-6 md:grid-cols-3">
            {advantageData.map((item, idx) => (
              <div
                key={item.benefit}
                className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-xl shadow-lg reef-shadow p-6 space-y-4 transition-transform duration-200 hover:scale-105"
                tabIndex={0}
                aria-label={item.benefit}
              >
                <div className="mb-2">{item.icon}</div>
                <div className="font-bold text-lg text-blue-900 mb-1">{item.benefit}</div>
                <div className="text-gray-500 text-sm mb-1">{item.traditional}</div>
                <div className="text-teal-600 font-bold text-base">{item.adtechai}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Join the Vanguard CTA Section */}
        <section className="relative overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
          <div className="relative z-10 py-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join the Vanguard</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Explore how AdtechAI redefines execution with intelligent autonomy. Experience the future of agentic marketing—fluid, adaptive, and profoundly effective.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/product"
                className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Dive Deeper"
              >
                Dive Deeper
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Get Started"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Subtle bottom wave divider */}
          <img src={waveDivider} alt="Wave divider" className="absolute bottom-0 left-0 w-full opacity-60" style={{transform: 'translateY(50%)'}} loading="lazy" />
        </section>
      </main>
    </div>
  );
};

export default Home; 