import React from 'react';

export const ProductPhilosophy: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">How Flow thinks</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="border-l border-border pl-6">
          <div className="text-violet font-mono text-sm mb-4">01</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight">WATCH</h3>
          <p className="text-text-secondary leading-relaxed">
            Observe deployment health.
          </p>
        </div>

        <div className="border-l border-border pl-6">
          <div className="text-violet font-mono text-sm mb-4">02</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight">COMPARE</h3>
          <p className="text-text-secondary leading-relaxed">
            Compare current behavior with expected health.
          </p>
        </div>

        <div className="border-l border-border pl-6">
          <div className="text-violet font-mono text-sm mb-4">03</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight">DECIDE</h3>
          <p className="text-text-secondary leading-relaxed">
            Identify whether the change should continue.
          </p>
        </div>

        <div className="border-l border-border pl-6">
          <div className="text-violet font-mono text-sm mb-4">04</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight">RECOVER</h3>
          <p className="text-text-secondary leading-relaxed">
            Return traffic to the last known-good release.
          </p>
        </div>

      </div>
    </section>
  );
};
