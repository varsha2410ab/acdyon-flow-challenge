import React, { useState } from 'react';
import { Check, AlertTriangle, ArrowLeftCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const IncidentReplay: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const timeline = [
    { time: '14:32:04', label: 'Build', status: 'success', icon: <Check className="w-4 h-4 text-status-success" /> },
    { time: '14:33:16', label: 'Deployment', status: 'success', icon: <Check className="w-4 h-4 text-status-success" /> },
    { time: '14:34:02', label: 'Health check', status: 'warning', icon: <AlertTriangle className="w-4 h-4 text-status-warning" /> },
    { 
      time: '14:34:03', 
      label: 'Regression detected', 
      status: 'failure', 
      icon: <span className="text-status-failure font-bold text-sm">!</span>,
      detail: (
        <div className="bg-elevated p-4 rounded mt-2 text-xs font-mono border border-border">
          <div className="text-text-secondary mb-2">HEALTH CHECK</div>
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
    { time: '14:34:04', label: 'Traffic frozen', status: 'success', icon: <Check className="w-4 h-4 text-status-success" /> },
    { 
      time: '14:34:05', 
      label: 'Rollback initiated', 
      status: 'rollback', 
      icon: <ArrowLeftCircle className="w-4 h-4 text-violet" />,
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
    { time: '14:34:12', label: 'Previous release', status: 'success', icon: <Check className="w-4 h-4 text-status-success" /> },
  ];

  return (
    <section id="incident-replay" className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Production broke.</h2>
          <h2 className="text-4xl font-bold tracking-tight text-text-secondary mb-8">Nobody woke up.</h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            Flow detected the regression, stopped the rollout, and restored the last known-good 
            release before the incident became a user problem.
          </p>
        </div>

        {/* Right Column (Timeline) */}
        <div className="bg-background border border-border rounded-xl p-8 font-mono text-sm max-w-lg w-full shadow-lg">
          <div className="text-text-secondary mb-8 pb-4 border-b border-border">
            INCIDENT REPLAY <span className="float-right">api-gateway / deploy-prod</span>
          </div>
          
          <div className="flex flex-col gap-2">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div 
                  className={`flex items-center justify-between py-2 px-3 -mx-3 rounded cursor-pointer transition-colors ${activeItem === idx ? 'bg-elevated' : 'hover:bg-elevated/50'}`}
                  onClick={() => setActiveItem(activeItem === idx ? null : idx)}
                >
                  <div className="flex gap-6 items-center">
                    <span className="text-text-secondary">{item.time}</span>
                    <span className={item.status === 'failure' ? 'text-status-failure' : 'text-white'}>{item.label}</span>
                  </div>
                  <div>{item.icon}</div>
                </div>
                
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
