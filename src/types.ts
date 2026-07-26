export type Language = 'English' | 'Urdu' | 'Roman Urdu';

export type ActiveTab = 'home' | 'assessment' | 'explore' | 'study' | 'companion';

export interface Quote {
  id: string;
  quote: Record<Language, string>;
  author: string;
  title?: string;
}

export interface WellnessTip {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  icon: string;
  category: 'mental_health' | 'self_awareness' | 'emotional_balance';
  content: Record<Language, string>;
  keyPoints: Record<Language, string[]>;
}

export interface AssessmentOption {
  label: Record<Language, string>;
  points: number; // 0, 1, 2, 3
}

export interface AssessmentQuestion {
  id: number;
  question: Record<Language, string>;
  context: Record<Language, string>;
  category: 'anxiety' | 'depression' | 'ocd' | 'ptsd' | 'panic' | 'social_anxiety' | 'adhd' | 'bipolar' | 'sleep' | 'eating';
  options: AssessmentOption[];
}

export interface AssessmentResult {
  isNormal: boolean;
  dominantCategory: string;
  summary: string;
  possibleConcern: string;
  whyIdentified: string[];
  aboutCondition: string;
  examples: string[];
  treatment: string;
  therapy: string;
}

export interface PsychologyTopic {
  id: string;
  categoryId: 'basic' | 'disorders' | 'experiments' | 'theories' | 'therapies';
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  explanation: Record<Language, string>;
  examples: Record<Language, string[]>;
  importantPoints: Record<Language, string[]>;
  icon: string;
  badge?: string;
  imageUrl?: string;
  founder?: string;
  discoveryDate?: string;
  backgroundHistory?: Record<Language, string>;
  mainConceptsProcess?: Record<Language, string[]>;
}

export interface CategoryInfo {
  id: 'basic' | 'disorders' | 'experiments' | 'theories' | 'therapies';
  name: Record<Language, string>;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  isError?: boolean;
}
