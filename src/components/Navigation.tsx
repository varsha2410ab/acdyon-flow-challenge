import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <div className="w-6 h-6 rounded bg-violet flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          Acdyon Flow
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it works</a>
          <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
          <a href="#docs" className="hover:text-text-primary transition-colors">Docs</a>
        </div>

        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('trigger-deployment'))}
          className="btn-primary text-sm"
        >
          Run a deployment
        </button>
      </div>
    </nav>
  );
};
