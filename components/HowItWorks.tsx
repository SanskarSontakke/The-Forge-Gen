import React from 'react';
import { Sparkles, Terminal, Key, Rocket, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            step: '01',
            title: 'Get Your API Key',
            description: 'Visit Google AI Studio to grab your free API key. It takes seconds and requires no credit card.',
            icon: Key,
        },
        {
            step: '02',
            title: 'Clone & Configure',
            description: 'Clone the project repo from GitHub and add your API key to the .env file.',
            icon: Github,
        },
        {
            step: '03',
            title: 'Run Locally',
            description: 'Launch the development server. The app connects directly to Gemini\'s API from your machine.',
            icon: Terminal,
        },
    ];

    return (
        <section className="relative py-20 border-t border-slate-800/50 overflow-hidden z-10">
            {/* Background Gradients: Cyan/Slate Theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-30"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] -z-20"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none -z-10"></div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                        <Rocket className="w-4 h-4" />
                        <span>Developer Friendly</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Works</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Open-source projects designed to run locally with your own Gemini API key.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative group"
                        >
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                            )}

                            <div className="relative p-8 rounded-2xl bg-surface-dark/60 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                                        <item.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <span className="text-4xl font-bold text-slate-700 group-hover:text-blue-500/50 transition-colors">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://aistudio.google.com/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900"
                    >
                        Get API Key
                        <Key className="w-5 h-5 ml-2" />
                    </a>
                    <p className="mt-4 text-sm text-slate-500">
                        Free tier includes 60 requests/minute • No credit card required
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
