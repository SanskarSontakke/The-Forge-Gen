import React from 'react';
import { Clapperboard, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      {/* Background Gradients: Violet/Slate Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950/0 to-slate-950/0 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base text-primary-bright font-bold tracking-wide uppercase">Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Forge Projects
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto">
              Explore our latest high-impact generative AI implementations and experiments.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Project Card 1 */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-surface-dark/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-700/30 group-hover:bg-purple-900/40 transition-colors">
                    <Clapperboard className="w-8 h-8 text-purple-400 group-hover:text-purple-300 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Obsidian Forge</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-900/30 text-purple-200 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  AI Video
                </span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-purple-500/30 pl-4 h-24 overflow-hidden">
                The premier script-to-screen engine. Transforms narrative text into storyboarded video sequences with intelligent scene blocking using the Gemini API.
              </p>
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vite', 'Gemini API'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-800/50 border border-slate-600/50 rounded-lg text-xs font-semibold text-white font-mono hover:border-purple-400/50 hover:text-purple-200 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                <div className="flex -space-x-3 overflow-hidden pl-1">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK2EKFVj4KoN2oclExMAAtauxU939-CtDWzj0wI1s5VWIIbIZqHWCrKsUhiDoyWb4fjlo-X4kSEQlkZmLplpqMoSWbBRx3nZ7A3EF08ozX6TIJeucF-YaoLW_4OWtGUKaLjguTgPsucqus0ZyXs2VBMO5y8Bk5po1vXFlGNe8acN7NKxbjzSdgLEHU4OoaK4EOs-tr96RpkN_3jbT0oeqlriftt997RKNQIbmO1dxXlekMoR3tCQcgvfr8Kh04TvDo7UiqAiGSkUX0" alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark bg-slate-700" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJpcRn3d_p1SvbdHeSqNu3QgNW-sd6tjPuqdelApcNPRSI9TKaEKgUzz3-LVb3x79GfHkQy9euHEQd6oUGwzZVYr4EvwX4XiB0TMPn40HSZk7t_Axem4m_9amgPDTyztG5kEF_sXdHVnkC_8XOhyOEQocj8PodXFQGLrN0xfMTz_H4E-1Qs3zcVUl6FOET9SVZGkLfmeOl1bqH3lpl8WGwT2jewBSif1-Bv1tEOAvcDlnitglthssGWjWFGVEGVd_fPIqHMo4fZSx" alt="Bot" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark bg-slate-700" />
                </div>
                <a href="#" className="group/btn inline-flex items-center gap-2 text-white font-semibold bg-purple-600 hover:bg-purple-500 px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-purple-900/40 hover:shadow-purple-600/30">
                  View Code
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="group relative bg-surface-dark/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-900/20 rounded-xl border border-orange-700/30 group-hover:bg-orange-900/40 transition-colors">
                    <UtensilsCrossed className="w-8 h-8 text-orange-400 group-hover:text-orange-300 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Culinary Forge</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-900/30 text-orange-200 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                  AI Photo
                </span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-orange-500/30 pl-4 h-24 overflow-hidden">
                Your AI food stylist. Renders hyper-realistic gastronomy visuals from menu descriptions using Gemini 2.5 Flash, bypassing the need for physical photoshoots.
              </p>
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Gemini 2.5'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-800/50 border border-slate-600/50 rounded-lg text-xs font-semibold text-white font-mono hover:border-orange-400/50 hover:text-orange-200 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                <div className="flex -space-x-3 overflow-hidden pl-1">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApzC-sRBa438Ak_FltNkkw-daC9ThX8bZFbm2Ocp_cMW1ECUxRCotRPAWUYdDS5o-XJO7kpyFWd-kjpABULLqym-YcYGQMuK1xPHBhLHzvqDbwD2ob74VdM4nnsw37Ub7bg38V82TL4obtLGSR0MTkC2QGGUvBEd_5uvOiLHe3MeWenGIUbq7y-DDWbvVzQKVsHwuVZA3TrdOD2gl-dHfhuC8KrgNlkAcGPY-fSqaTa3UdJycgUuh3p0vgZ9uUwpZD-24Npqz3UsnL" alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark bg-slate-700" />
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsR1rGeNPWDp5jT2bb4IhUF0YomdyDGQ8-8fgzDqDvXlTDZw82gtObOzB8oNBpTWC6yqf1BXn46yOWNwOL34cy28vwPbp2-vhOnTFgF0LejLud54Rj0iMQeAVvRVezeAEAl6qZEFBt6fcDKlWAG5swoSzYFjkiez07xbLZN3rWxYhXTI6VSbmNoykREyK7hiANT-rCtgYHG03EvcxJUSHflt4ITzY18_kAIS86Q-pGA_Freym6jtBO2jdtxNMjbfuAS4lE5hCQFEBJ" alt="Bot" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark bg-slate-700" />
                </div>
                <a href="#" className="group/btn inline-flex items-center gap-2 text-white font-semibold bg-orange-600 hover:bg-orange-500 px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-orange-900/40 hover:shadow-orange-600/30">
                  View Code
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;