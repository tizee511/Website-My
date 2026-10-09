# موقع السيرة المهنية الرقمية — نشوان قائد غالب حاتم
# Professional Developer Portfolio — Nashwan Qiad Ghalib Hatem

الموقع التعريفي الرسمي للمهندسة **نشوان قائد غالب حاتم (Nashwan Qiad Ghalib Hatem)**، مطوّرة Full-Stack متخصصة في هندسة تطبيقات الويب والنظم المؤسسية (PHP Native • TALL Stack • MySQL • Docker).

---

## 🌟 الميزات والمواصفات الرئيسية (Key Features)

1. **دعم كامل ومثالي للغتين (العربية والإنجليزية)**:
   - العربية هي اللغة الافتراضية مع دعم كامل لاتجاه النص من اليمين لليسار (`dir="rtl"`).
   - إمكانية التبديل الفوري للغة الإنجليزية بنقرة واحدة مع ضبط تام للتخطيط والخطوط (`dir="ltr"`).
   - حفظ خيار اللغة تلقائيًا في المتصفح (`localStorage`).

2. **الوضع الداكن والفاتح (Dark / Light Mode)**:
   - تصميم حديث ومريح للعين مع ألوان احترافية متوافقة مع معايير إمكانية الوصول WCAG AA.
   - حفظ التفضيل تلقائيًا.

3. **إدارة البيانات من مكان مركزي موحد**:
   - جميع البيانات الشخصية، المشاريع، المهارات، الخبرات، والخدمات موجودة داخل ملف واحد:  
     `src/data/portfolioData.ts`
   - يمكن إضافة مشروع جديد أو تعديل وسيلة تواصل أو رقم هاتف دون المساس بأي كود واجهة.

4. **معرض مشاريع احترافي متكامل (Case Studies)**:
   - نظام فلترة ذكي للمشاريع بحسب التقنية (حزمة TALL، النظم والبنية، التجارة والمدفوعات، الكل).
   - نافذة تفاصيل تفاعلية (Modal) لكل مشروع توضح:
     - نظرة عامة
     - المشكلة والحاجة التقنية
     - الحل المنفذ والمعمارية
     - أهم الخصائص
     - التحديات التقنية وكيف تم حلها (Concurrency, Locking, Caching, Docker)
     - النتائج وقيمة المشروع للأعمال
     - روابط GitHub والمعاينة الحية

5. **عرض المهارات التقنية الحقيقية (Skills)**:
   - مصنفة في 4 مجالات: Backend، Frontend، Databases، DevOps.
   - تصنيفات دقيقة وموثوقة (Core Mastery, Advanced, Proficient) بعيدًا عن النسب العشوائية الوهمية.

6. **الخبرات والمسار المهني (Experience Timeline)**:
   - خط زمني يعرض 3 سنوات من الخبرة العملية والمسؤوليات والإنجازات والتقنيات.

7. **سيرة ذاتية تفاعلية وقابلة للطباعة (Interactive Printable Resume)**:
   - نافذة منبثقة منسقة كـ CV احترافي جاهز للطباعة أو الحفظ كـ PDF بضغطة زر (`window.print()`).

8. **نموذج تواصل تفاعلي وحقيقي (Contact Form)**:
   - فحص صحة المدخلات في الوقت الفعلي.
   - حماية ذكية ضد الرسائل المزعجة (Honeypot).
   - زر نسخ البريد الإلكتروني للحافظة مع إشعار تأكيد.
   - رابط بديل مباشر للإرسال عبر برنامج البريد (`mailto:`).
   - ربط طلبات الخدمات بنموذج التواصل تلقائيًا.

9. **تحسين محركات البحث ومشاركة الروابط (SEO & Social Sharing)**:
   - وسوم OpenGraph وTwitter Card كاملة.
   - بيانات منظمة Schema.org (JSON-LD) لتعريف محركات البحث بالهوية المهنية.
   - عناوين ووصف دقيق وFavicon مخصص.

---

## 📁 هيكلة المشروع (Project Structure)

