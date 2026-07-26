import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';
import { UI_LABELS } from '../data/translations';
import brainIllustration from '../assets/images/mind_brain_illustration_1785066127335.jpg';

interface HeaderProps {
  currentLanguage: Language;
  onOpenLanguageModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLanguage, onOpenLanguageModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface/85 backdrop-blur-xl border-b border-primary/10 pt-safe transition-all">
      <div className="max-w-md sm:max-w-xl md:max-w-4xl mx-auto h-16 px-5 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-primary via-primary-container to-secondary flex items-center justify-center shadow-md shadow-primary/20 overflow-hidden">
            <img 
              src={brainIllustration} 
              alt="Mindora AI Brain Logo" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              {UI_LABELS.appName[currentLanguage]}
            </span>
            <span className="text-[10px] font-medium text-on-surface-variant/80 -mt-1 tracking-wider uppercase">
              Psychology AI
            </span>
          </div>
        </div>

        {/* Language Selector Top Corner */}
        <button
          onClick={onOpenLanguageModal}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-primary/20 shadow-sm text-xs font-semibold text-primary hover:bg-primary/10 transition-all active:scale-95 cursor-pointer"
          aria-label="Select Language"
        >
          <Globe className="w-4 h-4 text-primary" />
          <span>{currentLanguage}</span>
        </button>
      </div>
    </header>
  );
};
