export const REY_FIGURE_A_UNITS = [
  { id: 1, name: "المستطيل الكبير (The Large Rectangle)", description: "الإطار الخارجي للمستطيل المركزي" },
  { id: 2, name: "الصليب الأفقي (Horizontal Cross)", description: "يقسم المستطيل الكبير أفقياً" },
  { id: 3, name: "الصليب العمودي (Vertical Cross)", description: "يقسم المستطيل الكبير عمودياً" },
  { id: 4, name: "القطر (Diagonal)", description: "القطر من الأعلى يساراً إلى الأسفل يميناً" },
  { id: 5, name: "القطر الآخر (Other Diagonal)", description: "القطر من الأعلى يميناً إلى الأسفل يساراً" },
  { id: 6, name: "المستطيل الصغير (Small Rectangle)", description: "على الجانب الأيسر الخارجي" },
  { id: 7, name: "المستطيل الصغير الداخلي (Small Internal Rect)", description: "فوق القطر في الأعلى يساراً" },
  { id: 8, name: "الأشرطة المتوازية الأربعة (Four Parallel Bars)", description: "في الجزء العلوي الأيسر" },
  { id: 9, name: "المثلث القائم (Right Triangle)", description: "على الجزء العلوي من المستطيل الكبير" },
  { id: 10, name: "العمودي من المثلث العلوي (Vertical from Triangle)", description: "خط عمودي صغير تحت قمة المثلث" },
  { id: 11, name: "الدائرة مع النقاط الثلاث (Circle with 3 dots)", description: "في الجزء العلوي الأيمن" },
  { id: 12, name: "الأشرطة المتوازية الخمسة (Five Parallel Bars)", description: "مائلة في الجزء السفلي الأيمن" },
  { id: 13, name: "المثلث المتساوي الساقين (Isosceles Triangle)", description: "على اليمين خارج المستطيل" },
  { id: 14, name: "الماسة (The Diamond)", description: "في الزاوية اليمنى السفلى" },
  { id: 15, name: "الخط الأفقي في المثلث الأيمن (Horizontal Line)", description: "داخل المثلث الأيمن" },
  { id: 16, name: "الصليب الصغير (Small Cross)", description: "في الجزء السفلي من المثلث الأيمن" },
  { id: 17, name: "المربع السفلي (Lower Square)", description: "ملحق بالمستطيل الكبير في الأسفل" },
  { id: 18, name: "القطعة المربعة الصغيرة (Small Square Attachment)", description: "في الزاوية السفلى اليسرى للمستطيل" }
];

export const OSTERRIETH_TYPES = [
  {
    type: 1,
    name: "بناء الدرع (Construction of the frame)",
    description: "يبدأ برسم المستطيل الكبير و بعدها يضع بقية العناصر بداخله."
  },
  {
    type: 2,
    name: "التفاصيل مجموعة في الدرع (Details grouped in the frame)",
    description: "يبدأ المفحوص بالتفاصيل المجاورة للمستطيل الكبير، كما قد بدا النظر، ثم يرسم المستطيل."
  },
  {
    type: 3,
    name: "المحيط العام (General Contour)",
    description: "يبدأ برسم المحيط الكامل للشكل دون التمييز القصدي للمستطيل المركزي، فهو يقوم بشبه وعاء ثم يرسم كل التفاصيل داخله."
  },
  {
    type: 4,
    name: "تجاوز التفاصيل (Juxtaposition of details)",
    description: "يضع التفاصيل أمام بعضها من الأقرب فالأقرب و كأنه يركب و ليس هناك عنصر مدير للإنتاج."
  },
  {
    type: 5,
    name: "تفاصيل على أساس مختلط (Details on a confused background)",
    description: "تخطيط المفحوص قليل أو عديم البنية فلا نتعرف عليه كاملا باستثناء بعض التفاصيل."
  },
  {
    type: 6,
    name: "التخفيض لمخطط مشابه (Reduction to a familiar schema)",
    description: "يرسم شكل مشابه لشيء يعرفه مثل منزل، سفينة، سمكة، رجل."
  },
  {
    type: 7,
    name: "خربشة (Scribble)",
    description: "لا يمكننا التعرف على أي عنصر إلا الشكل العام."
  }
];

export const QUALITATIVE_FACTORS = [
  {
    category: "السلوك أثناء الاختبار (Comportement)",
    items: ["تكامل التعليمات", "الحديث أثناء المهمة", "التعبير عن الصعوبات", "مظاهر القلق أو التوتر", "الاستقرار السلوكي"]
  },
  {
    category: "الرسم (Graphisme)",
    items: ["الحجم (كبير/صغير مقزم)", "دقة الخط (مرتعش/متقطع)", "براعة الرسم"]
  },
  {
    category: "الهيكلة (Structuration)",
    items: ["وجود طريقة تنفيذ واضحة", "وجود دعامة/هيكل", "التجزئة في الخطوط", "تغير الألوان (متكرر/قليل)"]
  },
  {
    category: "عناصر القيمة النفسية (Signe Psychologique)",
    items: ["مظاهر التشويه", "التفسير الإسقاطي", "التبسيط المفرط", "التماثل النشط", "الإزاحة أو النسيان"]
  }
];

export const REY_FIGURE_B_UNITS = [
  { id: 1, name: "الدائرة الكبيرة (Large Circle)", description: "الدائرة الرئيسية في الجزء العلوي الأيسر" },
  { id: 2, name: "المربع (The Square)", description: "المربع المركزي تحت الدائرة" },
  { id: 3, name: "المثلث (The Triangle)", description: "على يمين المربع" },
  { id: 4, name: "الصليب (The Cross)", description: "داخل المربع (خطوط متقاطعة)" },
  { id: 5, name: "نصف الدائرة (Semicircle)", description: "في أسفل المربع" },
  { id: 6, name: "النقاط الأربعة (Four Dots)", description: "داخل الدائرة الكبيرة" },
  { id: 7, name: "الخط الأفقي (Horizontal Line)", description: "داخل المربع" },
  { id: 8, name: "الخط العمودي (Vertical Line)", description: "داخل المربع" },
  { id: 9, name: "القطر (The Diagonal)", description: "داخل المربع من الأعلى يساراً للأسفل يميناً" },
  { id: 10, name: "الخط العمودي في نصف الدائرة (Vertical Line in Semicircle)", description: "أسفل المربع" },
  { id: 11, name: "القوس/عنصر القمة (Top Arc)", description: "في الجزء العلوي فوق الدائرة والمربع" }
];
