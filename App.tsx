import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import { BackgroundPaths } from './components/ui/background-paths';
import Projects from './components/Projects';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import About from './components/About';
import KnowledgeBase from './components/KnowledgeBase';
import Community from './components/Community';
import Blueprints from './components/Blueprints';
import Footer from './components/Footer';

// Lazy load the large DocsPage component (57KB)
const DocsPage = React.lazy(() => import('./components/DocsPage'));

// Loading fallback for DocsPage
const DocsLoadingFallback = () => (
  <div className="min-h-screen bg-background-dark flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-400">Loading documentation...</p>
    </div>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render DocsPage for #/docs route (lazy loaded)
  if (currentRoute === '#/docs') {
    return (
      <Suspense fallback={<DocsLoadingFallback />}>
        <DocsPage />
      </Suspense>
    );
  }

  // Default: render landing page
  return (
    <div className="bg-background-dark text-text-main min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <BackgroundPaths title="Forging The Future" />
        <Projects />
        <Services />
        <HowItWorks />
        <Benefits />
        <KnowledgeBase />
        <Community />
        <Blueprints />
        <About />
      </main>
      <Footer />
    </div>
  );
}