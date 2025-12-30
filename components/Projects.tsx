import React from 'react';
import { Clapperboard, ArrowRight, UtensilsCrossed, Layers, Zap, Image as ImageIcon, Github, ExternalLink, Shirt, MessageCircle, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  color: string;
  githubUrl: string;
  badge: string;
}

const projects: Project[] = [
  {
    title: 'Obsidian Forge',
    description: 'The premier script-to-screen engine. Transforms narrative text into storyboarded video sequences with intelligent scene blocking using the Gemini API.',
    tags: ['React', 'Vite', 'Gemini API'],
    icon: Clapperboard,
    color: 'purple',
    githubUrl: 'https://github.com/SanskarSontakke/Obsidian-Forge',
    badge: 'AI Video',
  },
  {
    title: 'Culinary Forge',
    description: 'Your AI food stylist. Renders hyper-realistic gastronomy visuals from menu descriptions using Gemini 2.5 Flash, bypassing the need for physical photoshoots.',
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash'],
    icon: UtensilsCrossed,
    color: 'orange',
    githubUrl: 'https://github.com/SanskarSontakke/Culinary-Forge',
    badge: 'AI Photo',
  },
  {
    title: 'Vectra Forge',
    description: 'An AI-powered design tool that generates instant, high-quality product mockups from vector or logo uploads. Features realistic lighting and texture rendering.',
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash'],
    icon: Layers,
    color: 'blue',
    githubUrl: 'https://github.com/SanskarSontakke/Vectra-Forge',
    badge: 'AI Design',
  },
  {
    title: 'Onyx Forge',
    description: 'Generate high-quality, professional banner ads in standard sizes using product descriptions and URLs. Optimized for marketing campaigns.',
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash'],
    icon: Zap,
    color: 'amber',
    githubUrl: 'https://github.com/SanskarSontakke/Onyx-Forge',
    badge: 'AI Marketing',
  },
  {
    title: 'Lumina Forge',
    description: 'Professional product photo editing and background removal powered by Gemini 2.5 Flash Image. Enhances e-commerce assets automatically.',
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash'],
    icon: ImageIcon,
    color: 'emerald',
    githubUrl: 'https://github.com/SanskarSontakke/Lumina-Forge',
    badge: 'AI Editing',
  },
  {
    title: 'Style Forge',
    description: "Solve the 'I don't know what to wear' problem. Upload an item and our AI Stylist builds complete outfits around it with instant visualization.",
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash'],
    icon: Shirt,
    color: 'rose',
    githubUrl: 'https://github.com/SanskarSontakke/Style-Forge',
    badge: 'AI Fashion',
  },
  {
    title: 'Social Forge',
    description: 'AI-powered social media automation. Generate engaging captions, research hashtags, and schedule posts across platforms using Gemini.',
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash'],
    icon: MessageCircle,
    color: 'indigo',
    githubUrl: 'https://github.com/SanskarSontakke/Social-Forge',
    badge: 'AI Social',
  },
  {
    title: 'Cyan Forge',
    description: 'The ultimate React & TypeScript starter kit. Pre-configured with Vite, Tailwind, Framer Motion, and Gemini API integration for rapid prototyping.',
    tags: ['React', 'TypeScript', 'Vite'],
    icon: Terminal,
    color: 'cyan',
    githubUrl: 'https://github.com/SanskarSontakke/Cyan-Forge',
    badge: 'Dev Tools',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { border: string, shadow: string, hoverBorder: string, bg: string, text: string, icon: string, badgeBg: string, badgeText: string, badgeBorder: string, gradientFrom: string, gradientTo: string, buttonBg: string, buttonHover: string }> = {
    purple: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
      hoverBorder: 'hover:border-purple-500/50',
      bg: 'bg-purple-900/20',
      text: 'hover:text-purple-200',
      icon: 'text-purple-400',
      badgeBg: 'bg-purple-900/30',
      badgeText: 'text-purple-200',
      badgeBorder: 'border-purple-500/30',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-blue-500',
      buttonBg: 'bg-purple-600',
      buttonHover: 'hover:bg-purple-500'
    },
    orange: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]',
      hoverBorder: 'hover:border-orange-500/50',
      bg: 'bg-orange-900/20',
      text: 'hover:text-orange-200',
      icon: 'text-orange-400',
      badgeBg: 'bg-orange-900/30',
      badgeText: 'text-orange-200',
      badgeBorder: 'border-orange-500/30',
      gradientFrom: 'from-orange-400',
      gradientTo: 'to-red-500',
      buttonBg: 'bg-orange-600',
      buttonHover: 'hover:bg-orange-500'
    },
    blue: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]',
      hoverBorder: 'hover:border-blue-500/50',
      bg: 'bg-blue-900/20',
      text: 'hover:text-blue-200',
      icon: 'text-blue-400',
      badgeBg: 'bg-blue-900/30',
      badgeText: 'text-blue-200',
      badgeBorder: 'border-blue-500/30',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-cyan-500',
      buttonBg: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-500'
    },
    amber: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]',
      hoverBorder: 'hover:border-amber-500/50',
      bg: 'bg-amber-900/20',
      text: 'hover:text-amber-200',
      icon: 'text-amber-400',
      badgeBg: 'bg-amber-900/30',
      badgeText: 'text-amber-200',
      badgeBorder: 'border-amber-500/30',
      gradientFrom: 'from-amber-400',
      gradientTo: 'to-yellow-500',
      buttonBg: 'bg-amber-600',
      buttonHover: 'hover:bg-amber-500'
    },
    emerald: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]',
      hoverBorder: 'hover:border-emerald-500/50',
      bg: 'bg-emerald-900/20',
      text: 'hover:text-emerald-200',
      icon: 'text-emerald-400',
      badgeBg: 'bg-emerald-900/30',
      badgeText: 'text-emerald-200',
      badgeBorder: 'border-emerald-500/30',
      gradientFrom: 'from-emerald-400',
      gradientTo: 'to-teal-500',
      buttonBg: 'bg-emerald-600',
      buttonHover: 'hover:bg-emerald-500'
    },
    rose: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]',
      hoverBorder: 'hover:border-rose-500/50',
      bg: 'bg-rose-900/20',
      text: 'hover:text-rose-200',
      icon: 'text-rose-400',
      badgeBg: 'bg-rose-900/30',
      badgeText: 'text-rose-200',
      badgeBorder: 'border-rose-500/30',
      gradientFrom: 'from-rose-400',
      gradientTo: 'to-pink-500',
      buttonBg: 'bg-rose-600',
      buttonHover: 'hover:bg-rose-500'
    },
    cyan: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
      hoverBorder: 'hover:border-cyan-500/50',
      bg: 'bg-cyan-900/20',
      text: 'hover:text-cyan-200',
      icon: 'text-cyan-400',
      badgeBg: 'bg-cyan-900/30',
      badgeText: 'text-cyan-200',
      badgeBorder: 'border-cyan-500/30',
      gradientFrom: 'from-cyan-400',
      gradientTo: 'to-blue-500',
      buttonBg: 'bg-cyan-600',
      buttonHover: 'hover:bg-cyan-500'
    },
    indigo: {
      border: 'border-slate-700/50',
      shadow: 'hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]',
      hoverBorder: 'hover:border-indigo-500/50',
      bg: 'bg-indigo-900/20',
      text: 'hover:text-indigo-200',
      icon: 'text-indigo-400',
      badgeBg: 'bg-indigo-900/30',
      badgeText: 'text-indigo-200',
      badgeBorder: 'border-indigo-500/30',
      gradientFrom: 'from-indigo-400',
      gradientTo: 'to-violet-500',
      buttonBg: 'bg-indigo-600',
      buttonHover: 'hover:bg-indigo-500'
    }
  };
  return colors[color] || colors.purple;
};

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
              Open-source generative AI tools powered by Google AI Studio & Gemini API.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-surface-dark/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border ${colors.border} ${colors.hoverBorder} ${colors.shadow} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 ${colors.bg} rounded-xl border ${colors.badgeBorder} transition-colors`}>
                        <project.icon className={`w-8 h-8 ${colors.icon} group-hover:animate-bounce`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors.badgeBg} ${colors.badgeText} border ${colors.badgeBorder} shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                      {project.badge}
                    </span>
                  </div>
                  <p className={`text-slate-300 text-lg leading-relaxed mb-8 border-l-2 ${colors.badgeBorder} pl-4 h-24 overflow-hidden`}>
                    {project.description}
                  </p>
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech) => (
                        <span key={tech} className={`px-3 py-1.5 bg-slate-800/50 border border-slate-600/50 rounded-lg text-xs font-semibold text-white font-mono hover:border-opactiy-50 ${colors.text} transition-colors cursor-default`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                    <a
                      href="https://aistudio.google.com/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Get API Key
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn inline-flex items-center gap-2 text-white font-semibold ${colors.buttonBg} ${colors.buttonHover} px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl`}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;