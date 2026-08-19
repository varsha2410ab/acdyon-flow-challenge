import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const TechnicalContext: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="context" className="max-w-7xl mx-auto px-6 py-24 flex justify-center">
      <div className="w-full max-w-md bg-surface border border-border rounded-lg overflow-hidden text-sm font-mono shadow-xl transition-all duration-300 hover:border-violet/30">
        
        <div 
          className="px-5 py-4 bg-elevated flex justify-between items-center cursor-pointer hover:bg-elevated/80 transition-colors focus:outline-none focus:ring-2 focus:ring-violet/50"
          onClick={() => setExpanded(!expanded)}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
          role="button"
          aria-expanded={expanded}
        >
          <span className="text-violet font-semibold tracking-wide text-xs">DEPLOYMENT CONTEXT</span>
          <span className="text-text-secondary flex items-center gap-1 text-xs">
            {expanded ? 'Hide configuration' : 'View configuration'}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-background"
            >
              <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm">
                <div className="text-text-secondary">Service</div>
                <div className="text-white">api-gateway</div>
                
                <div className="text-text-secondary">Environment</div>
                <div className="text-white bg-white/10 px-2 py-0.5 rounded inline-block w-max">production</div>
                
                <div className="text-text-secondary">Current release</div>
                <div className="text-status-info">f21d9a7</div>
                
                <div className="text-text-secondary">Previous stable</div>
                <div className="text-status-success">a81f3c2</div>
                
                <div className="text-text-secondary pt-3 border-t border-border">Health checks</div>
                <div className="text-status-success pt-3 border-t border-border flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-status-success"></div> Enabled</div>
                
                <div className="text-text-secondary">Auto rollback</div>
                <div className="text-status-success flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-status-success"></div> Enabled</div>
                
                <div className="text-text-secondary">Traffic protection</div>
                <div className="text-status-success flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-status-success"></div> Enabled</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