```text
├── index.html                   # نقطة الدخول، وسوم SEO، الخطوط، وبيانات Schema.org
├── src/
│   ├── assets/
│   │   └── images/              # الصور الملتقطة للمشاريع وصورة المبرمجة
│   ├── components/
│   │   ├── Navbar.tsx           # شريط التنقل المتجاوب (3-zone top bar contract)
│   │   ├── Hero.tsx             # القسم الرئيسي مع مؤشرات الخبرة والأزرار
│   │   ├── About.tsx            # النبذة المهنية والمبادئ البرمجية
│   │   ├── Skills.tsx           # المهارات مع التبويبات التفاعلية
│   │   ├── Projects.tsx         # بطاقات المشاريع والفلاتر
│   │   ├── ProjectModal.tsx     # النافذة الشاملة لدراسة حالة المشروع
│   │   ├── Experience.tsx       # الخط الزمني للخبرات العملية
│   │   ├── Services.tsx         # كروت الخدمات ونطاق العمل
│   │   ├── Education.tsx        # التعليم والشهادات المعتمدة
│   │   ├── ResumeModal.tsx      # السيرة الذاتية التفاعلية القابلة للطباعة
│   │   ├── Contact.tsx          # نموذج التواصل وبيانات الاتصال
│   │   └── Footer.tsx           # التذييل، روابط التنقل وزر الصعود للأعلى
│   ├── context/
│   │   ├── LanguageContext.tsx  # إدارة اللغتين العربية والإنجليزية
│   │   └── ThemeContext.tsx     # إدارة الوضع الفاتح والداكن
│   ├── data/
│   │   └── portfolioData.ts     # المركز الموحد لكافة بيانات ومعلومات الموقع
│   ├── index.css                # أنماط Tailwind CSS والخطوط والطباعة
│   ├── App.tsx                  # تجميع المكونات وإدارة الحالة العامة
│   └── main.tsx                 # نقطة تشغيل تطبيق React
└── metadata.json                # وصف التطبيق في AI Studio
```

---

## 🛠️ كيفية التعديل والتخصيص (How to Customize)

### 1. تعديل البيانات الشخصية
افتح الملف `src/data/portfolioData.ts` وعدّل كائن `PORTFOLIO_DATA.profile`:
- الاسم والنبذة والمسمى المهني
- البريد الإلكتروني (`email`)
- روابط الحسابات (`githubUrl`, `linkedinUrl`)
- مسار الصورة الشخصية (`avatarImage`)

### 2. إضافة مشروع جديد
داخل نفس الملف `src/data/portfolioData.ts`، أضف عنصرًا جديدًا إلى مصفوفة `PORTFOLIO_DATA.projects`:
```typescript
{
  id: "my-new-project",
  title: { ar: "اسم المشروع بالعربية", en: "Project Name in English" },
  shortDescription: { ar: "...", en: "..." },
  fullDescription: { ar: "...", en: "..." },
  problem: { ar: "...", en: "..." },
  solution: { ar: "...", en: "..." },
  category: "tall", // أو systems أو ecommerce أو backend
  technologies: ["Laravel", "Livewire", "MySQL"],
  role: { ar: "مطورة النظام", en: "Lead Full-Stack Developer" },
  keyFeatures: { ar: [...], en: [...] },
  technicalChallenges: { ar: "...", en: "..." },
  results: { ar: "...", en: "..." },
  image: "/path/to/image.jpg",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  isFeatured: true
}
```

---

## 🚀 التشغيل والبناء والنشر (Run, Build & Deploy)

### التشغيل محليًا (Local Development):
```bash
npm install
npm run dev
```

### بناء نسخة الإنتاج (Production Build):
```bash
npm run build
```
تنتج ملفات ثابتة فائقة السرعة وخفيفة الحجم في مجلد `dist/` جاهزة للنشر على:
- Cloud Run / Google Cloud
- Vercel
- Netlify
- GitHub Pages
- أو أي خادم Apache/Nginx تقليدي.
