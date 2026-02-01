import { useState } from 'react';
import OpeningSplash from './components/OpeningSplash';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Diagnosis from './components/Diagnosis';
import PainPoints from './components/PainPoints';
import Deliverables from './components/Deliverables';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Flow from './components/Flow';
import Pricing from './components/Pricing';
import Promise from './components/Promise';
import FAQ from './components/FAQ';
import Closing from './components/Closing';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import TrustSignals from './components/TrustSignals';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <OpeningSplash onComplete={() => setShowSplash(false)} />}

      <div className="min-h-screen bg-brand-base text-brand-dark font-sans selection:bg-brand-accent selection:text-white">
        <Header />
        <main>
          <Hero />
          <Concept />
          <Diagnosis />
          <PainPoints />
          <Deliverables />
          <Services />
          <Testimonials />
          <Comparison />
          <TrustSignals />
          <Flow />
          <Pricing />
          <Promise />
          <FAQ />
          <Closing />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
