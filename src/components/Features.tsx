import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dominant Feature */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Automated Rollbacks</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              When a release fails health checks, Flow restores the previous stable release automatically.
            </p>
          </div>
          
          <div className="bg-background border border-border p-8 rounded-xl font-mono text-sm text-center flex flex-col items-center shadow-xl">
            <div className="w-full bg-elevated border border-border rounded py-3 mb-4">
              <div className="text-text-secondary text-xs mb-1">CURRENT RELEASE</div>
              <div className="text-white">f21d9a7</div>
            </div>
            <ArrowDown className="w-4 h-4 text-violet mb-4" />
            <div className="w-full bg-elevated border border-border rounded py-3 mb-4 text-white">
              HEALTH CHECK
            </div>
            <ArrowDown className="w-4 h-4 text-violet mb-4" />
            <div className="w-full bg-elevated border border-status-failure/30 rounded py-3 mb-4 text-status-failure">
              REGRESSION
            </div>
            <ArrowDown className="w-4 h-4 text-violet mb-4" />
            <div className="w-full bg-violet text-white rounded py-3 mb-4 font-semibold tracking-wide">
              ROLLBACK
            </div>
            <ArrowDown className="w-4 h-4 text-violet mb-4" />
            <div className="w-full bg-elevated border border-border rounded py-3">
              <div className="text-text-secondary text-xs mb-1">STABLE RELEASE</div>
              <div className="text-status-success">a81f3c2</div>
            </div>
          </div>
        </div>

        {/* Secondary Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-border">
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Instant Root Cause Analysis</h3>
            <p className="text-text-secondary leading-relaxed">
              Jump from a failed deployment directly to the commit and check that triggered it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Zero Configuration</h3>
            <p className="text-text-secondary leading-relaxed">
              Connect your repository and let Flow detect the stack, build steps, and environment requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
