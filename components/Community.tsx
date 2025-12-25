import React from 'react';
import { ExternalLink, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden border-t border-slate-800/50 z-10">
      {/* Background Gradients: Indigo/Slate Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 -z-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent -z-20"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute -left-20 bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-xs font-medium uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
              <span>Community Access</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-bright to-cyan-400">Inner Circle</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Gain exclusive access to development builds, contribute to open-source initiatives, and network with other generative AI pioneers. The Forge isn't just a tool; it's a movement where ideas become reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/SanskarSontakke" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10 flex items-center">
                  Join on GitHub
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative group order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 p-8 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 gap-4 opacity-80">
                <div className="space-y-4">
                  <div className="h-24 bg-slate-700/50 rounded-lg animate-pulse"></div>
                  <div className="h-32 bg-slate-700/30 rounded-lg"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 bg-slate-700/30 rounded-lg"></div>
                  <div className="h-24 bg-slate-700/50 rounded-lg animate-pulse" style={{ animationDelay: '500ms' }}></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background-dark p-4 rounded-full border border-slate-600 shadow-xl">
                  <Network className="w-10 h-10 text-primary-bright" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Community;