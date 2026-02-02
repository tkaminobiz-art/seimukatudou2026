import { useState } from 'react';
import OpeningSplash from './components/OpeningSplash';
import Impact from './components/Impact';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ThreeUpdates from './components/ThreeUpdates';
import Concept from './components/Concept';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Deliverables from './components/Deliverables';
import Diagnosis from './components/Diagnosis';
import Testimonials from './components/Testimonials';
import TrustSignals from './components/TrustSignals';
import Flow from './components/Flow';
import Pricing from './components/Pricing';
import Promise from './components/Promise';
import FAQ from './components/FAQ';
import Closing from './components/Closing';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <OpeningSplash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="min-h-screen bg-brand-base text-brand-dark font-sans selection:bg-brand-accent selection:text-white">
          <Impact />
          <Header />
          <main>
            <Hero />
            <Problem />
            <ThreeUpdates />
            <Concept />
            <Services />
            <Comparison />
            <Deliverables />
            <Diagnosis />
            <Testimonials />
            <TrustSignals />
            <Flow />
            <Pricing />
            <Promise />
            <FAQ />
            <Closing />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
