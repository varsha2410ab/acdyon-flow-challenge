import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="font-semibold text-lg tracking-tight mb-4 text-text-primary">
            ACDYON FLOW
          </div>
          <p className="text-text-secondary">
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
