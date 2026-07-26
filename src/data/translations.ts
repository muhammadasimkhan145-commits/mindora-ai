import { Language, CategoryInfo, Quote, WellnessTip } from '../types';

export const UI_LABELS: Record<string, Record<Language, string>> = {
  appName: {
    English: "Mindora AI",
    Urdu: "مینڈورا AI",
    "Roman Urdu": "Mindora AI"
  },
  heroHeading: {
    English: "Understand Your Mind, Improve Your Wellbeing",
    Urdu: "اپنے ذہن کو سمجھیں، اپنی فلاح و بہبود کو بہتر بنائیں",
    "Roman Urdu": "Apne Zehen Ko Samjhein, Apni Behtari Mein Izafa Karein"
  },
  heroSubheading: {
    English: "An AI psychology companion for self-awareness, learning and emotional wellbeing.",
    Urdu: "خود آگاہی، سیکھنے اور جذباتی بہتری کے لیے آپ کا AI نفسیاتی ساتھی۔",
    "Roman Urdu": "Khud aagahi, sekhne aur jazbati behtari ke liye aap ka AI psychology companion."
  },
  startAssessment: {
    English: "Start Assessment",
    Urdu: "تشخیص شروع کریں",
    "Roman Urdu": "Assessment Shuru Karein"
  },
  assessmentSub: {
    English: "Deep dive into your emotional patterns",
    Urdu: "اپنے جذباتی انداز کو تفصیل سے جانیں",
    "Roman Urdu": "Apne jazbati patterns ko samjhein"
  },
  explorePsychology: {
    English: "Explore Psychology",
    Urdu: "نفسیات کی تلاش",
    "Roman Urdu": "Explore Psychology"
  },
  exploreSub: {
    English: "Learn library of concepts & theories",
    Urdu: "تصورات اور نظریات کی لائبریری",
    "Roman Urdu": "Psychology ki library se sikhein"
  },
  askAiAssistant: {
    English: "Ask AI Assistant",
    Urdu: "AI اسسٹنٹ سے پوچھیں",
    "Roman Urdu": "Ask AI Assistant"
  },
  askSub: {
    English: "Instant study & concept helper",
    Urdu: "فوری تعلیمی مددگار",
    "Roman Urdu": "Instant psychology study buddy"
  },
  dailyGrowth: {
    English: "Daily Growth & Tips",
    Urdu: "روزانہ کی رہنمائی اور تجاویز",
    "Roman Urdu": "Daily Growth & Tips"
  },
  seeAll: {
    English: "See all",
    Urdu: "سب دیکھیں",
    "Roman Urdu": "Sab Dekhein"
  },
  quoteOfTheDay: {
    English: "Daily Wellness Quote",
    Urdu: "روزانہ کا قول",
    "Roman Urdu": "Daily Wellness Quote"
  },
  disclaimerText: {
    English: "Mindora AI provides educational screening support and awareness. It is not a replacement for a mental health professional.",
    Urdu: "مینڈورا AI صرف تعلیمی اور آگاہی کی معاونت فراہم کرتا ہے۔ یہ ماہرِ نفسیات یا علاج کا متبادل نہیں ہے۔",
    "Roman Urdu": "Mindora AI sirf taleemi aagahi aur screening support deta hai. Yeh kisi professional doctor ya therapist ka mutabadil nahi hai."
  },
  redWarningDisclaimer: {
    English: "This result is only a screening and awareness result. It is not a confirmed diagnosis. Please consult a qualified mental health professional for proper evaluation.",
    Urdu: "یہ نتیجہ صرف ایک ابتدائی سکریننگ اور آگاہی ہے۔ یہ باضابطہ طبی تشخیص نہیں ہے۔ براہ کرم مناسب معائنے کے لیے کسی ماہر نفسیات سے رجوع کریں۔",
    "Roman Urdu": "Yeh result sirf ek screening aur aagahi hai. Yeh koi confirmed diagnosis nahi hai. Barah-e-karam proper evaluation ke liye qualified mental health professional se rabta karein."
  },
  navHome: {
    English: "Home",
    Urdu: "ہوم",
    "Roman Urdu": "Home"
  },
  navAssessment: {
    English: "Assessment",
    Urdu: "تشخیص",
    "Roman Urdu": "Assessment"
  },
  navExplore: {
    English: "Explore",
    Urdu: "ایکسپلور",
    "Roman Urdu": "Explore"
  },
  navStudy: {
    English: "Study AI",
    Urdu: "سٹڈی AI",
    "Roman Urdu": "Study AI"
  },
  navCompanion: {
    English: "Companion",
    Urdu: "ہمدرد AI",
    "Roman Urdu": "Companion"
  },
  languageSelectTitle: {
    English: "Select App Language",
    Urdu: "زبان منتخب کریں",
    "Roman Urdu": "Select App Language"
  },
  selectLanguageSub: {
    English: "Controls UI and AI Assistant responses",
    Urdu: "ایپ اور AI اسسٹنٹ کی زبان تبدیل کریں",
    "Roman Urdu": "Controls UI and AI responses"
  },
  searchPlaceholder: {
    English: "Search psychology concepts, disorders, therapies...",
    Urdu: "نفسیاتی تصورات، بیماریاں، تھراپی تلاش کریں...",
    "Roman Urdu": "Search psychology concepts, disorders, therapies..."
  }
};

