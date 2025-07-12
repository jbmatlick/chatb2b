import React from 'react';

const workflow = [
  {
    step: 'Goal',
    color: 'bg-blue-600',
    desc: 'Articulate intent naturally; AdtechAI interprets via NLP parsers, aligning with semantic web ontologies. Example: "Allocate $5,000 to secure demo requests from cybersecurity decision-makers."',
  },
  {
    step: 'Plan',
    color: 'bg-teal-600',
    desc: 'Synthesize from CDP graphs; employs graph neural networks for targeting, ensuring probabilistic fidelity. The agent queries integrated data lakes for audience segmentation and curates creatives from repositories.',
  },
  {
    step: 'Execute',
    color: 'bg-indigo-600',
    desc: 'Deploy across channels with Bayesian optimization. The agent interfaces seamlessly with APIs from Meta, LinkedIn, and other platforms, executing multi-channel symphonies where each element harmonizes.',
  },
];

const Product = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">How AdtechAI Works</h1>
        <p className="text-lg text-white/90 mb-4">From intent to impact – AdtechAI handles the 'how' so you focus on the 'why'.</p>
      </section>

      {/* Agentic Workflow Section */}
      <section>
        <h2 className="text-2xl font-bold text-white/90 mb-10 text-center drop-shadow-lg">The Agentic Workflow</h2>
        <div className="space-y-10">
          {workflow.map((item, idx) => (
            <div key={item.step} className="bg-white rounded-2xl shadow-2xl reef-shadow p-10 flex flex-col md:flex-row items-start gap-8">
              <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                {idx + 1}
              </div>
              <div>
                <div className="font-bold text-lg text-blue-900 mb-2">{item.step}</div>
                <div className="text-gray-800 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Examples Section */}
      <section>
        <h2 className="text-2xl font-bold text-white/90 mb-10 text-center drop-shadow-lg">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-10 flex flex-col gap-2">
            <div className="font-bold text-blue-900 mb-2">B2B Lead Generation</div>
            <div className="text-gray-800 mb-2">For "B2B leads in HR software," AdtechAI models buyer journeys, deploys LinkedIn creatives with ABM precision, yielding 15% higher CTRs than traditional approaches.</div>
            <div className="text-sm text-teal-700 font-semibold">Result: 200 qualified leads from $10K spend</div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-10 flex flex-col gap-2">
            <div className="font-bold text-blue-900 mb-2">E-commerce Optimization</div>
            <div className="text-gray-800 mb-2">Turn "increase ROAS for fashion brand" into automated flows that continuously optimize creative performance and audience targeting across multiple channels.</div>
            <div className="text-sm text-teal-700 font-semibold">Result: 2.3x ROAS improvement in 30 days</div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section>
        <h2 className="text-2xl font-bold text-white/90 mb-10 text-center drop-shadow-lg">Core Value Propositions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
            <div className="font-semibold text-blue-900 mb-2">Autonomy Liberates</div>
            <div className="text-gray-800 text-sm">Reclaim 80% of time spent on execution, redirecting efforts toward strategic ideation.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
            <div className="font-semibold text-blue-900 mb-2">Intelligence Dives Deep</div>
            <div className="text-gray-800 text-sm">Achieve 2-3x lift in ROAS through prescient optimizations and ensemble models.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl reef-shadow p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
            <div className="font-semibold text-blue-900 mb-2">Invisible Elegance</div>
            <div className="text-gray-800 text-sm">The best technology fades into the background, leaving only results in the spotlight.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-2xl mt-16" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        <div className="relative z-10 py-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Agentic Advertising?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Not a tool to wield; an agent to command – where complexity is curated, not confronted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.adtechai.com"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Try AdtechAI"
            >
              Try AdtechAI
            </a>
            <a
              href="mailto:hello@adtechai.com"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Email Us"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product; 