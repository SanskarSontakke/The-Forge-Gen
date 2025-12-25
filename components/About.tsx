import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="py-24 relative z-10 border-t border-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-surface-dark/50 -z-10"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden bg-slate-900/50 border border-slate-700/50 p-8 md:p-12 backdrop-blur-sm"
                >
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-950 p-1 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                                    <User className="w-16 h-16 text-slate-400 group-hover:text-white transition-colors" />
                                    {/* If you have a profile picture, replace the line above with: 
                       <img src="/path/to/profile.jpg" alt="Sanskar Sontakke" className="w-full h-full object-cover rounded-full" /> 
                   */}
                                </div>
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Designed & Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sanskar Sontakke</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                Passionate about forging the future of AI with open-source tools.
                                This project is a testament to the power of modern web technologies and generative AI.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a
                                    href="https://sanskarsontakke.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                                >
                                    Visit Portfolio
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <div className="flex items-center gap-3">
                                    <a href="https://github.com/SanskarSontakke" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
