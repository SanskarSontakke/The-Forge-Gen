import React from 'react';
import { FlaskConical, Rocket, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Lab: React.FC = () => {
  return (
    <section className="relative py-20 border-t border-slate-800/50 overflow-hidden z-10">
      {/* Background Gradients: Cyan/Slate Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] -z-20"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <FlaskConical className="w-4 h-4" />
              <span>The Forge Lab</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Prototypes</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Step into our experimental playground. We are constantly pushing the boundaries of what's possible with neural networks in the browser. Access our latest alpha builds and prototypes before they hit the mainline.
            </p>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900">
                Launch Lab Environment
                <Rocket className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl p-2 shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-2xl"></div>
              <div className="relative rounded-xl overflow-hidden bg-slate-950/80 aspect-video flex items-center justify-center border border-slate-800/50">
                <div className="text-center space-y-4">
                  <Microscope className="w-16 h-16 text-cyan-500 animate-pulse mx-auto" />
                  <div className="text-sm font-mono text-cyan-400">INITIALIZING_SEQUENCE...</div>
                  <div className="h-1 w-32 mx-auto bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 animate-shimmer w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Lab;