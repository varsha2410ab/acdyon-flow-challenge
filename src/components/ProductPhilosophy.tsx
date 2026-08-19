import React from 'react';
import { motion } from 'framer-motion';

export const ProductPhilosophy: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <h2 className="text-4xl font-bold tracking-tight mb-20 text-center">How Flow thinks</h2>
      
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Subtle Flow Line connecting the stages on Desktop */}
        <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-border z-0">
           <div className="absolute top-0 left-0 h-full bg-violet/30 w-full animate-pulse-slow" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 bg-background pt-4 border-t lg:border-t-0 border-border lg:pt-0"
        >
          <div className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center text-violet font-mono text-sm mb-6 lg:mx-auto">01</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight lg:text-center">WATCH</h3>
          <p className="text-text-secondary leading-relaxed mb-6 lg:text-center text-sm">
            Observe deployment health.
          </p>
          <div className="bg-surface border border-border p-3 rounded text-xs font-mono">
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Error rate</span><span className="text-white">0.4%</span></div>
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Latency</span><span className="text-white">120ms</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Request health</span><span className="text-status-success">ok</span></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 bg-background pt-4 border-t lg:border-t-0 border-border lg:pt-0"
        >
          <div className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center text-violet font-mono text-sm mb-6 lg:mx-auto">02</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight lg:text-center">COMPARE</h3>
          <p className="text-text-secondary leading-relaxed mb-6 lg:text-center text-sm">
            Compare current behavior with expected health.
          </p>
          <div className="bg-surface border border-border p-3 rounded text-xs font-mono">
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Current release</span><span className="text-white">f21d9a7</span></div>
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Previous stable</span><span className="text-white">a81f3c2</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Behavior delta</span><span className="text-status-warning">+310ms</span></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 bg-background pt-4 border-t lg:border-t-0 border-border lg:pt-0"
        >
          <div className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center text-violet font-mono text-sm mb-6 lg:mx-auto">03</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight lg:text-center">DECIDE</h3>
          <p className="text-text-secondary leading-relaxed mb-6 lg:text-center text-sm">
            Identify whether the change should continue.
          </p>
          <div className="bg-surface border border-border p-3 rounded text-xs font-mono">
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Confidence</span><span className="text-white">99.9%</span></div>
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Threshold</span><span className="text-white">exceeded</span></div>
            <div className="flex justify-between border-t border-border mt-2 pt-2"><span className="text-text-secondary">Decision</span><span className="text-status-failure">REVERT</span></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 bg-background pt-4 border-t lg:border-t-0 border-border lg:pt-0"
        >
          <div className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center text-violet font-mono text-sm mb-6 lg:mx-auto">04</div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight lg:text-center">RECOVER</h3>
          <p className="text-text-secondary leading-relaxed mb-6 lg:text-center text-sm">
            Return traffic to the last known-good release.
          </p>
          <div className="bg-surface border border-border p-3 rounded text-xs font-mono">
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Traffic restored</span><span className="text-white">100%</span></div>
            <div className="flex justify-between mb-1"><span className="text-text-secondary">Previous release</span><span className="text-white">a81f3c2</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Status</span><span className="text-status-success">healthy</span></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
