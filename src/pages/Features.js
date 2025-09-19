import React from 'react';
import { Link } from 'react-router-dom';
import coralBg from '../assets/contact-coral.jpg';
import { COMPANY_NAME } from '../constants';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  DocumentTextIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

// Features page showcasing core procurement intelligence capabilities
const Features = () => {
  const features = [
    {
      icon: <ChartBarIcon className="w-12 h-12 text-blue-500" aria-label="Real-Time Feature Scoring" />,
      title: 'Real-Time Feature Scoring',
      description: 'AI analyzes vendor docs, APIs, and UIs weekly to build dynamic quadrants and objective scores, eliminating pay-to-play bias.',
      benefits: [
        'Weekly feature updates across 500+ vendors',
        'Objective scoring based on actual capabilities',
        'Dynamic market quadrants that adapt to changes',
        'No vendor influence or paid placements'
      ]
    },
    {
      icon: <CpuChipIcon className="w-12 h-12 text-teal-500" aria-label="Autonomous Procurement Agent" />,
      title: 'Autonomous Procurement Agent',
      description: 'Define your problem, answer AI questions, and let the agent handle demos, emails, and solution briefs—compressing cycles from months to days.',
      benefits: [
        'Natural language problem definition',
        'Intelligent requirement refinement',
        'Automated vendor outreach and demos',
        'Comprehensive solution briefs'
      ]
    },
    {
      icon: <DocumentTextIcon className="w-12 h-12 text-indigo-500" aria-label="Contract Benchmarking" />,
      title: 'Contract Benchmarking (Coming Soon)',
      description: 'Anonymized peer comparisons to ensure you get the best deals, with percentile insights (e.g., "Your Salesforce contract is in the 75th percentile").',
      benefits: [
        'Anonymized peer contract data',
        'Percentile-based pricing insights',
        'Renegotiation recommendations',
        'Market rate intelligence'
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-purple-500" aria-label="Open Methodology" />,
      title: 'Open Methodology',
      description: 'Transparent AI algorithms and data sources for verifiable trust. Every recommendation backed by explainable intelligence.',
      benefits: [
        'Fully transparent algorithms',
        'Verifiable data sources',
        'Explainable AI decisions',
        'Open source methodology'
      ]
    }
  ];

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
      <main className="relative max-w-6xl mx-auto px-4 py-20 space-y-16 z-10 fade-in">
        <div className="text-center">
          <h1 className="section-title">Core Features</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
            Discover the powerful capabilities that make {COMPANY_NAME} the most trusted AI-driven procurement intelligence platform. Built for transparency, efficiency, and unbiased decision-making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="glass-card p-8 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">{feature.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-white/70 text-sm">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="glass-card p-8 text-center fade-in">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">For Buyers</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Basic access: <span className="text-teal-300 font-semibold">Free</span></li>
                <li>• Premium agent features: <span className="text-teal-300 font-semibold">$99/user/month</span></li>
                <li>• Contract benchmarking: <span className="text-teal-300 font-semibold">$199/user/month</span></li>
                <li>• Custom integrations: <span className="text-teal-300 font-semibold">Contact us</span></li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">For Vendors</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Lead subscriptions: <span className="text-teal-300 font-semibold">$500/month</span></li>
                <li>• 50 qualified leads included</li>
                <li>• Additional leads: <span className="text-teal-300 font-semibold">$10 each</span></li>
                <li>• Premium placement: <span className="text-teal-300 font-semibold">$2,000/month</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 text-center fade-in">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Ready to Transform Your Procurement?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join hundreds of procurement professionals who've already streamlined their software evaluation process with AI-powered intelligence.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-accent"
                >
                  Start Free Evaluation
                </Link>
                <Link
                  to="/contact"
                  className="btn-accent"
                >
                  Contact Us to Learn More
                </Link>
              </div>
        </div>
      </main>
    </div>
  );
};

export default Features;
