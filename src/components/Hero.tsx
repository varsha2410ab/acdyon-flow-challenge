import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertTriangle, ArrowLeftCircle, Loader2 } from 'lucide-react';

type DeploymentState = 'IDLE' | 'BUILD' | 'DEPLOY' | 'HEALTH_CHECK' | 'FAILURE' | 'RECOVERY' | 'RECOVERED';

export const Hero: React.FC = () => {
  const [state, setState] = useState<DeploymentState>('IDLE');
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      if (state === 'IDLE' || state === 'RECOVERED') {
        setState('BUILD');
        setDiagnosticOpen(false);
      }
    };
    window.addEventListener('trigger-deployment', handleTrigger);
    return () => window.removeEventListener('trigger-deployment', handleTrigger);
  }, [state]);

  useEffect(() => {
    let timer: number;
    switch (state) {
      case 'BUILD':
        timer = window.setTimeout(() => setState('DEPLOY'), 1500);
        break;
      case 'DEPLOY':
        timer = window.setTimeout(() => setState('HEALTH_CHECK'), 1500);
        break;
      case 'HEALTH_CHECK':
        timer = window.setTimeout(() => setState('FAILURE'), 2000);
        break;
      case 'FAILURE':
        timer = window.setTimeout(() => setState('RECOVERY'), 2500);
        break;
      case 'RECOVERY':
        timer = window.setTimeout(() => setState('RECOVERED'), 2000);
        break;
    }
    return () => window.clearTimeout(timer);
  }, [state]);

  const handleRunClick = () => {
    window.dispatchEvent(new CustomEvent('trigger-deployment'));
  };

  const handleScrollToReplay = () => {
    document.getElementById('incident-replay')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle background atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Column: Typography & CTA */}
        <div className="max-w-xl z-10">
          <div className="text-violet font-semibold tracking-wider text-xs uppercase mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet animate-pulse-slow" />
            Self-healing deployments
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Deployments that<br />fix themselves.
          </h1>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            Built for engineering teams that value sleep. Flow watches every deployment, 
            detects regressions, rolls back automatically, and shows you exactly what went wrong.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleRunClick} className="btn-primary" disabled={state !== 'IDLE' && state !== 'RECOVERED'}>
              Run a deployment
            </button>
            <button onClick={handleScrollToReplay} className="btn-secondary">
              See how it works
            </button>
          </div>
        </div>

        {/* Right Column: Deployment Simulation */}
        <div className="relative z-10 perspective-[1000px]">
          <motion.div 
            className="bg-surface border border-border rounded-xl shadow-2xl overflow-hidden font-mono text-sm"
            initial={{ rotateY: 5, rotateX: 5 }}
            animate={{ rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Window Header */}
            <div className="bg-elevated border-b border-border px-4 py-3 flex items-center justify-between text-text-secondary text-xs">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-status-failure/80" />
                <div className="w-3 h-3 rounded-full bg-status-warning/80" />
                <div className="w-3 h-3 rounded-full bg-status-success/80" />
              </div>
              <div>api-gateway / deploy-prod</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 h-[400px] flex flex-col relative">
              <AnimatePresence mode="wait">
                
                {/* STATE 0: IDLE */}
                {state === 'IDLE' && (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full justify-center">
                    <div className="text-text-secondary mb-8">READY TO DEPLOY</div>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-secondary">Latest release</span>
                        <span className="text-white">f21d9a7</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-secondary">Previous stable</span>
                        <span className="text-white">a81f3c2</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STATE 1: BUILD */}
                {state === 'BUILD' && (
                  <motion.div key="build" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                    <div className="text-white font-semibold">BUILD & TEST</div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <Loader2 className="w-4 h-4 animate-spin text-violet" />
                      Running tests...
                    </div>
                  </motion.div>
                )}

                {/* STATE 2: DEPLOY */}
                {state === 'DEPLOY' && (
                  <motion.div key="deploy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-status-success">
                      <Check className="w-4 h-4" />
                      <div>Build & Test <span className="text-text-secondary ml-2">1m 12s</span></div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-2">DEPLOY TO PRODUCTION</div>
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Loader2 className="w-4 h-4 animate-spin text-violet" />
                        Deploying...
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STATE 3: HEALTH CHECK */}
                {state === 'HEALTH_CHECK' && (
                  <motion.div key="health" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-status-success opacity-50">
                      <Check className="w-4 h-4" />
                      <div>Build & Test</div>
                    </div>
                    <div className="flex items-center gap-3 text-status-success">
                      <Check className="w-4 h-4" />
                      <div>Deploy to Production <span className="text-text-secondary ml-2">45s</span></div>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-2">HEALTH CHECK</div>
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Loader2 className="w-4 h-4 animate-spin text-violet" />
                        Running checks...
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STATE 4: FAILURE */}
                {state === 'FAILURE' && (
                  <motion.div key="failure" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-status-failure font-semibold cursor-pointer" onClick={() => setDiagnosticOpen(!diagnosticOpen)}>
                      <AlertTriangle className="w-4 h-4" />
                      HEALTH CHECK: Regression detected
                    </div>
                    <div className="bg-elevated border border-status-failure/30 rounded p-4 text-xs">
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary">error rate</span>
                        <span className="text-status-failure">7.8%</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-text-secondary">threshold</span>
                        <span className="text-white">1.0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">response time</span>
                        <span className="text-status-warning">842ms</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STATE 5: RECOVERY */}
                {state === 'RECOVERY' && (
                  <motion.div key="recovery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6">
                    <div className="text-status-failure font-semibold">REGRESSION DETECTED</div>
                    <div className="text-text-secondary">Traffic freeze initiated...</div>
                    <div className="border-t border-border pt-4">
                      <div className="text-white font-semibold mb-4">ROLLBACK</div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex flex-col gap-1">
                          <span className="text-text-secondary">Current release</span>
                          <span className="text-status-failure line-through">f21d9a7</span>
                        </div>
                        <ArrowLeftCircle className="w-4 h-4 text-violet animate-pulse" />
                        <div className="flex flex-col gap-1">
                          <span className="text-text-secondary">Previous stable</span>
                          <span className="text-status-success">a81f3c2</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STATE 6: RECOVERED */}
                {state === 'RECOVERED' && (
                  <motion.div key="recovered" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col justify-center h-full gap-6">
                    <div className="flex items-center gap-2 text-violet font-semibold">
                      <ArrowLeftCircle className="w-5 h-5" />
                      ROLLED BACK
                    </div>
                    <div className="text-white">a81f3c2 restored</div>
                    <div className="flex items-center gap-2 text-status-success mt-4">
                      <Check className="w-5 h-5" />
                      HEALTH CHECK: Passed
                    </div>
                    <div className="text-text-secondary mt-8">
                      Recovered automatically in 8s.
                    </div>
                    <button onClick={handleRunClick} className="absolute bottom-6 right-6 text-violet hover:text-violet-light transition-colors text-xs flex items-center gap-1">
                      Replay deployment
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
