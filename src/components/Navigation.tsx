import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg tracking-tight focus:outline-none focus:ring-2 focus:ring-violet/50 rounded" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-7 h-7 rounded bg-violet/10 flex items-center justify-center text-violet">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V6"/>
              <path d="M12 10 16 6 20 10"/>
              <path d="M8 18 4 22 0 18" opacity="0"/>
            </svg>
          </div>
          Acdyon Flow
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#how-it-works" className="hover:text-text-primary transition-colors focus:outline-none focus:text-violet">How it works</a>
          <a href="#features" className="hover:text-text-primary transition-colors focus:outline-none focus:text-violet">Features</a>
          <a href="#context" className="hover:text-text-primary transition-colors focus:outline-none focus:text-violet">Docs</a>
        </div>

        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => window.dispatchEvent(new CustomEvent('trigger-deployment')), 500);
          }}
          className="btn-primary text-sm"
          aria-label="Run a deployment simulation"
        >
          Run a deployment
        </button>
      </div>
    </nav>
  );
};
