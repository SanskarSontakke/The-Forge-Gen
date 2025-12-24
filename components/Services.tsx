import React from 'react';
import { Bot, Box, Sparkles, BrainCircuit, Sliders, Database, ShieldCheck, Network, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Generative AI Integration',
      desc: 'Seamlessly integrating advanced LLMs like Gemini and GPT-4 into web applications for enhanced user experiences.',
      icon: <Bot className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      color: 'blue',
      shadow: 'shadow-blue-500/10',
      borderHover: 'hover:border-primary/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-blue-900/40 border-blue-500/30'
    },
    {
      title: 'Full-Stack Web Apps',
      desc: 'Building robust, scalable applications using modern stacks like React, TypeScript, Vite, and Tailwind CSS.',
      icon: <Box className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />,
      color: 'purple',
      shadow: 'shadow-purple-500/10',
      borderHover: 'hover:border-purple-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-purple-900/40 border-purple-500/30'
    },
    {
      title: 'Automated Content',
      desc: 'Developing tools for automated video generation, image synthesis, and dynamic storytelling pipelines.',
      icon: <Sparkles className="w-10 h-10 text-pink-400 group-hover:text-pink-300 transition-colors" />,
      color: 'pink',
      shadow: 'shadow-pink-500/10',
      borderHover: 'hover:border-pink-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-pink-500/20 to-pink-900/40 border-pink-500/30'
    },
    {
      title: 'Neural Optimization',
      desc: 'Refining model architectures and quantization strategies to maximize performance on constrained hardware.',
      icon: <BrainCircuit className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      color: 'cyan',
      shadow: 'shadow-cyan-500/10',
      borderHover: 'hover:border-cyan-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-cyan-500/20 to-cyan-900/40 border-cyan-500/30'
    },
    {
      title: 'Custom Fine-Tuning',
      desc: 'Training specialized adapters (LoRA) on your proprietary datasets to align AI behavior with business goals.',
      icon: <Sliders className="w-10 h-10 text-orange-400 group-hover:text-orange-300 transition-colors" />,
      color: 'orange',
      shadow: 'shadow-orange-500/10',
      borderHover: 'hover:border-orange-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-orange-500/20 to-orange-900/40 border-orange-500/30'
    },
    {
      title: 'RAG Systems',
      desc: 'Implementing Retrieval-Augmented Generation to ground LLMs in your specific business data and knowledge bases.',
      icon: <Database className="w-10 h-10 text-teal-400 group-hover:text-teal-300 transition-colors" />,
      color: 'teal',
      shadow: 'shadow-teal-500/10',
      borderHover: 'hover:border-teal-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-teal-500/20 to-teal-900/40 border-teal-500/30'
    },
    {
      title: 'AI Security',
      desc: 'Deploying guardrails and toxicity filters to ensure your AI applications remain safe, compliant, and brand-safe.',
      icon: <ShieldCheck className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors" />,
      color: 'red',
      shadow: 'shadow-red-500/10',
      borderHover: 'hover:border-red-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-red-500/20 to-red-900/40 border-red-500/30'
    },
    {
      title: 'Intelligent Data Ops',
      desc: 'Constructing automated, scalable pipelines to clean, vectorise, and stream enterprise data for real-time model consumption.',
      icon: <Network className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      color: 'emerald',
      shadow: 'shadow-emerald-500/10',
      borderHover: 'hover:border-emerald-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border-emerald-500/30'
    },
    {
      title: 'Adaptive Voice AI',
      desc: 'Engineering emotive, ultra-low latency speech synthesis engines for natural, human-like conversational interfaces.',
      icon: <Mic className="w-10 h-10 text-amber-400 group-hover:text-amber-300 transition-colors" />,
      color: 'amber',
      shadow: 'shadow-amber-500/10',
      borderHover: 'hover:border-amber-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-amber-900/40 border-amber-500/30'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 relative z-10 overflow-hidden">
      {/* Background Gradients: Blue/Slate Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 -z-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0 -z-10 opacity-60"></div>
      
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary-bright font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Development Services
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.a 
              key={index}
              variants={itemVariants}
              href="#" 
              className={`group block p-8 rounded-2xl bg-surface-dark/40 border border-slate-700/50 ${service.borderHover} transition-all duration-300 hover:-translate-y-2 hover:bg-surface-light/60 backdrop-blur-sm relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-${service.color}-500/5 to-transparent opacity-0 ${service.bgHover} transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg ${service.shadow}`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 text-white group-hover:text-${service.color}-400 transition-colors`}>{service.title}</h3>
                <p className="text-slate-300">
                  {service.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;