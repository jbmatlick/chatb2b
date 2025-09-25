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
      icon: <ChartBarIcon className="w-12 h-12 text-blue-500" aria-label="Dynamic Intelligence" />,
      title: 'Dynamic Intelligence',
      description: 'Advanced AI continuously processes market data to deliver objective insights and adaptive scoring that evolves with changing conditions.',
      benefits: [
        'Continuous market intelligence updates',
        'Objective analysis based on comprehensive data',
        'Adaptive insights that respond to market changes',
        'Independent analysis free from external influence'
      ]
    },
    {
      icon: <CpuChipIcon className="w-12 h-12 text-teal-500" aria-label="Intelligent Automation" />,
      title: 'Intelligent Automation',
      description: 'Streamline your procurement process with AI that understands your needs and automates complex evaluation workflows—transforming lengthy cycles into efficient outcomes.',
      benefits: [
        'Intuitive problem definition and analysis',
        'Intelligent requirement assessment',
        'Automated evaluation and comparison processes',
        'Comprehensive solution recommendations'
      ]
    },
    {
      icon: <DocumentTextIcon className="w-12 h-12 text-indigo-500" aria-label="Market Intelligence" />,
      title: 'Market Intelligence (Coming Soon)',
      description: 'Access comprehensive market insights and benchmarking data to ensure optimal decision-making and competitive positioning.',
      benefits: [
        'Comprehensive market data analysis',
        'Benchmarking and comparison insights',
        'Strategic recommendations for optimization',
        'Market trend intelligence'
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-purple-500" aria-label="Transparent Process" />,
      title: 'Transparent Process',
      description: 'Comprehensive methodology and verifiable intelligence for complete transparency. Every recommendation backed by explainable analysis and trusted processes.',
      benefits: [
        'Transparent analytical processes',
        'Verifiable intelligence sources',
        'Explainable decision-making',
        'Trusted methodology'
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
            Discover the advanced capabilities that make {COMPANY_NAME} the leading AI-driven procurement intelligence platform. Built for transparency, efficiency, and intelligent decision-making.
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
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Flexible, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">For Organizations</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Basic platform access: <span className="text-teal-300 font-semibold">Complimentary</span></li>
                <li>• Advanced intelligence features: <span className="text-teal-300 font-semibold">Competitive pricing</span></li>
                <li>• Market intelligence tools: <span className="text-teal-300 font-semibold">Enterprise plans</span></li>
                <li>• Custom solutions: <span className="text-teal-300 font-semibold">Contact us</span></li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">For Partners</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Platform participation: <span className="text-teal-300 font-semibold">Subscription-based</span></li>
                <li>• Qualified opportunity access</li>
                <li>• Enhanced visibility options</li>
                <li>• Premium placement opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 text-center fade-in">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Ready to Transform Your Procurement?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join forward-thinking organizations that are transforming their procurement processes with intelligent automation and advanced insights.
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
