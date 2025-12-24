import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero'; // Replaced by BackgroundPaths
import { BackgroundPaths } from './components/ui/background-paths';
import Projects from './components/Projects';
import Services from './components/Services';
import Lab from './components/Lab';
import KnowledgeBase from './components/KnowledgeBase';
import Community from './components/Community';
import Blueprints from './components/Blueprints';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-background-dark text-text-main min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <BackgroundPaths title="Forging The Future" />
        <Projects />
        <Services />
        <Lab />
        <KnowledgeBase />
        <Community />
        <Blueprints />
      </main>
      <Footer />
    </div>
  );
}