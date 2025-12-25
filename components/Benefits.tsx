import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Wallet, Cpu } from 'lucide-react';

const Benefits: React.FC = () => {
    const features = [
        {
            title: "Zero Cost scaling",
            description: "Build, test, and deploy with Gemini's generous free tier. No credit card required to get started.",
            icon: Wallet,
            color: "emerald"
        },
        {
            title: "Enterprise Security",
            description: "Your data stays with you. No model training on your prompts. Enterprise-grade safety settings built-in.",
            icon: Shield,
            color: "blue"
        },
        {
            title: "Ultra-Low Latency",
            description: "Powered by Gemini 2.5 Flash for sub-second response times. Experience real-time AI interaction.",
            icon: Zap,
            color: "amber"
        },
        {
            title: "Multimodal Native",
            description: "Process text, code, images, and video simultaneously. Built from the ground up for multimodal understanding.",
            icon: Cpu,
            color: "purple"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, string> = {
            emerald: "text-emerald-400 bg-emerald-900/20 border-emerald-500/30 group-hover:border-emerald-500/50",
            blue: "text-blue-400 bg-blue-900/20 border-blue-500/30 group-hover:border-blue-500/50",
            amber: "text-amber-400 bg-amber-900/20 border-amber-500/30 group-hover:border-amber-500/50",
            purple: "text-purple-400 bg-purple-900/20 border-purple-500/30 group-hover:border-purple-500/50"
        };
        return colors[color];
    };

    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Forge?</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Leverage the power of Google's Gemini models with open-source flexibility.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group p-6 rounded-2xl bg-surface-dark/40 border border-slate-800/60 hover:bg-surface-light/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${getColorClasses(feature.color).split(' ').slice(1).join(' ')}`}>
                                <feature.icon className={`w-6 h-6 ${getColorClasses(feature.color).split(' ')[0]}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
