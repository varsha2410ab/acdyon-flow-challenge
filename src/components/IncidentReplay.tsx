import React, { useState } from 'react';
import { Check, AlertTriangle, ArrowLeftCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const IncidentReplay: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const timeline = [
    { time: '14:32:04', label: 'Build', status: 'success', icon: <Check className="w-4 h-4 text-status-success" />, context: 'build artifact compiled successfully' },
    { time: '14:33:16', label: 'Deployment', status: 'success', icon: <Check className="w-4 h-4 text-status-success" />, context: 'container image deployed to production' },
    { time: '14:34:02', label: 'Health check', status: 'warning', icon: <AlertTriangle className="w-4 h-4 text-status-warning" />, context: 'error rate exceeded configured threshold' },
    { 
      time: '14:34:03', 
      label: 'Regression detected', 
      status: 'failure', 
      icon: <span className="text-status-failure font-bold text-sm">!</span>,
      context: 'release f21d9a7 diverged from expected behavior',
      detail: (
        <div className="bg-elevated p-4 rounded mt-2 text-xs font-mono border border-border">
          <div className="text-text-secondary mb-2">DIAGNOSTIC SNAPSHOT</div>
          <div className="grid grid-cols-2 gap-2">
            <div>HTTP status</div><div className="text-white">200</div>
            <div>Response time</div><div className="text-status-warning">842ms</div>
            <div>Error rate</div><div className="text-status-failure">7.8%</div>
            <div>Threshold</div><div className="text-white">1.0%</div>
          </div>
          <div className="mt-4 pt-4 border-t border-border text-status-failure">Regression detected against a81f3c2</div>
        </div>
      )
    },
    { time: '14:34:04', label: 'Traffic frozen', status: 'success', icon: <Check className="w-4 h-4 text-status-success" />, context: 'incoming traffic suspended to preventing impact' },
    { 
      time: '14:34:05', 
      label: 'Rollback initiated', 
      status: 'rollback', 
      icon: <ArrowLeftCircle className="w-4 h-4 text-violet" />,
      context: 'traffic redirected to a81f3c2',
      detail: (
        <div className="bg-elevated p-4 rounded mt-2 text-xs font-mono border border-border">
          <div className="text-text-secondary mb-2">ROLLBACK POLICY</div>
          <div className="grid grid-cols-2 gap-2">
            <div>Current</div><div className="text-status-failure">f21d9a7</div>
            <div>Stable</div><div className="text-status-success">a81f3c2</div>
            <div>Traffic</div><div className="text-violet">100% → stable</div>
          </div>
        </div>
      )
    },
    { time: '14:34:12', label: 'Previous release', status: 'success', icon: <Check className="w-4 h-4 text-status-success" />, context: 'system stabilized at known-good release' },
  ];

  return (
    <section id="incident-replay" className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="max-w-md pt-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Production broke.</h2>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-text-secondary mb-8">Nobody woke up.</h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            Flow detected the regression, stopped the rollout, and restored the last known-good 
            release before the incident became a user problem.
          </p>
        </div>

        {/* Right Column (Timeline) */}
        <div className="bg-background border border-border rounded-xl p-8 font-mono text-sm w-full shadow-lg">
          <div className="text-text-secondary mb-8 pb-4 border-b border-border text-xs flex justify-between">
            <span>INCIDENT REPLAY</span> <span>api-gateway / deploy-prod</span>
          </div>
          
          <div className="flex flex-col gap-1">
            {timeline.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col group focus-within:ring-1 focus-within:ring-violet/30 rounded"
              >
                <button 
                  className={`flex items-center justify-between py-2.5 px-3 -mx-3 rounded cursor-pointer transition-colors w-full text-left focus:outline-none ${activeItem === idx ? 'bg-elevated' : 'hover:bg-elevated/50'}`}
                  onClick={() => setActiveItem(activeItem === idx ? null : idx)}
                  aria-expanded={activeItem === idx}
                >
                  <div className="flex gap-4 sm:gap-6 items-center flex-1">
                    <span className="text-text-secondary shrink-0">{item.time}</span>
                    <div className="flex flex-col flex-1">
                      <span className={item.status === 'failure' ? 'text-status-failure' : 'text-white'}>{item.label}</span>
                      <span className="text-text-secondary/0 h-0 overflow-hidden group-hover:text-text-secondary/70 group-hover:h-auto group-focus-within:text-text-secondary/70 group-focus-within:h-auto text-[10px] transition-all duration-300">
                        {item.context}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">{item.icon}</div>
                </button>
                
                <AnimatePresence>
                  {activeItem === idx && item.detail && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {item.detail}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-violet font-semibold tracking-widest text-xs">
            RECOVERED IN 8 SECONDS
          </div>
        </div>
        
      </div>
    </section>
  );
};
