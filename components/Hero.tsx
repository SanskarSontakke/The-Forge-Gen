import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background-dark">
        <motion.div 
            animate={{ 
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.1, 0.95, 1]
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="absolute top-0 -left-10 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40" 
        />
        
        <motion.div 
            animate={{ 
                x: [0, -30, 20, 0],
                y: [0, 40, -30, 0],
                scale: [1, 1.2, 0.9, 1]
            }}
            transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 2
            }}
            className="absolute top-10 -right-10 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40" 
        />
        
        <motion.div 
             animate={{ 
                x: [0, 40, -30, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.15, 0.9, 1]
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 4
            }}
            className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[80px] opacity-30" 
        />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary-bright text-xs font-semibold uppercase tracking-wide mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary-bright mr-2 animate-pulse"></span>
          v2.0 Now Available
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="block text-white pb-2 text-glow">
            Forging The Future
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-bright to-accent-purple">
            One Line at a Time
          </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-300"
        >
          The Forge Gen is an incubator for cutting-edge AI-powered web applications. We transform conceptual ideas into fully realized digital experiences.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex justify-center gap-4"
        >
          <a href="#projects" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 md:py-4 md:text-lg md:px-10 shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
            Explore Projects
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-200 bg-surface-dark hover:bg-surface-light md:py-4 md:text-lg md:px-10 transition-all hover:scale-105 hover:border-slate-500 hover:text-white"
          >
            <Code2 className="w-5 h-5 mr-2" /> GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;