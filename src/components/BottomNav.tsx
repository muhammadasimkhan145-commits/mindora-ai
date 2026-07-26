import React from 'react';
import { Home, ClipboardList, Compass, BookOpenCheck, HeartHandshake } from 'lucide-react';
import { ActiveTab, Language } from '../types';
import { UI_LABELS } from '../data/translations';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  currentLanguage: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  currentLanguage,
}) => {
  const navItems: { id: ActiveTab; labelKey: string; icon: React.ReactNode }[] = [
    {
      id: 'home',
      labelKey: 'navHome',
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 'assessment',
      labelKey: 'navAssessment',
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      id: 'explore',
      labelKey: 'navExplore',
      icon: <Compass className="w-5 h-5" />
    },
    {
      id: 'study',
      labelKey: 'navStudy',
      icon: <BookOpenCheck className="w-5 h-5" />
    },
    {
      id: 'companion',
      labelKey: 'navCompanion',
      icon: <HeartHandshake className="w-5 h-5" />
    }
  ];

  return (
    <nav className="fixed bottom-4 inset-x-0 z-40 max-w-md sm:max-w-xl mx-auto px-4 pb-safe">
      <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_12px_32px_rgba(103,75,181,0.15)] rounded-full h-16 p-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const label = UI_LABELS[item.labelKey]?.[currentLanguage] || item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${
                isActive
                  ? 'bg-primary text-white font-bold shadow-md shadow-primary/30'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/50 font-medium'
              }`}
            >
              <div className="transition-transform duration-200">
                {item.icon}
              </div>
              <span className="text-[11px] leading-tight mt-0.5">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
