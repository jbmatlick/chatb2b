import React from 'react';

const Product = () => {
  return (
    <div className="min-h-screen py-12 relative">
      {/* Subtle oceanic background overlay */}
      <div className="absolute inset-0 wave-gradient opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-oceanic">How AdtechAI Works</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From intent to impact – AdtechAI handles the 'how' so you focus on the 'why'.
          </p>
        </div>

        {/* Agentic Workflow Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Agentic Workflow
          </h2>
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
              {/* Wave accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg reef-shadow">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Articulate intent naturally; AdtechAI interprets via NLP parsers, aligning with semantic web ontologies. 
                    Example: "Allocate $5,000 to secure demo requests from cybersecurity decision-makers."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg reef-shadow">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Plan</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Synthesize from CDP graphs; employs graph neural networks for targeting, ensuring probabilistic fidelity. 
                    The agent queries integrated data lakes for audience segmentation and curates creatives from repositories.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg reef-shadow">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Execute</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Deploy across channels with Bayesian optimization. The agent interfaces seamlessly with APIs from Meta, 
                    LinkedIn, and other platforms, executing multi-channel symphonies where each element harmonizes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg reef-shadow">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimize</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Real-time refinement via reinforcement learning loops informed by attribution feedback. 
                    Incorporates multi-touch attribution models and Markov chains to refine bids dynamically.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg reef-shadow">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Continuous evolution through feedback mechanisms that ensure adaptive homeostasis. 
                    Insights compound across campaigns, delivering measurable ROI through prescient optimizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Real-World Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 reef-shadow relative overflow-hidden">
              {/* Wave accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">B2B Lead Generation</h3>
                <p className="text-gray-700 mb-4">
                  For "B2B leads in HR software," AdtechAI models buyer journeys, deploys LinkedIn creatives 
                  with ABM precision, yielding 15% higher CTRs than traditional approaches.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Result: 200 qualified leads from $10K spend
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 reef-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-400/30 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Optimization</h3>
                <p className="text-gray-700 mb-4">
                  Turn "increase ROAS for fashion brand" into automated flows that continuously optimize 
                  creative performance and audience targeting across multiple channels.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Result: 2.3x ROAS improvement in 30 days
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Section */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl reef-shadow p-8 border border-gray-100 relative overflow-hidden">
            {/* Reef pattern background */}
            <div className="absolute inset-0 reef-pattern opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Reef Ecosystem Intelligence
              </h3>
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full wave-float"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full wave-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-white/20 rounded-full wave-float" style={{animationDelay: '4s'}}></div>
                
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4 wave-ripple">🌊</div>
                  <p className="text-xl font-medium">
                    Like a reef thriving in depth, AdtechAI uncovers hidden value in data oceans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Value Propositions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl reef-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 reef-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Autonomy Liberates</h3>
              <p className="text-gray-700 text-sm">
                Reclaim 80% of time spent on execution, redirecting efforts toward strategic ideation.
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl reef-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-4 reef-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligence Dives Deep</h3>
              <p className="text-gray-700 text-sm">
                Achieve 2-3x lift in ROAS through prescient optimizations and ensemble models.
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl reef-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 reef-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Invisible Elegance</h3>
              <p className="text-gray-700 text-sm">
                The best technology fades into the background, leaving only results in the spotlight.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white reef-shadow relative overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full wave-float"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full wave-float" style={{animationDelay: '3s'}}></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Experience Agentic Advertising?
              </h2>
              <p className="text-blue-100 mb-6">
                Not a tool to wield; an agent to command – where complexity is curated, not confronted.
              </p>
              <a
                href="https://app.adtechai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-fluid hover:bg-gray-100 hover:scale-105 reef-shadow"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product; 