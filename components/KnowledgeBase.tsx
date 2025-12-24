import React from 'react';
import { GraduationCap, FileText, PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const KnowledgeBase: React.FC = () => {
  return (
    <section className="relative py-24 border-t border-slate-800/50 z-10">
      {/* Background Gradients: Amber/Slate Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-950/0 to-slate-950/0 -z-10"></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 inline-block p-4 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <GraduationCap className="w-10 h-10 text-orange-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Forge <span className="text-orange-400">Knowledge Base</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Master the art of generative AI integration. Our comprehensive documentation and learning resources provide the blueprint for building the next generation of intelligent apps.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.a 
            href="#" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-6 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-orange-500/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-900/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-lg">Documentation</h3>
                <p className="text-sm text-slate-500">API references & SDKs</p>
              </div>
              <ArrowRight className="w-6 h-6 ml-auto text-slate-600 group-hover:text-orange-400 transition-colors" />
            </div>
          </motion.a>
          
          <motion.a 
            href="#" 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-6 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-orange-500/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-900/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-lg">Video Tutorials</h3>
                <p className="text-sm text-slate-500">Step-by-step guides</p>
              </div>
              <ArrowRight className="w-6 h-6 ml-auto text-slate-600 group-hover:text-orange-400 transition-colors" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;