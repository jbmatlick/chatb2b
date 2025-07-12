import React from 'react';
import WaveDivider from '../components/WaveDivider';

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
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-24 fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="section-title">How AdtechAI Works</h1>
        <p className="text-lg text-white/90 mb-4">From intent to impact – AdtechAI handles the 'how' so you focus on the 'why'.</p>
      </section>

      {/* Agentic Workflow Section */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">The Agentic Workflow</h2>
        <ol className="space-y-10">
          {workflow.map((item, idx) => (
            <li key={item.step} className="glass-card p-10 flex flex-col md:flex-row items-start gap-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className={`flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md border-4 border-white/30`}>{idx + 1}</div>
              <div>
                <div className="font-bold text-xl text-teal-400 mb-2">{item.step}</div>
                <div className="text-white/80 leading-relaxed text-lg">{item.desc}</div>
              </div>
            </li>
          ))}
        </ol>
        {/* Wave divider removed to prevent floating effect */}
      </section>

      {/* Real-World Examples Section */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card p-10 flex flex-col gap-2">
            <div className="font-bold text-teal-400 mb-2">B2B Lead Generation</div>
            <ul className="text-white/80 mb-2 list-disc list-inside space-y-1">
              <li>Models buyer journeys for "B2B leads in HR software"</li>
              <li>Deploys LinkedIn creatives with ABM precision</li>
              <li>Yields 15% higher CTRs than traditional approaches</li>
            </ul>
            <div className="text-sm text-teal-300 font-semibold">Result: 200 qualified leads from $10K spend</div>
          </div>
          <div className="glass-card p-10 flex flex-col gap-2">
            <div className="font-bold text-teal-400 mb-2">E-commerce Optimization</div>
            <ul className="text-white/80 mb-2 list-disc list-inside space-y-1">
              <li>Automates flows for "increase ROAS for fashion brand"</li>
              <li>Continuously optimizes creative performance and targeting</li>
              <li>Works across multiple channels</li>
            </ul>
            <div className="text-sm text-teal-300 font-semibold">Result: 2.3x ROAS improvement in 30 days</div>
          </div>
        </div>
        {/* Wave divider removed to prevent floating effect */}
      </section>

      {/* Value Propositions */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">Core Value Propositions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
            <div className="font-semibold text-teal-400 mb-2">Autonomy Liberates</div>
            <div className="text-white/80 text-base">Reclaim 80% of time spent on execution, redirecting efforts toward strategic ideation.</div>
          </div>
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
            <div className="font-semibold text-teal-400 mb-2">Intelligence Dives Deep</div>
            <div className="text-white/80 text-base">Achieve 2-3x lift in ROAS through prescient optimizations and ensemble models.</div>
          </div>
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
            <div className="font-semibold text-teal-400 mb-2">Invisible Elegance</div>
            <div className="text-white/80 text-base">The best technology fades into the background, leaving only results in the spotlight.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 fade-in" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        <div className="relative z-10 py-16 text-center text-white">
          <div className="glass-card inline-block px-12 py-10">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Ready to Experience Agentic Advertising?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Not a tool to wield; an agent to command – where complexity is curated, not confronted.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://app.adtechai.com"
                className="btn-accent"
                aria-label="Try AdtechAI"
              >
                Try AdtechAI
              </a>
              <a
                href="mailto:hello@adtechai.com"
                className="btn-accent"
                aria-label="Email Us"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
        {/* Subtle bottom wave divider */}
        <WaveDivider className="absolute bottom-0 left-0 w-full opacity-60" style={{transform: 'translateY(50%)'}} alt="Wave divider at bottom of section" />
      </section>
    </main>
  );
};

export default Product; 