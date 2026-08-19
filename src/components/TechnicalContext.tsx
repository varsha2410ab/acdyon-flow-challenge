import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const TechnicalContext: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="context" className="max-w-7xl mx-auto px-6 py-24 flex justify-center">
      <div className="w-full max-w-md bg-surface border border-border rounded-lg overflow-hidden text-sm font-mono shadow-md">
        
        <div 
          className="px-4 py-3 bg-elevated flex justify-between items-center cursor-pointer hover:bg-elevated/80 transition-colors focus:outline-none focus:ring-2 focus:ring-violet/50"
          onClick={() => setExpanded(!expanded)}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
          role="button"
          aria-expanded={expanded}
        >
          <span className="text-violet font-semibold tracking-wide text-xs">DEPLOYMENT CONTEXT</span>
          <span className="text-text-secondary flex items-center gap-1 text-xs">
            {expanded ? 'Hide details' : 'View context'}
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
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
              <div className="p-4 grid grid-cols-2 gap-y-3 gap-x-4">
                <div className="text-text-secondary">repository</div>
                <div className="text-white">api-gateway</div>
                
                <div className="text-text-secondary">runtime</div>
                <div className="text-white">Node.js 20</div>
                
                <div className="text-text-secondary">environment</div>
                <div className="text-white">production</div>
                
                <div className="text-text-secondary">release</div>
                <div className="text-white">f21d9a7</div>
                
                <div className="text-text-secondary">previous stable</div>
                <div className="text-white">a81f3c2</div>
                
                <div className="text-text-secondary">health policy</div>
                <div className="text-white">error rate &lt; 1%</div>
                
                <div className="text-text-secondary pt-2 border-t border-border">checks</div>
                <div className="text-white pt-2 border-t border-border">4</div>
                
                <div className="text-text-secondary">rollback</div>
                <div className="text-status-success">automatic</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
