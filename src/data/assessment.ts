import { AssessmentQuestion, AssessmentResult, Language } from '../types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    category: "depression",
    question: {
      English: "How often have you felt little interest or pleasure in doing things lately?",
      Urdu: "حال ہی میں آپ کو کاموں میں دلچسپی یا خوشی محسوس نہ ہونے کا تجربہ کتنی بار ہوا ہے؟",
      "Roman Urdu": "Haal hi mein aap ko kaamon mein دلچسپی ya khushi na hone ka tajurba kitni baar hua hai?"
    },
    context: {
      English: "Think about your hobbies, work, social life, and daily activities over the last 2 weeks.",
      Urdu: "پچھلے 2 ہفتوں کے دوران اپنے مشغلوں، کام اور سماجی زندگی کے بارے میں سوچیں۔",
      "Roman Urdu": "Pichhle 2 hafton ke dauran apne hobbies, kaam aur social life ke baare mein sochein."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Several days", Urdu: "چند دن", "Roman Urdu": "Chand din" }, points: 1 },
      { label: { English: "More than half the days", Urdu: "آدھے سے زیادہ دن", "Roman Urdu": "Aadhe se zyada din" }, points: 2 },
      { label: { English: "Nearly every day", Urdu: "تقریباً ہر روز", "Roman Urdu": "Taqreeban har roz" }, points: 3 }
    ]
  },
  {
    id: 2,
    category: "anxiety",
    question: {
      English: "Do you find yourself worrying excessively about several different everyday issues?",
      Urdu: "کیا آپ روزمرہ کے مختلف معاملات کے بارے میں حد سے زیادہ فکر مند رہتے ہیں؟",
      "Roman Urdu": "Kya aap daily life ke alag alag mamlaat ke baare mein zaroorat se zyada worried rehte hain?"
    },
    context: {
      English: "This includes uncontrollable worry about work, family, future events, or minor daily tasks.",
      Urdu: "اس میں کام، خاندان، مستقبل یا چھوٹے روزمرہ کے کاموں کے بارے میں ناقابل کنٹرول بے چینی شامل ہے۔",
      "Roman Urdu": "Is mein kaam, family, future ya chhote daily tasks ke baare mein uncontrollable tension shamil hai."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Several days", Urdu: "چند دن", "Roman Urdu": "Chand din" }, points: 1 },
      { label: { English: "More than half the days", Urdu: "آدھے سے زیادہ دن", "Roman Urdu": "Aadhe se zyada din" }, points: 2 },
      { label: { English: "Nearly every day", Urdu: "تقریباً ہر روز", "Roman Urdu": "Taqreeban har roz" }, points: 3 }
    ]
  },
  {
    id: 3,
    category: "ocd",
    question: {
      English: "Do you feel compelled to repeat certain rituals, checking, or mental routines to ease distress?",
      Urdu: "کیا آپ بے چینی کم کرنے کے لیے بار بار ایک ہی کام، چیکنگ یا ذہنی روٹین دہرانے پر مجبور محسوس کرتے ہیں؟",
      "Roman Urdu": "Kya aap anxiety kam karne ke liye baar baar ek hi kaam, checking ya mental counting karne par majboor feel karte hain?"
    },
    context: {
      English: "Examples: checking locks/appliances repeatedly, extreme handwashing, or unwanted intrusive thoughts.",
      Urdu: "مثال کے طور پر: تالے بار بار چیک کرنا، ہاتھ دھونا، یا ناپسندیدہ بار بار آنے والے خالات۔",
      "Roman Urdu": "Examples: locks/switches baar baar check karna, extreme handwashing, ya unwanted intrusive thoughts."
    },
    options: [
      { label: { English: "Never", Urdu: "کبھی نہیں", "Roman Urdu": "Kabhi nahi" }, points: 0 },
      { label: { English: "Occasionally", Urdu: "کبھی کبھار", "Roman Urdu": "Kabhi kabhaar" }, points: 1 },
      { label: { English: "Frequently", Urdu: "اکثر", "Roman Urdu": "Aksar" }, points: 2 },
      { label: { English: "Consistently throughout the day", Urdu: "سارے دن میں مسلسل", "Roman Urdu": "Din bhar mein musalsal" }, points: 3 }
    ]
  },
  {
    id: 4,
    category: "panic",
    question: {
      English: "Have you experienced sudden, unexpected surges of intense fear or heart-racing panic?",
      Urdu: "کیا آپ نے اچانک شدید خوف، دل کی دھڑکن تیز ہونے یا خوف کے حملے محسوس کیے ہیں؟",
      "Roman Urdu": "Kya aap ne achanak intense fear, dil ki dhadkan tez hona ya panic feel kiya hai?"
    },
    context: {
      English: "Panic spikes often include feeling breathless, dizzy, or a fear of losing control without obvious danger.",
      Urdu: "پینک میں سانس پھولنا، چکر آنا یا بغیر کسی ظاہری خطرے کے خوف محسوس ہونا شامل ہے۔",
      "Roman Urdu": "Panic spikes mein saans phoolna, chakkar aana ya bina kisi wajah ke dar lagna shamil hai."
    },
    options: [
      { label: { English: "Never", Urdu: "کبھی نہیں", "Roman Urdu": "Kabhi nahi" }, points: 0 },
      { label: { English: "Once or twice", Urdu: "ایک یا دو بار", "Roman Urdu": "Ek ya do baar" }, points: 1 },
      { label: { English: "Weekly", Urdu: "ہر ہفتے", "Roman Urdu": "Har hafte" }, points: 2 },
      { label: { English: "Multiple times a week", Urdu: "ہفتے میں کئی بار", "Roman Urdu": "Hafte mein kayi baar" }, points: 3 }
    ]
  },
  {
    id: 5,
    category: "social_anxiety",
    question: {
      English: "Do you experience strong fear or discomfort about being judged, watched, or embarrassed in social situations?",
      Urdu: "کیا آپ کو محفل یا لوگوں کے سامنے بات کرتے ہوئے شرمندگی یا تنقید کا شدید خوف ہوتا ہے؟",
      "Roman Urdu": "Kya aap ko logon ke saamne baat karne ya social situations mein judged hone ka dar lagta hai?"
    },
    context: {
      English: "Such as public speaking, meeting new people, eating in public, or initiating conversations.",
      Urdu: "مثال کے طور پر: لوگوں سے ملنا، مجمع میں بولنا یا نۓ لوگوں سے بات شروع کرنا۔",
      "Roman Urdu": "Jaise public speaking, new people se milna, ya logon ke saamne baat karna."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Slight discomfort", Urdu: "تھوڑی پریشانی", "Roman Urdu": "Thodi pareshani" }, points: 1 },
      { label: { English: "Moderate fear", Urdu: "درمیانہ خوف", "Roman Urdu": "Moderate dar" }, points: 2 },
      { label: { English: "Severe avoidance of social situations", Urdu: "شدید خوف اور لوگوں سے کترانا", "Roman Urdu": "Severe dar aur logo se katrana" }, points: 3 }
    ]
  },
  {
    id: 6,
    category: "ptsd",
    question: {
      English: "Are you troubled by distressing unwanted memories, nightmares, or flashbacks of a past traumatic event?",
      Urdu: "کیا آپ ماضی کے کسی ناخوشگوار حادثے کی یادوں، خوابوں یا جھرجھری سے پریشان ہوتے ہیں؟",
      "Roman Urdu": "Kya aap pichhle kisi traumatic event ki memories, nightmares ya flashbacks se disturbed hote hain?"
    },
    context: {
      English: "Feeling jumpy, hyper-vigilant, or intensely reacting when reminded of the past trauma.",
      Urdu: "ماضی کے واقعے کی یاد دہانی پر اچانک چونک جانا یا شدید پریشان ہونا۔",
      "Roman Urdu": "Past event ki yaad aane par achanak dar jana ya restless mehsoos karna."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Rarely", Urdu: "شاذ و نادر", "Roman Urdu": "Kabhi kabhi" }, points: 1 },
      { label: { English: "Frequently", Urdu: "غالباً اکثر", "Roman Urdu": "Aksar" }, points: 2 },
      { label: { English: "Almost constantly", Urdu: "تقریباً مسلسل", "Roman Urdu": "Taqreeban har waqt" }, points: 3 }
    ]
  },
  {
    id: 7,
    category: "adhd",
    question: {
      English: "How often do you struggle with organizing tasks, keeping attention on boring details, or sitting still?",
      Urdu: "کاموں کی تنظیم، توجہ برقرار رکھنے یا ایک جگہ سکون سے بیٹھنے میں کتنی مشکل ہوتی ہے؟",
      "Roman Urdu": "Kaam organize karne, dhyan lagane ya ek jagah tik kar baithne mein kitni dikkat hoti hai?"
    },
    context: {
      English: "Trouble starting tasks, losing essentials (keys, phone), or easily getting distracted by side thoughts.",
      Urdu: "کام شروع کرنے میں دشواری، چیزیں بھول جانا، یا آسانی سے دھیان بھٹک جانا۔",
      "Roman Urdu": "Kaam delay karna, cheezein bhool jana, ya aasani se distract ho jana."
    },
    options: [
      { label: { English: "Rarely", Urdu: "شاذ و نادر", "Roman Urdu": "Rarely" }, points: 0 },
      { label: { English: "Sometimes", Urdu: "کبھی کبھی", "Roman Urdu": "Kabhi kabhi" }, points: 1 },
      { label: { English: "Often", Urdu: "اکثر", "Roman Urdu": "Aksar" }, points: 2 },
      { label: { English: "Very frequently", Urdu: "بہت زیادہ", "Roman Urdu": "Bahut zyada" }, points: 3 }
    ]
  },
  {
    id: 8,
    category: "depression",
    question: {
      English: "How often have you felt down, depressed, hopeless, or lacked energy?",
      Urdu: "آپ کو مایوسی، اداسی یا توانائی کی شدید کمی کا سامنا کتنی بار ہوتا ہے؟",
      "Roman Urdu": "Aap ko maayusi, udaasi ya energy ki kami kitni baar feel hoti hai?"
    },
    context: {
      English: "Feeling heavy, low self-esteem, or feeling that everyday tasks require immense willpower.",
      Urdu: "جسم میں تھکاوٹ، خود کو بیکار سمجھنا یا چھوٹے کام بھی دشوار لگنا۔",
      "Roman Urdu": "Bojh mehsoos hona, low energy, ya lage ke daily tasks ke liye bohot mehnat chahiye."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Several days", Urdu: "چند دن", "Roman Urdu": "Chand din" }, points: 1 },
      { label: { English: "More than half the days", Urdu: "آدھے سے زیادہ دن", "Roman Urdu": "Aadhe se zyada din" }, points: 2 },
      { label: { English: "Nearly every day", Urdu: "تقریباً ہر روز", "Roman Urdu": "Taqreeban har roz" }, points: 3 }
    ]
  },
  {
    id: 9,
    category: "bipolar",
    question: {
      English: "Do you experience periods of extremely elevated mood/energy followed by periods of deep low mood?",
      Urdu: "کیا آپ کو کبھی بہت زیادہ توانائی اور تیز سوچوں کے دورے اور پھر شدید اداسی کا سامنا ہوتا ہے؟",
      "Roman Urdu": "Kya aap ko bohot zyada energy aur fast thoughts ke baad ek dam deep sadness mehsoos hoti hai?"
    },
    context: {
      English: "Cycling between intense optimism/impulsivity with minimal sleep, and contrasting depression episodes.",
      Urdu: "کم نیند کے باوجود انتہائی سرگرمی، پھر اچانک اداسی کے ادوار۔",
      "Roman Urdu": "Kam neend mein bhi extreme energy, phir achanak depressed episode aana."
    },
    options: [
      { label: { English: "Never", Urdu: "کبھی نہیں", "Roman Urdu": "Kabhi nahi" }, points: 0 },
      { label: { English: "Rarely", Urdu: "شاذ و نادر", "Roman Urdu": "Rarely" }, points: 1 },
      { label: { English: "Occasionally", Urdu: "کبھی کبھار", "Roman Urdu": "Kabhi kabhaar" }, points: 2 },
      { label: { English: "Distinct cycling phases", Urdu: "واضح تبدیلی کے ادوار", "Roman Urdu": "Clear changing phases" }, points: 3 }
    ]
  },
  {
    id: 10,
    category: "sleep",
    question: {
      English: "How often do you have trouble falling asleep, staying asleep, or experiencing restorative sleep?",
      Urdu: "آپ کو نیند آنے، بار بار آنکھ کھلنے یا صبح تھکن محسوس کرنے کا سامنا کتنا رہتا ہے؟",
      "Roman Urdu": "Aap ko neend aane mein, baar baar jaagne mein ya subah thakawat mehsoos hone ka masla kitna rehta hai?"
    },
    context: {
      English: "Insomnia symptoms, waking up feeling unrefreshed, or irregular sleep-wake patterns.",
      Urdu: "نیند کی کمی، رات کو جاگنا، یا بستر پر گھنٹوں سوچوں میں گم رہنا۔",
      "Roman Urdu": "Neend na aana, raat ko baar baar jaagna, ya bed par ghantay sochein aana."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Several days", Urdu: "چند دن", "Roman Urdu": "Chand din" }, points: 1 },
      { label: { English: "More than half the days", Urdu: "آدھے سے زیادہ دن", "Roman Urdu": "Aadhe se zyada din" }, points: 2 },
      { label: { English: "Nearly every day", Urdu: "تقریباً ہر روز", "Roman Urdu": "Taqreeban har roz" }, points: 3 }
    ]
  },
  {
    id: 11,
    category: "eating",
    question: {
      English: "Do you experience strong guilt, anxiety, or obsession around food, body weight, or body shape?",
      Urdu: "کیا آپ کھانے، وزن یا جسمانی ساخت کے بارے میں شدید جرم یا بے چینی محسوس کرتے ہیں؟",
      "Roman Urdu": "Kya aap khane, weight ya body shape ke baare mein extreme guilt ya tension mehsoos karte hain?"
    },
    context: {
      English: "Includes restrictive eating, binge eating episodes, or intense fear of gaining weight.",
      Urdu: "کھانے کو شدید حد تک روکنا، ایک دم بہت زیادہ کھانا یا وزن بڑھنے کا شدید خوف۔",
      "Roman Urdu": "Khana extreme kam karna, ek sath zyada khana, ya weight gain ka extreme dar."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Occasionally", Urdu: "کبھی کبھار", "Roman Urdu": "Kabhi kabhaar" }, points: 1 },
      { label: { English: "Often", Urdu: "اکثر", "Roman Urdu": "Aksar" }, points: 2 },
      { label: { English: "Constantly affects my routine", Urdu: "میرے روزمرہ پر مسلسل اثر انداز", "Roman Urdu": "Daily life par constant effect" }, points: 3 }
    ]
  },
  {
    id: 12,
    category: "anxiety",
    question: {
      English: "Do physical symptoms like muscle tension, restlessness, or a feeling of being 'on edge' affect you?",
      Urdu: "کیا جسمانی علامات جیسے پٹھوں کا کھنچاؤ، بے چینی یا ہمہ وقت چکننا رہنا آپ کو متاثر کرتا ہے؟",
      "Roman Urdu": "Kya jism mein tension, restlessness, ya har waqt alert rehne ki feeling aap ko affect karti hai?"
    },
    context: {
      English: "Feeling physically tight in the neck or shoulders, clenching jaw, or feeling unable to relax.",
      Urdu: "گردن یا کندھوں میں کھنچاؤ، جبڑے بھینچنا، یا سکون سے بیٹھ نہ پانا۔",
      "Roman Urdu": "Neck/shoulders mein tightness, jaw clench karna, ya relax na ho pana."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Several days", Urdu: "چند دن", "Roman Urdu": "Chand din" }, points: 1 },
      { label: { English: "More than half the days", Urdu: "آدھے سے زیادہ دن", "Roman Urdu": "Aadhe se zyada din" }, points: 2 },
      { label: { English: "Nearly every day", Urdu: "تقریباً ہر روز", "Roman Urdu": "Taqreeban har roz" }, points: 3 }
    ]
  },
  {
    id: 13,
    category: "adhd",
    question: {
      English: "How often do you delay or avoid starting tasks that require sustained mental effort?",
      Urdu: "آپ ان کاموں کو شروع کرنے سے کتنا گریز کرتے ہیں جن میں طویل ذہنی محنت درکار ہوتی ہے؟",
      "Roman Urdu": "Aap un kaam ko delay karte hain jin mein lamba dhyan chahiye hota hai?"
    },
    context: {
      English: "Procrastinating on reports, studying, paperwork, or organizing complex assignments.",
      Urdu: "پڑھائی، دفتری کام یا پیچیدہ اسائنمنٹس کو ملتوی کرتے رہنا۔",
      "Roman Urdu": "Padhai, reports ya complex tasks ko baar baar aage talna."
    },
    options: [
      { label: { English: "Rarely", Urdu: "شاذ و نادر", "Roman Urdu": "Rarely" }, points: 0 },
      { label: { English: "Sometimes", Urdu: "کبھی کبھی", "Roman Urdu": "Kabhi kabhi" }, points: 1 },
      { label: { English: "Often", Urdu: "اکثر", "Roman Urdu": "Aksar" }, points: 2 },
      { label: { English: "Almost always", Urdu: "تقریباً ہمیشہ", "Roman Urdu": "Taqreeban hamesha" }, points: 3 }
    ]
  },
  {
    id: 14,
    category: "ocd",
    question: {
      English: "Are you bothered by persistent, intrusive thoughts that feel inconsistent with your actual values?",
      Urdu: "کیا آپ ناپسندیدہ سوچوں سے پریشان ہوتے ہیں جو آپ کی اخلاقی اقدار کے خلاف محسوس ہوتی ہیں؟",
      "Roman Urdu": "Kya aap aise unwanted thoughts se pareshan hote hain jo aap ki values ke khilaf lagein?"
    },
    context: {
      English: "Intrusive fears about contamination, causing accidental harm, or symmetry that cause mental distress.",
      Urdu: "گندگی کے بارے میں ناپسندیدہ خیالات، نقصان پہنچنے کا ڈر، یا ہر چیز کو بالکل سیدھا رکھنے کی فکر۔",
      "Roman Urdu": "Dirt/germs ka dar, accidental harm ka khayal, ya har cheez perfect symmetry mein rakhna."
    },
    options: [
      { label: { English: "Not at all", Urdu: "بالکل نہیں", "Roman Urdu": "Bilkul nahi" }, points: 0 },
      { label: { English: "Occasionally", Urdu: "کبھی کبھار", "Roman Urdu": "Kabhi kabhaar" }, points: 1 },
      { label: { English: "Frequently", Urdu: "اکثر", "Roman Urdu": "Aksar" }, points: 2 },
      { label: { English: "Very intensely", Urdu: "بہت شدت سے", "Roman Urdu": "Bohot zyada" }, points: 3 }
    ]
  },
  {
    id: 15,
    category: "sleep",
    question: {
      English: "Overall, how significantly do emotional thoughts or worries interfere with your daily energy and concentration?",
      Urdu: "مجموعی طور پر، جذباتی سوچیں یا فکریں آپ کی روزمرہ کی توانائی اور توجہ میں کتنا مخل ہوتی ہیں؟",
      "Roman Urdu": "Overall, jazbati sochein aap ki daily energy aur focus par kitna asar dalti hain?"
    },
    context: {
      English: "Reflecting on the combined impact of stress, mood, or worries on your ability to function daily.",
      Urdu: "سوچیں کہ تناؤ اور موڈ آپ کی روزمرہ کی صلاحیت پر کتنا اثر ڈال رہے ہیں۔",
      "Roman Urdu": "Sochein ke tension aur mood aap ki daily performance par kitna asar daal rahe hain."
    },
    options: [
      { label: { English: "Minimal impact", Urdu: "بہت کم اثر", "Roman Urdu": "Minimal asar" }, points: 0 },
      { label: { English: "Mild interference", Urdu: "ہلکی پریشانی", "Roman Urdu": "Halka asar" }, points: 1 },
      { label: { English: "Noticeable disruption", Urdu: "واضح رکاوٹ", "Roman Urdu": "Noticeable disruption" }, points: 2 },
      { label: { English: "Severe disruption", Urdu: "شدید رکاوٹ", "Roman Urdu": "Severe disruption" }, points: 3 }
    ]
  }
];

