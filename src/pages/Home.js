import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Oceanic background with enhanced wave effect */}
        <div className="absolute inset-0 oceanic-bg opacity-90"></div>
        
        {/* Reef pattern overlay */}
        <div className="absolute inset-0 reef-pattern opacity-20"></div>
        
        {/* Hero content with enhanced overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 reef-shadow border border-white/20">
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

        {/* Enhanced wave animation at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200/50 via-blue-100/30 to-transparent"></div>
        
        {/* Floating wave elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full wave-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400/20 rounded-full wave-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400/20 rounded-full wave-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Wave divider */}
      <div className="wave-divider"></div>

      {/* Intro Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm relative">
        {/* Subtle reef pattern background */}
        <div className="absolute inset-0 reef-pattern opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why AdtechAI?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              In the turbulent ocean of digital advertising, fragmentation drowns potential. AdtechAI calms the storm, channeling data flows into strategic surges.
            </p>
            <p>
              This isn't just another dashboard—it's an intelligent agent handling goals to optimization. Inspired by ocean waves and reefs: fluid, adaptive, deep.
            </p>
            <p className="text-xl font-semibold text-gradient-oceanic">
              Set goals, not campaigns; harvest insights, not data.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Table */}
      <section className="py-16 bg-gray-50/80 backdrop-blur-sm relative">
        {/* Wave gradient overlay */}
        <div className="absolute inset-0 wave-gradient"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The AdtechAI Advantage
          </h2>
          <div className="overflow-hidden rounded-lg reef-shadow bg-white/90 backdrop-blur-sm">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Benefit</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Traditional Approach</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">AdtechAI Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50/50 transition-fluid">
                  <td className="px-6 py-6 text-lg font-medium text-gray-900">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Time Savings
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">Manual hours lost to dashboards</td>
                  <td className="px-6 py-6 text-blue-600 font-semibold">80% reclaimed for strategy</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition-fluid">
                  <td className="px-6 py-6 text-lg font-medium text-gray-900">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      ROAS Uplift
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">Static bids; guesswork</td>
                  <td className="px-6 py-6 text-blue-600 font-semibold">2-3x via AI optimization</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition-fluid">
                  <td className="px-6 py-6 text-lg font-medium text-gray-900">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      Cognitive Load
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">Tool overload</td>
                  <td className="px-6 py-6 text-blue-600 font-semibold">Invisible autonomy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full wave-float"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full wave-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Vanguard
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Explore how AdtechAI redefines execution with intelligent autonomy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/product"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-fluid hover:bg-gray-100 hover:scale-105 reef-shadow"
            >
              Dive Deeper
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-fluid hover:bg-white hover:text-blue-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 