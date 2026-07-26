import React, { useState } from 'react';
import { Search, BookOpen, MessageSquare, ArrowRight, X, Sparkles, CheckCircle2, Lightbulb, Wind, Repeat, Bell, Zap, ChevronRight } from 'lucide-react';
import { Language, PsychologyTopic } from '../types';
import { PSYCHOLOGY_TOPICS } from '../data/explore';
import { CATEGORIES, UI_LABELS } from '../data/translations';

interface ExploreViewProps {
  currentLanguage: Language;
  onNavigateToStudy: (topicTitle: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  currentLanguage,
  onNavigateToStudy,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<PsychologyTopic | null>(null);

  // Filter topics
  const filteredTopics = PSYCHOLOGY_TOPICS.filter((topic) => {
    const title = topic.title[currentLanguage].toLowerCase();
    const subtitle = topic.subtitle[currentLanguage].toLowerCase();
    const explanation = topic.explanation[currentLanguage].toLowerCase();
    const q = searchQuery.toLowerCase().trim();

    const matchesSearch = !q || title.includes(q) || subtitle.includes(q) || explanation.includes(q);
    const matchesCategory = selectedCategory === 'all' || topic.categoryId === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'air': return <Wind className="w-5 h-5 text-secondary" />;
      case 'repeat': return <Repeat className="w-5 h-5 text-tertiary" />;
      case 'notifications': return <Bell className="w-5 h-5 text-primary" />;
      case 'leaderboard': return <Zap className="w-5 h-5 text-amber-500" />;
      default: return <BookOpen className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-5 pt-3 pb-28 animate-fadeIn gap-5">
      {/* Search Bar */}
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={UI_LABELS.searchPlaceholder[currentLanguage]}
          className="w-full h-12 pl-11 pr-4 rounded-full bg-white border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-xs transition-all placeholder:text-on-surface-variant/60"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer p-1"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Horizontal Category Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-5 px-5">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`flex-none px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-primary text-white shadow-md shadow-primary/20'
              : 'bg-white text-on-surface-variant hover:bg-surface-container border border-surface-container-high'
          }`}
        >
          All Topics
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-none px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-white text-on-surface-variant hover:bg-surface-container border border-surface-container-high'
            }`}
          >
            {cat.name[currentLanguage]}
          </button>
        ))}
      </div>

      {/* Topics Content Container */}
      {filteredTopics.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-3xl border border-surface-container flex flex-col items-center gap-2 shadow-xs">
          <BookOpen className="w-10 h-10 text-outline" />
          <p className="text-sm font-bold text-on-surface">No psychology topics found</p>
          <p className="text-xs text-on-surface-variant">Try searching for terms like "CBT", "Anxiety", "Pavlov", or "Memory".</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className="bg-white rounded-3xl p-5 shadow-xs hover:shadow-md border border-surface-container-high flex flex-col justify-between gap-3 transition-all active:scale-[0.98] cursor-pointer group"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-surface-container flex items-center justify-center">
                        {getTopicIcon(topic.icon)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed">
                        {topic.categoryId}
                      </span>
                    </div>
                    {topic.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
                        {topic.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                      {topic.title[currentLanguage]}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mt-1">
                      {topic.subtitle[currentLanguage]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-surface-container mt-1">
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore Topic
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <ChevronRight className="w-4 h-4 text-outline-variant" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Suggestion Banner */}
          <div className="bg-gradient-to-r from-primary-container/20 via-secondary-container/20 to-tertiary-fixed/20 p-5 rounded-3xl border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h4 className="font-bold text-sm text-on-surface">More to discover?</h4>
              <p className="text-xs text-on-surface-variant">
                We're constantly adding research topics and psychological models to our library.
              </p>
            </div>
            <button
              onClick={() => onNavigateToStudy("Suggest a psychology topic or ask any custom question...")}
              className="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-md shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all flex-shrink-0 cursor-pointer"
            >
              Ask AI Study Buddy
            </button>
          </div>
        </div>
      )}

      {/* Detail Topic Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-white/80 max-h-[85vh] overflow-y-auto flex flex-col gap-5">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-surface-container">
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {selectedTopic.categoryId}
                </span>
                <h2 className="text-lg font-bold text-on-surface">
                  {selectedTopic.title[currentLanguage]}
                </h2>
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant flex-shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Founder / Discoverer & Date if applicable */}
            {(selectedTopic.founder || selectedTopic.discoveryDate) && (
              <div className="flex items-center gap-3 bg-primary-container/20 p-3 rounded-2xl border border-primary/10 text-xs">
                {selectedTopic.founder && (
                  <div>
                    <span className="font-bold text-primary block">Founder / Key Researcher</span>
                    <span className="text-on-surface font-medium">{selectedTopic.founder}</span>
                  </div>
                )}
                {selectedTopic.discoveryDate && (
                  <div className="border-l border-primary/20 pl-3">
                    <span className="font-bold text-primary block">Year / Period</span>
                    <span className="text-on-surface font-medium">{selectedTopic.discoveryDate}</span>
                  </div>
                )}
              </div>
            )}

            {/* Background / History */}
            {selectedTopic.backgroundHistory && (
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-tertiary flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Background & History
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-2xl border border-surface-container">
                  {selectedTopic.backgroundHistory[currentLanguage]}
                </p>
              </div>
            )}

            {/* Explanation */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Explanation
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-2xl border border-surface-container">
                {selectedTopic.explanation[currentLanguage]}
              </p>
            </div>

            {/* Main Concepts / Process */}
            {selectedTopic.mainConceptsProcess && (
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Main Concepts & Process
                </h3>
                <ul className="flex flex-col gap-2 bg-white p-2">
                  {selectedTopic.mainConceptsProcess[currentLanguage].map((concept, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Real Life Examples */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" />
                Real-Life Examples
              </h3>
              <ul className="flex flex-col gap-2 bg-white p-2">
                {selectedTopic.examples[currentLanguage].map((ex, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Takeaways */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Important Takeaways
              </h3>
              <ul className="flex flex-col gap-2">
                {selectedTopic.importantPoints[currentLanguage].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                    <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Action CTA */}
            <button
              onClick={() => {
                const topicName = selectedTopic.title[currentLanguage];
                setSelectedTopic(null);
                onNavigateToStudy(`Explain ${topicName} in simple words with examples.`);
              }}
              className="w-full py-3.5 rounded-full bg-primary text-white font-bold text-sm shadow-md shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask AI Study Buddy About This Topic</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
