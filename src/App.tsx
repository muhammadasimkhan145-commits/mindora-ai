import React, { useState } from 'react';
import { ActiveTab, Language } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { LanguageModal } from './components/LanguageModal';
import { HomeView } from './components/HomeView';
import { AssessmentView } from './components/AssessmentView';
import { ExploreView } from './components/ExploreView';
import { StudyChatView } from './components/StudyChatView';
import { CompanionView } from './components/CompanionView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('English');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [studyInitialPrompt, setStudyInitialPrompt] = useState<string>('');

  const handleNavigateToStudy = (prompt?: string) => {
    if (prompt) {
      setStudyInitialPrompt(prompt);
    }
    setActiveTab('study');
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-sans antialiased selection:bg-primary/20 flex flex-col">
      {/* Top Header */}
      <Header
        currentLanguage={currentLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomeView
            currentLanguage={currentLanguage}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'assessment' && (
          <AssessmentView
            currentLanguage={currentLanguage}
            onNavigateToStudy={handleNavigateToStudy}
          />
        )}

        {activeTab === 'explore' && (
          <ExploreView
            currentLanguage={currentLanguage}
            onNavigateToStudy={handleNavigateToStudy}
          />
        )}

        {activeTab === 'study' && (
          <StudyChatView
            currentLanguage={currentLanguage}
            initialPrompt={studyInitialPrompt}
            onClearInitialPrompt={() => setStudyInitialPrompt('')}
          />
        )}

        {activeTab === 'companion' && (
          <CompanionView
            currentLanguage={currentLanguage}
          />
        )}
      </main>

      {/* Bottom Glassmorphic Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentLanguage={currentLanguage}
      />

      {/* Language Selector Modal */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        currentLanguage={currentLanguage}
        onSelectLanguage={(lang) => setCurrentLanguage(lang)}
      />
    </div>
  );
}
