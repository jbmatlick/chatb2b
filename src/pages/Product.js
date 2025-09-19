import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_APP_URL, COMPANY_EMAIL } from '../constants';

const workflow = [
  {
    step: 'Define Problem',
    color: 'bg-blue-600',
    desc: `Log in and describe your software challenge naturally. Example: "We need to optimize our CRM for better lead management and sales forecasting." ${COMPANY_NAME} interprets your requirements via NLP and maps them to procurement objectives.`,
  },
  {
    step: 'AI Refinement',
    color: 'bg-teal-600',
    desc: 'Our AI agent asks targeted questions to refine your requirements, understanding stakeholder needs, budget constraints, and integration requirements. This ensures comprehensive problem definition before evaluation begins.',
  },
  {
    step: 'Real-Time Analysis',
    color: 'bg-indigo-600',
    desc: 'The agent analyzes vendor documentation, APIs, and UIs weekly to build dynamic feature graphs and objective scores. It aggregates real-time data and generates tailored reports with market quadrants, eliminating pay-to-play bias.',
  },
  {
    step: 'Solution Delivery',
    color: 'bg-purple-600',
    desc: 'Receive comprehensive solution briefs with feature comparisons, contract benchmarks, and vendor recommendations. Authorize next steps like demos or negotiations—all handled autonomously by the AI agent.',
  },
];

const Product = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-24 fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="section-title">How {COMPANY_NAME} Works</h1>
        <p className="text-lg text-white/90 mb-4">Stop worrying about biased reviews and manual evaluations. {COMPANY_NAME} handles procurement intelligence so you focus on strategic decisions.</p>
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
            <div className="font-bold text-teal-400 mb-2">CRM Software Evaluation</div>
            <ul className="text-white/80 mb-2 list-disc list-inside space-y-1">
              <li>Defined requirements for "better lead management and forecasting"</li>
              <li>AI agent analyzed 12 vendors across feature matrices</li>
              <li>Generated unbiased comparison with contract benchmarks</li>
            </ul>
            <div className="text-sm text-teal-300 font-semibold">Result: 6-month evaluation completed in 2 weeks, saved $200K</div>
          </div>
          <div className="glass-card p-10 flex flex-col gap-2">
            <div className="font-bold text-teal-400 mb-2">HR Tech Procurement</div>
            <ul className="text-white/80 mb-2 list-disc list-inside space-y-1">
              <li>Automated evaluation for "employee engagement platform"</li>
              <li>Real-time feature scoring eliminated vendor bias</li>
              <li>Contract intelligence revealed 30% overpricing</li>
            </ul>
            <div className="text-sm text-teal-300 font-semibold">Result: 3x faster decision, 25% cost reduction</div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section>
        <h2 className="text-3xl font-semibold text-teal-300 mb-10 text-center">Core Value Propositions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
            <div className="font-semibold text-teal-400 mb-2">Unbiased Intelligence</div>
            <div className="text-white/80 text-base">Eliminate pay-to-play bias with real-time feature scoring and transparent methodology that delivers objective insights.</div>
          </div>
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
            <div className="font-semibold text-teal-400 mb-2">Efficiency Through AI</div>
            <div className="text-white/80 text-base">Compress procurement cycles from months to days with autonomous AI agents that handle demos, analysis, and recommendations.</div>
          </div>
          <div className="glass-card p-8 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
            <div className="font-semibold text-teal-400 mb-2">Transparent Process</div>
            <div className="text-white/80 text-base">Open methodology and verifiable data sources ensure complete transparency in every recommendation and decision.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 fade-in" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        <div className="relative z-10 py-16 text-center text-white">
          <div className="glass-card inline-block px-12 py-10">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Ready to Experience AI-Powered Procurement?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Stop wrestling with biased reviews. Start commanding intelligent procurement. Complexity curated, not confronted.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={COMPANY_APP_URL}
                className="btn-accent"
                aria-label={`Start Free Evaluation with ${COMPANY_NAME}`}
              >
                Start Free Evaluation
              </a>
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