export const CONDITION_DATABASE: Record<string, Record<Language, AssessmentResult>> = {
  normal: {
    English: {
      isNormal: true,
      dominantCategory: "Normal Range",
      summary: "You appear to be within a normal range. No significant psychological concerns were identified from your answers.",
      possibleConcern: "Balanced Wellbeing Pattern",
      whyIdentified: [
        "Your responses indicate stable energy levels and healthy emotional regulation.",
        "Stress and intrusive thoughts appear manageable without disrupting daily routine.",
        "Sleep and focus levels are within functional healthy parameters."
      ],
      aboutCondition: "Maintaining a balanced psychological state means experiencing normal ups and downs without persistent distress. Regular self-care, mindfulness, and healthy social connections help preserve this state.",
      examples: [
        "Handling daily work stress without feeling overwhelmed.",
        "Sleeping peacefully and waking up feeling rested.",
        "Enjoying hobbies and spending quality time with loved ones."
      ],
      treatment: "Maintain wellness through balanced sleep hygiene, regular exercise, active social relationships, and mindfulness journaling.",
      therapy: "Preventative wellness practices, mindfulness meditation, and personal growth journaling."
    },
    Urdu: {
      isNormal: true,
      dominantCategory: "عام حد (نارمل)",
      summary: "آپ کی حالت بالکل نارمل معلوم ہوتی ہے۔ آپ کے جوابات سے کوئی نمایاں نفسیاتی مسئلہ ظاہر نہیں ہوا۔",
      possibleConcern: "متوازن ذہنی صحت",
      whyIdentified: [
        "آپ کے جوابات سے پتہ چلتا ہے کہ آپ کی توانائی اور جذبات کا توازن برقرار ہے۔",
        "تناؤ اور سوچیں آپ کی روزمرہ کی زندگی میں بڑی رکاوٹ نہیں بن رہیں۔",
        "نیند اور توجہ کا معیار بہتر ہے۔"
      ],
      aboutCondition: "متوازن ذہنی حالت کا مطلب یہ ہے کہ انسان معمول کے جذباتی اتار چڑھاؤ کا سامنا بغیر کسی شدید پریشانی کے کر سکتا ہے۔ باقاعدہ دیکھ بھال اور مثبت سوچ اس حالت کو برقرار رکھتی ہے۔",
      examples: [
        "روزمرہ کاموں کا تناؤ سکون سے سنبھالنا۔",
        "رات کو پرسکون نیند سونا اور تازہ دم بیدار ہونا۔",
        "اپنے پسندیدہ کاموں اور پیاروں کے ساتھ وقت گزارنے سے لطف اندوز ہونا۔"
      ],
      treatment: "مناسب نیند، باقاعدہ ورزش، مثبت سماجی تعلقات اور ڈائری لکھنے کی عادت کو برقرار رکھیں۔",
      therapy: "ذاتی ترقی، مائنڈفلنیس اور خود آگاہی کی مشقیں۔"
    },
    "Roman Urdu": {
      isNormal: true,
      dominantCategory: "Normal Range",
      summary: "Aap ki halat normal range mein maloom hoti hai. Aap ke answers se koi bada psychological masla samne nahi aaya.",
      possibleConcern: "Balanced Wellbeing Pattern",
      whyIdentified: [
        "Aap ke answers batate hain ke aap ki energy aur mood balance mein hain.",
        "Stress aur sochein aap ki daily routine ko jyada disturb nahi kar rahin.",
        "Neend aur focus ka level healthy hai."
      ],
      aboutCondition: "Normal range ka matlab hai ke aap daily life ke ups and downs ko bina kisi extreme tension ke handle kar sakte hain. Self-care aur healthy habits ise maintain rakhti hain.",
      examples: [
        "Daily work stress ko bina panic huye handle karna.",
        "Raat ko achhi neend aana aur subah fresh uthna.",
        "Hobbies aur family ke sath quality time enjoy karna."
      ],
      treatment: "Achhi neend, regular exercise, friends/family se baat karna aur journaling jari rakhein.",
      therapy: "Mindfulness meditation aur personal growth habits."
    }
  },
  anxiety: {
    English: {
      isNormal: false,
      dominantCategory: "Anxiety Patterns (Generalized Anxiety Screening)",
      summary: "Your answers show signs related to anxiety patterns and excessive worry.",
      possibleConcern: "Generalized Anxiety Pattern",
      whyIdentified: [
        "Frequent uncontrollable worry regarding everyday tasks or future events.",
        "Physical manifestations like muscle tightness, restlessness, or feeling 'on edge'.",
        "Tendency to overthink scenarios to avoid uncertainty."
      ],
      aboutCondition: "Generalized Anxiety Disorder (GAD) involves persistent, intense worry that is disproportionate to actual events. The brain's threat-detection system (amygdala) stays active, keeping the nervous system in high alert.",
      examples: [
        "Re-reading an email 10 times before sending due to fear of making an error.",
        "Feeling a tight knot in your stomach or shoulders during routine daily activities.",
        "Difficulty switching off racing thoughts at night when trying to fall asleep."
      ],
      treatment: "Evidence-based management includes Cognitive Behavioral Therapy (CBT), deep diaphragmatic breathing, and structured stress management.",
      therapy: "Cognitive Behavioral Therapy (CBT), Acceptance & Commitment Therapy (ACT), and Mindfulness-Based Stress Reduction (MBSR)."
    },
    Urdu: {
      isNormal: false,
      dominantCategory: "بے چینی کی علامتیں (اینگزائٹی پیٹرن)",
      summary: "آپ کے جوابات سے بے چینی اور شدید فکر مندی کے آثار ظاہر ہوتے ہیں۔",
      possibleConcern: "اینگزائٹی (انسیائٹی) پیٹرن",
      whyIdentified: [
        "روزمرہ کے کاموں یا مستقبل کے بارے میں ناقابلِ کنٹرول فکر مندی۔",
        "جسمانی علامات جیسے پٹھوں میں کھنچاؤ، بے چینی اور بے سکونی۔",
        "غیر یقینی حالات سے بچنے کے لیے حد سے زیادہ سوچنا (اوور تھنکنگ)۔"
      ],
      aboutCondition: "اینگزائٹی میں انسان بغیر کسی بڑے خطرے کے بھی شدید دباؤ محسوس کرتا ہے۔ ذہن کا ڈر محسوس کرنے والا نظام ہمہ وقت متحرک رہتا ہے جس سے جسم تھکن اور مسلسل بے چینی کا شکار رہتا ہے۔",
      examples: [
        "غلطی کے خوف سے ایک ہی ای میل بار بار پڑھنا۔",
        "عام کاموں کے دوران بھی دل کی دھڑکن یا گردن میں کھنچاؤ محسوس کرنا۔",
        "رات کو سوتے وقت ذہن میں سوچوں کا طوفان آن اور نیند نہ آنا۔"
      ],
      treatment: "شناختی وقوفی تھراپی (CBT)، گہری سانس کی مشقیں اور ذہنی تناؤ کو کنٹرول کرنے کے طریقے فائدہ مند ہوتے ہیں۔",
      therapy: "کاگنیٹو بیہیویئرل تھراپی (CBT)، مائنڈفلنیس اور ریلیکسیشن مشقیں۔"
    },
    "Roman Urdu": {
      isNormal: false,
      dominantCategory: "Anxiety Patterns (Anxiety Screening)",
      summary: "Aap ke answers mein anxiety aur overthinking ke patterns nazar aate hain.",
      possibleConcern: "Anxiety Pattern",
      whyIdentified: [
        "Daily kaamon aur future ke baare mein uncontrollable tension.",
        "Physical tension jaise shoulders mein tightness ya restlessness.",
        "Har situation ko overthink karne ki aadat."
      ],
      aboutCondition: "Anxiety ka matlab hai ke mind ka alert system zaroorat se zyada active ho jata hai. Insan choti choti baaton par bhi extreme worry feel karta hai.",
      examples: [
        "Chhoti si baat par bhi bohot zyada tense ho jana.",
        "Raat ko sote waqt mind mein ghantay sochein chalna.",
        "Har waqt yeh darna ke kuch ghalat na ho jaye."
      ],
      treatment: "CBT therapy, deep breathing exercises, aur structured daily routine se kafi faida milta hai.",
      therapy: "Cognitive Behavioral Therapy (CBT) aur Mindfulness exercises."
    }
  },
  depression: {
    English: {
      isNormal: false,
      dominantCategory: "Depressive Patterns (Mood Screening)",
      summary: "Your answers show signs related to low mood, diminished pleasure, and emotional fatigue.",
      possibleConcern: "Depressive Patterns",
      whyIdentified: [
        "Reduced motivation and pleasure in previously enjoyed activities.",
        "Persistent feelings of emotional heaviness, low energy, or hopelessness.",
        "Disrupted concentration and feeling that daily effort requires overwhelming willpower."
      ],
      aboutCondition: "Depression is more than sadness; it is a clinical state affecting brain chemistry, energy levels, and thought patterns. It creates a filter where tasks feel insurmountable and motivation drops.",
      examples: [
        "Feeling too exhausted to answer text messages or meet close friends.",
        "Losing interest in favorite music, hobbies, or food.",
        "Having a heavy feeling in the chest and feeling like everything is a chore."
      ],
      treatment: "Behavioral activation, regular light physical movement, structured sleep routines, and professional psychological support.",
      therapy: "Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and Behavioral Activation."
    },
    Urdu: {
      isNormal: false,
      dominantCategory: "اداسی اور مایوسی کے آثار (ڈپریشن سکریننگ)",
      summary: "آپ کے جوابات سے موڈ کی اداسی، توانائی کی کمی اور ناامیدی کی علامتیں ظاہر ہوتی ہیں۔",
      possibleConcern: "ڈپریشن (اداسی) پیٹرن",
      whyIdentified: [
        "پسندیدہ کاموں میں دلچسپی اور خوشی ختم ہو جانا۔",
        "مسلسل تھکن، جذباتی بوجھ اور مایوسی کا احساس۔",
        "توجہ کی کمی اور چھوٹے کاموں میں بھی شدید دشواری۔"
      ],
      aboutCondition: "ڈپریشن صرف عارضی اداسی نہیں ہے، بلکہ یہ ایک نفسیاتی کیفیت ہے جو ذہنی توانائی اور فکر کو متاثر کرتی ہے۔ اس میں انسان کو امید اور خوشی محسوس کرنے میں دشواری ہوتی ہے۔",
      examples: [
        "دوستوں کے میسج کا جواب دینے کی بھی توانائی نہ ہونا۔",
        "پسندیدہ کھانوں یا مشغلوں سے دل بھر جانا۔",
        "صبح اٹھتے ہی جسم اور ذہن پر بھاری پن محسوس ہونا۔"
      ],
      treatment: "رویہ جاتی متحرک سازی (Behavioral Activation)، ہلکی پھلکی واک، اور ماہرِ نفسیات کی رہنمائی۔",
      therapy: "کاگنیٹو بیہیویئرل تھراپی (CBT) اور انٹرپرسنل تھراپی۔"
    },
    "Roman Urdu": {
      isNormal: false,
      dominantCategory: "Depressive Patterns (Mood Screening)",
      summary: "Aap ke answers mein low mood, energy ki kami aur maayusi ke patterns nazar aate hain.",
      possibleConcern: "Depressive Pattern",
      whyIdentified: [
        "Hobbies aur daily tasks mein interest khatam hona.",
        "Constant thakawat aur heavy emotion mehsoos hona.",
        "Small tasks karne mein bhi bohot effort lagna."
      ],
      aboutCondition: "Depression sirf temporary sadness nahi hai. Yeh ek aisi state hai jahan mind ki energy low ho jaati hai aur insan ko hopeless mehsoos hota hai.",
      examples: [
        "Doston se milne ya baat karne ka dil na chaahna.",
        "Fav hobbies se bhi khushi na milna.",
        "Subah uthne par body aur mind mein bojh mehsoos hona."
      ],
      treatment: "Behavioral activation, daily light walk, sleep routine aur therapist ki guideline se behtari aati hai.",
      therapy: "CBT therapy aur Counseling."
    }
  },
  ocd: {
    English: {
      isNormal: false,
      dominantCategory: "OCD Patterns (Obsessive-Compulsive Screening)",
      summary: "Your answers indicate obsessive thoughts and ritualistic checking/compulsions.",
      possibleConcern: "Obsessive-Compulsive Pattern",
      whyIdentified: [
        "Unwanted intrusive thoughts or doubts causing anxiety.",
        "Repetitive physical or mental actions performed to neutralize distress (checking, washing, counting).",
        "Frustration at feeling forced to complete rituals."
      ],
      aboutCondition: "OCD involves a loop where the brain produces intrusive alarming thoughts (obsessions) and drives repetitive safety behaviors (compulsions) to obtain temporary relief.",
      examples: [
        "Checking stove knobs or door locks 5-10 times before leaving the house.",
        "Washing hands repeatedly until they feel 'perfectly clean'.",
        "Repeating certain words or counts mentally to prevent something bad from happening."
      ],
      treatment: "Exposure and Response Prevention (ERP) is the gold standard therapy for breaking the obsession-compulsion cycle.",
      therapy: "Exposure and Response Prevention (ERP) and Cognitive Behavioral Therapy (CBT)."
    },
    Urdu: {
      isNormal: false,
      dominantCategory: "وسوسے اور بار بار ایک کام دہرانا (OCD سکریننگ)",
      summary: "آپ کے جوابات ناپسندیدہ وسوسوں اور بار بار کاموں کو چیک کرنے کے عمل کو ظاہر کرتے ہیں۔",
      possibleConcern: "وسواسی اجباری عارضہ (OCD) پیٹرن",
      whyIdentified: [
        "بار بار ناپسندیدہ سوچوں یا وسوسوں کا آنا۔",
        "بے چینی کم کرنے کے لیے بار بار تالے چیک کرنا، ہاتھ دھونا یا گنتی کرنا۔",
        "روٹین دہرانے پر مجبور محسوس کرنا۔"
      ],
      aboutCondition: "OCD میں ذہن بار بار خوفناک وسوسے پیدا کرتا ہے اور انسان عارضی سکون کے لیے ایک ہی کام بار بار کرنے پر مجبور ہو جاتا ہے، جس سے ایک چکر بن جاتا ہے۔",
      examples: [
        "گھر سے نکلتے وقت تالے یا سوئچ 5 سے 10 بار چیک کرنا۔",
        "بار بار ہاتھ دھونا جب تک کہ 'مکمل صفائی' کا احساس نہ ہو۔",
        "کسی حادثے سے بچنے کے لیے ذہن میں مخصوص الفاظ دہرانا۔"
      ],
      treatment: "ایکسپوژر اینڈ ریسپانس پریوینشن (ERP) تھراپی اس عارضے کے لیے سب سے زیادہ مؤثر علاج ہے۔",
      therapy: "ایکسپوژر اینڈ ریسپانس پریوینشن (ERP) اور کاگنیٹو بیہیویئرل تھراپی (CBT)۔"
    },
    "Roman Urdu": {
      isNormal: false,
      dominantCategory: "OCD Patterns (Obsessive-Compulsive Screening)",
      summary: "Aap ke answers mein unwanted intrusive thoughts aur repeat checking (OCD) ke signs hain.",
      possibleConcern: "Obsessive-Compulsive Pattern",
      whyIdentified: [
        "Unwanted intrusive thoughts ya doubts aana.",
        "Tension kam karne ke liye baar baar same kaam karna (checking, washing, counting).",
        "Rituals na karne par extreme anxiety feel hona."
      ],
      aboutCondition: "OCD mein dimag ek repetitive loop mein phans jata hai. Intrusive thought (obsession) aati hai aur usko thanda karne ke liye insan repetitive act (compulsion) karta hai.",
      examples: [
        "Door locks ya appliances 5-10 baar check karna.",
        "Baar baar haath dhona jab tak 'satisfaction' na miley.",
        "Mind mein specific counting ya words repeat karna."
      ],
      treatment: "Exposure & Response Prevention (ERP) therapy se yeh loop break hota hai.",
      therapy: "Exposure & Response Prevention (ERP) therapy."
    }
  },
  adhd: {
    English: {
      isNormal: false,
      dominantCategory: "ADHD Patterns (Attention & Executive Function Screening)",
      summary: "Your answers reflect challenges with sustained attention, task initiation, and focus organization.",
      possibleConcern: "Attention / Focus Regulation Pattern",
      whyIdentified: [
        "Difficulty staying focused on repetitive or detailed tasks.",
        "Frequent procrastination on starting effort-heavy assignments.",
        "Losing track of personal items or getting easily sidetracked."
      ],
      aboutCondition: "ADHD involves neurodevelopmental differences in dopamine regulation affecting executive function—making it hard to prioritize, sustain attention on non-novel tasks, and manage time.",
      examples: [
        "Starting 3 different tasks at once and struggling to finish any of them.",
        "Misplacing phone, keys, or glasses multiple times a day.",
        "Hyperfocusing on interesting topics for hours while putting off urgent responsibilities."
      ],
      treatment: "Executive function coaching, structured time-blocking (Pomodoro), environment design, and professional evaluation.",
      therapy: "ADHD-focused CBT, Executive Function Skills Training, and Behavioral Coaching."
    },
    Urdu: {
      isNormal: false,
      dominantCategory: "توجہ اور عدمِ تمرکز کی علامتیں (ADHD سکریننگ)",
      summary: "آپ کے جوابات سے توجہ برقرار رکھنے، کام شروع کرنے اور تنظیم میں دشواری کا پتہ چلتا ہے۔",
      possibleConcern: "توجہ کا عدمِ توازن (ADHD پیٹرن)",
      whyIdentified: [
        "طویل یا ایک جیسے کاموں پر دھیان قائم رکھنے میں مشکل۔",
        "ذہنی محنت والے کاموں کو بار بار آگے ٹالنا۔",
        "چیزیں بھول جانا یا کام کے دوران جلدی دھیان بھٹک جانا۔"
      ],
      aboutCondition: "ADHD میں دماغ کی توجہ اور وقت کی تنظیم کرنے والی کیمیکلز کا توازن مختلف ہوتا ہے۔ اس میں انسان کا دھیان غیر ارادی طور پر بٹتا رہتا ہے۔",
      examples: [
        "ایک وقت میں 3 کام شروع کرنا اور کوئی بھی مکمل نہ کر پانا۔",
        "روزانہ چابیاں، فون یا چشمہ رکھ کر بھول جانا۔",
        "دلچسپ کام پر گھنٹوں لگانا مگر ضروری کاموں کو ملتوی کرنا۔"
      ],
      treatment: "ٹائم مینجمنٹ تکنیکس (پوموڈورو)، روٹین کی تنظیم اور ماہرین کی رہنمائی۔",
      therapy: "اے ڈی ایچ ڈی تھراپی اور ایگزیکٹو فنکشن ٹریننگ۔"
    },
    "Roman Urdu": {
      isNormal: false,
      dominantCategory: "ADHD Patterns (Focus & Attention Screening)",
      summary: "Aap ke answers mein focus lagane, task start karne aur organizing mein dikkat ke signs hain.",
      possibleConcern: "ADHD / Attention Pattern",
      whyIdentified: [
        "Long tasks par focus sustain na ho pana.",
        "Important kaam baar baar aage talna (procrastination).",
        "Keys, phone bhool jana ya aasani se distract hona."
      ],
      aboutCondition: "ADHD mind ki executive functioning ka pattern hai jahan dopamine levels diff hote hain. Is wajah se focus aur time management mein difficulty hoti hai.",
      examples: [
        "Ek sath 3 kaam shuru karna aur koi complete na karna.",
        "Daily items (phone, keys) baar baar ghumana.",
        "Urgent kaam ko delay karke irrelevant cheezon par focus karna."
      ],
      treatment: "Pomodoro technique, visual planners aur executive coaching se bohot help milti hai.",
      therapy: "ADHD Coaching aur Behavioral Skills Training."
    }
  }
};
