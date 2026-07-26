import React from 'react';
import { Globe, X, Check } from 'lucide-react';
import { Language } from '../types';
import { UI_LABELS } from '../data/translations';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSelectLanguage,
}) => {
  if (!isOpen) return null;

  const languages: { id: Language; label: string; native: string; description: string }[] = [
    {
      id: 'English',
      label: 'English',
      native: 'English',
      description: 'Default interface & AI explanations in clear English.'
    },
    {
      id: 'Urdu',
      label: 'Urdu',
      native: 'اردو',
      description: 'مکمل انٹرفیس اور AI جوابات اردو زبان میں۔'
    },
    {
      id: 'Roman Urdu',
      label: 'Roman Urdu',
      native: 'Roman Urdu',
      description: 'Urdu in Latin script for easy mobile reading.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-white/60 flex flex-col gap-5">
        <div className="flex items-center justify-between pb-2 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-on-surface">
                {UI_LABELS.languageSelectTitle[currentLanguage]}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {UI_LABELS.selectLanguageSub[currentLanguage]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {languages.map((lang) => {
            const isSelected = currentLanguage === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => {
                  onSelectLanguage(lang.id);
                  onClose();
                }}
                className={`w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition-all ${
                  isSelected
                    ? 'bg-primary/10 border-2 border-primary text-primary shadow-sm'
                    : 'bg-surface-container-low hover:bg-surface-container border border-surface-container-high text-on-surface'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">{lang.label}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed">
                      {lang.native}
                    </span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant/80 mt-0.5">
                    {lang.description}
                  </span>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
