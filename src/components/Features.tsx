import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const Features: React.FC = () => {
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="features" ref={containerRef} className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dominant Feature */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Automated Rollbacks</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              When a release fails health checks, Flow restores the previous stable release automatically.
            </p>
          </div>
          
          <div className="bg-background border border-border p-8 rounded-xl font-mono text-sm text-center flex flex-col items-center shadow-xl w-full">
            
            <motion.div 
              animate={{ opacity: step >= 0 ? 1 : 0.4 }} 
              className="w-full bg-elevated border border-border rounded py-3 mb-4 transition-colors"
            >
              <div className="text-text-secondary text-xs mb-1">CURRENT RELEASE</div>
              <div className={step === 2 || step === 3 ? "text-status-failure line-through" : "text-white"}>f21d9a7</div>
            </motion.div>
            
            <ArrowDown className={`w-4 h-4 mb-4 transition-colors ${step >= 1 ? 'text-violet' : 'text-border'}`} />
            
            <motion.div 
              animate={{ opacity: step >= 1 ? 1 : 0.4 }} 
              className="w-full bg-elevated border border-border rounded py-3 mb-4 text-white transition-colors"
            >
              HEALTH CHECK
            </motion.div>
            
            <ArrowDown className={`w-4 h-4 mb-4 transition-colors ${step >= 2 ? 'text-violet' : 'text-border'}`} />
            
            <motion.div 
              animate={{ 
                opacity: step >= 2 ? 1 : 0.4,
              }} 
              className={`w-full rounded py-3 mb-4 transition-colors ${step === 2 || step === 3 ? 'bg-status-failure/10 border-status-failure/40 border text-status-failure shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'bg-elevated border border-border text-text-secondary'}`}
            >
              REGRESSION
            </motion.div>
            
            <ArrowDown className={`w-4 h-4 mb-4 transition-colors ${step >= 3 ? 'text-violet' : 'text-border'}`} />
            
            <motion.div 
              animate={{ opacity: step >= 3 ? 1 : 0.4, scale: step === 3 ? 1.02 : 1 }} 
              className={`w-full rounded py-3 mb-4 font-semibold tracking-wide transition-all duration-300 ${step === 3 ? 'bg-violet text-white shadow-[0_0_20px_rgba(118,103,255,0.3)]' : 'bg-elevated border border-border text-text-secondary'}`}
            >
              ROLLBACK
            </motion.div>
            
            <ArrowDown className={`w-4 h-4 mb-4 transition-colors ${step >= 4 ? 'text-violet' : 'text-border'}`} />
            
            <motion.div 
              animate={{ opacity: step >= 4 ? 1 : 0.4 }} 
              className={`w-full bg-elevated border border-border rounded py-3 transition-colors ${step >= 4 ? 'ring-1 ring-status-success/50' : ''}`}
            >
              <div className="text-text-secondary text-xs mb-1">STABLE RELEASE</div>
              <div className={step >= 4 ? "text-status-success" : "text-text-secondary"}>a81f3c2</div>
            </motion.div>
            
          </div>
        </div>

        {/* Secondary Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-border">
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Instant Root Cause Analysis</h3>
            <p className="text-text-secondary leading-relaxed max-w-md">
              Jump from a failed deployment directly to the commit and check that triggered it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Zero Configuration</h3>
            <p className="text-text-secondary leading-relaxed max-w-md">
              Connect your repository and let Flow detect the stack, build steps, and environment requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
