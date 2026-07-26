import { PsychologyTopic } from '../types';

export const PSYCHOLOGY_TOPICS: PsychologyTopic[] = [
  // ==========================================
  // --- A) BASIC PSYCHOLOGY ---
  // ==========================================
  {
    id: "what-is-psychology",
    categoryId: "basic",
    icon: "psychology",
    founder: "Wilhelm Wundt (Father of Experimental Psychology)",
    discoveryDate: "1879",
    title: {
      English: "Introduction to Psychology",
      Urdu: "نفسیات کا تعارف",
      "Roman Urdu": "Introduction to Psychology"
    },
    subtitle: {
      English: "The scientific study of mind, brain, and human behavior",
      Urdu: "ذہن، دماغ اور انسانی رویے کا سائنسی مطالعہ",
      "Roman Urdu": "Zehn, dimag aur insani behavior ki scientific study"
    },
    backgroundHistory: {
      English: "Psychology formally emerged as an independent science in 1879 when Wilhelm Wundt established the first dedicated psychological laboratory at the University of Leipzig, Germany. Before this, study of the mind was integrated into philosophy and physiology.",
      Urdu: "نفسیات 1879 میں ایک خود مختار سائنس کے طور پر ابھری جب ولیم ونٹ نے جرمنی کی لیپزگ یونیورسٹی میں پہلی باقاعدہ نفسیاتی لیبارٹری قائم کی۔ اس سے پہلے ذہن کا مطالعہ فلسفے کا حصہ سمجھا جاتا تھا۔",
      "Roman Urdu": "Psychology 1879 mein independent science bani jab Wilhelm Wundt ne Germany ki Leipzig University mein pehli psych lab banayi. Pehle yeh philosophy ka hissa thi."
    },
    explanation: {
      English: "Psychology is the scientific study of mind and behavior. It explores how humans think, feel, react, learn, and form relationships. From neurochemistry in the brain to social interactions in groups, psychology aims to understand the mechanisms driving human experience.",
      Urdu: "نفسیات انسانی ذہن، جذباتی کیفیات اور رویوں کا سائنسی مطالعہ ہے۔ یہ اس بات کی تحقیق کرتی ہے کہ انسان کیسے سوچتے ہیں، محسوس کرتے ہیں، سیکھتے ہیں اور آپس میں تعلقات بناتے ہیں۔",
      "Roman Urdu": "Psychology insani zehn, emotions aur behavior ki scientific study hai. Yeh samjhati hai ke insan kaise sochein, feel karein aur react karein."
    },
    mainConceptsProcess: {
      English: [
        "Description: Observing behavior and noting everything about it accurately.",
        "Explanation: Understanding why a particular behavior or thought pattern occurs.",
        "Prediction: Forecasting how humans will act or react in specific future conditions.",
        "Control/Intervention: Modifying or shaping behaviors to improve psychological well-being."
      ],
      Urdu: [
        "بیان (Description): رویے کا باقاعدہ مشاہدہ کرنا اور ریکارڈ بنانا۔",
        "وضاحت (Explanation): یہ سمجھنا کہ کوئی رویہ یا سوچ کیوں پیدا ہو رہی ہے۔",
        "پیشگوئی (Prediction): یہ اندازہ لگانا کہ مستقبل کے حالات میں انسان کیسے ردِعمل دے گا۔",
        "کنٹرول اور بہتری (Control): ذہنی صحت کی بہتری کے لیے مثبت تبدیلیاں لانا۔"
      ],
      "Roman Urdu": [
        "Description: Behavior ko accurately observe aur record karna.",
        "Explanation: Samajhna ke koi thought ya action kyun hota hai.",
        "Prediction: Guess karna ke future situations mein insan kaise react karega.",
        "Control: Mental health improve karne ke liye positive changes lana."
      ]
    },
    examples: {
      English: [
        "Understanding why stress causes muscle tension in the body.",
        "Analyzing how childhood experiences influence adult relationship choices.",
        "Studying how rewards and punishments shape daily habits."
      ],
      Urdu: [
        "یہ سمجھنا کہ ذہنی تناؤ جسمانی تھکن کا باعث کیوں بنتا ہے۔",
        "یہ جاننا کہ بچپن کے تجربات بڑے ہو کر تعلقات پر کیسے اثر ڈالتے ہیں۔",
        "عادات کی تشکیل میں انعامات اور سزاؤں کا کردار۔"
      ],
      "Roman Urdu": [
        "Yeh samajhna ke stress se body mein tightness kyun aati hai.",
        "Bachpan ke experiences ka adult life par asar dekhna.",
        "Habits kaise banti hain isko study karna."
      ]
    },
    importantPoints: {
      English: [
        "Combines cognitive, emotional, social, and biological perspectives.",
        "Uses scientific empirical research, experiments, and clinical observations.",
        "Aims to improve mental health, education, and human well-being."
      ],
      Urdu: [
        "ذہنی، جذباتی، سماجی اور حیاتیاتی پہلوؤں کو یکجا کرتی ہے۔",
        "سائنسی تحقیق، تجربات اور کلینیکل مشاہدات کا استعمال کرتی ہے۔",
        "مقصد انسانی صحت، تعلیم اور زندگی کے معیار کو بہتر بنانا ہے۔"
      ],
      "Roman Urdu": [
        "Mind, emotions, society aur brain biology ko combine karti hai.",
        "Scientific research aur experiments par base karti hai.",
        "Goal insani wellbeing aur mental health ko improve karna hai."
      ]
    }
  },
  {
    id: "human-behavior",
    categoryId: "basic",
    icon: "person",
    founder: "John B. Watson & B.F. Skinner",
    discoveryDate: "Early 20th Century",
    title: {
      English: "Human Behavior",
      Urdu: "انسانی رویہ",
      "Roman Urdu": "Human Behavior"
    },
    subtitle: {
      English: "How internal states and environmental factors shape actions",
      Urdu: "اندرونی کیفیت اور بیرونی ماحول کا انسان کے عمل پر اثر",
      "Roman Urdu": "Andaruni thoughts aur baahar ke mahool ka actions par asar"
    },
    backgroundHistory: {
      English: "In the early 1900s, behaviorism shifted psychology's focus toward observable, measurable actions rather than hidden conscious thoughts, arguing that environmental stimuli directly condition human responses.",
      Urdu: "انیسویں صدی کے آغاز میں بیہیویئرزم نے نفسیات کی توجہ اندرونی خیالات کی بجائے کھلے اور قابلِ مشاہدہ رویوں پر مبذول کی، جس میں ماحول کو اہم محرک قرار دیا گیا۔",
      "Roman Urdu": "Early 1900s mein Behaviorism ne focus un-observable thoughts se hata kar observable actions par shift kiya."
    },
    explanation: {
      English: "Human behavior refers to the range of actions, reactions, and conduct exhibited by individuals in response to internal motivations, biological drives, and external environmental stimuli.",
      Urdu: "انسانی رویہ ان تمام افعال اور ردِعمل کا مجموعہ ہے جو انسان اندرونی خواہشات، حیاتیاتی ضرورتوں اور ماحول کی تبدیلیوں کے جواب میں کرتا ہے۔",
      "Roman Urdu": "Human behavior un tamam actions aur reactions ka naam hai jo insan apne environment aur internal thoughts ke waja se karta hai."
    },
    mainConceptsProcess: {
      English: [
        "Stimulus-Response Mechanism: Environmental triggers prompting physical or vocal action.",
        "Nature vs. Nurture: The interplay of genetic traits and learned environmental influences.",
        "Motivation & Intent: The underlying drivers fueling specific goals."
      ],
      Urdu: [
        "محرک اور ردِعمل (Stimulus-Response): ماحول کی تبدیلی پر جسمانی یا زبانی ردِعمل۔",
        "فطرت بمقابلہ تربیت (Nature vs Nurture): جینیاتی خصوصیات اور ماحولیاتی تربیت کا باہمی ملاپ۔",
        "مقصد اور تحریک: کسی عمل کے پیچھے پوشیدہ وجہ۔"
      ],
      "Roman Urdu": [
        "Stimulus-Response: Baahar ke trigger par physical ya vocal action.",
        "Nature vs Nurture: Genetic qualities aur environment ka milap.",
        "Motivation: Kisi bhi action ke peeche ka main goal."
      ]
    },
    examples: {
      English: [
        "Lowering your voice automatically inside a quiet library.",
        "Pulling your hand back immediately upon touching a hot metal kettle.",
        "Working overtime to earn a financial bonus or recognition."
      ],
      Urdu: [
        "خاموش لائبریری میں داخل ہوتے ہی خود بخود آواز دھیمی کر لینا۔",
        "گرم برتن کو چھوتے ہی فوراً ہاتھ پیچھے کھینچ لینا۔",
        "بونس حاصل کرنے کے لیے اضافی گھنٹے کام کرنا۔"
      ],
      "Roman Urdu": [
        "Quiet library mein jaate hi aawaz dheemi kar lena.",
        "Garam cheez ko chhoote hi haath peeche hatana.",
        "Bonus ke liye extra hours kaam karna."
      ]
    },
    importantPoints: {
      English: [
        "Behavior is malleable and can be modified through conditioning or cognitive awareness.",
        "Social norms strongly govern public human actions.",
        "Observing behavior provides key diagnostic insights in clinical psychology."
      ],
      Urdu: [
        "انسانی رویہ ناقابلِ تبدیل نہیں بلکہ مشق اور تربیت سے بدلا جا سکتا ہے۔",
        "معاشرتی اصول انسان کے عمومی رویے کو کنٹرول کرتے ہیں۔",
        "رویے کا مشاہدہ نفسیاتی امراض کی تشخیص میں بنیادی کردار ادا کرتا ہے۔"
      ],
      "Roman Urdu": [
        "Behavior fixed nahi hota, seekhne se change ho sakta hai.",
        "Social rules insani behavior ko guide karte hain.",
        "Clinical psychology mein behavior observe karna zaroori hai."
      ]
    }
  },
  {
    id: "emotions",
    categoryId: "basic",
    icon: "mood",
    founder: "Paul Ekman (Universal Facial Expressions)",
    discoveryDate: "1970s",
    title: {
      English: "Emotions & Affect",
      Urdu: "جذبات اور احساسات",
      "Roman Urdu": "Emotions & Feelings"
    },
    subtitle: {
      English: "How our brain processes feeling states and physiological responses",
      Urdu: "دماغ جذباتی کیفیات اور جسمانی ردِعمل کا کیسے عمل پروسیس کرتا ہے",
      "Roman Urdu": "Mind emotions aur body reactions ko kaise process karta hai"
    },
    backgroundHistory: {
      English: "In the 1970s, psychologist Paul Ekman conducted cross-cultural research establishing six universal human emotions (Fear, Anger, Sadness, Joy, Disgust, Surprise) recognized across all human cultures through identical facial expressions.",
      Urdu: "1970 کی دہائی میں پال ایکمین نے ثابت کیا کہ چھ بنیادی جذبات (خوف، غصہ، اداسی، خوشی، نفرت، حیرت) دنیا کی تمام ثقافتوں میں یکساں چہرے کے تاثرات سے پہچانے جاتے ہیں۔",
      "Roman Urdu": "1970s mein Paul Ekman ne 6 universal emotions (Fear, Joy, Anger, Sadness, Disgust, Surprise) prove kiye jo puri duniya mein same hote hain."
    },
    explanation: {
      English: "Emotions are complex psychological states involving three distinct components: a subjective feeling, a physiological response (like heart rate), and an expressional or behavioral response.",
      Urdu: "جذبات پیچیدہ ذہنی اور جسمانی کیفیات ہیں جن میں احساس، جسمانی ردِعمل (جیسے دل کی دھڑکن) اور چہرے کے تاثرات شامل ہیں۔",
      "Roman Urdu": "Emotions mind aur body ki combined state hain. Is mein feelings, physical reaction (heartbeat) aur face expressions shamil hote hain."
    },
    mainConceptsProcess: {
      English: [
        "Subjective Experience: The conscious 'feeling' of anger, excitement, or sorrow.",
        "Physiological Arousal: Autonomic nervous system surges (adrenaline, heart rate, sweating).",
        "Behavioral Expression: Facial movements, posture, and vocal inflection."
      ],
      Urdu: [
        "ذاتی احساس (Subjective Experience): خوشی، غم یا خوف کی شعوری احساس۔",
        "جسمانی بیداری (Physiological Arousal): دل کی دھڑکن تیز ہونا اور پسینہ آنا۔",
        "ظاہری ردِعمل (Behavioral Expression): چہرے کے تاثرات اور آواز کی تبدیلی۔"
      ],
      "Roman Urdu": [
        "Subjective Feeling: Khushi, gussa ya gham ka conscious feeling.",
        "Physical Reaction: Heartbeat tez hona aur adrenaline surge.",
        "Behavioral Expression: Face expressions aur body language."
      ]
    },
    examples: {
      English: [
        "Feeling a surge of adrenaline when seeing a sudden hazard on the road.",
        "Experiencing warmth and relaxation when receiving a heartfelt compliment.",
        "Crying as a physiological release of sorrow or intense relief."
      ],
      Urdu: [
        "سڑک پر اچانک خطرہ دیکھ کر ایڈری نالائن اور خوف کا طوفان۔",
        "تعریف سننے پر جسم میں پرسکون گرمجوشی کا احساس۔",
        "شدید غم یا سکون میں آنسو بہنا۔"
      ],
      "Roman Urdu": [
        "Achanak khatra dekh kar dil ki dhadkan tez hona.",
        "Tareef sun kar khushi aur calm feel karna.",
        "Gham ya sukoon mein aansu aana."
      ]
    },
    importantPoints: {
      English: [
        "The amygdala plays a central role in processing emotional threats.",
        "Emotions serve as vital signals about our environment and personal safety.",
        "Emotional regulation skills help manage intense feelings healthily."
      ],
      Urdu: [
        "دماغ کا حصہ امیگڈالا (Amygdala) خوف اور جذبات کو کنٹرول کرتا ہے۔",
        "جذبات ہمارے ارد گرد کے ماحول کے لیے اہم پیغامات کا کام کرتے ہیں۔",
        "جذباتی توازن کی مشقیں شدید جذباتی حملوں کو سنبھالنے میں مدد دیتی ہیں۔"
      ],
      "Roman Urdu": [
        "Brain ka amygdala part fear aur emotions ko control karta hai.",
        "Emotions humein safety aur situation ke baare mein inform karte hain.",
        "Emotional regulation se gussa aur anxiety manage hoti hai."
      ]
    }
  },
  {
    id: "memory",
    categoryId: "basic",
    icon: "memory",
    founder: "Hermann Ebbinghaus & Richard Atkinson / Richard Shiffrin",
    discoveryDate: "1968 (Multi-Store Model)",
    title: {
      English: "Memory Mechanisms",
      Urdu: "یادداشت کا نظام",
      "Roman Urdu": "Memory Mechanisms"
    },
    subtitle: {
      English: "Encoding, storage, and retrieval across brain networks",
      Urdu: "معلومات کو محفوظ کرنے اور یاد کرنے کا طریقہ کار",
      "Roman Urdu": "Information ko store aur recall karne ka tarika"
    },
    backgroundHistory: {
      English: "Hermann Ebbinghaus pioneered memory research in the 1880s with the 'Forgetting Curve'. Later in 1968, Atkinson and Shiffrin created the famous Stage Model of Memory, breaking memory into Sensory, Short-Term, and Long-Term stores.",
      Urdu: "1880 میں ہرمن ایبنگہاؤس نے بھولنے کے عمل پر تحقیق کی۔ 1968 میں اٹکنسن اور شفرن نے یادداشت کے تین اہم مراحلی ماڈل (حسی، مختصر المدتی، طویل المدتی) کو متعارف کرایا۔",
      "Roman Urdu": "Atkinson aur Shiffrin ne 1968 mein Memory ka Multi-Store Model diya jis mein Sensory, Short-Term aur Long-Term memory shaamil hain."
    },
    explanation: {
      English: "Memory is the process of encoding, storing, and retrieving information. It transitions from Sensory Memory (fractions of a second) to Short-Term/Working Memory (7±2 items for ~20 seconds) and finally into Long-Term Memory via consolidation in the hippocampus.",
      Urdu: "یادداشت معلومات کو محفوظ کرنے اور دوبارہ یاد کرنے کا عمل ہے۔ یہ حسی یادداشت سے مختصر المدتی یادداشت اور پھر ہپپوکیمپس کے ذریعے طویل المدتی یادداشت میں منتقل ہوتی ہے۔",
      "Roman Urdu": "Memory information ko encode, store aur recall karne ka system hai. Yeh short-term se long-term memory mein process hoti hai."
    },
    mainConceptsProcess: {
      English: [
        "Encoding: Converting sensory input into brain-usable memory codes.",
        "Storage: Maintaining encoded information over time.",
        "Retrieval: Accessing and recovering stored information into conscious awareness."
      ],
      Urdu: [
        "اینکوڈنگ (Encoding): معومات کو دماغ کی قابلِ فہم زبان میں تبدیل کرنا۔",
        "سٹوریج (Storage): معلومات کو وقت کے ساتھ دماغ میں محفوظ رکھنا۔",
        "ریٹریول (Retrieval): محفوظ کی گئی معلومات کو دوبارہ یاد کرنا۔"
      ],
      "Roman Urdu": [
        "Encoding: Sensory input ko brain-usable memory format mein badalna.",
        "Storage: Memory ko over time save rakhna.",
        "Retrieval: Saved memory ko waapas mind mein lana."
      ]
    },
    examples: {
      English: [
        "Holding an OTP verification code in your mind long enough to type it.",
        "Remembering your childhood home address years later.",
        "Riding a bicycle automatically without consciously thinking about balance (Procedural memory)."
      ],
      Urdu: [
        "فون میں OTP کوڈ پڑھ کر فوراً ٹائپ کرنا (مختصر المدتی یادداشت)۔",
        "برسوں بعد اپنے بچپن کا پتہ یاد ہونا (طویل المدتی)۔",
        "بغیر سوچے سائیکل چلانا (طریقہ کار کی یادداشت)۔"
      ],
      "Roman Urdu": [
        "OTP code yaad karke type karna (Short-term memory).",
        "Saalon baad bachpan ki baatein yaad rehna (Long-term memory).",
        "Bina soche cycle chalana (Procedural memory)."
      ]
    },
    importantPoints: {
      English: [
        "The Hippocampus converts short-term memories into long-term storage.",
        "Sleep is essential for memory consolidation.",
        "Spacing out study sessions improves long-term recall compared to cramming."
      ],
      Urdu: [
        "ہپپوکیمپس شارٹ ٹرم یادداشتوں کو لانگ ٹرم میں تبدیل کرتا ہے۔",
        "یادداشت کی پختگی کے لیے نیند انتہائی ضروری ہے۔",
        "وقفے سے پڑھائی کرنا ایک ساتھ رٹا مارنے سے زیادہ مؤثر ہے۔"
      ],
      "Roman Urdu": [
        "Hippocampus short-term memories ko long-term mein convert karta hai.",
        "Memory consolidation ke liye neend bohot zaroori hai.",
        "Break le kar padhna ratta marne se behtar hai."
      ]
    }
  },

  // ==========================================
  // --- B) PSYCHOLOGICAL DISORDERS (DSM-5) ---
  // ==========================================
  {
    id: "depression-overview",
    categoryId: "disorders",
    icon: "sentiment_very_dissatisfied",
    badge: "DSM-5",
    founder: "Emepdocles / Emil Kraepelin (Modern Classification)",
    discoveryDate: "1899",
    title: {
      English: "Major Depressive Disorder (Depression)",
      Urdu: "ڈپریشن (شدید اداسی کا عارضہ)",
      "Roman Urdu": "Major Depressive Disorder (Depression)"
    },
    subtitle: {
      English: "Persistent depressed mood, low energy, and loss of interest",
      Urdu: "مسلسل اداسی، مایوسی اور خوشی کا ختم ہو جانا",
      "Roman Urdu": "Constant low mood aur khushi na milna"
    },
    backgroundHistory: {
      English: "Historically known as 'Melancholia' since ancient Greece, Emil Kraepelin first categorized depressive illness separately from schizophrenia in 1899. Modern DSM criteria define Major Depressive Disorder as an organic, clinical condition.",
      Urdu: "قدیم یونان سے اسے 'میلانکولیا' کہا جاتا تھا۔ 1899 میں ایمیل کریپلن نے ڈپریشن کو دیگر دماغی بیماریوں سے الگ ایک باقاعدہ نفسیاتی مرض کے طور پر کلاسیفائی کیا۔",
      "Roman Urdu": "Purane zamane mein isko Melancholia kehte the. 1899 mein Emil Kraepelin ne isko clinical mood disorder ke tor par define kiya."
    },
    explanation: {
      English: "Major Depressive Disorder is characterized by persistent low mood, reduced energy, and loss of pleasure in activities lasting at least two weeks. It profoundly impacts sleep, appetite, self-esteem, and concentration.",
      Urdu: "ڈپریشن ایک عام لیکن شدید نفسیاتی عارضہ ہے جس میں کم از کم 2 ہفتوں تک مسلسل اداسی، مایوسی، توانائی کی کمی اور تمام پسندیدہ کاموں میں دلچسپی ختم ہو جاتی ہے۔",
      "Roman Urdu": "Depression mein kam se kam 2 weeks tak constant low mood, zero motivation, aur maayusi rehti hai."
    },
    mainConceptsProcess: {
      English: [
        "Anhedonia: Inability to experience pleasure from previously enjoyed activities.",
        "Neurochemical Imbalance: Alterations in serotonin, norepinephrine, and dopamine pathways.",
        "Cognitive Triad: Negative view of oneself, the world, and the future (Beck)."
      ],
      Urdu: [
        "این ہیڈونیا (Anhedonia): پسندیدہ کاموں سے خوہش اور خوشی کا مکمل ختم ہو جانا۔",
        "کیمیائی عدم توازن: سیروٹونن اور ڈوپامین کی مقدار کا متاثر ہونا۔",
        "منفی کاگنیٹو تین کونے (Beck Triad): اپنے، دنیا اور مستقبل کے بارے میں ناامیدی۔"
      ],
      "Roman Urdu": [
        "Anhedonia: Pehle pasandida kaam mein khushi mehsoos na hona.",
        "Brain chemical imbalance: Serotonin aur Dopamine ki kami.",
        "Negative Cognitive Triad: Apne, duniya aur future ke baare mein hopeless hona."
      ]
    },
    examples: {
      English: [
        "Feeling completely exhausted trying to perform simple daily tasks like showering.",
        "Experiencing chronic emotional numbness rather than active weeping.",
        "Believing oneself to be an inevitable burden to loved ones."
      ],
      Urdu: [
        "بستر سے اٹھنے یا نہانے جیسے چھوٹے کام بھی پہاڑ معلوم ہونا۔",
        "رونے کے بجائے اندر سے مکمل خالی پن اور بے حسی محسوس ہونا۔",
        "خود کو اپنوں کے لیے بوجھ سمجھنا۔"
      ],
      "Roman Urdu": [
        "Bed se uthna ya chote kaam karna bhi bohot mushkil lagna.",
        "Andar se completely empty aur numb feel karna.",
        "Apne aap ko doston/family par bojh samajhna."
      ]
    },
    importantPoints: {
      English: [
        "Not a flaw of character or personal weakness—it is a recognized mood condition.",
        "Involves measurable neural circuitry and biological changes.",
        "Highly treatable with Cognitive Behavioral Therapy (CBT) and medical support."
      ],
      Urdu: [
        "یہ کوئی ذاتی کمزوری نہیں بلکہ ایک قابلِ علاج طبی و نفسیاتی عارضہ ہے۔",
        "دماغی کیمیکلز کے توازن میں تبدیلی سے منسلک ہوتا ہے۔",
        "تھراپی (CBT) اور لائف سٹائل میں تبدیلی سے اس کا بہترین علاج ممکن ہے۔"
      ],
      "Roman Urdu": [
        "Yeh koi weakness nahi balki ek treatable condition hai.",
        "Brain chemistry aur mood regulation se related hota hai.",
        "CBT therapy aur lifestyle changes se recovery ho sakti hai."
      ]
    }
  },
  {
    id: "anxiety-disorders",
    categoryId: "disorders",
    icon: "air",
    badge: "DSM-5",
    founder: "Sigmund Freud / Modern DSM Task Force",
    discoveryDate: "1980 (DSM-III GAD entry)",
    title: {
      English: "Anxiety Disorders & GAD",
      Urdu: "اینگزائٹی ڈس آرڈر اور جی اے ڈی",
      "Roman Urdu": "Anxiety Disorders & GAD"
    },
    subtitle: {
      English: "Excessive, persistent worry and hypervigilance",
      Urdu: "شدید، مسلسل فکر مندی اور ہمہ وقت بے چینی",
      "Roman Urdu": "Extreme tension, worry aur physical tightness"
    },
    backgroundHistory: {
      English: "Freud originally conceptualized anxiety as 'Anxiety Neurosis' in 1895. In 1980, the DSM-III separated anxiety into distinct conditions like Generalized Anxiety Disorder (GAD), Panic Disorder, and Phobias.",
      Urdu: "فرائیڈ نے 1895 میں اسے 'اینگزائٹی نیوروسس' کہا۔ 1980 میں DSM-III نے اینگزائٹی کو الگ بیماریوں جیسے عمومی بے چینی (GAD) اور پینک ڈس آرڈر میں تقسیم کیا۔",
      "Roman Urdu": "1980 mein DSM-III ne Generalized Anxiety Disorder (GAD) ko alag diagnosis ke tor par identify kiya."
    },
    explanation: {
      English: "Generalized Anxiety Disorder (GAD) involves excessive, uncontrollable worry about various everyday situations lasting over 6 months. The brain maintains a chronic state of fight-or-flight hypervigilance.",
      Urdu: "اینگزائٹی ڈس آرڈر میں انسان روزمرہ کے معاملات کے بارے میں شدید اور ناقابلِ کنٹرول بے چینی کا شکار رہتا ہے۔ جسم مسلسل تناؤ کی حالت میں رہتا ہے۔",
      "Roman Urdu": "Anxiety Disorder mein insan har baat ki extreme tension leta hai. Mind har waqt worst-case scenario sochta hai."
    },
    mainConceptsProcess: {
      English: [
        "Hypervigilance: Brain constantly scanning the environment for threats.",
        "Catastrophizing: Assuming worst-case outcomes for ambiguous events.",
        "Somatic Tension: Physical manifestations such as tightness, trembling, and nausea."
      ],
      Urdu: [
        "شدید بیداری (Hypervigilance): دماغ کا ہر وقت خطرے اور برے انجام کی تلاش میں رہنا۔",
        "بدترین نتیجہ سوچنا (Catastrophizing): ہر بات میں برے انجام کی پیشگوئی۔",
        "جسمانی تناؤ: پٹھوں کا کھنچاؤ، ہاتھوں کا کانپنا اور متلی۔"
      ],
      "Roman Urdu": [
        "Hypervigilance: Brain har waqt khatre ki talash mein rehna.",
        "Catastrophizing: Har baat ka sab se bura outcome sochna.",
        "Physical symptoms: Muscle tightness, sweating aur trembling."
      ]
    },
    examples: {
      English: [
        "Constantly anticipating bad news whenever the phone rings unexpectedly.",
        "Feeling intense physical tightness in shoulders and jaw for weeks.",
        "Over-analyzing simple daily interactions out of fear of social disapproval."
      ],
      Urdu: [
        "فون کی گھنٹی بجنے پر کسی بری خبر کا خوف۔",
        "کندھوں اور جبڑوں میں ہفتوں تک پٹھوں کا کھنچاؤ۔",
        "عام گفتگو کا غلط مطلب نکال کر پریشان ہونا۔"
      ],
      "Roman Urdu": [
        "Phone ring hone par hamesha buri khabar ka dar lagna.",
        "Shoulders aur neck mein constant muscle tension.",
        "Chhoti baaton ko over-analyze karke pareshan hona."
      ]
    },
    importantPoints: {
      English: [
        "Triggers the sympathetic nervous system ('fight or flight') needlessly.",
        "Common symptoms include restlessness, fatigue, and difficulty sleeping.",
        "Responds exceptionally well to CBT, breathing exercises, and exposure therapy."
      ],
      Urdu: [
        "جسم کا خوف محسوس کرنے والا اعصابی نظام مسلسل متحرک رہتا ہے۔",
        "علامات میں بے چینی، تھکن اور نیند کا متاثر ہونا شامل ہیں۔",
        "CBT اور سانس کی مشقوں سے بہترین نتائج حاصل ہوتے ہیں۔"
      ],
      "Roman Urdu": [
        "Nervous system constantly alert mode par rehta hai.",
        "Restlessness, fatigue aur muscle tightness common symptoms hain.",
        "CBT therapy aur deep breathing se bohot relief milta hai."
      ]
    }
  },
  {
    id: "ocd-overview",
    categoryId: "disorders",
    icon: "repeat",
    badge: "DSM-5",
    founder: "Pierre Janet / Henri Pitres",
    discoveryDate: "Early 20th Century",
    title: {
      English: "Obsessive-Compulsive Disorder (OCD)",
      Urdu: "وسواسی اجباری عارضہ (OCD)",
      "Roman Urdu": "OCD (Obsessive Compulsive Disorder)"
    },
    subtitle: {
      English: "The cycle of intrusive thoughts and neutralizing rituals",
      Urdu: "ناپسندیدہ وسوسوں اور بار بار کام دہرانے کا چکر",
      "Roman Urdu": "Intrusive thoughts aur repeat acts ka cycle"
    },
    backgroundHistory: {
      English: "Historically described as 'scrupulosity' or religious doubt in the 17th century, early French psychiatrist Pierre Janet defined it as 'psychasthenia' in 1903. Today, OCD is understood as a neurological anxiety-driven brain loop.",
      Urdu: "سترہویں صدی میں اسے مذہبی وسوسہ کہا جاتا تھا۔ 1903 میں فرانسیسی سائیکاٹرسٹ پیئر جانیٹ نے اسے سائنسی طور پر بیان کیا۔ اب اسے دماغ کے لوپ میں پھنسنے کی بیماری سمجھا جاتا ہے۔",
      "Roman Urdu": "1903 mein Pierre Janet ne isko scientific term diya. Aaj OCD ko brain circuit loop samjha jata hai."
    },
    explanation: {
      English: "OCD consists of two main parts: Obsessions (unwanted intrusive thoughts, doubts, or terrifying images) and Compulsions (repetitive physical or mental actions performed to lower that acute anxiety).",
      Urdu: "OCD دو حصوں پر مشتمل ہے: وسوسے (ناپسندیدہ دہرائے جانے والے خیالات) اور مجبوری کی حرکتیں (بے چینی کم کرنے کے لیے بار بار تالے چیک کرنا، ہاتھ دھونا وغیرہ)۔",
      "Roman Urdu": "OCD ke 2 main parts hain: Obsessions (unwanted scary thoughts) aur Compulsions (tension kam karne ke liye repeat acts)."
    },
    mainConceptsProcess: {
      English: [
        "Obsession: Intrusive idea (e.g., 'My hands are deeply contaminated').",
        "Anxiety: Severe emotional panic triggered by the obsession.",
        "Compulsion: Ritual action (e.g., washing hands 5 times) to seek temporary relief.",
        "Reinforcement Loop: Compulsion temporarily reduces anxiety, trapping the brain in the habit."
      ],
      Urdu: [
        "وسوسہ (Obsession): ناپسندیدہ خیال (مثلاً: ہاتھ پر جراثیم لگے ہیں)۔",
        "بے چینی (Anxiety): وسوسے کے باعث شدید گھبراہٹ۔",
        "مجبوری کا عمل (Compulsion): گھبراہٹ کم کرنے کے لیے 5 بار ہاتھ دھونا۔",
        "سائیکل کی پختگی: عمل سے عارضی سکون ملتا ہے لیکن وسوسہ پھر واپس آ جاتا ہے۔"
      ],
      "Roman Urdu": [
        "Obsession: Intrusive thought (e.g. hands dirty hain).",
        "Anxiety: Thought ki waja se extreme panic.",
        "Compulsion: Ritual action (e.g. 5 baar haath dhona).",
        "Reinforcement: Temporary relief milta hai par loop mazboot hota hai."
      ]
    },
    examples: {
      English: [
        "Washing hands until skin is raw due to terrifying fear of unseen bacteria.",
        "Checking stove knobs or door locks 10 times before being able to leave home.",
        "Mental counting or praying in exact sequences to avert imaginary harm."
      ],
      Urdu: [
        "جراثیم کے خوف سے بار بار اور مسلسل ہاتھ دھونا۔",
        "گھر سے نکلنے سے پہلے چولہے کی نوب 10 بار چیک کرنا۔",
        "کسی حادثے سے بچنے کے لیے ذہن میں بار بار گنتی کرنا۔"
      ],
      "Roman Urdu": [
        "Germs ke dar se skin raw hone tak haath dhona.",
        "Stove knobs ya doors 10 baar check karna.",
        "Accidents se bachne ke liye mind mein repeat counting karna."
      ]
    },
    importantPoints: {
      English: [
        "Compulsive rituals only provide temporary relief and reinforce the fear loop long term.",
        "People with OCD are almost always aware their fears are irrational.",
        "Exposure and Response Prevention (ERP) is the gold-standard therapeutic treatment."
      ],
      Urdu: [
        "بار بار کام دہرانے سے عارضی سکون ملتا ہے لیکن وسوسے مزید مضبوط ہوتے ہیں۔",
        "مریض کو معلوم ہوتا ہے کہ اس کی سوچیں بے بنیاد ہیں لیکن وہ مجبور ہوتا ہے۔",
        "ERP تھراپی اس کا بہترین علاج ہے۔"
      ],
      "Roman Urdu": [
        "Compulsions se temporary relief milta hai par OCD loop strong hota hai.",
        "Insan ko pata hota hai ke thought irrational hai par woh majboor hota hai.",
        "ERP therapy iska main evidence-based treatment hai."
      ]
    }
  },
  {
    id: "ptsd-overview",
    categoryId: "disorders",
    icon: "shield_alert",
    badge: "DSM-5",
    founder: "Abram Kardiner / DSM-III Task Force",
    discoveryDate: "1980",
    title: {
      English: "Post-Traumatic Stress Disorder (PTSD)",
      Urdu: "پوسٹ ٹرامیٹک سٹریچ ڈس آرڈر (PTSD)",
      "Roman Urdu": "PTSD (Post-Traumatic Stress Disorder)"
    },
    subtitle: {
      English: "Re-experiencing trauma through flashbacks, nightmares, and avoidance",
      Urdu: "کسی حادثے یا صدمے کا بار بار یاد آنا اور خائف رہنا",
      "Roman Urdu": "Trauma ke baad flashbacks, nightmares aur dar"
    },
    backgroundHistory: {
      English: "Historically known as 'shell shock' or 'war neurosis' after WWI and WWII, psychoanalyst Abram Kardiner studied traumatic neurosis. In 1980, PTSD was officially added to DSM-III following observations of Vietnam war veterans.",
      Urdu: "پہلی اور دوسری جنگِ عظیم میں اسے 'شیل شاک' کہا گیا۔ 1980 میں ویتنام جنگ کے متاثرین کے مشاہدے کے بعد DSM-III میں PTSD کو باقاعدہ ڈس آرڈر تسلیم کیا گیا۔",
      "Roman Urdu": "WWI ke baad isko Shell Shock kehte the. 1980 mein Vietnam war veterans ki study ke baad PTSD official diagnosis bana."
    },
    explanation: {
      English: "PTSD can develop after experiencing or witnessing a terrifying event (accident, assault, disaster, war). Symptoms include intrusive flashbacks, nightmares, extreme hyperarousal, and emotional numbness.",
      Urdu: "پی ٹی ایس ڈی کسی شدید خوفناک حادثے، سانحے یا جنگ کے صدمے کے بعد پیدا ہوتا ہے۔ اس کی علامات میں فلش بیکس (حادثے کا آنکھوں کے سامنے گھومنا)، برے خواب اور خوف شامل ہیں۔",
      "Roman Urdu": "PTSD kisi severe traumatic event (accident, war, disaster) ke baad hota hai. Is mein nightmares, flashbacks aur hyperarousal hota hai."
    },
    mainConceptsProcess: {
      English: [
        "Intrusive Memories: Involuntary vivid flashbacks feeling like re-living the trauma.",
        "Avoidance: Going to great lengths to stay away from places, people, or thoughts tied to the event.",
        "Hyperarousal: Being easily startled, constantly on guard, and irritable."
      ],
      Urdu: [
        "فلش بیکس (Flashbacks): صدمے کا بار بار آنکھوں کے سامنے ایسا آنا جیسے دوبارہ ہو رہا ہو۔",
        "اجتناب (Avoidance): صدمے سے جڑی جگہوں اور باتوں سے دور بھاگنا۔",
        "شدید بیداری (Hyperarousal): ذرا سی آواز پر ڈر جانا اور چڑچڑا پن۔"
      ],
      "Roman Urdu": [
        "Flashbacks: Event ka mind mein baar baar repeat hona.",
        "Avoidance: Trauma se judi jaghon aur doston se door rehna.",
        "Hyperarousal: Achanak dar jana, ghussa aana aur alert rehna."
      ]
    },
    examples: {
      English: [
        "A car crash survivor experiencing a panic attack when hearing screeching tires.",
        "A disaster survivor experiencing vivid nightmares every night.",
        "Avoiding bridges or highway driving altogether after a traumatic collision."
      ],
      Urdu: [
        "گاڑی کے حادثے کے متاثرہ شخص کا ٹائر کی آواز سن کر گھبرا جانا۔",
        "کسی تباہی سے بچے شخص کو روزانہ برے خواب آنا۔",
        "حادثے کے بعد ہائی وے پر گاڑی چلانے سے مکمل اجتناب کرنا۔"
      ],
      "Roman Urdu": [
        "Car accident ke baad tire screech sunte hi panic aana.",
        "Trauma ke baad rozana nightmares aana.",
        "Accident wali jagah par wapas na jana."
      ]
    },
    importantPoints: {
      English: [
        "The amygdala remains stuck in alarm mode while the hippocampus struggles to contextualize the memory.",
        "EMDR (Eye Movement Desensitization) and trauma-focused CBT are standard treatments.",
        "Supportive relationships play a massive role in trauma recovery."
      ],
      Urdu: [
        "دماغ کا الارم سسٹم ہر وقت آن رہتا ہے اور پرانی یاد کو ماضی نہیں سمجھ پاتا۔",
        "EMDR اور ٹراما سنٹرڈ CBT اس کے بہترین علاج ہیں۔",
        "اپنوں کا ساتھ اور ہمدردی صدمے سے نکلنے میں اہم ثابت ہوتی ہے۔"
      ],
      "Roman Urdu": [
        "Brain ka amygdala alarm mode par stuck ho jata hai.",
        "EMDR therapy aur Trauma CBT iske proven treatments hain.",
        "Family aur friends ka support bohot zaroori hota hai."
      ]
    }
  },
  {
    id: "adhd-overview",
    categoryId: "disorders",
    icon: "zap",
    badge: "DSM-5",
    founder: "Sir George Still / Virginia Douglas",
    discoveryDate: "1902",
    title: {
      English: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
      Urdu: "ای ڈی ایچ ڈی (توجہ کی کمی اور ہائپر ایکٹیویٹی)",
      "Roman Urdu": "ADHD (Attention Deficit Disorder)"
    },
    subtitle: {
      English: "Executive function impairment in focus, impulsivity, and activity regulation",
      Urdu: "توجہ مرکوز کرنے، ضبطِ نفس اور توانائی کی تنظیم میں دشواری",
      "Roman Urdu": "Focus, impulsivity aur hyper-activity ki mushkil"
    },
    backgroundHistory: {
      English: "First described in 1902 by British pediatrician Sir George Still as a deficit in moral control, 1970s researcher Virginia Douglas proved the core issue is executive functioning and sustained attention rather than moral failure.",
      Urdu: "1902 میں برطانوی ڈاکٹر سر جارج سٹل نے پہلی بار اس کا مشاہدہ کیا۔ 1970 میں ورجینیا ڈگلس نے ثابت کیا کہ یہ اخلاقی کمزوری نہیں بلکہ دماغ کے فوکس کنٹرول کی حیاتیاتی کمزوری ہے۔",
      "Roman Urdu": "1902 mein Sir George Still ne isko note kiya. 1970s mein Virginia Douglas ne prove kiya ke yeh executive function impairment hai."
    },
    explanation: {
      English: "ADHD is a neurodevelopmental disorder affecting executive function skills—including working memory, focus regulation, time management, impulse control, and organization.",
      Urdu: "ای ڈی ایچ ڈی اعصابی نشوونما کا ایک عارضہ ہے جس میں دماغ کے ایگزیکٹو فنکشنز (توجہ مرکوز رکھنا، وقت کی پابندی، اور جبلت پر قابو رکھنا) متاثر ہوتے ہیں۔",
      "Roman Urdu": "ADHD neurodevelopmental disorder hai jis mein mind ka focus, working memory, time management aur organization affect hoti hai."
    },
    mainConceptsProcess: {
      English: [
        "Inattention: Difficulty sustaining focus on tedious tasks, easy distractibility.",
        "Hyperactivity: Restlessness, constant physical fidgeting or inner racing mind.",
        "Impulsivity: Interrupting conversations, acting or speaking without pre-thinking consequences."
      ],
      Urdu: [
        "توجہ کا بکھراؤ (Inattention): بورنگ کاموں پر فوکس نہ رہنا اور فوراً مائل ہو جانا۔",
        "ہائپر ایکٹیویٹی (Hyperactivity): بے چینی، ہاتھ پاؤں ہلانا اور سکون سے نہ بیٹھنا۔",
        "جلد بازی (Impulsivity): بات کاٹنا اور بغیر سوچے سمجھے فیصلہ کرنا۔"
      ],
      "Roman Urdu": [
        "Inattention: Boring tasks par focus na rehna aur distract ho jana.",
        "Hyperactivity: Constant fidgeting aur restlessness.",
        "Impulsivity: Baat kaatna aur bina soche decision lena."
      ]
    },
    examples: {
      English: [
        "Starting 5 different projects at once and leaving all of them unfinished.",
        "Losing essential items like keys, wallet, or school assignments daily.",
        "Hyperfocusing for 8 hours on an interesting passion project while ignoring meals."
      ],
      Urdu: [
        "ایک ساتھ 5 کام شروع کرنا اور کوئی بھی مکمل نہ کر پانا۔",
        "روزمرہ کی ضروری چیزیں (چابیاں، والٹ) بھول جانا یا گم کر دینا۔",
        "پسندیدہ کام پر 8 گھنٹے مسلسل فوکس کرنا اور کھانا پینا بھول جانا۔"
      ],
      "Roman Urdu": [
        "Ek saath 5 kaam start karna aur koi poora na karna.",
        "Chabi, wallet ya phone rozana ghum ho jana.",
        "Interest wale project par hours hyperfocus karna."
      ]
    },
    importantPoints: {
      English: [
        "Involves lower baseline levels of dopamine transmission in prefrontal cortex.",
        "Not due to laziness or bad parenting—it is a genetic structural neurotype.",
        "Managed through behavioral coaching, structured routines, and targeted medical therapies."
      ],
      Urdu: [
        "دماغ کے اگلے حصے (Prefrontal Cortex) میں ڈوپامین کی مقدار متاثر ہوتی ہے۔",
        "یہ سستی یا ناقص تربیت کی وجہ سے نہیں بلکہ جینیاتی دماغی ساخت کی وجہ سے ہوتا ہے۔",
        "طریقہ کار اور ریگولر روٹین سے اس کو کامیابی سے مینج کیا جا سکتا ہے۔"
      ],
      "Roman Urdu": [
        "Brain ke frontal part mein dopamine pathway affect hota hai.",
        "Yeh laziness nahi hai, neuro-divergent structural difference hai.",
        "Structure routines, coaching aur medication se manage hota hai."
      ]
    }
  },

  // ==========================================
  // --- C) FAMOUS PSYCHOLOGY EXPERIMENTS ---
  // ==========================================
  {
    id: "pavlov-dogs",
    categoryId: "experiments",
    icon: "notifications",
    founder: "Ivan Pavlov (Nobel Laureate)",
    discoveryDate: "1897 / Published 1902",
    title: {
      English: "Pavlov's Classical Conditioning",
      Urdu: "پاولوف کا کلاسک کنڈیشننگ تجربہ",
      "Roman Urdu": "Pavlov Classical Conditioning"
    },
    subtitle: {
      English: "Ivan Pavlov's discovery of associative learning through bells and salivation",
      Urdu: "گھنٹی اور منہ میں پانی آنے کے ذریعے سیکھنے کا تجربہ",
      "Roman Urdu": "Bell aur salivation se associative learning ka discovery"
    },
    backgroundHistory: {
      English: "Russian physiologist Ivan Pavlov accidentally discovered classical conditioning while studying the digestive systems of dogs in the late 1890s. He won the Nobel Prize in Physiology in 1904 for his groundbreaking research.",
      Urdu: "روسی سائنسدان ایوان پاولوف نے 1890 کی دہائی کے آخر میں کتوں کے ہاضمے پر تحقیق کے دوران حادثاتی طور پر کلاسک کنڈیشننگ دریافت کی۔ 1904 میں انہیں نوبل انعام سے نوازا گیا۔",
      "Roman Urdu": "Ivan Pavlov ne 1890s mein dogs ki digestion research ke waqt accidentally classical conditioning discover ki. Unhein 1904 mein Nobel Prize mila."
    },
    explanation: {
      English: "Ivan Pavlov demonstrated that an unconditioned response (salivating for food) could be paired with a neutral stimulus (ringing a bell). Over repeated pairings, the bell became a conditioned stimulus causing salivation on its own.",
      Urdu: "پاولوف نے ثابت کیا کہ کھانا دینے سے پہلے گھنٹی بجانے پر، کتا گھنٹی کی آواز کو کھانے کے ساتھ جوڑنا سیکھ گیا اور صرف گھنٹی سنتے ہی منہ میں لعاب آنے لگا۔",
      "Roman Urdu": "Pavlov ne dekha ke khana dene se pehle bell bajane par dog bell ki aawaz ko khane se connect kar leta hai aur bell sunte hi saliva aane lagta hai."
    },
    mainConceptsProcess: {
      English: [
        "Unconditioned Stimulus (Food) → Natural Unconditioned Response (Salivation).",
        "Neutral Stimulus (Bell Chime) paired with Food repeatedly.",
        "Conditioned Stimulus (Bell Chime Alone) → Conditioned Response (Salivation)."
      ],
      Urdu: [
        "غیر مشروط محرک (کھانا) → غیر مشروط ردِعمل (لعاب)۔",
        "غیر جانبدار محرک (گھنٹی) + کھانا بار بار دہرانا۔",
        "مشروط محرک (صرف گھنٹی) → مشروط ردِعمل (لعاب)۔"
      ],
      "Roman Urdu": [
        "Unconditioned Stimulus (Food) → Natural Response (Salivation).",
        "Neutral Stimulus (Bell) paired with Food repeatedly.",
        "Conditioned Stimulus (Bell alone) → Conditioned Response (Salivation)."
      ]
    },
    examples: {
      English: [
        "Feeling mouthwatering hunger when hearing the notification tone of a food delivery app.",
        "Feeling a tense surge of anxiety when hearing a dentist's drill sound.",
        "Feeling happy and relaxed when smelling a perfume associated with a loved one."
      ],
      Urdu: [
        "فوڈ ڈیلیوری ایپ کا ٹون سنتے ہی بھوک کا احساس ہونا۔",
        "ڈینٹسٹ کی مشین کی آواز سن کر خوف محسوس ہونا۔",
        "کسی پیارے کے پرفیوم کی خوشبو سے پرسکون ہو جانا۔"
      ],
      "Roman Urdu": [
        "Food delivery app ki notification tone par bhook lagna.",
        "Dentist ke drill ki aawaz se dar lagna.",
        "Khushbu se purani achhi memory yaad aana."
      ]
    },
    importantPoints: {
      English: [
        "Proves that emotional reactions and phobias can be learned through association.",
        "Laid the foundational framework for Behaviorism in Western psychology.",
        "Concepts of Extinction (unlearning) and Generalization emerged from this research."
      ],
      Urdu: [
        "یہ ثابت کرتا ہے کہ خوف، جذبات اور عادات ماحولیاتی تعلق سے سیکھے جا سکتے ہیں۔",
        "بیہیویئرزم نفسیات کی سائنس کی بنیاد رکھی۔",
        "عادات کو ختم کرنے اور پھیلانے کے نظریات اسی تحقیق سے نکلے۔"
      ],
      "Roman Urdu": [
        "Proves ke emotional reactions association se seekhe jaate hain.",
        "Behaviorism psychology ki pehli strong foundation bani.",
        "Extinction (habit khatam karna) ka concept isse aaya."
      ]
    }
  },
  {
    id: "milgram-experiment",
    categoryId: "experiments",
    icon: "zap",
    founder: "Stanley Milgram (Yale University)",
    discoveryDate: "1961 / Published 1963",
    title: {
      English: "Milgram Obedience Experiment",
      Urdu: "ملگرام کا اطاعت کا تجربہ",
      "Roman Urdu": "Milgram Obedience Experiment"
    },
    subtitle: {
      English: "Stanley Milgram's study on obedience to authority figures",
      Urdu: "صاحبِ اقتدار کے احکامات ماننے پر ملگرام کی تحقیق",
      "Roman Urdu": "Authority ke orders manne par Stanley Milgram ki study"
    },
    backgroundHistory: {
      English: "Conducted at Yale University in 1961 in the aftermath of WWII trials, Stanley Milgram sought to understand if German citizens were unusually obedient or if all humans are capable of executing cruel orders under authority.",
      Urdu: "1961 میں ییل یونیورسٹی میں ملگرام نے یہ جاننے کے لیے تحقیق کی کہ کیا انسان کسی اتھارٹی کے کہنے پر دوسرے کو اذیت دینے کے احکامات پر عمل کر سکتا ہے۔",
      "Roman Urdu": "1961 mein Yale University mein Milgram ne test kiya ke log authority ke order par dusre ko kitna pain de sakte hain."
    },
    explanation: {
      English: "Participants were instructed by an authority figure (in a lab coat) to administer electric shocks to a 'learner' (actor) for wrong answers, increasing up to 450 volts. Shockingly, 65% of ordinary participants delivered the maximum lethal shock.",
      Urdu: "تجربے میں عام لوگوں کو پروفیسر کے حکم پر دوسرے کمرے میں موجود شخص کو غلط جواب پر 450 وولٹ تک کے برقی جھٹکے دینے کو کہا گیا۔ 65 فیصد لوگوں نے حکم کی تعمیل کی اور آخری سوئچ دبایا۔",
      "Roman Urdu": "65% participants ne experimenter ke kehne par 450-volt ka maximum electric shock button dabaya, jabki unhein laga shock real tha."
    },
    mainConceptsProcess: {
      English: [
        "Agentic State: Individual perceives themselves as an agent carrying out another's will, relinquishing personal responsibility.",
        "Legitimate Authority: Presence of authoritative symbols (lab coat, institutional setting) dramatically increases compliance.",
        "Gradual Escalation: Starting at 15V and increasing by 15V steps makes refusal difficult at any single increment."
      ],
      Urdu: [
        "ایجنٹک سٹیٹ (Agentic State): خود کو صرف حکم کی تعمیل کا زریعہ سمجھنا اور اخلاقی ذمہ داری سے بری الذمہ ہو جانا۔",
        "بااختیار سائنسی ماحول: لیب کوٹ اور یونیورسٹی کا نام لوگوں پر اثر انداز ہوا۔",
        "تدریجی اضافہ: 15 وولٹ سے شروع کر کے آہستہ آہستہ وولٹیج بڑھانا انکار مشکل بناتا ہے۔"
      ],
      "Roman Urdu": [
        "Agentic State: Apne aap ko sirf order follower samajhna aur responsibility na lena.",
        "Authority Symbols: Lab coat aur Yale University ki waja se log obey karte gaye.",
        "Gradual Escalation: 15V se thoda thoda karke 450V tak pohnchna."
      ]
    },
    examples: {
      English: [
        "Employees carrying out illegal or unethical corporate instructions because 'my manager ordered it'.",
        "Conforming to harmful organizational hazing rituals due to institutional peer pressure.",
        "Unquestioned obedience in hierarchical military or bureaucratic structures."
      ],
      Urdu: [
        "ملازمین کا باس کے کہنے پر غلط کام کرنا کیونکہ 'یہ حکم کا حصہ ہے'۔",
        "سخت اداروں میں غیر اخلاقی قوانین کی خاموش تعمیل۔",
        "ملٹری اور اداروں میں احکامات پر اندھا دھند عمل۔"
      ],
      "Roman Urdu": [
        "Boss ke kehne par ghalat rules ko follow karna.",
        "Organization mein orders blindly obey karna.",
        "Authority figures ke pressure mein aana."
      ]
    },
    importantPoints: {
      English: [
        "Showed that situational authority pressure can override fundamental personal morality.",
        "High obedience rates occurred despite severe distress expressed by participants.",
        "Led to modern strict Institutional Review Board (IRB) ethics standards in research."
      ],
      Urdu: [
        "ثابت ہوا کہ اتھارٹی کا دباؤ انسان کے ذاتی اخلاقی ضمیر پر بھی غالب آ سکتا ہے۔",
        "شرکاء شدید پریشان اور پسینے میں شرابور تھے لیکن پھر بھی بٹن دباتے رہے۔",
        "اس تجربے کے بعد نفسیاتی تحقیق میں اخلاقی قوانین کو انتہائی سخت کر دیا گیا۔"
      ],
      "Roman Urdu": [
        "Proves ke authority pressure insani morality par dominate kar leta hai.",
        "Log pareshan the par phir bhi orders follow karte rahe.",
        "Iske baad psychology mein research ethics rules strict bane."
      ]
    }
  },
  {
    id: "stanford-prison",
    categoryId: "experiments",
    icon: "shield",
    founder: "Philip Zimbardo (Stanford University)",
    discoveryDate: "1971",
    title: {
      English: "Stanford Prison Experiment",
      Urdu: "سٹینفورڈ پرزن تجربہ",
      "Roman Urdu": "Stanford Prison Experiment"
    },
    subtitle: {
      English: "Philip Zimbardo's study on power dynamics and social roles",
      Urdu: "طاقت اور سماجی کرداروں کے انسان پر اثر کا تجربہ",
      "Roman Urdu": "Power dynamics aur social roles par Philip Zimbardo ka experiment"
    },
    backgroundHistory: {
      English: "In 1971, Philip Zimbardo set up a mock prison in the basement of the Stanford psychology building to study the psychological effects of perceived power between guards and prisoners.",
      Urdu: "1971 میں فلپ زمبارڈو نے سٹینفورڈ یونیورسٹی کی بیسمنٹ میں ایک جعلی جیل بنائی تاکہ گارڈز اور قیدیوں کے کردار کے انسانی ذہن پر اثرات کا مطالعہ کیا جا سکے۔",
      "Roman Urdu": "1971 mein Philip Zimbardo ne Stanford Psychology basement mein mock prison banaya guards aur prisoners ke roles study karne ke liye."
    },
    explanation: {
      English: "24 healthy college students were randomly assigned as 'Guards' or 'Prisoners'. Within days, guards developed cruel, abusive behavior while prisoners became passive, traumatized, and depressed. The 2-week study had to be shut down after just 6 days.",
      Urdu: "24 صحت مند طلباء کو گارڈز یا قیدی بنایا گیا۔ چند ہی دنوں میں گارڈز نے ظلم و بربریت شروع کر دی اور قیدی شدید ڈپریشن کا شکار ہو گئے۔ 2 ہفتے کا تجربہ 6 دن میں ختم کرنا پڑا۔",
      "Roman Urdu": "24 normal students ko Guards aur Prisoners banaya gaya. Guards bohot cruel ho gaye aur 2 weeks ka experiment 6 days mein stop karna pada."
    },
    mainConceptsProcess: {
      English: [
        "Deindividuation: Loss of self-awareness and personal responsibility in uniform/group roles.",
        "Lucifer Effect: How good, ordinary people can turn evil when given unchecked power.",
        "Role Internalization: Fast absorption of social expectations dictated by environment."
      ],
      Urdu: [
        "ڈی انڈیویجوایشن (Deindividuation): یونیفارم اور گروپ میں اپنی ذات اور اخلاقیات بھول جانا۔",
        "لوسیفر ایفیکٹ (Lucifer Effect): لامحدود طاقت ملنے پر اچھے انسان کا ظالم بن جانا۔",
        "کردار کی اپنائیت: ماحولیاتی کردار میں مکمل طور پر ڈھل جانا۔"
      ],
      "Roman Urdu": [
        "Deindividuation: Uniform aur group mein apni individual morality bhool jana.",
        "Lucifer Effect: Unchecked power milne par achha banda bhi cruel ban jaana.",
        "Role Internalization: Environment ke mutabiq fast badalna."
      ]
    },
    examples: {
      English: [
        "Online cyberbullying when hiding behind anonymous handles.",
        "Abuse of power in unmonitored organizational hierarchies.",
        "How peaceful citizens can join chaotic mob behavior during riots."
      ],
      Urdu: [
        "انٹرنیٹ پر فرضی نام کے پیچھے چھپ کر دوسروں کو نیچا دکھانا۔",
        "غیر منظم اداروں میں حکام کا ملازمین پر بے جا رعب۔",
        "مشتعل ہجوم میں شریف شہریوں کا قانون توڑنا۔"
      ],
      "Roman Urdu": [
        "Anonymous account ke peeche cyberbullying karna.",
        "Power milne par doosron par roab jamana.",
        "Mob/crowd mein violent behavior show karna."
      ]
    },
    importantPoints: {
      English: [
        "Demonstrated the terrifying speed with which systemic situations shape human actions.",
        "Critiqued heavily for ethical violations and investigator bias.",
        "Remains a classic landmark case study on social roles and situational influence."
      ],
      Urdu: [
        "یہ ثابت کرتا ہے کہ ماحول اور طاقت انسان کے رویے کو کتنی تیزی سے بدل سکتے ہیں۔",
        "اس پر اخلاقی اصولوں کی خلاف ورزی کی شدید تنقید ہوئی۔",
        "سماجی نفسیات میں طاقت کے بگاڑ کو سمجھنے کے لیے سنگِ میل کی حیثیت رکھتا ہے۔"
      ],
      "Roman Urdu": [
        "Shows ke environment insani behavior ko bohot fast change kar sakta hai.",
        "Ethics Violations ki waja se is par kafi criticism hua.",
        "Social psychology ka bohot famous case study hai."
      ]
    }
  },
  {
    id: "little-albert",
    categoryId: "experiments",
    icon: "child_care",
    founder: "John B. Watson & Rosalie Rayner",
    discoveryDate: "1920",
    title: {
      English: "Little Albert Conditioning Experiment",
      Urdu: "لٹل البرٹ کا خوف کی کنڈیشننگ کا تجربہ",
      "Roman Urdu": "Little Albert Experiment"
    },
    subtitle: {
      English: "John B. Watson's conditioning of fear phobias in infants",
      Urdu: "چھوٹے بچے میں خوف کی کیفیت پیدا کرنے کا تجربہ",
      "Roman Urdu": "Infants mein fear phobia condition karne ka experiment"
    },
    backgroundHistory: {
      English: "In 1920 at Johns Hopkins University, behaviorist John B. Watson and Rosalie Rayner sought to prove that emotional reactions like fear could be classically conditioned in human infants.",
      Urdu: "1920 میں جانز ہاپکنز یونیورسٹی میں جون بی واٹسن نے یہ ثابت کرنے کے لیے تجربہ کیا کہ انسانی بچوں میں خوف کے فوبیا کو سائنسی طور پر پیدا کیا جا سکتا ہے۔",
      "Roman Urdu": "1920 mein John B. Watson ne prove kiya ke insani bacchon mein khauf (phobia) condition kiya ja sakta hai."
    },
    explanation: {
      English: "A 9-month-old infant ('Little Albert') was exposed to a white rat, showing no initial fear. Watson then paired touching the rat with a terrifying loud iron bar noise. Soon, Albert became terrified of the rat, and generalized his fear to white fuzzy objects (rabbits, fur coats, Santa beard).",
      Urdu: "9 ماہ کے بچے کو سفید چوہا دکھایا گیا جس سے وہ بالکل نہیں ڈرتا تھا۔ پھر واٹسن نے چوہے کو چھوتے ہی لوہے کی شدید خوفناک آواز بجائی۔ جلد ہی بچہ سفید چوہے، خرگوش اور روئی سے شدید ڈرنے لگا۔",
      "Roman Urdu": "9-month old infant Albert ko white rat dikhaya gaya. Watson ne rat chhoote hi loud terrifying noise bajayi. Albert rat, rabbit aur white fur se darne laga."
    },
    mainConceptsProcess: {
      English: [
        "Conditioned Emotional Response: Learning fear via traumatic environmental pairing.",
        "Stimulus Generalization: Transferring conditioned fear to similar-looking objects (e.g., white fluffy rabbit).",
        "Extinction Absence: The study failed to de-condition Albert's fear before he left."
      ],
      Urdu: [
        "مشروط جذباتی ردِعمل: خوفناک آواز کے ملاپ سے ڈرنا سیکھنا۔",
        "خوف کا پھیلاؤ (Stimulus Generalization): خوف کا ملتی جلتی اشیاء (سفید خرگوش) پر بھی لاگو ہونا۔",
        "ڈر کا ختم نہ ہونا: بچہ بغیر ڈر ختم کیے لیب سے چلا گیا۔"
      ],
      "Roman Urdu": [
        "Conditioned Emotional Response: Traumatic noise se fear seekhna.",
        "Stimulus Generalization: Dar ka baaki milti-julti white fluffy cheezon par bhi aana.",
        "Extinction: Fear ko undo kiye bina experiment khatam hua."
      ]
    },
    examples: {
      English: [
        "Developing a lifelong phobia of dogs after being bitten or startled as a child.",
        "Panicking when smelling hospital disinfectant after a traumatic surgery.",
        "Fear of water after a near-drowning childhood event."
      ],
      Urdu: [
        "بچپن میں کتے کے کاٹنے یا بھونکنے سے زندگی بھر کا فوبیا بن جانا۔",
        "ہسپتال کی سمیل سے ماضی کے اپریشن کا خوف یاد آنا۔",
        "پانی میں ڈوبنے کے ڈر سے سوئمنگ نہ کرنا۔"
      ],
      "Roman Urdu": [
        "Bachpan mein dog bite ke baad lifetime phobia ban jana.",
        "Hospital ki smell se panic hona.",
        "Pani se phobia develop hona."
      ]
    },
    importantPoints: {
      English: [
        "Proved phobias can be acquired environmentally rather than purely inborn.",
        "Widely cited today as a major psychological study ethics violation.",
        "Influenced the creation of Systematic Desensitization therapy to cure phobias."
      ],
      Urdu: [
        "ثابت کیا کہ فوبیا اور ڈر ماحولیاتی تجربات سے پیدا ہوتے ہیں۔",
        "آج اس تجربے کو اخلاقیات کی شدید خلاف ورزی قرار دیا جاتا ہے۔",
        "اس نے بعد میں فوبیا کا علاج (Systematic Desensitization) بنانے میں مدد کی۔"
      ],
      "Roman Urdu": [
        "Prove kiya ke phobias environmentally seekhe jaate hain.",
        "Ethics Violation ka sab se bada example hai.",
        "Isse phobia treatments develop karne mein help mili."
      ]
    }
  },
  {
    id: "asch-conformity",
    categoryId: "experiments",
    icon: "groups",
    founder: "Solomon Asch",
    discoveryDate: "1951",
    title: {
      English: "Asch Conformity Experiment",
      Urdu: "ایش کا مطابقت و ہم آہنگی کا تجربہ",
      "Roman Urdu": "Asch Conformity Experiment"
    },
    subtitle: {
      English: "Solomon Asch's test on peer pressure and group conformity",
      Urdu: "گروپ کے دباؤ میں آکر غلط بات تسلیم کرنے کا تجربہ",
      "Roman Urdu": "Peer pressure aur group conformity par Solomon Asch ka experiment"
    },
    backgroundHistory: {
      English: "In 1951, Solomon Asch designed a vision test study at Swarthmore College to examine how social pressure from a unanimous majority could sway an individual's obvious factual judgments.",
      Urdu: "1951 میں سلیمان ایش نے یہ دیکھنے کے لیے تجربہ کیا کہ لوگ سچ جانتے ہوئے بھی صرف گروپ کے دباؤ میں آ کر غلط بات کیوں تسلیم کر لیتے ہیں۔",
      "Roman Urdu": "1951 mein Solomon Asch ne test kiya ke log jhoot jaante hue bhi group ke kehne par ghalat answer kyun dete hain."
    },
    explanation: {
      English: "A subject sat in a room with 7 actors who purposely gave blatantly wrong answers about line lengths. Over 75% of subjects conformed to the group's wrong answer at least once, simply to avoid standing out.",
      Urdu: "ایک کمرے میں 7 جعلی لوگوں نے لائن کی لمبائی کا جان بوجھ کر انتہائی غلط جواب دیا۔ 75 فیصد اصلی شرکاء نے الگ تھلگ نہ دکھنے کے لیے ان کے غلط جواب کی ہاں میں ہاں ملائی۔",
      "Roman Urdu": "7 actors ne jaan boojh kar galat line length ka answer diya. 75% logon ne group ke sath conform karke ghalat answer ko sahi kaha."
    },
    mainConceptsProcess: {
      English: [
        "Normative Social Influence: Conforming to fit in and avoid social rejection.",
        "Informational Social Influence: Conforming because we believe the group possesses better information.",
        "Unanimity Effect: Presence of even one dissenting ally drops conformity by 80%."
      ],
      Urdu: [
        "نارمیٹو اثر (Normative Influence): سوشل بائیکاٹ کے ڈر سے گروپ کی بات ماننا۔",
        "انفارمیشنل اثر: یہ سوچنا کہ شاید سب غلط نہیں کہہ رہے، میں ہی غلط ہوں۔",
        "اتحاد کا ٹوٹنا: اگر ایک بھی شخص الگ جواب دے دے تو ہمت بڑھ جاتی ہے۔"
      ],
      "Roman Urdu": [
        "Normative Influence: Group mein fit hone ke liye agree karna.",
        "Informational Influence: Yeh sochna ke shayad baaki sab sahi bol rahe hain.",
        "Unanimity Effect: Agar 1 banda bhi different answer de to humari courage badhti hai."
      ]
    },
    examples: {
      English: [
        "Agreeing with an absurd movie review because all your friends loved it.",
        "Dressing in trending fashion styles despite personally disliking them.",
        "Remaining silent in business meetings when the group supports a faulty idea."
      ],
      Urdu: [
        "تمام دوستوں کے تعریف کرنے پر بیکار فلم کی جھوٹی تعریف کرنا۔",
        "پسند نہ ہونے کے باوجود ٹرینڈنگ فیشن کے کپڑے پہننا۔",
        "میٹنگ میں غلط فیصلے کے خلاف خاموش رہنا۔"
      ],
      "Roman Urdu": [
        "Doston ke kehne par ghalat movie ko achha bolna.",
        "Fashion trends ko blindly follow karna.",
        "Office meeting mein group decision ke khilaf na bolna."
      ]
    },
    importantPoints: {
      English: [
        "Highlights the massive power of peer pressure over objective human perception.",
        "Conformity decreases when responses are written privately on paper.",
        "Essential framework for studying political groupthink and social trends."
      ],
      Urdu: [
        "ثابت کیا کہ بھیڑ کا دباؤ انسان سے سفید جھوٹ بولوا سکتا ہے۔",
        "اگر جواب کاغذ پر رازدارانہ لکھا جائے تو مطابقت 90 فیصد کم ہو جاتی ہے۔",
        "سیاسی اور سماجی ٹرینڈز کو سمجھنے کا بنیادی ماڈل۔"
      ],
      "Roman Urdu": [
        "Proves ke peer pressure insani sach par dominate kar sakta hai.",
        "Agar private paper par answer likha jaye to conformity kam hoti hai.",
        "Social trends aur groupthink samajhne ka main topic hai."
      ]
    }
  },

  // ==========================================
  // --- D) PSYCHOLOGY THEORIES ---
  // ==========================================
  {
    id: "freud-psychoanalysis",
    categoryId: "theories",
    icon: "psychology",
    founder: "Sigmund Freud",
    discoveryDate: "1899 (The Interpretation of Dreams)",
    title: {
      English: "Freud's Psychoanalytic Theory",
      Urdu: "فرائیڈ کا سائیکو اینالیٹک نظریہ",
      "Roman Urdu": "Freud Psychoanalytic Theory"
    },
    subtitle: {
      English: "Unconscious mind, Id, Ego, Superego, and defense mechanisms",
      Urdu: "تحت الشعور، لاشعور اور نفسیاتی دفاعی نظام",
      "Roman Urdu": "Unconscious mind, Id, Ego, Superego aur Defense Mechanisms"
    },
    backgroundHistory: {
      English: "Austrian neurologist Sigmund Freud introduced psychoanalysis in Vienna in the late 1890s, revolutionizing mental health treatment by asserting that human behavior is driven by repressed unconscious desires.",
      Urdu: "آسٹریائی نیورولوجسٹ سگمڈ فرائیڈ نے 1890 میں ویانا میں سائیکو انالیسس کی بنیاد رکھی اور بتایا کہ انسانی رویے تحت الشعور کی پوشیدہ خواہشات سے کنٹرول ہوتے ہیں۔",
      "Roman Urdu": "Sigmund Freud ne 1890s mein Vienna mein Psychoanalysis ki bunyad rakhi. Unhone bataya ke human behavior unconscious mind se drive hota hai."
    },
    explanation: {
      English: "Freud proposed that personality consists of three dynamic parts: the Id (primitive pleasure drive), the Superego (moral conscience), and the Ego (the realistic mediator). Unresolved unconscious conflicts lead to anxiety and defense mechanisms.",
      Urdu: "فرائیڈ کے مطابق شخصیت کے تین حصے ہیں: ایڈ (فطری خواہشات)، سپریگو (اخلاقی ضمیر)، اور ایگو (حقیقت پسندانہ توازن بنانے والا)۔ لاشعور میں پھنسی خواہشات بے چینی اور بیماریاں پیدا کرتی ہیں۔",
      "Roman Urdu": "Freud ke mutabiq personality ke 3 parts hain: Id (instincts/desires), Superego (moral rules), aur Ego (dono mein balance banane wala)."
    },
    mainConceptsProcess: {
      English: [
        "The Unconscious Mind: Iceberg model—90% of mental drivers sit below awareness.",
        "Tripartite Personality: Id (Pleasure), Ego (Reality), Superego (Morality).",
        "Defense Mechanisms: Repression, Projection, Rationalization, and Denial to protect Ego."
      ],
      Urdu: [
        "تحت الشعور (Unconscious): برف کے پہاڑ کی طرح 90 فیصد دماغ نظروں سے اوجھل ہوتا ہے۔",
        "شخصیت کے تین عناصر: ایڈ (مزہ)، ایگو (حقیقت)، سپریگو (اخلاقیات)۔",
        "دفاعی نظام (Defense Mechanisms): انکار کرنا، الزام لگانا، اور باتیں بنانا۔"
      ],
      "Roman Urdu": [
        "Unconscious Mind: Iceberg model—90% mind awareness se neeche hota hai.",
        "Id, Ego, Superego ka interplay.",
        "Defense Mechanisms: Denial, Projection, Rationalization se Ego ko bachana."
      ]
    },
    examples: {
      English: [
        "Forgetting a painful dentist appointment due to unconscious Repression.",
        "Accusing your partner of being angry when you are actually the one feeling anger (Projection).",
        "Making logical excuses for an impulsive bad purchase (Rationalization)."
      ],
      Urdu: [
        "تکلیف دہ واقعہ یا اپائنٹمنٹ لاشعوری طور پر بھول جانا (Repression)۔",
        "خود غصے میں ہو کر دوسرے پر غصے کا الزام لگانا (Projection)۔",
        "فضول خریداری کے بعد اپنے آپ کو عقلی دلاسہ دینا (Rationalization)۔"
      ],
      "Roman Urdu": [
        "Painful event ko mind se dabana (Repression).",
        "Apna gussa doosre par dalna (Projection).",
        "Ghalat khareedari ke baad excuses dena (Rationalization)."
      ]
    },
    importantPoints: {
      English: [
        "First theory to emphasize childhood development's long-lasting impact on adult therapy.",
        "Pioneered talk therapy, dream analysis, and free association techniques.",
        "Modern neuro-psychoanalysis verifies the reality of unconscious implicit brain processing."
      ],
      Urdu: [
        "پہلا نظریہ جس نے بچپن کے تجربات کا بڑی عمر کے مسائل پر اثر ثابت کیا۔",
        "ٹاک تھراپی اور خوابوں کی تعبیر کا نظام قائم کیا۔",
        "جدید نیورو سائنس اس کے لاشعوری پروسیسنگ کی تصدیق کرتی ہے۔"
      ],
      "Roman Urdu": [
        "Childhood experiences ka adult life par asar pehli baar highlight hua.",
        "Talk therapy aur dream interpretation start ki.",
        "Unconscious mental processes ki foundation bani."
      ]
    }
  },
  {
    id: "piaget-cognitive",
    categoryId: "theories",
    icon: "extension",
    founder: "Jean Piaget",
    discoveryDate: "1936",
    title: {
      English: "Piaget's Cognitive Development Theory",
      Urdu: "پیاژے کا ادراکی نشوونما کا نظریہ",
      "Roman Urdu": "Piaget Cognitive Development Theory"
    },
    subtitle: {
      English: "How children construct mental models of the world in 4 stages",
      Urdu: "بچوں کے سوچنے کی صلاحیت کی 4 درجات میں نشوونما",
      "Roman Urdu": "Bacchon ki thinking power ki 4 stages"
    },
    backgroundHistory: {
      English: "Swiss psychologist Jean Piaget developed his theory while testing children's IQ in the 1920s, realizing that children don't just know 'less' than adults, but think in fundamentally different ways.",
      Urdu: "سوئس سائنسدان جاں پیاژے نے 1920 کی دہائی میں بچوں کے IQ ٹیسٹ کے دوران دریافت کیا کہ بچے بڑوں سے کم عقل نہیں ہوتے بلکہ ان کا سوچنے کا انداز مختلف ہوتا ہے۔",
      "Roman Urdu": "Jean Piaget ne 1920s mein realize kiya ke bacchon ka thinking process adults se completely alag hota hai."
    },
    explanation: {
      English: "Piaget outlined 4 progressive stages of cognitive growth: Sensorimotor (0-2 yrs), Preoperational (2-7 yrs), Concrete Operational (7-11 yrs), and Formal Operational (12+ yrs).",
      Urdu: "پیاژے نے ادراکی نشوونما کے 4 مراحلی درجات بتائے: حسی حركاتی (0-2 سال)، قبلِ عمل (2-7 سال)، مادی عملی (7-11 سال)، اور باقاعدہ فکری (12+ سال)۔",
      "Roman Urdu": "Piaget ne 4 stages bataye: 1. Sensorimotor (0-2 yrs), 2. Preoperational (2-7 yrs), 3. Concrete Operational (7-11 yrs), 4. Formal Operational (12+ yrs)."
    },
    mainConceptsProcess: {
      English: [
        "Schemas: Mental building blocks/categories used to organize knowledge.",
        "Assimilation vs. Accommodation: Fitting new info into existing schemas vs modifying schemas.",
        "Object Permanence: Understanding objects exist even when hidden (achieved ~8 months)."
      ],
      Urdu: [
        "سکیماز (Schemas): دماغی زاد راہ اور تصورات کا فریم ورک۔",
        "جذب و مطابقت: نئی معلومات کو پرانے فریم ورک میں ڈالنا یا نیا فریم بنانا۔",
        "وجود کا احساس (Object Permanence): آنکھوں سے اوجھل چیز کے وجود کو ماننا (8 ماہ)۔"
      ],
      "Roman Urdu": [
        "Schemas: Brain ke mental folders.",
        "Assimilation vs Accommodation: Information ko fit ya update karna.",
        "Object Permanence: Chhupe hue khilone ka existence samajhna."
      ]
    },
    examples: {
      English: [
        "A toddler thinking a hidden ball ceased to exist because they can't see it (Pre-object permanence).",
        "A 4-year-old preferring a tall thin glass over a short wide glass believing it has 'more' water.",
        "A teenager engaging in abstract algebraic logic and moral philosophy."
      ],
      Urdu: [
        "چھوٹے بچے کا چھپائے گئے کھلونے کو معدوم سمجھنا۔",
        "4 سالہ بچے کا لمبے برتن میں پانی کو زیادہ سمجھنا چاہے مقدار برابر ہو۔",
        "14 سالہ بچے کا الجبرا اور اخلاقی نظریات پر سوچنا۔"
      ],
      "Roman Urdu": [
        "Bache ka chhupe hue khilone ko bhool jana.",
        "Lambe glass mein pani ziada samajhna (Conservation concept).",
        "Teenager ka abstract logic samajhna."
      ]
    },
    importantPoints: {
      English: [
        "Transformed educational curriculum design globally.",
        "Emphasized active hands-on exploration over passive rote memorization.",
        "Underpins modern developmental psychology and child pediatrics."
      ],
      Urdu: [
        "دنیا بھر میں بچوں کے تعلیمی نصاب کی ترتیب کو جدید بنایا۔",
        "عملی مشق پر زور دیا نہ کہ صرف رٹا مارنے پر۔",
        "بچوں کی طب اور نفسیات کی اہم ترین بنیادی تھیوری۔"
      ],
      "Roman Urdu": [
        "Child education aur syllabus design badal diya.",
        "Ratta marne ke bajaye hands-on learning par zor diya.",
        "Child psychology ka corner-stone hai."
      ]
    }
  },
  {
    id: "erikson-psychosocial",
    categoryId: "theories",
    icon: "trending_up",
    founder: "Erik Erikson",
    discoveryDate: "1950 (Childhood and Society)",
    title: {
      English: "Erikson's Psychosocial Theory",
      Urdu: "اریکسن کا نفسیاتی و سماجی نشوونما کا نظریہ",
      "Roman Urdu": "Erikson Psychosocial Theory"
    },
    subtitle: {
      English: "The 8 lifelong stages of psychosocial conflict from infancy to old age",
      Urdu: "پیدائش سے بڑھاپے تک انسان کے 8 سماجی مراحل",
      "Roman Urdu": "Birth se old age tak insani growth ke 8 psychosocial stages"
    },
    backgroundHistory: {
      English: "Erik Erikson, a student of Anna Freud, expanded psychoanalytic theory in 1950 by emphasizing social relationships across the entire human lifespan rather than stopping at childhood sexual stages.",
      Urdu: "اریک اریکسن نے 1950 میں فرائیڈ کے نظریے کو وسیع کیا اور ثابت کیا کہ انسانی شخصیت صرف بچپن میں نہیں بلکہ پیدائش سے بڑھاپے تک 8 مراحل میں سماجی تعلقات سے بنتی ہے۔",
      "Roman Urdu": "1950 mein Erik Erikson ne 8 stages bataye jo birth se death tak puri life par spread hote hain."
    },
    explanation: {
      English: "Erikson outlined 8 life stages, each presenting a core psychosocial crisis: e.g., Trust vs. Mistrust (Infancy), Identity vs. Role Confusion (Adolescence), and Integrity vs. Despair (Old Age).",
      Urdu: "اریکسن نے زندگی کے 8 مراحل بتائے۔ ہر مرحلے میں ایک سماجی چیلنج ہوتا ہے، جیسے: اعتماد بمقابلہ بے اعتمادی (شیرخوارگی)، شناخت بمقابلہ الجھن (نو عمری)، اور اطمینان بمقابلہ مایوسی (بڑھاپا)۔",
      "Roman Urdu": "Is theory mein 8 stages hain: 1. Trust vs Mistrust, 5. Identity vs Role Confusion, 8. Integrity vs Despair."
    },
    mainConceptsProcess: {
      English: [
        "Psychosocial Crisis: Turning point in development where personal needs conflict with society's demands.",
        "Ego Quality/Virtue: Strength gained from successfully resolving a stage crisis (e.g., Hope, Fidelity, Wisdom).",
        "Lifespan Development: Recognition that personality evolves through adulthood and aging."
      ],
      Urdu: [
        "سماجی بحران: مرحلے کا وہ چیلنج جو حل ہونے پر نئی خوبی بنتا ہے۔",
        "ایگو کی طاقت: مرحلہ عبور کرنے پر ملنے والی صلاحیت (جیسے امید، وفاداری، حکمت)۔",
        "عمر بھر کی نشوونما: شخصیت تمام عمر بدلتی رہتی ہے۔"
      ],
      "Roman Urdu": [
        "Psychosocial Crisis: Har stage ka main challenge.",
        "Ego Virtue: Stage successfully pass karne par milne wali inner strength.",
        "Lifespan Development: Puri zindagi growth hoti rehti hai."
      ]
    },
    examples: {
      English: [
        "A baby learning Trust because parents consistently respond to crying with food and warmth.",
        "A 16-year-old exploring identity, career paths, and values (Identity vs Role Confusion).",
        "An 80-year-old reflecting back on life with satisfaction rather than regret."
      ],
      Urdu: [
        "بچے کا روئے جانے پر ماں باپ کا پیار دیکھ کر اعتماد (Trust) سیکھنا۔",
        "16 سالہ نوجوان کا اپنے کیریئر اور شناخت کا تلاش کرنا۔",
        "80 سالہ بزرگ کا اپنی زندگی پر اطمینان محسوس کرنا۔"
      ],
      "Roman Urdu": [
        "Baby ka parents par trust develop hona.",
        "Teenager ka apni identity dhoondna (Identity Crisis).",
        "Old age mein life par satisfaction feel karna."
      ]
    },
    importantPoints: {
      English: [
        "First major developmental framework covering infancy through elderly retirement.",
        "Coined the term 'Identity Crisis'.",
        "Highlights the heavy influence of culture and social relationships on personality."
      ],
      Urdu: [
        "پہلا فریم ورک جو بڑھاپے تک کی نفسیات کا احاطہ کرتا ہے۔",
        "اس نے 'آئیڈنٹٹی کرائسز' (شناخت کا بحران) کی معروف اصطلاح ایجاد کی۔",
        "ثابت کیا کہ ثقافت اور رشتہ دار انسان کی سیرت بناتے ہیں۔"
      ],
      "Roman Urdu": [
        "Puri life (birth to old age) ko cover karne wala pehla model.",
        "'Identity Crisis' term isi theory se aaya.",
        "Culture aur society ka role highlighted hai."
      ]
    }
  },
  {
    id: "attachment-theory",
    categoryId: "theories",
    icon: "favorite",
    founder: "John Bowlby & Mary Ainsworth",
    discoveryDate: "1969 / 1978 (Strange Situation)",
    title: {
      English: "Bowlby & Ainsworth's Attachment Theory",
      Urdu: "باؤلبی کا تعلق اور وابستگی کا نظریہ",
      "Roman Urdu": "Attachment Theory"
    },
    subtitle: {
      English: "How infant-caregiver bonds mold emotional security and adult love styles",
      Urdu: "بچپن کے تعلق کا بڑے ہو کر محبت اور تعلقات پر اثر",
      "Roman Urdu": "Childhood attachment ka adult relationships par asar"
    },
    backgroundHistory: {
      English: "British psychoanalyst John Bowlby formulated attachment theory in 1969. In 1978, Mary Ainsworth developed the 'Strange Situation' experiment to scientifically measure attachment styles in toddlers.",
      Urdu: "1969 میں جان باؤلبی نے تعلق کا نظریہ پیش کیا۔ 1978 میں میری اینسورتھ نے 'سٹرینج سچویشن' تجربے سے بچوں میں تعلق کے 4 اسٹائلز دریافت کیے۔",
      "Roman Urdu": "1969 mein John Bowlby ne start kiya aur 1978 mein Mary Ainsworth ne Strange Situation experiment se 4 attachment styles prove kiye."
    },
    explanation: {
      English: "Attachment theory states that infants are biologically driven to seek proximity with primary caregivers. Responsive care leads to Secure Attachment, while neglectful or inconsistent care produces Avoidant, Anxious, or Disorganized styles.",
      Urdu: "اس نظریے کے مطابق بچے اپنے والدین کے ساتھ جڑنے کی قدرتی خواہش رکھتے ہیں۔ اگر والدین توجہ دیں تو سیکیور (Secure) تعلق بنتا ہے، اور اگر اگنور کریں تو بے چینی والے اسٹائل بنتے ہیں۔",
      "Roman Urdu": "Caregiver ka response bacche ki attachment style (Secure, Anxious, Avoidant, Disorganized) decide karta hai."
    },
    mainConceptsProcess: {
      English: [
        "Secure Attachment: Uses caregiver as a safe base to explore the world comfortably.",
        "Anxious-Preoccupied: Constant fear of abandonment, hyper-clinginess.",
        "Dismissive-Avoidant: Defensive independence, shutting down emotional vulnerability.",
        "Disorganized: Fearful, chaotic response to caregiver."
      ],
      Urdu: [
        "سیکیور (Secure): والدین کی موجودگی میں پرسکون اور اعتماد سے دنیا دیکھنا۔",
        "اینگژئس (Anxious): چھٹ جانے کا شدید خوف اور چپکنا۔",
        "ایوائڈنٹ (Avoidant): جذبات کو دبانا اور ضرورت سے زیادہ بے نیازی ظاہر کرنا۔",
        "ڈی آرگنائزڈ (Disorganized): خوف اور الجھن کا امتزاج۔"
      ],
      "Roman Urdu": [
        "Secure: Caregiver par trust aur confident exploration.",
        "Anxious: Chhod jaane ka constantly dar.",
        "Avoidant: Emotions ko suppress karna.",
        "Disorganized: Confused aur fearful response."
      ]
    },
    examples: {
      English: [
        "A secure toddler exploring a new playground room while checking back visually for mom.",
        "An anxious adult constantly texting their partner for reassurance of love.",
        "An avoidant adult breaking off relationships whenever they get emotionally close."
      ],
      Urdu: [
        "سیکیور بچہ نئے پارک میں کھیلتے ہوئے بھی ماں کی طرف دیکھ کر مسکرانا۔",
        "اینگژئس شخص کا بار بار پارٹنر کو میسج کر کے محبت کا یقین مانگنا۔",
        "ایوائڈنٹ شخص کا گہرے تعلق سے گھبرا کر رشتہ ختم کر دینا۔"
      ],
      "Roman Urdu": [
        "Secure child ka park mein aaram se khelna.",
        "Anxious adult ka partner se baar baar reassurance maangna.",
        "Avoidant adult ka close relationships se bhaagna."
      ]
    },
    importantPoints: {
      English: [
        "Infant attachment styles directly predict adult romantic relationship patterns.",
        "Attachment styles are not fixed permanent sentences—they can be transformed via earned security.",
        "Crucial foundation for modern couples therapy (EFT)."
      ],
      Urdu: [
        "بچپن کا تعلق بڑے ہو کر ہماری محبت کی زندگی کا نقشہ طے کرتا ہے۔",
        "یہ اسٹائلز بدلے جا سکتے ہیں اور سیکیور بنے جا سکتے ہیں۔",
        "جدید کپل تھراپی (EFT) کا بنیادی زینہ۔"
      ],
      "Roman Urdu": [
        "Childhood attachment adult romance ko shape karta hai.",
        "Self-awareness se attachment style secure banaya ja sakta hai.",
        "Couples therapy mein sab se zaroori topic hai."
      ]
    }
  },

  // ==========================================
  // --- E) THERAPIES ---
  // ==========================================
  {
    id: "cbt-therapy",
    categoryId: "therapies",
    icon: "psychology_alt",
    founder: "Aaron Beck",
    discoveryDate: "1960s",
    title: {
      English: "Cognitive Behavioral Therapy (CBT)",
      Urdu: "کاگنیٹو بیہیویئرل تھراپی (CBT)",
      "Roman Urdu": "Cognitive Behavioral Therapy (CBT)"
    },
    subtitle: {
      English: "Rewiring harmful thought patterns to change feelings and actions",
      Urdu: "منفی سوچوں کو بدل کر جذبات اور افعال کو مثبت بنانا",
      "Roman Urdu": "Negative thoughts ko badal kar feelings behtar karna"
    },
    backgroundHistory: {
      English: "Psychiatrist Aaron Beck developed Cognitive Therapy at the University of Pennsylvania in the 1960s after observing that depressed patients experienced automatic negative cognitive distortions.",
      Urdu: "1960 کی دہائی میں ڈاکٹر ایرن بیک نے محسوس کیا کہ ڈپریشن کے مریضوں کے دماغ میں خودکار منفی خیالات آتے ہیں۔ انہوں نے اسے کاگنیٹو تھراپی کا نام دیا۔",
      "Roman Urdu": "1960s mein Aaron Beck ne notice kiya ke depressed patients mein automatic negative thoughts hote hain."
    },
    explanation: {
      English: "CBT is a goal-oriented, structured psychotherapy focusing on the tight interplay between Thoughts, Feelings, and Behaviors. Reframing distorted beliefs directly alleviates emotional suffering.",
      Urdu: "CBT ایک جدید اور آزمودہ تھراپی ہے جو اس اصول پر کام کرتی ہے کہ ہماری سوچیں ہمارے جذبات اور رویوں کو جنم دیتی ہیں۔ منفی سوچوں کو تبدیل کر کے مسائل کا حل نکالا جاتا ہے۔",
      "Roman Urdu": "CBT is principle par kaam karti hai: Thoughts → Feelings → Behaviors. Positive reframing se emotions improve hote hain."
    },
    mainConceptsProcess: {
      English: [
        "Cognitive Distortions: Unhelpful thinking styles (Catastrophizing, All-or-Nothing thinking).",
        "Thought Records: Writing down triggers, identifying distortions, and creating rational responses.",
        "Behavioral Activation: Gradually re-engaging in productive daily actions."
      ],
      Urdu: [
        "کاگنیٹو ڈسٹورشنز (Cognitive Distortions): غلط اور غیر حقیقت پسندانہ سوچنے کے انداز۔",
        "تھوٹ ریکارڈ (Thought Record): واقعے، سوچ، اور جذبے کا کاغذ پر تجزیہ کرنا۔",
        "بیہیویئرل ایکٹیویشن: روزمرہ کاموں کی تدریجی بحالی۔"
      ],
      "Roman Urdu": [
        "Cognitive Distortions: Catastrophizing, black-and-white thinking.",
        "Thought Journal: Trigger, thought aur mood ko observe karna.",
        "Behavioral Activation: Daily routine mein positive actions add karna."
      ]
    },
    examples: {
      English: [
        "Changing thought: 'I failed this test, I am a total loser' → 'I didn't pass, but I can adjust my study method next time.'",
        "Using a Thought Diary to track anxiety triggers before public speaking.",
        "Replacing avoidance with structured, gradual action steps."
      ],
      Urdu: [
        "سوچ کی تبدیلی: 'میں فیل ہو گیا، میں ناکام ہوں' → 'اس بار نمبر کم آئے، اگلی بار تیاری کا طریقہ بدلوں گا۔'",
        "تھوٹ ڈائری رکھ کر منفی سوچوں کا جائزہ لینا۔",
        "ڈر سے بھاگنے کی بجائے آہستہ آہستہ اس کا سامنا کرنا۔"
      ],
      "Roman Urdu": [
        "Thought badalna: 'Main useless hoon' ko 'Agli baar better prepare karunga' se replace karna.",
        "Thought journal banana.",
        "Avoidance chhor kar action lena."
      ]
    },
    importantPoints: {
      English: [
        "Focuses primarily on present problem-solving rather than searching past childhood.",
        "Emphasizes practical homework assignments and skills practice between sessions.",
        "Gold-standard, heavily researched treatment for anxiety, depression, and stress."
      ],
      Urdu: [
        "ماضی کی پرانی باتیں کریدنے کے بجائے موجودہ مسائل پر توجہ دیتی ہے۔",
        "اس میں عملی مشقیں اور روزمرہ کا ہوم ورک شامل ہوتا ہے۔",
        "اینگزائٹی، ڈپریشن اور OCD کے لیے دنیا کی سب سے زیادہ کامیاب تھراپی۔"
      ],
      "Roman Urdu": [
        "Present problems aur solutions par focus karti hai.",
        "Is mein practical homework aur thought logs hote hain.",
        "Anxiety, depression aur OCD ka standard treatment hai."
      ]
    }
  },
  {
    id: "dbt-therapy",
    categoryId: "therapies",
    icon: "balance",
    founder: "Marsha Linehan",
    discoveryDate: "1980s",
    title: {
      English: "Dialectical Behavior Therapy (DBT)",
      Urdu: "ڈائلیٹیکل بیہیویئرل تھراپی (DBT)",
      "Roman Urdu": "Dialectical Behavior Therapy (DBT)"
    },
    subtitle: {
      English: "Balancing self-acceptance and change for intense emotional dysregulation",
      Urdu: "شدید جذباتی طوفان اور بارڈر لائن ڈس آرڈر کے لیے توازن کا علاج",
      "Roman Urdu": "Intense emotions aur self-acceptance ka balance treatment"
    },
    backgroundHistory: {
      English: "Psychologist Marsha Linehan created DBT in the late 1980s to treat highly suicidal individuals and Borderline Personality Disorder (BPD) who didn't respond well to standard CBT alone.",
      Urdu: "1980 کے دہائی میں مارشا لائنہین نے بی پی ڈی (BPD) اور شدید جذباتی طوفان کا شکار افراد کے لیے ڈی بی ٹی تخلیق کی، جس میں قبولیت اور تبدیلی دونوں کو ملایا گیا۔",
      "Roman Urdu": "1980s mein Marsha Linehan ne intense emotional pain aur BPD patients ke liye DBT develop ki."
    },
    explanation: {
      English: "DBT combines cognitive-behavioral techniques with Zen mindfulness. Its core philosophy relies on 'dialectics'—holding two opposing truths simultaneously: accepting oneself as you are while actively working to change.",
      Urdu: "ڈی بی ٹی مائنڈ فلنس اور کاگنیٹو تکنیکوں کا امتزاج ہے۔ اس کا فلسفہ ہے کہ خود کو ویسا ہی قبول کرنا جیسا کہ آپ ہیں اور ساتھ ہی بہتری کے لیے تبدیلی لانا۔",
      "Roman Urdu": "DBT CBT aur Mindfulness ka mix hai. Iska main idea hai: Apne aap ko accept karna + Positive change lana."
    },
    mainConceptsProcess: {
      English: [
        "Mindfulness: Staying grounded in the present moment without judgment.",
        "Distress Tolerance: Surviving emotional storms without resorting to harmful impulsive actions (TIPP skills).",
        "Emotion Regulation: Identifying and softening intense feelings.",
        "Interpersonal Effectiveness: Maintaining boundaries and healthy relationships."
      ],
      Urdu: [
        "مائنڈ فلنس (Mindfulness): موجودہ لمحے میں بغیر جج کیے موجود رہنا۔",
        "بحران برداشت کرنا (Distress Tolerance): شدید تکلیف دہ لمحے میں خود کو نقصان پہنچائے بغیر بچانا۔",
        "جذباتی توازن (Emotion Regulation): شدید غصے اور غم کو دھیما کرنا۔",
        "تعلقات میں بہتری: حدود قائم کرنا۔"
      ],
      "Roman Urdu": [
        "Mindfulness: Present moment mein focus rehana.",
        "Distress Tolerance: Extreme emotional crisis mein bina harm kiye survive karna.",
        "Emotion Regulation: Intense anger/sadness ko calm karna.",
        "Interpersonal Effectiveness: Healthy boundaries banana."
      ]
    },
    examples: {
      English: [
        "Using ice water splash on the face (TIPP skill) to rapidly calm down during a severe panic attack.",
        "Practicing Radical Acceptance when stuck in an unchangeable difficult life situation.",
        "Using the DEAR MAN technique to assertively ask for boundaries without fighting."
      ],
      Urdu: [
        "شدید اینگزائٹی حملے میں چہرے پر برف جیسا ٹھنڈا پانی ڈال کر دل کی دھڑکن دھیمی کرنا (TIPP)۔",
        "ناقابلِ تبدیلی صورتحال کا اعتراف کر کے سکون پانا (Radical Acceptance)۔",
        "بغیر لڑائی کے اپنی بات منوانا یا حدود قائم کرنا۔"
      ],
      "Roman Urdu": [
        "Panic attack mein face par cold water dalke calm hona (TIPP skill).",
        "Unchangeable situation ko Radically Accept karna.",
        "Ladaayi ke bina boundaries set karna."
      ]
    },
    importantPoints: {
      English: [
        "Gold-standard treatment for Borderline Personality Disorder and severe emotional dysregulation.",
        "Includes individual therapy, group skills training classes, and phone coaching.",
        "Teaches practical crisis survival skills for real-time panic."
      ],
      Urdu: [
        "بارڈر لائن ڈس آرڈر اور شدید جذبات کو سنبھالنے کا سب سے بہترین علاج۔",
        "اس میں انفرادی سیشن اور گروپ سکلز ٹریننگ شامل ہوتی ہے۔",
        "یہ بحران کے وقت بچاؤ کے عملی طریقے سکھاتی ہے۔"
      ],
      "Roman Urdu": [
        "Borderline Personality Disorder ka sab se effective therapy hai.",
        "Individual therapy aur group skill classes dono hote hain.",
        "Crisis survival skills sikhata hai."
      ]
    }
  },
  {
    id: "mindfulness-mbct",
    categoryId: "therapies",
    icon: "spa",
    founder: "Jon Kabat-Zinn / Segal, Williams & Teasdale",
    discoveryDate: "1990s",
    title: {
      English: "Mindfulness-Based Therapy (MBCT)",
      Urdu: "مائنڈ فلنس بیسڈ تھراپی (MBCT)",
      "Roman Urdu": "Mindfulness-Based Therapy (MBCT)"
    },
    subtitle: {
      English: "Cultivating present-moment non-judgmental awareness to prevent relapse",
      Urdu: "موجودہ لمحے کی بیداری اور منفی سوچوں سے عدم وابستگی",
      "Roman Urdu": "Present moment awareness se tension aur depression relapse rokna"
    },
    backgroundHistory: {
      English: "Jon Kabat-Zinn developed MBSR in 1979 at UMass Medical School. In the late 1990s, Segal, Williams, and Teasdale combined mindfulness meditation with CBT to create MBCT specifically to prevent depression relapse.",
      Urdu: "1979 میں جون کباٹ زن نے MBSR بنایا۔ 1990 میں سائنسی ماہرین نے مائنڈ فلنس میڈیٹیشن کو CBT کے ساتھ ملا کر MBCT تھراپی بنائی تاکہ ڈپریشن کو بار بار لوٹنے سے روکا جا سکے۔",
      "Roman Urdu": "1990s mein Segal, Williams aur Teasdale ne Mindfulness ko CBT ke saath combine karke MBCT develop kiya."
    },
    explanation: {
      English: "MBCT teaches individuals to pay attention to the present moment intentionally and without judgment. Instead of fighting negative thoughts or falling into rumination, patients learn to view thoughts as transient mental events rather than absolute facts.",
      Urdu: "MBCT سکھاتی ہے کہ اپنے خیالات کو جج کیے بغیر صرف ایک مشاہدہ کار کے طور پر دیکھیں۔ منفی سوچوں سے لڑنے کے بجائے انہیں بادلوں کی طرح گزرنے دیں۔",
      "Roman Urdu": "MBCT sikhata hai ke negative thoughts se ladne ke bajaye unhein neutral observe karein. Thoughts bas mind events hain, facts nahi."
    },
    mainConceptsProcess: {
      English: [
        "Decentering: Stepping back and observing thoughts as passing clouds rather than truth.",
        "Body Scan: Systematic non-judgmental awareness of physical bodily sensations.",
        "3-Minute Breathing Space: Quick grounding technique during rising stress."
      ],
      Urdu: [
        "ڈی سینٹرنگ (Decentering): سوچوں سے فاصلہ بنا کر انہیں بادلوں کی طرح گزرتے دیکھنا۔",
        "باڈی سکین (Body Scan): جسم کے ہر حصے کی کیفیت پر توجہ مرکوز کرنا۔",
        "3 منٹ کی سانس کی مشق: تناؤ کے وقت فوراً پرسکون ہونا۔"
      ],
      "Roman Urdu": [
        "Decentering: Thoughts se distance bana kar unhein neutrally dekhna.",
        "Body Scan: Body sensations par bina judgment focus karna.",
        "3-Minute Breathing Space: Stress ke waqt fast grounding."
      ]
    },
    examples: {
      English: [
        "Noticing the thought 'I'm going to ruin this presentation' and softly telling yourself: 'I am having a thought of fear, but it is just a passing mental wave.'",
        "Focusing entirely on the sensory warmth of your tea mug to break a spiral of overthinking.",
        "Doing a 5-minute body scan before bedtime to release physical tension."
      ],
      Urdu: [
        "سوچ آنا 'میں میٹنگ خراب کر دوں گا' اور خود کو کہنا: 'یہ صرف ایک سوچ ہے، حقیقت نہیں'۔",
        "زیادہ سوچنے کے سلسلے کو توڑنے کے لیے چائے کے کپ کے لمس اور خوشبو پر فوکس کرنا۔",
        "سوتے وقت باڈی سکین کر کے جسم کی تھکن اتارنا۔"
      ],
      "Roman Urdu": [
        "Thought 'Main fail ho jaunga' ko bas ek thought samajhna, sach nahi.",
        "Overthinking rokne ke liye tea cup ki warmth par focus karna.",
        "Sleep se pehle 5-minute body scan meditation."
      ]
    },
    importantPoints: {
      English: [
        "Halves the rate of depression relapse for individuals with recurrent episodes.",
        "Integrates ancient eastern meditation practices with modern cognitive science.",
        "Promotes brain neuroplasticity and shrinks amygdala reactivity over time."
      ],
      Urdu: [
        "ڈپریشن کے بار بار لوٹنے کے خطرے کو 50 فیصد تک کم کرتی ہے۔",
        "قدیم مراقبے کی تکنیکوں اور سائنسی نفسیات کا شاندار ملاپ۔",
        "دماغ کے خوف محسوس کرنے والے مرکز (Amygdala) کا سائز اور ردِعمل کم کرتی ہے۔"
      ],
      "Roman Urdu": [
        "Depression relapse ka risk 50% tak kam karti hai.",
        "Mindfulness meditation aur brain science ka combination hai.",
        "Brain ke amygdala reactivity ko calm karti hai."
      ]
    }
  }
];
