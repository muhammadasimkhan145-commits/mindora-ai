import React, { useState } from 'react';
import { ArrowRight, BookOpen, MessageSquare, Quote as QuoteIcon, Lightbulb, Eye, Scale, RefreshCw, ChevronRight, Info, Sparkles, X } from 'lucide-react';
import { ActiveTab, Language, WellnessTip } from '../types';
import { UI_LABELS, DAILY_QUOTES, WELLNESS_TIPS } from '../data/translations';
import heroCalmImage from '../assets/images/mindora_hero_calm_1785066109512.jpg';

interface HomeViewProps {
  currentLanguage: Language;
  onNavigate: (tab: ActiveTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ currentLanguage, onNavigate }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedTip, setSelectedTip] = useState<WellnessTip | null>(null);

  const currentQuote = DAILY_QUOTES[quoteIndex % DAILY_QUOTES.length];

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % DAILY_QUOTES.length);
  };

  return (
    <div className="flex flex-col w-full pb-28 animate-fadeIn">
      {/* Hero Section with Calming Landscape */}
      <section className="relative w-full h-[320px] rounded-b-[36px] overflow-hidden shadow-lg shadow-primary/10">
        <img
          src={heroCalmImage}
          alt="Calming Mindora Scenery"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[10s] hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Soft Gradient Overlay for Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative h-full flex flex-col justify-end p-6 max-w-md sm:max-w-xl md:max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary font-bold text-[11px] mb-2 self-start border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mindora AI Companion</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface leading-tight mb-2 drop-shadow-sm">
            {UI_LABELS.heroHeading[currentLanguage]}
          </h1>
          <p className="text-sm font-medium text-on-surface-variant max-w-[92%] leading-relaxed">
            {UI_LABELS.heroSubheading[currentLanguage]}
          </p>
        </div>
      </section>

      <div className="max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-5 w-full flex flex-col gap-6 -mt-6 relative z-10">
        {/* Daily Wellness Quote Section */}
        <section className="bg-white/90 backdrop-blur-md rounded-[28px] p-5 shadow-[0_12px_32px_rgba(103,75,181,0.08)] border border-white/80 transition-all hover:shadow-xl">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <QuoteIcon className="w-6 h-6 text-primary-container fill-primary/10" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {UI_LABELS.quoteOfTheDay[currentLanguage]}
              </span>
            </div>
            <button
              onClick={handleNextQuote}
              className="p-1.5 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
              title="Next Quote"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm sm:text-base italic font-medium text-on-surface leading-relaxed mb-3">
            "{currentQuote.quote[currentLanguage]}"
          </p>
          <p className="text-xs font-bold text-primary text-right">
            — {currentQuote.author}
          </p>
        </section>

        {/* Main Action Cards */}
        <section className="grid grid-cols-1 gap-3.5">
          {/* Primary Action: Start Assessment */}
          <button
            onClick={() => onNavigate('assessment')}
            className="relative overflow-hidden group w-full bg-gradient-to-r from-primary via-primary-container to-secondary p-5 rounded-[28px] shadow-xl shadow-primary/20 flex items-center justify-between text-left transition-all active:scale-[0.98] cursor-pointer"
          >
            <div className="flex flex-col z-10">
              <span className="text-xl font-bold text-white mb-0.5">
                {UI_LABELS.startAssessment[currentLanguage]}
              </span>
              <span className="text-xs font-medium text-white/85">
                {UI_LABELS.assessmentSub[currentLanguage]}
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white z-10 transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
          </button>

          {/* Secondary Grid Actions */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* Explore Psychology */}
            <button
              onClick={() => onNavigate('explore')}
              className="bg-secondary-container/60 hover:bg-secondary-container p-3 rounded-[22px] flex flex-col gap-2 text-left transition-all active:scale-[0.96] border border-secondary/10 cursor-pointer shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-white/80 text-secondary flex items-center justify-center shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-xs text-on-secondary-container">
                  {UI_LABELS.explorePsychology[currentLanguage]}
                </p>
                <p className="text-[10px] text-on-secondary-container/80 mt-0.5 line-clamp-1">
                  Library
                </p>
              </div>
            </button>

            {/* Ask AI Study Buddy */}
            <button
              onClick={() => onNavigate('study')}
              className="bg-primary-container/60 hover:bg-primary-container p-3 rounded-[22px] flex flex-col gap-2 text-left transition-all active:scale-[0.96] border border-primary/10 cursor-pointer shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-white/80 text-primary flex items-center justify-center shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-xs text-primary">
                  Study AI
                </p>
                <p className="text-[10px] text-primary/80 mt-0.5 line-clamp-1">
                  Learning
                </p>
              </div>
            </button>

            {/* AI Companion */}
            <button
              onClick={() => onNavigate('companion')}
              className="bg-tertiary-fixed/60 hover:bg-tertiary-fixed p-3 rounded-[22px] flex flex-col gap-2 text-left transition-all active:scale-[0.96] border border-tertiary/10 cursor-pointer shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-white/80 text-tertiary flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-xs text-on-tertiary-fixed-variant">
                  Companion
                </p>
                <p className="text-[10px] text-on-tertiary-fixed-variant/80 mt-0.5 line-clamp-1">
                  Chat & Support
                </p>
              </div>
            </button>
          </div>
        </section>

        {/* Daily Growth & Tips Section */}
        <section className="flex flex-col gap-3.5 mt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-on-surface">
              {UI_LABELS.dailyGrowth[currentLanguage]}
            </h2>
            <span className="text-xs font-semibold text-primary">3 Active Guides</span>
          </div>

          <div className="flex flex-col gap-3">
            {WELLNESS_TIPS.map((tip) => {
              const getIcon = (iconName: string) => {
                if (iconName === 'lightbulb') return <Lightbulb className="w-6 h-6 text-primary" />;
                if (iconName === 'visibility') return <Eye className="w-6 h-6 text-secondary" />;
                return <Scale className="w-6 h-6 text-tertiary" />;
              };

              return (
                <div
                  key={tip.id}
                  onClick={() => setSelectedTip(tip)}
                  className="p-4 bg-white rounded-2xl shadow-sm border border-surface-container-high hover:shadow-md transition-all flex items-center justify-between cursor-pointer active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center flex-shrink-0">
                      {getIcon(tip.icon)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-on-surface truncate">
                        {tip.title[currentLanguage]}
                      </h3>
                      <p className="text-xs text-on-surface-variant truncate">
                        {tip.subtitle[currentLanguage]}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-outline-variant flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclaimer Footer Box */}
        <footer className="mt-4 mb-2 p-4 bg-surface-container-low/80 rounded-2xl border border-surface-container-high flex items-start gap-3">
          <Info className="w-5 h-5 text-on-surface-variant flex-shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant/90 leading-relaxed">
            {UI_LABELS.disclaimerText[currentLanguage]}
          </p>
        </footer>
      </div>

      {/* Wellness Tip Modal Detail */}
      {selectedTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-white/80 max-h-[85vh] overflow-y-auto flex flex-col gap-4">
            <div className="flex items-start justify-between pb-3 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-on-surface">
                    {selectedTip.title[currentLanguage]}
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    {selectedTip.subtitle[currentLanguage]}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTip(null)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-2xl border border-surface-container">
              {selectedTip.content[currentLanguage]}
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                Key Actionable Steps
              </h4>
              <ul className="flex flex-col gap-2">
                {selectedTip.keyPoints[currentLanguage].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedTip(null)}
              className="mt-2 w-full py-3 rounded-full bg-primary text-white font-bold text-sm shadow-md shadow-primary/20"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
