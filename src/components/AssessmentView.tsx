import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Lightbulb, AlertTriangle, ShieldCheck, RefreshCw, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import { ActiveTab, Language, AssessmentResult } from '../types';
import { ASSESSMENT_QUESTIONS, CONDITION_DATABASE } from '../data/assessment';
import { UI_LABELS } from '../data/translations';

interface AssessmentViewProps {
  currentLanguage: Language;
  onNavigateToStudy: (initialMessage?: string) => void;
}

export const AssessmentView: React.FC<AssessmentViewProps> = ({
  currentLanguage,
  onNavigateToStudy,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (points: number) => {
    const updated = { ...userAnswers, [currentQuestion.id]: points };
    setUserAnswers(updated);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult(updated);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResult = (answers: Record<number, number>) => {
    // Tally points by category
    const categoryScores: Record<string, number> = {};
    let totalScore = 0;

    ASSESSMENT_QUESTIONS.forEach((q) => {
      const pts = answers[q.id] || 0;
      totalScore += pts;
      categoryScores[q.category] = (categoryScores[q.category] || 0) + pts;
    });

    // Determine highest scoring category
    let dominantCategory = 'normal';
    let maxPts = 0;

    Object.entries(categoryScores).forEach(([cat, pts]) => {
      if (pts > maxPts) {
        maxPts = pts;
        dominantCategory = cat;
      }
    });

    // If overall symptoms score is low (< 7), classify as normal range
    if (totalScore < 7 || maxPts < 3) {
      dominantCategory = 'normal';
    }

    const fallbackResult = CONDITION_DATABASE[dominantCategory]?.[currentLanguage] || CONDITION_DATABASE.normal[currentLanguage];
    setAssessmentResult(fallbackResult);
    setIsCompleted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setAssessmentResult(null);
  };

  if (isCompleted && assessmentResult) {
    return (
      <div className="flex flex-col w-full max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-5 pt-4 pb-28 animate-fadeIn gap-5">
        {/* Red Warning Box Disclaimer */}
        <div className="bg-error-container/80 p-4 rounded-2xl border border-error/20 flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-on-error-container">
              Professional Disclaimer
            </span>
            <p className="text-xs font-medium text-on-error-container leading-relaxed mt-0.5">
              {UI_LABELS.redWarningDisclaimer[currentLanguage]}
            </p>
          </div>
        </div>

        {/* Result Summary Hero */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-surface-container-high text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-inner">
            {assessmentResult.isNormal ? (
              <ShieldCheck className="w-8 h-8 text-primary" />
            ) : (
              <Sparkles className="w-8 h-8 text-primary" />
            )}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Assessment Result
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-on-surface mt-1">
              {assessmentResult.possibleConcern}
            </h1>
          </div>
          <p className="text-sm font-medium text-on-surface-variant max-w-md">
            "{assessmentResult.summary}"
          </p>
        </div>

        {/* Detailed Breakdown Bento Grid */}
        <div className="grid grid-cols-1 gap-4">
          {/* Why Identified */}
          <div className="bg-surface-container-low p-5 rounded-3xl border border-surface-container flex flex-col gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              1. Why we identify this in you
            </span>
            <h3 className="text-base font-bold text-on-surface">
              Observation Reasoning
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {assessmentResult.whyIdentified.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface-variant">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* About This Condition */}
          <div className="bg-primary-container/15 p-5 rounded-3xl border border-primary/20 flex flex-col gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              2. About this condition
            </span>
            <h3 className="text-base font-bold text-on-surface">
              Educational Breakdown
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {assessmentResult.aboutCondition}
            </p>
          </div>

          {/* Daily Life Examples */}
          <div className="bg-white p-5 rounded-3xl border border-surface-container-high flex flex-col gap-2 shadow-xs">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              3. Daily Life Examples
            </span>
            <ul className="flex flex-col gap-2 mt-1">
              {assessmentResult.examples.map((ex, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-on-surface">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment & Therapy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-2xl border border-surface-container-high shadow-xs flex flex-col gap-1">
              <span className="text-xs font-bold text-tertiary uppercase">Treatment</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {assessmentResult.treatment}
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-surface-container-high shadow-xs flex flex-col gap-1">
              <span className="text-xs font-bold text-primary uppercase">Recommended Therapy</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {assessmentResult.therapy}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button
            onClick={() => onNavigateToStudy(`Can you explain my assessment result about ${assessmentResult.possibleConcern}?`)}
            className="flex-1 py-3.5 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Results with AI</span>
          </button>
          <button
            onClick={handleRestart}
            className="py-3.5 px-6 rounded-full bg-surface-container text-on-surface font-bold text-sm hover:bg-surface-container-high flex items-center justify-center gap-2 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>
    );
  }

  // Questionnaire Active Flow
  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100);

  return (
    <div className="flex flex-col w-full max-w-md sm:max-w-xl md:max-w-4xl mx-auto px-5 pt-3 pb-28 animate-fadeIn gap-5">
      {/* Progress Bar Header */}
      <div className="flex flex-col gap-1.5 bg-white p-4 rounded-2xl border border-surface-container-high shadow-xs">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-primary">
            Step {currentStep + 1} of {totalQuestions}
          </span>
          <span className="text-on-surface-variant italic text-[11px]">
            Emotional Wellbeing Scan
          </span>
        </div>
        <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-container transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-surface-container-high flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-on-surface leading-tight">
            {currentQuestion.question[currentLanguage]}
          </h2>
          <p className="text-xs text-on-surface-variant/90 leading-relaxed bg-surface-container-low p-3 rounded-xl">
            {currentQuestion.context[currentLanguage]}
          </p>
        </div>

        {/* Options List */}
        <div className="flex flex-col gap-2.5">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectOption(opt.points)}
              className="w-full text-left p-4 rounded-2xl bg-surface-container hover:bg-primary-container/30 border border-transparent hover:border-primary/20 transition-all flex items-center justify-between group active:scale-[0.99] cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                {opt.label[currentLanguage]}
              </span>
              <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Questionnaire Controls & Friendly Tip */}
      <div className="flex flex-col gap-3">
        {currentStep > 0 && (
          <button
            onClick={handlePrev}
            className="self-start flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant hover:bg-surface-container-high"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Question</span>
          </button>
        )}

        <div className="p-4 bg-secondary-container/30 rounded-2xl border border-secondary/10 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <p className="text-xs italic text-on-secondary-container leading-relaxed">
            Be as honest as you can. There are no "wrong" answers—just clues to help us understand your inner world better.
          </p>
        </div>
      </div>
    </div>
  );
};
