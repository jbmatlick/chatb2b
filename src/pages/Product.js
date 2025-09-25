import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

const workflow = [
  {
    step: 'Define Your Needs',
    color: 'bg-blue-600',
    desc: `Share your software requirements and business objectives. Our intelligent platform understands your unique challenges and translates them into actionable procurement goals.`,
  },
  {
    step: 'Intelligent Analysis',
    color: 'bg-teal-600',
    desc: 'Our advanced AI system conducts comprehensive analysis, considering your specific requirements, budget parameters, and organizational needs to ensure optimal solution matching.',
  },
  {
    step: 'Dynamic Intelligence',
    color: 'bg-indigo-600',
    desc: 'The platform continuously processes market intelligence and vendor capabilities, delivering real-time insights that adapt to changing conditions and emerging opportunities.',
  },
  {
    step: 'Deliver Results',
    color: 'bg-purple-600',
    desc: 'Receive comprehensive recommendations with detailed analysis and actionable insights. Our platform streamlines the entire procurement process from evaluation to implementation.',
  },
];

const Product = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-24 fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="section-title">How {COMPANY_NAME} Works</h1>
        <p className="text-lg text-white/90 mb-4">Experience intelligent procurement automation that adapts to your needs. {COMPANY_NAME} streamlines your decision-making process so you can focus on strategic outcomes.</p>
      </section>

      {/* AI Procurement Workflow Section */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">The AI Procurement Workflow</h2>
        <ol className="space-y-10">
          {workflow.map((item, idx) => (
            <li key={item.step} className="glass-card reef-shadow p-10 flex flex-col md:flex-row items-start gap-8 transition-transform duration-300 hover:scale-105 reef-shadow-hover">
              <div className={`flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md border-4 border-white/30`}>{idx + 1}</div>
              <div>
                <div className="font-bold text-xl text-teal-400 mb-2">{item.step}</div>
                <div className="text-white/80 leading-relaxed text-lg">{item.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Real-World Examples Section */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card p-10 flex flex-col gap-2">
            <div className="font-bold text-teal-400 mb-2">Enterprise Software Evaluation</div>
            <ul className="text-white/80 mb-2 list-disc list-inside space-y-1">
              <li>Streamlined complex requirements definition</li>
              <li>Intelligent analysis across multiple vendor options</li>
              <li>Comprehensive comparison with market insights</li>
            </ul>
            <div className="text-sm text-teal-300 font-semibold">Result: Accelerated evaluation with significant time and cost savings</div>
          </div>
          <div className="glass-card p-10 flex flex-col gap-2">
            <div className="font-bold text-teal-400 mb-2">Technology Platform Procurement</div>
            <ul className="text-white/80 mb-2 list-disc list-inside space-y-1">
              <li>Automated evaluation for specialized platform needs</li>
              <li>Objective analysis eliminating traditional biases</li>
              <li>Market intelligence revealed optimization opportunities</li>
            </ul>
            <div className="text-sm text-teal-300 font-semibold">Result: Faster decision-making with substantial cost optimization</div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">Core Value Propositions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
            <div className="font-semibold text-teal-400 mb-2">Objective Intelligence</div>
            <div className="text-white/80 text-base">Access unbiased analysis through advanced methodologies that deliver transparent, objective insights for confident decision-making.</div>
          </div>
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
            <div className="font-semibold text-teal-400 mb-2">Intelligent Automation</div>
            <div className="text-white/80 text-base">Accelerate procurement cycles through intelligent automation that handles complex analysis and delivers comprehensive recommendations.</div>
          </div>
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
            <div className="font-semibold text-teal-400 mb-2">Transparent Process</div>
            <div className="text-white/80 text-base">Comprehensive methodology and verifiable intelligence ensure complete transparency in every recommendation and decision.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 fade-in" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        <div className="relative z-10 py-16 text-center text-white">
          <div className="glass-card inline-block px-12 py-10">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Ready to Transform Your Procurement Process?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Experience intelligent procurement automation that adapts to your needs. Transform complexity into clarity with advanced AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="btn-accent"
                aria-label={`Start Free Evaluation with ${COMPANY_NAME}`}
              >
                Start Free Evaluation
              </Link>
              <Link
                to="/contact"
                className="btn-accent"
                aria-label="Contact Us to Learn More"
              >
                Contact Us to Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product; 