import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const Blueprints: React.FC = () => {
  return (
    <section id="docs" className="py-24 relative bg-transparent overflow-hidden border-t border-slate-800/50 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/60 to-background-dark -z-10 backdrop-blur-md"></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Technical <span className="relative inline-block">
            Blueprints
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </span>
        </h2>

        <div className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-8 py-12 bg-surface-dark/70 ring-1 ring-slate-800/80 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
            <div className="text-left md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-700/30">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Official Documentation</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Explore comprehensive guides, API references, and architectural deep-dives designed to help you integrate Forge Gen models into your own applications seamlessly.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <a href="#/docs" className="flex items-center justify-center w-full md:w-auto px-6 py-3 border-2 border-purple-500 text-purple-400 font-bold uppercase tracking-wider rounded-lg hover:bg-purple-900/20 transition-colors">
                Read Docs <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Blueprints;