export const DAILY_QUOTES: Quote[] = [
  {
    id: "1",
    author: "Abraham Maslow",
    quote: {
      English: "What is necessary to change a person is to change his awareness of himself.",
      Urdu: "کسی انسان کو بدلنے کے لیے ضروری ہے کہ اس کی اپنے بارے میں آگاہی کو بدلا جائے۔",
      "Roman Urdu": "Kisi insan ko badalne ke liye zaroori hai ke uski apne baare mein aagahi ko badla jaye."
    }
  },
  {
    id: "2",
    author: "Carl Rogers",
    quote: {
      English: "The curious paradox is that when I accept myself just as I am, then I can change.",
      Urdu: "عجیب متضاد بات یہ ہے کہ جب میں خود کو ویسا ہی قبول کر لیتا ہوں جیسا میں ہوں، تو میں بدل سکتا ہوں۔",
      "Roman Urdu": "Ajeeb baat yeh hai ke jab main khud ko waisa hi qbool kar leta hoon jaisa main hoon, tabhi main badal sakta hoon."
    }
  },
  {
    id: "3",
    author: "Viktor Frankl",
    quote: {
      English: "Between stimulus and response there is a space. In that space is our power to choose our response.",
      Urdu: "محرک اور ردِ عمل کے درمیان ایک وقفہ ہوتا ہے۔ اسی وقفے میں ہمارے انتخاب کی طاقت چھپی ہے۔",
      "Roman Urdu": "Stimulus aur response ke darmiyan ek jagah hoti hai. Usi jagah mein hamara chunao karne ka ikhtiyar hota hai."
    }
  },
  {
    id: "4",
    author: "Carl Jung",
    quote: {
      English: "Who looks outside, dreams; who looks inside, awakes.",
      Urdu: "جو باہر دیکھتا ہے وہ خواب دیکھتا ہے؛ جو اندر دیکھتا ہے وہ بیدار ہوتا ہے۔",
      "Roman Urdu": "Jo bahar dekhta hai woh khwab dekhta hai; jo andar dekhta hai woh bedar hota hai."
    }
  }
];

