import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Cpu className="w-5 h-5 text-slate-500" />
            <span className="font-bold text-lg text-slate-200">The Forge Gen</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-primary-bright transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-primary-bright transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-primary-bright transition-colors">Contact</a>
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