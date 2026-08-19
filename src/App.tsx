import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IncidentReplay } from './components/IncidentReplay';
import { ProductPhilosophy } from './components/ProductPhilosophy';
import { Features } from './components/Features';
import { TechnicalContext } from './components/TechnicalContext';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  useEffect(() => {
    let typed = '';
    const target = 'rollback';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      typed += e.key.toLowerCase();
      if (typed.length > target.length) {
        typed = typed.slice(typed.length - target.length);
      }
      if (typed === target) {
        setEasterEgg(true);
        window.dispatchEvent(new CustomEvent('trigger-deployment'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-violet selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <IncidentReplay />
        
        <ProductPhilosophy />
        
        <Features />
        
        <TechnicalContext />

        {/* Final CTA */}
        <section className="py-32 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Ship the risky change.
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-secondary mb-8">
            We'll watch it.
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Flow handles the failure path so your team doesn't have to.
          </p>
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => window.dispatchEvent(new CustomEvent('trigger-deployment')), 800);
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Run a deployment
          </button>
        </section>
      </main>

      <Footer />

      {/* Easter Egg Overlay */}
      {easterEgg && (
        <div className="fixed bottom-6 right-6 bg-black/90 border border-violet p-4 rounded-lg font-mono text-xs z-50 shadow-2xl backdrop-blur-md">
          <div className="text-violet mb-2 font-bold tracking-widest">DEVELOPER MODE</div>
          <div className="text-status-success">rollback: armed</div>
          <div className="text-status-success mb-2">sleep_required: false</div>
          <div className="text-white">Nice.</div>
          <div className="text-white">Now ship something.</div>
          <button onClick={() => setEasterEgg(false)} className="mt-4 text-text-secondary hover:text-white underline">dismiss</button>
        </div>
      )}
    </div>
  );
};

export default App;
