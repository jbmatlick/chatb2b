import React from 'react';
import { Link } from 'react-router-dom';
import heroReef from '../assets/hero-reef.jpg';
import { ClockIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/outline';

const advantageData = [
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-500" aria-label="Time Savings" />,
    benefit: 'Time Savings',
    traditional: 'Manual hours lost to dashboards',
    contactTsunami: '80% reclaimed for strategy',
  },
  {
    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-teal-500" aria-label="ROAS Uplift" />,
    benefit: 'ROAS Uplift',
    traditional: 'Static bids; guesswork',
    contactTsunami: '2-3x via AI optimization',
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-indigo-500" aria-label="Cognitive Load" />,
    benefit: 'Cognitive Load',
    traditional: 'Tool overload',
    contactTsunami: 'Invisible autonomy',
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Contact Tsunami: The Agent That Runs Your Ads</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Stop managing campaigns. Start commanding results. Contact Tsunami transforms your goals into autonomous, optimized executions – because your vision deserves intelligent action.
            </p>
            <Link
              to="/product"
              className="btn-accent text-lg"
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

      {/* Why Contact Tsunami? Section */}
      <section className="relative flex flex-col items-center justify-center py-16">
        <div className="glass-card w-full max-w-3xl mx-auto py-12 px-6 md:px-12 text-center fade-in">
          <h2 className="text-3xl font-semibold text-teal-300 mb-6">Why Contact Tsunami?</h2>
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              Tired of drowning in dashboards? Contact Tsunami calms the storm. We channel your data into strategic surges that actually work.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              This isn't another dashboard—it's your intelligent agent. Set goals, not campaigns. Harvest insights, not data.
            </p>
            <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-200">
              Your vision. Our execution. Pure results.
            </p>
          </div>
        </div>
        {/* Wave divider between major sections */}
      </section>

      {/* The Contact Tsunami Advantage Section (Card-based) */}
              <section aria-label="Contact Tsunami Advantage" className="py-16">
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

      {/* --- Testimonials Section (added July 2025, per enhanced prompt) --- */}
      <section className="py-16 fade-in">
        <h2 className="section-title mb-4">What Our Users Say</h2>
        <p className="text-white/80 text-lg text-center mb-10 max-w-2xl mx-auto">Hear from marketers just like you who've transformed their workflows with Contact Tsunami.</p>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card flex flex-col items-center p-8 fade-in">
              <img src="https://ui-avatars.com/api/?name=Sarah+Chen&background=0ea5e9&color=fff" alt="Avatar of Sarah Chen" className="w-16 h-16 rounded-full mb-4" />
              <blockquote className="italic text-white/90 mb-4">"Contact Tsunami delivered a 3x ROI boost in our first quarter by autonomously optimizing campaigns across channels. No more manual tweaks—just results."</blockquote>
              <div className="font-bold text-teal-300">Sarah Chen<br /><span className="font-normal text-white/70">CMO, TechForge Solutions</span></div>
            </div>
            <div className="glass-card flex flex-col items-center p-8 fade-in">
              <img src="https://ui-avatars.com/api/?name=Mike+Rodriguez&background=0ea5e9&color=fff" alt="Avatar of Mike Rodriguez" className="w-16 h-16 rounded-full mb-4" />
              <blockquote className="italic text-white/90 mb-4">"The simplicity of execution is game-changing; we set goals, and the agent handles media deployment flawlessly, freeing our team for strategy."</blockquote>
              <div className="font-bold text-teal-300">Mike Rodriguez<br /><span className="font-normal text-white/70">Head of Growth, InnovateBrands</span></div>
            </div>
            <div className="glass-card flex flex-col items-center p-8 fade-in">
              <img src="https://ui-avatars.com/api/?name=Elena+Vasquez&background=0ea5e9&color=fff" alt="Avatar of Elena Vasquez" className="w-16 h-16 rounded-full mb-4" />
              <blockquote className="italic text-white/90 mb-4">"Bringing our own data into Contact Tsunami revolutionized our marketing landscape—hyper-personalized targeting that feels like magic, with insights we never had before."</blockquote>
              <div className="font-bold text-teal-300">Elena Vasquez<br /><span className="font-normal text-white/70">Director of Analytics, GlobalReach Inc.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Vanguard CTA Section */}
      <section className="relative overflow-hidden py-20 fade-in" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        <div className="relative z-10 py-16 text-center text-white">
          <div className="glass-card inline-block px-12 py-10">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Join the Vanguard</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Tired of drowning in ad chaos? What if you could just set your goals and let an intelligent agent handle the rest—turning them into optimized, autonomous results? Dive into the future of agentic marketing with Contact Tsunami. It's fluid, adaptive, and built for real impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/product"
                className="btn-accent"
                aria-label="Dive Deeper"
              >
                Dive Deeper
              </Link>
              <Link
                to="/contact"
                className="btn-accent"
                aria-label="Get Started"
              >
                Get Started
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