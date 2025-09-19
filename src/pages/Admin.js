import React, { useState, useEffect } from 'react';
import coralBg from '../assets/contact-coral.jpg';

const Admin = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, you'd fetch from your database
    // For now, this is just a placeholder
    setLoading(false);
  }, []);

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
          <h1 className="section-title">Form Submissions</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
            View and manage contact form submissions
          </p>
        </div>

        <div className="glass-card p-8">
          {loading ? (
            <div className="text-center text-white/80">Loading submissions...</div>
          ) : (
            <div className="text-center text-white/80">
              <p>No submissions yet.</p>
              <p className="text-sm mt-2">Submissions will appear here when the contact form is used.</p>
            </div>
          )}
        </div>

        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Storage Options</h2>
          <div className="text-white/80 space-y-4">
            <p><strong>Current Setup:</strong> Form submissions are stored locally during development and logged in production.</p>
            <p><strong>Recommended Next Steps:</strong></p>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li>• <strong>Airtable Integration:</strong> Easy database with nice UI for managing leads</li>
              <li>• <strong>Vercel KV:</strong> Built-in key-value storage for production</li>
              <li>• <strong>MongoDB/Supabase:</strong> Full database solution for advanced features</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
