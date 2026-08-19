import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight mb-4 text-text-primary">
            <div className="w-5 h-5 rounded bg-violet/10 flex items-center justify-center text-violet">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V6"/>
                <path d="M12 10 16 6 20 10"/>
                <path d="M8 18 4 22 0 18" opacity="0"/>
              </svg>
            </div>
            ACDYON FLOW
          </div>
          <p className="text-text-secondary leading-relaxed">
            Deploy boldly.<br/>Sleep better.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-4 text-sm font-medium text-text-secondary">
          <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it works</a>
          <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
          <a href="#docs" className="hover:text-text-primary transition-colors">Docs</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 text-xs text-text-secondary/60">
        © 2026 Acdyon Flow
      </div>
    </footer>
  );
};
