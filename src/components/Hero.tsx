import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, AlertTriangle, ArrowLeftCircle, Loader2, Play, Search } from 'lucide-react';

type DeploymentState = 'IDLE' | 'BUILD' | 'DEPLOY' | 'HEALTH_CHECK' | 'REGRESSION' | 'TRAFFIC_FROZEN' | 'ROLLBACK' | 'RESTORED' | 'RECOVERED';

export const Hero: React.FC = () => {
  const [state, setState] = useState<DeploymentState>('IDLE');
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const [showRootCause, setShowRootCause] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !hasAutoPlayed) {
      setHasAutoPlayed(true);
      setTimeout(() => setState('BUILD'), 600);
    }
  }, [isInView, hasAutoPlayed]);

  useEffect(() => {
    const handleTrigger = () => {
      if (state === 'IDLE' || state === 'RECOVERED') {
        setState('BUILD');
        setShowRootCause(false);
      }
    };
    window.addEventListener('trigger-deployment', handleTrigger);
    return () => window.removeEventListener('trigger-deployment', handleTrigger);
  }, [state]);

  useEffect(() => {
    let timer: number;
    switch (state) {
      case 'BUILD':
        timer = window.setTimeout(() => setState('DEPLOY'), 1200);
        break;
      case 'DEPLOY':
        timer = window.setTimeout(() => setState('HEALTH_CHECK'), 1500);
        break;
      case 'HEALTH_CHECK':
        timer = window.setTimeout(() => setState('REGRESSION'), 1500);
        break;
      case 'REGRESSION':
        timer = window.setTimeout(() => setState('TRAFFIC_FROZEN'), 2000);
        break;
      case 'TRAFFIC_FROZEN':
        timer = window.setTimeout(() => setState('ROLLBACK'), 1000);
        break;
      case 'ROLLBACK':
        timer = window.setTimeout(() => setState('RESTORED'), 1500);
        break;
      case 'RESTORED':
        timer = window.setTimeout(() => setState('RECOVERED'), 1200);
        break;
    }
    return () => window.clearTimeout(timer);
  }, [state]);

  const triggerSimulation = () => {
    if (state === 'IDLE' || state === 'RECOVERED') {
      setState('BUILD');
      setShowRootCause(false);
    }
  };

  const handleScrollToReplay = () => {
    document.getElementById('incident-replay')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-violet/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Column: Typography & CTA */}
        <div className="max-w-xl z-10">
          <div className="text-violet font-semibold tracking-wider text-xs uppercase mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet" />
            SELF-HEALING DEPLOYMENTS
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight mb-8">
            Deployments that<br />fix themselves.
          </h1>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg">
            Built for engineering teams that value sleep. Flow watches every deployment, 
            detects regressions, rolls back automatically, and shows you exactly what went wrong.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={triggerSimulation} className="btn-primary" aria-label="Run a deployment">
              Run a deployment
            </button>
            <button onClick={handleScrollToReplay} className="btn-secondary" aria-label="See how it works">
              See how it works
            </button>
          </div>
        </div>

        {/* Right Column: Deployment Simulation */}
        <div className="relative z-10 flex flex-col gap-4 w-full">
          <motion.div 
            className="bg-surface border border-border rounded-xl shadow-2xl overflow-hidden font-mono text-sm w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Window Header */}
            <div className="bg-elevated border-b border-border px-4 py-3 flex items-center justify-between text-text-secondary text-xs">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div>DEPLOYMENT #1842</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 h-[460px] flex flex-col relative overflow-hidden bg-background">
              <AnimatePresence mode="wait">
                
                {state === 'IDLE' && (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full justify-center">
                    <div className="text-text-secondary mb-8 font-semibold tracking-wide">READY TO DEPLOY</div>
                    <div className="space-y-4 text-xs">
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

                {state !== 'IDLE' && (
                  <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4 text-xs lg:text-sm">
                    
                    {/* Build Step */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {state === 'BUILD' ? <Loader2 className="w-4 h-4 animate-spin text-violet" /> : <Check className="w-4 h-4 text-status-success" />}
                        <span className={state === 'BUILD' ? 'text-white font-semibold' : 'text-text-secondary'}>Build</span>
                      </div>
                      {state !== 'BUILD' && <span className="text-status-success">Passed</span>}
                    </div>

                    {/* Deploy Step */}
                    {state !== 'BUILD' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {state === 'DEPLOY' ? <Loader2 className="w-4 h-4 animate-spin text-violet" /> : <Check className="w-4 h-4 text-status-success" />}
                          <span className={state === 'DEPLOY' ? 'text-white font-semibold' : 'text-text-secondary'}>Deployment</span>
                        </div>
                        <span className={state === 'DEPLOY' ? 'text-violet' : 'text-status-success'}>
                          {state === 'DEPLOY' ? 'In progress' : 'Completed'}
                        </span>
                      </div>
                    )}

                    {/* Health Check Step */}
                    {(state === 'HEALTH_CHECK' || state === 'REGRESSION' || state === 'TRAFFIC_FROZEN' || state === 'ROLLBACK' || state === 'RESTORED' || state === 'RECOVERED') && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {state === 'HEALTH_CHECK' ? <Loader2 className="w-4 h-4 animate-spin text-violet" /> : <AlertTriangle className="w-4 h-4 text-status-warning" />}
                          <span className={state === 'HEALTH_CHECK' ? 'text-white font-semibold' : 'text-text-secondary'}>Health check</span>
                        </div>
                        <span className={state === 'HEALTH_CHECK' ? 'text-violet' : 'text-status-warning'}>
                          {state === 'HEALTH_CHECK' ? 'Running' : 'Warning'}
                        </span>
                      </div>
                    )}

                    {/* Regression Detected */}
                    {(state === 'REGRESSION' || state === 'TRAFFIC_FROZEN' || state === 'ROLLBACK' || state === 'RESTORED' || state === 'RECOVERED') && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-status-failure font-bold ml-1 w-3 text-center">!</span>
                            <span className="text-status-failure font-semibold">Regression detected</span>
                          </div>
                          <span className="text-status-failure">Failed</span>
                        </div>
                        <div className="ml-7 bg-elevated/50 p-2 rounded border border-status-failure/20 text-xs flex justify-between items-center">
                          <span>
                            <span className="text-text-secondary">error rate</span> <span className="text-white ml-2">0.8% <span className="text-text-secondary mx-1">→</span> <span className="text-status-failure">7.4%</span></span>
                          </span>
                          <button 
                            onClick={() => setShowRootCause(!showRootCause)}
                            className="text-status-info hover:text-white transition-colors flex items-center gap-1 bg-status-info/10 px-2 py-1 rounded"
                          >
                            <Search className="w-3 h-3" /> View root cause
                          </button>
                        </div>
                        
                        {/* Root Cause Popover */}
                        <AnimatePresence>
                          {showRootCause && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: 'auto' }} 
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-7 mt-1 bg-surface border border-border p-3 rounded text-xs overflow-hidden"
                            >
                              <div className="text-text-secondary mb-2">Regression detected after deployment.</div>
                              <div className="flex justify-between"><span className="text-text-secondary">Current release:</span> <span className="text-status-failure">f21d9a7</span></div>
                              <div className="flex justify-between"><span className="text-text-secondary">Known-good release:</span> <span className="text-status-success">a81f3c2</span></div>
                              <div className="flex justify-between mt-2 pt-2 border-t border-border"><span className="text-text-secondary">Action:</span> <span className="text-violet">automatic rollback</span></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}

                    {/* Traffic Frozen */}
                    {(state === 'TRAFFIC_FROZEN' || state === 'ROLLBACK' || state === 'RESTORED' || state === 'RECOVERED') && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
                          {state === 'TRAFFIC_FROZEN' ? <Loader2 className="w-4 h-4 animate-spin text-violet" /> : <Check className="w-4 h-4 text-status-success" />}
                          <span className={state === 'TRAFFIC_FROZEN' ? 'text-white font-semibold' : 'text-text-secondary'}>Traffic frozen</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Rollback Initiated */}
                    {(state === 'ROLLBACK' || state === 'RESTORED' || state === 'RECOVERED') && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {state === 'ROLLBACK' ? <Loader2 className="w-4 h-4 animate-spin text-violet" /> : <ArrowLeftCircle className="w-4 h-4 text-violet" />}
                          <span className={state === 'ROLLBACK' ? 'text-violet font-semibold' : 'text-text-secondary'}>Rollback initiated</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Previous Release Restored */}
                    {(state === 'RESTORED' || state === 'RECOVERED') && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {state === 'RESTORED' ? <Loader2 className="w-4 h-4 animate-spin text-violet" /> : <Check className="w-4 h-4 text-status-success" />}
                          <span className={state === 'RESTORED' ? 'text-white font-semibold' : 'text-text-secondary'}>Previous release restored</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Final Health Check */}
                    {state === 'RECOVERED' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-status-success" />
                          <span className="text-text-secondary">Health check</span>
                        </div>
                        <span className="text-status-success">Passed</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {state === 'RECOVERED' && (
                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-6 left-6 right-6 pt-4 border-t border-border flex justify-between items-end">
                    <div>
                      <div className="text-status-success font-semibold text-xs tracking-wide mb-1">RECOVERY COMPLETE</div>
                      <div className="text-text-secondary text-xs">Deployment recovered automatically in 8s.</div>
                    </div>
                 </motion.div>
              )}
            </div>
          </motion.div>

          <div className="flex items-center justify-end">
            <button 
              onClick={triggerSimulation}
              disabled={state !== 'IDLE' && state !== 'RECOVERED'}
              className="text-xs font-mono text-text-secondary hover:text-white transition-colors flex items-center gap-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state === 'RECOVERED' ? (
                <>Replay incident <Play className="w-3 h-3" /></>
              ) : (
                <>Simulate failure <Play className="w-3 h-3" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
