import React from 'react';
import { Clapperboard, UtensilsCrossed, Layers, Zap, Image as ImageIcon, Code, Sparkles, Cpu, ArrowRight, Shirt, MessageCircle, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Video Storyboarding',
      desc: 'Transform scripts into visual storyboards automatically. Generate scene compositions, shot layouts, and visual narratives from text using Gemini.',
      icon: <Clapperboard className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />,
      color: 'purple',
      shadow: 'shadow-purple-500/10',
      borderHover: 'hover:border-purple-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-purple-900/40 border-purple-500/30',
      href: 'https://github.com/SanskarSontakke/Obsidian-Forge',
      project: 'Obsidian Forge'
    },
    {
      title: 'AI Food Photography',
      desc: 'Generate professional-quality food imagery from menu descriptions. Perfect for restaurants, food blogs, and culinary marketing without expensive photoshoots.',
      icon: <UtensilsCrossed className="w-10 h-10 text-orange-400 group-hover:text-orange-300 transition-colors" />,
      color: 'orange',
      shadow: 'shadow-orange-500/10',
      borderHover: 'hover:border-orange-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-orange-500/20 to-orange-900/40 border-orange-500/30',
      href: 'https://github.com/SanskarSontakke/Culinary-Forge',
      project: 'Culinary Forge'
    },
    {
      title: 'AI Product Mockups',
      desc: 'Upload logos and vectors to generate instant, high-quality product mockups with realistic lighting, shadows, and textures. Edit with text prompts.',
      icon: <Layers className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      color: 'blue',
      shadow: 'shadow-blue-500/10',
      borderHover: 'hover:border-blue-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-blue-900/40 border-blue-500/30',
      href: 'https://github.com/SanskarSontakke/Vectra-Forge',
      project: 'Vectra Forge'
    },
    {
      title: 'AI Banner Generation',
      desc: 'Create professional marketing banners in standard ad sizes from product descriptions and URLs. Powered by Gemini 2.5 Flash for rapid creative iteration.',
      icon: <Zap className="w-10 h-10 text-amber-400 group-hover:text-amber-300 transition-colors" />,
      color: 'amber',
      shadow: 'shadow-amber-500/10',
      borderHover: 'hover:border-amber-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-amber-900/40 border-amber-500/30',
      href: 'https://github.com/SanskarSontakke/Onyx-Forge',
      project: 'Onyx Forge'
    },
    {
      title: 'AI Photo Editing',
      desc: 'Professional product photo enhancement and background removal. Automatically clean up e-commerce imagery with AI-powered retouching and compositing.',
      icon: <ImageIcon className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      color: 'emerald',
      shadow: 'shadow-emerald-500/10',
      borderHover: 'hover:border-emerald-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border-emerald-500/30',
      href: 'https://github.com/SanskarSontakke/Lumina-Forge',
      project: 'Lumina Forge'
    },
    {
      title: 'AI Personal Styling',
      desc: 'Instant outfit generation and style matching. Upload clothing items to receive complete fashion recommendations. Solve the "what to wear" dilemma instantly.',
      icon: <Shirt className="w-10 h-10 text-rose-400 group-hover:text-rose-300 transition-colors" />,
      color: 'rose',
      shadow: 'shadow-rose-500/10',
      borderHover: 'hover:border-rose-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-rose-500/20 to-rose-900/40 border-rose-500/30',
      href: 'https://github.com/SanskarSontakke/Style-Forge',
      project: 'Style Forge'
    },
    {
      title: 'Gemini API Integration',
      desc: 'Expert integration of Google Gemini models into web applications. Text generation, image synthesis, multimodal AI, and conversational interfaces.',
      icon: <Sparkles className="w-10 h-10 text-pink-400 group-hover:text-pink-300 transition-colors" />,
      color: 'pink',
      shadow: 'shadow-pink-500/10',
      borderHover: 'hover:border-pink-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-pink-500/20 to-pink-900/40 border-pink-500/30',
      href: '#/docs#gemini-api',
      project: null
    },
    {
      title: 'React & TypeScript Apps',
      desc: 'Modern, performant web applications built with React, TypeScript, Vite, and Tailwind CSS. Clean architecture with production-ready code quality.',
      icon: <Terminal className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      color: 'cyan',
      shadow: 'shadow-cyan-500/10',
      borderHover: 'hover:border-cyan-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-cyan-500/20 to-cyan-900/40 border-cyan-500/30',
      href: 'https://github.com/SanskarSontakke/Cyan-Forge',
      project: 'Cyan Forge'
    },
    {
      title: 'AI Social Media',
      desc: 'Automate your social presence. Generate captions, schedule posts, and analyze trends with our AI-powered social media management suite.',
      icon: <MessageCircle className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300 transition-colors" />,
      color: 'indigo',
      shadow: 'shadow-indigo-500/10',
      borderHover: 'hover:border-indigo-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-indigo-500/20 to-indigo-900/40 border-indigo-500/30',
      href: 'https://github.com/SanskarSontakke/Social-Forge',
      project: 'Social Forge'
    },
    {
      title: 'Custom AI Solutions',
      desc: 'Bespoke generative AI tools tailored to your business needs. From concept to deployment, we build AI-powered applications that solve real problems.',
      icon: <Cpu className="w-10 h-10 text-rose-400 group-hover:text-rose-300 transition-colors" />,
      color: 'rose',
      shadow: 'shadow-rose-500/10',
      borderHover: 'hover:border-rose-500/50',
      bgHover: 'group-hover:opacity-100',
      iconBg: 'bg-gradient-to-br from-rose-500/20 to-rose-900/40 border-rose-500/30',
      href: 'https://github.com/SanskarSontakke',
      project: null
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
          <h2 className="text-base text-primary-bright font-semibold tracking-wide uppercase">What We Build</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            AI-Powered Creative Tools
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">
            Specialized in building generative AI applications that transform creative workflows
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={service.href}
              target={service.href.startsWith('http') ? '_blank' : undefined}
              rel={service.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group block p-6 rounded-2xl bg-surface-dark/40 border border-slate-700/50 ${service.borderHover} transition-all duration-300 hover:-translate-y-2 hover:bg-surface-light/60 backdrop-blur-sm relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-${service.color}-500/5 to-transparent opacity-0 ${service.bgHover} transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg ${service.shadow}`}>
                  {service.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 text-white group-hover:text-${service.color}-400 transition-colors`}>{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                {service.project && (
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500`}></span>
                    {service.project}
                  </div>
                )}
                <div className={`mt-4 flex items-center gap-1 text-sm font-medium text-${service.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;