export const WELLNESS_TIPS: WellnessTip[] = [
  {
    id: "tip-1",
    category: "mental_health",
    icon: "lightbulb",
    title: {
      English: "5 Ways to Manage Daily Stress",
      Urdu: "روزمرہ کے تناؤ کو کنٹرول کرنے کے 5 طریقے",
      "Roman Urdu": "Daily Stress Ko Manage Karne Ke 5 Tariqay"
    },
    subtitle: {
      English: "Simple daily micro-habits for calm",
      Urdu: "سکون کے لیے سادہ روزمرہ کی عادات",
      "Roman Urdu": "Sukun ke liye aasan daily habits"
    },
    content: {
      English: "Stress triggers the body's 'fight or flight' mechanism. By deliberately slowing down breath and regulating sensory input, we can signal safety to the nervous system.",
      Urdu: "تناؤ جسم کے دفاعی نظام کو متحرک کرتا ہے۔ سانس کو آہستہ کرنے اور پرسکون ماحول بنا کر ہم اپنے اعصابی نظام کو سکون فراہم کر سکتے ہیں۔",
      "Roman Urdu": "Stress jism ke fight-or-flight system ko trigger karta hai. Gehri saans lene se nervous system shant hota hai."
    },
    keyPoints: {
      English: [
        "4-7-8 Breathing: Inhale for 4s, hold for 7s, exhale for 8s.",
        "Take 5-minute digital detox breaks during work.",
        "Identify and write down what is in your control vs outside your control.",
        "Engage in light physical walking to process cortisol.",
        "Practice progressive muscle relaxation before sleep."
      ],
      Urdu: [
        "4-7-8 سانس کی مشق: 4 سیکنڈ سانس لیں، 7 سیکنڈ روکیں، 8 سیکنڈ خارج کریں۔",
        "کام کے دوران 5 منٹ کا سکرین سے وقفہ لیں۔",
        "لکھیں کہ کیا آپ کے اختیار میں ہے اور کیا نہیں۔",
        "ہلکی چہل قدمی کریں۔",
        "سوتے وقت باڈی ریلیکسیشن مشق کریں۔"
      ],
      "Roman Urdu": [
        "4-7-8 breathing exercise follow karein.",
        "Kaam ke dauran 5 minute ka screen break lein.",
        "Jo cheez aapke control mein hai us par focus karein.",
        "Rozana 15-20 minute walk karein.",
        "Sone se pehle muscle relaxation karein."
      ]
    }
  },
  {
    id: "tip-2",
    category: "self_awareness",
    icon: "visibility",
    title: {
      English: "Journaling for Emotional Clarity",
      Urdu: "جذباتی وضاحت کے لیے ڈائری لکھنا",
      "Roman Urdu": "Jazbati Shaffafiyat Ke Liye Journaling"
    },
    subtitle: {
      English: "How writing externalizes racing thoughts",
      Urdu: "لکھنے سے سوچوں کا بوجھ کیسے کم ہوتا ہے",
      "Roman Urdu": "Likhne se zehni bojh kaise kam hota hai"
    },
    content: {
      English: "Expressive writing transfers internal cognitive clutter onto paper, activating the prefrontal cortex and reducing emotional reactivity in the amygdala.",
      Urdu: "اپنے جذبات کو کاغذ پر منتقل کرنے سے ذہن کا بوجھ کم ہوتا ہے اور سوچنے سمجھنے کی صلاحیت بہتر ہوتی ہے۔",
      "Roman Urdu": "Apne jazbat ko kaghaz par likhne se zehn shant hota hai aur dimag ke sochne wale hisse ko madad milti hai."
    },
    keyPoints: {
      English: [
        "Brain Dump: Write continuously for 3 minutes without judging your grammar.",
        "Name the Emotion: 'I am feeling anxious because...'",
        "Evidence Check: Ask 'Is this thought 100% true or an assumption?'",
        "Gratitude Anchor: End by listing 2 small positive moments.",
        "Reflect weekly to notice recurring triggers."
      ],
      Urdu: [
        "3 منٹ تک بغیر کسی جھجھک کے اپنی سوچیں لکھیں۔",
        "جذباتی نام دیں: 'میں بے چینی محسوس کر رہا ہوں کیونکہ...'",
        "تحقیق کریں: 'کیا یہ سوچ واقعی سچ ہے؟'",
        "شکر گزاری: دن کی 2 اچھی باتوں پر شکر ادا کریں۔",
        "ہر ہفتے اپنے جذباتی پیٹرن کا جائزہ لیں۔"
      ],
      "Roman Urdu": [
        "3 minute bina ruke apne khayalat likhein.",
        "Feeling ko naam dein: 'Mujhe anxiety ho rahi hai kyunke...'",
        "Check karein: Kya yeh khayal sach hai ya sirf assumption?",
        "Shukarguzari: Din ki 2 achhi baatein likhein.",
        "Weekly basis par apne mood ko observe karein."
      ]
    }
  },
  {
    id: "tip-3",
    category: "emotional_balance",
    icon: "balance",
    title: {
      English: "Mastering Your Inner Dialogue",
      Urdu: "اپنے اندرونی مکالمے کو بہتر بنانا",
      "Roman Urdu": "Apne Andar Ke Lahje Ko Behtar Banayein"
    },
    subtitle: {
      English: "Transform harsh self-criticism into self-compassion",
      Urdu: "سخت خود تنقیدی کو ہمدردی میں بدلیں",
      "Roman Urdu": "Sakht khud-tanqeed ko hamdardi mein badlein"
    },
    content: {
      English: "Our internal self-talk directly conditions our mood and self-esteem. Shifting from an inner critic to an inner coach builds psychological resilience.",
      Urdu: "ہماری اپنے آپ سے بات چیت ہمارے موڈ کو متاثر کرتی ہے۔ اپنے اندر کے سخت ناقد کو ایک مہربان استاد میں بدلیں۔",
      "Roman Urdu": "Hamari andar ki baatein hamare mood ko banati hain. Apne inner critic ko dost banayein."
    },
    keyPoints: {
      English: [
        "Notice cognitive distortions like 'all-or-nothing' thinking.",
        "Speak to yourself as you would to a dear friend in distress.",
        "Replace 'I must be perfect' with 'I am learning and doing my best'.",
        "Acknowledge mistakes as valuable learning experiences.",
        "Practice compassionate self-touch (hand over heart) during stress."
      ],
      Urdu: [
        "منفی اور یکطرفہ سوچوں کو پہچانیں۔",
        "اپنے آپ سے ایسے بات کریں جیسے کسی عزیز دوست سے کرتے ہیں۔",
        "'مجھے کامل ہونا ہے' کو 'میں سیکھ رہا ہوں' سے بدلیں۔",
        "غلطیوں کو سیکھنے کا ذریعہ سمجھیں۔",
        "مشکل وقت میں دل پر ہاتھ رکھ کر پرسکون ہوں۔"
      ],
      "Roman Urdu": [
        "Manfi khayalat ko pehchanein.",
        "Apne aap se wese baat karein jaise dost se karte hain.",
        "'Mujhe perfect hona hai' ki jagah 'Main seekh raha hoon' kahein.",
        "Ghaltiyon se seekhne ki koshish karein.",
        "Mushkil waqt mein saans gahri lein aur khud par raham karein."
      ]
    }
  }
];

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "basic",
    name: {
      English: "Basic Psychology",
      Urdu: "بنیادی نفسیات",
      "Roman Urdu": "Basic Psychology"
    },
    icon: "psychology"
  },
  {
    id: "disorders",
    name: {
      English: "Disorders",
      Urdu: "نفسیاتی بیماریاں",
      "Roman Urdu": "Disorders"
    },
    icon: "healing"
  },
  {
    id: "experiments",
    name: {
      English: "Famous Experiments",
      Urdu: "مشہور تجربات",
      "Roman Urdu": "Famous Experiments"
    },
    icon: "biotech"
  },
  {
    id: "theories",
    name: {
      English: "Theories",
      Urdu: "نفسیاتی نظریات",
      "Roman Urdu": "Theories"
    },
    icon: "schema"
  },
  {
    id: "therapies",
    name: {
      English: "Therapies",
      Urdu: "تھراپی کے طریقے",
      "Roman Urdu": "Therapies"
    },
    icon: "spa"
  }
];
