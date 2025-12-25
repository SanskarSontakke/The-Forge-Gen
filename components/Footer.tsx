import React from 'react';
import { Cpu, Github, FileText, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="#" className="flex items-center gap-2 mb-4 md:mb-0">
            <Cpu className="w-5 h-5 text-slate-500" />
            <span className="font-bold text-lg text-slate-200">The Forge Gen</span>
          </a>
          <div className="flex items-center space-x-6">
            <a href="#/docs" className="text-slate-500 hover:text-primary-bright transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Docs</span>
            </a>
            <a href="https://github.com/SanskarSontakke" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-bright transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="mailto:sanskar.sontakke@example.com" className="text-slate-500 hover:text-primary-bright transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-500">
          © 2025 The Forge Gen. All rights reserved. Built with passion and AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;