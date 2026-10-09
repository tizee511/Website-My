export interface Project {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  shortDescription: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  problem: {
    ar: string;
    en: string;
  };
  solution: {
    ar: string;
    en: string;
  };
  category: 'all' | 'tall' | 'systems' | 'ecommerce' | 'backend';
  categoryLabel: {
    ar: string;
    en: string;
  };
  technologies: string[];
  role: {
    ar: string;
    en: string;
  };
  keyFeatures: {
    ar: string[];
    en: string[];
  };
  technicalChallenges: {
    ar: string;
    en: string;
  };
  results: {
    ar: string;
    en: string;
  };
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export interface SkillCategory {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  skills: {
    name: string;
    level: 'Core Mastery' | 'Advanced' | 'Proficient';
    levelAr: 'إتقان أساسي' | 'متقدم' | 'كفاءة عالية';
    experienceYears: number;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: {
    ar: string;
    en: string;
  };
  companyOrContext: {
    ar: string;
    en: string;
  };
  period: {
    ar: string;
    en: string;
  };
  location: {
    ar: string;
    en: string;
  };
  type: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  responsibilities: {
    ar: string[];
    en: string[];
  };
  techStack: string[];
}

export interface ServiceItem {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  scope: {
    ar: string[];
    en: string[];
  };
  deliverables: {
    ar: string;
    en: string;
  };
}

export interface EducationItem {
  id: string;
  degree: {
    ar: string;
    en: string;
  };
  institution: {
    ar: string;
    en: string;
  };
  period: {
    ar: string;
    en: string;
  };
  details: {
    ar: string;
    en: string;
  };
  type: 'degree' | 'certification';
}

export const PORTFOLIO_DATA = {
  profile: {
    nameAr: "م. نشوان حاتم",
    nameEn: "Nashwan Hatem",
    fullNameAr: "نشوان قائد غالب حاتم",
    fullNameEn: "Nashwan Qiad Ghalib Hatem",
    shortNameAr: "م. نشوان حاتم",
    shortNameEn: "Nashwan Hatem",
    roleAr: "Web Developer | مطوّر ويب ونظم متكاملة",
    roleEn: "Web Developer & Software Engineer",
    specializationAr: "Web Development & Systems ⚙️ PHP • Laravel • MySQL • Tailwind CSS • RESTful APIs",
    specializationEn: "Web Development & Systems ⚙️ PHP • Laravel • MySQL • Tailwind CSS • RESTful APIs",
    taglineAr: "بناء تطبيقات الويب المتكاملة وحلول الأعمال الرقمية النظيفة والآمنة (BUILD • SOLVE • IMPROVE).",
    taglineEn: "A results-driven Web Developer building high-performance, clean, and secure digital software solutions.",
    summaryAr: "مطوّر ويب متميز وموجه بالنتائج بخبرة عملية تتجاوز سنتين في بناء حلول برمجية متكاملة باستخدام PHP وLaravel. أمتلك خبرة عملية في تطوير أنظمة عالية الأداء مع تركيز قوي على كتابة كود نظيف وآمن، وتقديم تجربة مستخدم سلسة ومتقنة. بارع في تصميم قواعد البيانات وإنشاء واجهات حديثة ومتجاوبة، وأسعى دائمًا لتقديم منتجات رقمية احترافية تمكّن المؤسسات في مسيرة التحول الرقمي.",
    summaryEn: "A results-driven Web Developer with over two years of experience in building integrated software solutions using PHP / Laravel. Possesses hands-on expertise in developing high-performance systems with a strong focus on writing clean, secure code and delivering a seamless user experience. Proficient in database design and creating modern, responsive user interfaces, consistently striving to deliver professional digital products that empower organizations in their digital transformation journey.",
    addressAr: "شارع شملان، صنعاء، اليمن",
    addressEn: "Al-Shamlan St. Sana’a, Yemen",
    locationAr: "صنعاء، اليمن",
    locationEn: "Sana’a, Yemen",
    phone: "+967 739868057",
    email: "Nashwan0xHatem@gmail.com",
    secondaryEmail: "nashwanqiad@gmail.com",
    githubUrl: "https://github.com/tizee511",
    linkedinUrl: "https://www.linkedin.com/in/𓆩eng-nashwan-hatem𓅓𓆪-38599b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatarImage: "/src/assets/images/eng_nashwan_identical_face_1791587664261.jpg",
    yearsOfExperience: 2,
    spokenLanguages: [
      { nameAr: "العربية", nameEn: "Arabic", levelAr: "اللغة الأم (Native)", levelEn: "Native" },
      { nameAr: "الإنجليزية", nameEn: "English", levelAr: "متوسط (Intermediate)", levelEn: "Intermediate" }
    ],
    resumePdfUrl: "#resume-preview",
    cvAvailable: true,
  },

  skillsCategories: [
    {
      id: "backend",
      title: {
        ar: "تطوير الواجهة الخلفية واللغات (Backend & Core)",
        en: "Backend & Core Languages"
      },
      description: {
        ar: "برمجة منطق الأعمال، معمارية MVC، وبناء واجهات برمجية RESTful عالية الأمان.",
        en: "Building robust business logic, MVC architecture, and secure RESTful APIs."
      },
      skills: [
        {
          name: "PHP & Laravel Framework",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["PHP 8.x", "Eloquent ORM", "Routing", "Middleware", "Controllers", "Blade"]
        },
        {
          name: "Laravel Sanctum & Auth",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Token Authentication", "API Security", "SPA Auth", "Role Gates"]
        },
        {
          name: "RESTful APIs Architecture",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["JSON Resources", "API Endpoints", "Postman", "Request Validation"]
        },
        {
          name: "MVC Architecture & Clean Code",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Model-View-Controller", "SOLID Principles", "Service Pattern", "Clean Code"]
        }
      ]
    },
    {
      id: "frontend",
      title: {
        ar: "الواجهات الأمامية وتجربة المستخدم (Frontend & UI)",
        en: "Frontend & UI Design"
      },
      description: {
        ar: "تصميم واجهات حديثة وسريعة الاستجابة باستخدام Tailwind CSS وجافاسكريبت.",
        en: "Designing modern, fluid, responsive user interfaces with Tailwind CSS and JavaScript."
      },
      skills: [
        {
          name: "Tailwind CSS",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Responsive Design", "Utility-First", "Modern Layouts", "Dark / Light"]
        },
        {
          name: "JavaScript (ES6+)",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["DOM Manipulation", "Fetch / Ajax", "Event Handling", "Async Operations"]
        },
        {
          name: "HTML5 & CSS3",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Semantic HTML", "Flexbox", "CSS Grid", "Cross-Browser Compatibility"]
        },
        {
          name: "UI/UX Design & Photoshop",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["Adobe Photoshop Certified", "Wireframing", "Visual Hierarchy", "Prototyping"]
        }
      ]
    },
    {
      id: "databases",
      title: {
        ar: "قواعد البيانات وإدارة الاستعلامات (SQL & MySQL)",
        en: "Databases & SQL"
      },
      description: {
        ar: "تصميم المخططات العلائقية، تطبيع الجداول، وتحسين أداء الاستعلامات وسرعتها.",
        en: "Designing normalized relational schemas, query tuning, and database integrity."
      },
      skills: [
        {
          name: "SQL & MySQL Database Design",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Relational Schema", "Foreign Keys", "Data Normalization", "Migrations"]
        },
        {
          name: "Database Transactions & ACID",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["Data Integrity", "Transactions", "Eager Loading", "Query Optimization"]
        }
      ]
    },
    {
      id: "devops",
      title: {
        ar: "أدوات التطوير وإدارة الإصدارات (Tools & Git)",
        en: "Development Tools & Version Control"
      },
      description: {
        ar: "إدارة النسخ البرمجية عبر Git وGitHub والعمل وفق معايير برمجية منظمة.",
        en: "Tracking versions, branching workflows with Git/GitHub, and package hygiene."
      },
      skills: [
        {
          name: "Git & GitHub",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Branching", "Commits", "Pull Requests", "Version Control Hygiene"]
        },
        {
          name: "Composer & NPM Environment",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Dependency Management", "Autoloading PSR", "Build Scripts", "Vite"]
        }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "yemen-naql-dashboard",
      title: {
        ar: "لوحة تحكم نظام يمن نقل الإدارية (Yemen Naql System)",
        en: "Yemen Naql System – Administrative Transport Dashboard"
      },
      shortDescription: {
        ar: "لوحة تحكم إدارية متكاملة لنظام يمن نقل لإدارة السائقين والعملاء وعمليات الرحلات وتكوين الأسعار وإصدار التقارير الإحصائية (مشروع التخرج).",
        en: "A comprehensive web-based administrative dashboard for Yemen Naql, enabling management of drivers, customers, trip operations, pricing configurations, and reporting functionalities."
      },
      fullDescription: {
        ar: "تم تطوير لوحة التحكم الإدارية لنظام يمن نقل لتكون المركز الرئيسي لإدارة وتنظيم حركة النقل البري والعمليات اليومية. تشمل المنظومة إدارة متكاملة لبيانات السائقين، تتبع حسابات العملاء، مراقبة الرحلات النشطة، ضبط تسعيرة المسارات، واستخراج تقارير إدارية وتشغيلية دقيقة تدعم اتخاذ القرار وتزيد من كفاءة الرقابة والمتابعة.",
        en: "Developed as the central operational nerve for the Yemen Naql transport system. Built to streamline transport management by centralizing driver registries, customer profiles, active dispatch monitoring, dynamic fare calculation matrices, and comprehensive administrative analytics."
      },
      problem: {
        ar: "الحاجة إلى نظام إداري مركزي موحد قادر على متابعة أسطول السائقين وحركة الرحلات وضبط التسعير ومنع تضارب الحجوزات أو غياب التقارير الرقابية الدقيقة.",
        en: "Fragmented dispatch logistics, lack of real-time monitoring of trip states and driver availability, and the absence of structured reporting and pricing configuration modules."
      },
      solution: {
        ar: "بناء لوحة تحكم تفاعلية وسريعة الاستجابة باستخدام Laravel وMySQL وTailwind CSS، مع توفير وحدات مخصصة لكل قسم إداري، وتطبيق صلاحيات وصول دقيقة ومؤشرات بيانية واضحة لحركة النقل.",
        en: "Engineered responsive dashboard interfaces and administrative modules using Laravel, MySQL, and Tailwind CSS to streamline operations, enhance tracking, and enforce role-based administrative authority."
      },
      category: 'systems',
      categoryLabel: {
        ar: "مشروع التخرج والنظم الإدارية",
        en: "Graduation Project & Admin Systems"
      },
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "RESTful APIs", "HTML/CSS"],
      role: {
        ar: "مطوّر لوحة التحكم الإدارية (Administrative Dashboard Developer)",
        en: "Administrative Dashboard Developer"
      },
      keyFeatures: {
        ar: [
          "إدارة وتوثيق بيانات السائقين واعتماد حساباتهم وحالات جاهزيتهم",
          "إدارة حسابات وسجلات العملاء وسجل الرحلات السابقة",
          "متابعة وإدارة عمليات الرحلات وحالاتها (قيد التنفيذ، مكتملة، ملغاة)",
          "تكوين وإعداد مصفوفات الأسعار وسياسات التسعير المرنة",
          "توليد تقارير إدارية وإحصائية تفصيلية عن العمليات التشغيلية"
        ],
        en: [
          "Driver onboarding, profile verification, and real-time operational status monitoring",
          "Customer directory and historical journey record management",
          "Trip dispatch lifecycle management (scheduled, active, completed, canceled)",
          "Dynamic pricing configuration engine for routes and service tiers",
          "Automated administrative reporting modules and analytical performance charts"
        ]
      },
      technicalChallenges: {
        ar: "هيكلة تدفق البيانات بحيث تكون لوحة التحكم سريعة في عرض آلاف سجلات الرحلات مع توفير فلاتر متعددة دون التأثير على استقرار قاعدة البيانات.",
        en: "Structuring relational queries and table indexes to deliver sub-second search and filtering across thousands of active transport dispatch records."
      },
      results: {
        ar: "تحسين كفاءة الرقابة التشغيلية بنسبة عالية وتوفير واجهة موحدة سهلت إدارة عمليات النقل بالكامل.",
        en: "Significantly streamlined transport fleet monitoring and provided a unified management dashboard for end-to-end trip operations."
      },
      image: "/src/assets/images/project_api_gateway_1791580677557.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "invoice-management-system",
      title: {
        ar: "نظام إدارة الفواتير والمدفوعات (Invoice Management System)",
        en: "Invoice Management System"
      },
      shortDescription: {
        ar: "نظام لإدارة عمليات الفوترة، إصدار الفواتير، تتبع المدفوعات والتحصيلات، وإنتاج تقارير مالية لتحسين الكفاءة المحاسبية.",
        en: "Developed an invoicing system to manage billing operations, generate invoices, track payments, and produce financial reports to improve accounting efficiency."
      },
      fullDescription: {
        ar: "نظام محاسبي وتنظيمي مخصص يهدف إلى أتمتة دورة الفوترة المالية بالكامل. يتيح للمؤسسات إنشاء فواتير احترافية، تسجيل الدفعات الجزئية والكلية، تتبع الفواتير المتأخرة، وإصدار كشوفات حساب دقيقة وتقارير مالية دورية.",
        en: "A robust financial billing platform engineered to streamline commercial invoicing workflows. Empowers organizations to issue professional invoices, track payment reconciliations, monitor overdue receivables, and generate fiscal statements."
      },
      problem: {
        ar: "الأخطاء اليدوية في تسجيل الفواتير، صعوبة متابعة المستحقات والتحصيلات المتأخرة، وضياع الوقت في إعداد التقارير المالية.",
        en: "Manual invoice generation caused billing discrepancies, untracked payment delays, and inefficient manual compilation of end-of-month statements."
      },
      solution: {
        ar: "بناء نظام موحد باستخدام Laravel وMySQL مع معالجة المعاملات المالية بدقة متناهية، ونظام حساب تلقائي للضرائب والخصومات، وتوليد فوري للفواتير بصيغة PDF قابلة للطباعة.",
        en: "Constructed a centralized invoicing system utilizing Laravel, MySQL, and Tailwind CSS. Implemented automated balance calculations, status tracking (Paid, Pending, Overdue), and instant PDF invoice generation."
      },
      category: 'systems',
      categoryLabel: {
        ar: "الأنظمة المالية والمحاسبية",
        en: "Financial & Billing Systems"
      },
      technologies: ["Laravel", "PHP", "Laravel Sanctum", "MySQL", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      role: {
        ar: "مطوّر النظام بالكامل (Full-Stack Developer)",
        en: "Full-Stack Developer"
      },
      keyFeatures: {
        ar: [
          "إنشاء وإصدار فواتير بيع وشراء مفصلة مع بنود مخصصة والضرائب والخصومات",
          "تتبع حالات السداد (مدفوعة بالكامل، مدفوعة جزئيًا، متأخرة)",
          "سجل حركات الدفع والتحصيل وتوثيق طرق السداد المختلفة",
          "إنتاج تقارير مالية محاسبية دورية وكشوفات حساب عملاء وموردين",
          "طباعة وتصدير الفواتير بتصميم احترافي متجاوب"
        ],
        en: [
          "Itemized invoice generation with dynamic tax, discount, and total computations",
          "Real-time payment status tracking (Fully Paid, Partially Paid, Overdue)",
          "Transaction payment logs supporting diverse payment methods and receipt numbers",
          "Automated financial accounting summaries and client statement generation",
          "Clean printable PDF export formatted for business documentation"
        ]
      },
      technicalChallenges: {
        ar: "ضمان دقة العمليات الحسابية للأرقام العشرية ومنع التضارب في أرقام تسلسل الفواتير عند الحفظ المتزامن.",
        en: "Enforcing sequential invoice numbering constraints and preventing decimal rounding discrepancies using database transactions."
      },
      results: {
        ar: "رفع الكفاءة المحاسبية بنسبة ملحوظة وتسريع إصدار الفواتير وتحصيل المدفوعات.",
        en: "Enhanced organizational billing turnaround and provided crystal-clear tracking of outstanding accounts receivable."
      },
      image: "/src/assets/images/project_erp_systems_1791580655363.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "school-management-system",
      title: {
        ar: "نظام إدارة المدارس والعمليات الأكاديمية (School Management System)",
        en: "School Management System"
      },
      shortDescription: {
        ar: "نظام متكامل لمعالجة سجلات الطلاب، إدارة الفصول، تتبع الحضور والغياب، وإصدار التقارير الإدارية لدعم العمليات الأكاديمية اليومية.",
        en: "Developed a school management system to handle student records, class management, attendance tracking, and administrative reporting to support daily academic operations."
      },
      fullDescription: {
        ar: "تطبيق ويب إداري شامل مصمم للمدارس والمؤسسات التعليمية. يقوم النظام بأتمتة إدارة بيانات الطلاب والمعلمين، توزيع الفصول والشعب الدراسية، تسجيل وتتبع الحضور والغياب اليومي بدقة، وإصدار تقارير الأداء الأكاديمي والشهادات.",
        en: "A comprehensive educational portal developed to modernize school operations. Organizes student admission records, teacher allocations, class timetables, daily attendance tracking, and administrative reporting."
      },
      problem: {
        ar: "الاعتماد على السجلات الورقية في تسجيل الحضور والغياب وصعوبة الوصول السريع لبيانات وسجلات الطلاب الأكاديمية.",
        en: "Paper-based student rosters, cumbersome attendance recording, and delayed compilation of academic records and administrative reports."
      },
      solution: {
        ar: "تطوير نظام ويب آمن عبر Laravel وMySQL يتيح للمشرفين والمعلمين تسجيل الحضور والدرجات بضغطة زر مع صلاحيات مخصصة لكل مستخدم.",
        en: "Built a secure, modular school management solution with Laravel and MySQL, enabling automated daily attendance logs, grade recording, and streamlined roster management."
      },
      category: 'systems',
      categoryLabel: {
        ar: "الأنظمة التعليمية والإدارية",
        en: "Educational & School Systems"
      },
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      role: {
        ar: "مطوّر الويب وهندسة النظام (Web Developer)",
        en: "Web Developer & System Architect"
      },
      keyFeatures: {
        ar: [
          "إدارة سجلات وملفات الطلاب الشخصية والأكاديمية",
          "تنظيم وتوزيع الفصول الدراسية والمناهج وتعيين المعلمين",
          "وحدة تسجيل الحضور والغياب اليومي مع كشوفات تفصيلية",
          "إصدار التقارير الإدارية والأكاديمية لدعم القرارات المدرسية",
          "واجهة مستخدم واضحة وسريعة الاستجابة للهواتف والأجهزة المكتبية"
        ],
        en: [
          "Comprehensive student academic profiling and enrollment registry",
          "Class, grade, and section schedule organization with teacher assignments",
          "Daily attendance logging module with automatic absent notification tracking",
          "Automated administrative and performance report generation",
          "Responsive, accessible interface tailored for academic administrative staff"
        ]
      },
      technicalChallenges: {
        ar: "تصميم هيكل قاعدة بيانات علائقي مرن يربط بين الفصول والطلاب والمواد دون تكرار للبيانات.",
        en: "Architecting a multi-relational database schema connecting classes, students, subjects, and attendance without redundancy."
      },
      results: {
        ar: "تسهيل العمليات الأكاديمية اليومية وتوفير ساعات عمل يومية على الكادر الإداري للمدرسة.",
        en: "Drastically accelerated daily academic record-keeping and streamlined school administrative workflows."
      },
      image: "/src/assets/images/project_school_system_1791586367897.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "hospital-management-system",
      title: {
        ar: "نظام إدارة المستشفيات والعيادات الطبية (Hospital Management System)",
        en: "Hospital Management System"
      },
      shortDescription: {
        ar: "نظام للتعامل مع سجلات المرضى الطبية، تنظيم المواعيد الطبية، وإدارة عمليات الفوترة والخدمات العلاجية.",
        en: "Handles patient records, appointments, and billing to streamline medical operations and clinical record management."
      },
      fullDescription: {
        ar: "منظومة طبية متكاملة مصممة لإدارة وتسهيل تدفق العمل داخل المستشفيات والعيادات. يغطي النظام ملفات المرضى وتاريخهم الطبي، حجز وجدولة مواعيد الأطباء، وإصدار فواتير الخدمات الطبية والأدوية، لضمان خدمة سريعة وموثوقة للمرضى.",
        en: "An integrated healthcare administrative application engineered for clinics and hospitals. Centralizes medical patient history records, doctor appointment scheduling, and patient billing invoicing."
      },
      problem: {
        ar: "تكدس المرضى وبطء حجز المواعيد وصعوبة متابعة ملفات وتاريخ المرضى الطبية وفواتير العلاج.",
        en: "Clinic queues, appointment overlapping, fragmented medical histories, and cumbersome manual medical billing."
      },
      solution: {
        ar: "تطوير نظام رصين باستخدام Laravel وMySQL لحفظ السجلات الطبية بسرية وأمان، وتوفير جدول مواعيد تفاعلي للأطباء وإدارة متكاملة للفواتير الطبية.",
        en: "Developed a robust medical management platform with Laravel, MySQL, and Tailwind CSS, featuring confidential patient registries, doctor scheduling calendars, and accurate treatment billing."
      },
      category: 'systems',
      categoryLabel: {
        ar: "الأنظمة الطبية والصحية",
        en: "Healthcare & Hospital Systems"
      },
      technologies: ["Laravel", "PHP", "Laravel Sanctum", "MySQL", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      role: {
        ar: "مطوّر النظام والواجهة الخلفية (Full-Stack Developer)",
        en: "Full-Stack Developer"
      },
      keyFeatures: {
        ar: [
          "إدارة السجلات الطبية للمرضى والتشخيصات والزيارات السابقة",
          "جدولة وتنظيم مواعيد الأطباء والعيادات التخصصية",
          "إصدار ومتابعة فواتير الخدمات الطبية والفحوصات",
          "إدارة كادر الأطباء والتمريض والصلاحيات الأمنية",
          "إحصائيات سريرية وتقارير استيعاب المرضى"
        ],
        en: [
          "Confidential patient medical record archive and diagnosis logs",
          "Interactive doctor appointment scheduling and booking calendar",
          "Medical service, diagnostic, and laboratory billing invoicing",
          "Staff and physician directory with strict access control gates",
          "Clinical statistics and patient admission metrics"
        ]
      },
      technicalChallenges: {
        ar: "الحفاظ على سرية وخصوصية البيانات الطبية ومنع تعارض المواعيد الزمنية للطبيب الواحد.",
        en: "Enforcing strict authorization policies for sensitive medical records and preventing double-booking of doctor appointment slots."
      },
      results: {
        ar: "تحسين تجربة المرضى وتنظيم مواعيد العيادات بدقة وكفاءة عالية.",
        en: "Delivered orderly appointment scheduling and centralized clinical administrative record keeping."
      },
      image: "/src/assets/images/project_hospital_system_1791586356644.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "ecommerce-store",
      title: {
        ar: "متجر التجارة الإلكترونية المتكامل (E-commerce Store)",
        en: "E-commerce Store & Order Hub"
      },
      shortDescription: {
        ar: "متجر إلكتروني متكامل يتميز بكتالوج المنتجات، معالجة وتتبع الطلبات، وإدارة حسابات المستخدمين.",
        en: "Features product catalogs, order processing, and user management for modern digital commerce."
      },
      fullDescription: {
        ar: "منصة تجارة إلكترونية سريعة ومتجاوبة مبنية لتوفير تجربة تسوق مريحة. تحتوي على كتالوج تفاعلي للمنتجات، سلة تسوق ديناميكية، معالجة دورة حياة الطلبات من الشراء حتى التسليم، ولوحة تحكم لإدارة المنتجات والمخزون والمستخدمين.",
        en: "A modern responsive e-commerce web platform engineered for seamless purchasing. Features categorized product catalog browsing, dynamic shopping cart management, order dispatch tracking, and merchant administration."
      },
      problem: {
        ar: "بطء المتاجر التقليدية وصعوبة إدارة الطلبات وتتبع حالات الدفع والشحن للمنتجات.",
        en: "Slow page load times on legacy platforms, complex checkout flows, and inefficient backend order tracking."
      },
      solution: {
        ar: "بناء المتجر باستخدام Laravel وTailwind CSS وMySQL مع توفير مصادقة آمنة عبر Laravel Sanctum، وتجربة تسوق سريعة ومتوافقة مع شاشات الهواتف.",
        en: "Built a sleek, high-speed online storefront with Laravel, Tailwind CSS, and MySQL, protected by Laravel Sanctum token security and featuring optimized mobile navigation."
      },
      category: 'ecommerce',
      categoryLabel: {
        ar: "التجارة الإلكترونية والمتاجر",
        en: "E-Commerce & Digital Stores"
      },
      technologies: ["Laravel", "PHP", "Laravel Sanctum", "MySQL", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      role: {
        ar: "مطوّر المتجر الإلكتروني (Full-Stack Developer)",
        en: "Full-Stack Developer"
      },
      keyFeatures: {
        ar: [
          "كتالوج منتجات تفاعلي مع تصنيفات وفلاتر بحث سريعة",
          "سلة تسوق مرنة وتحديث فوري للكميات والأسعار",
          "معالجة وتتبع دورة حياة الطلبات (جديد، قيد التجهيز، مكتمل)",
          "إدارة حسابات العملاء وسجل الطلبات السابقة",
          "لوحة تحكم إدارية لإضافة وتعديل المنتجات ومتابعة المبيعات"
        ],
        en: [
          "Dynamic product catalog with instant category filtering and search",
          "Reactive shopping cart with real-time subtotal and tax calculation",
          "Order fulfillment workflow tracking from checkout to delivery",
          "Customer authentication and historical purchase tracking",
          "Merchant dashboard for catalog curation and order management"
        ]
      },
      technicalChallenges: {
        ar: "إدارة جلسات السلة وتحديث كميات المخزون المتاحة بأمان عند تأكيد الطلب.",
        en: "Safely locking stock availability and managing cart session states during checkout spikes."
      },
      results: {
        ar: "تجربة تصفح وتسوق سلسة ومعدل إتمام طلبات سريع وخالٍ من التعقيد.",
        en: "Delivered a lightweight, highly responsive storefront with smooth checkout flows."
      },
      image: "/src/assets/images/project_ecommerce_platform_1791580666034.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    }
  ] as Project[],

  experience: [
    {
      id: "exp-yemen-naql",
      role: {
        ar: "مطوّر لوحة التحكم الإدارية (Administrative Dashboard Developer)",
        en: "Administrative Dashboard Developer"
      },
      companyOrContext: {
        ar: "نظام يمن نقل - مشروع التخرج (Yemen Naql System)",
        en: "Yemen Naql System – Graduation Project"
      },
      period: {
        ar: "2025 - حتى الآن",
        en: "2025 – Present"
      },
      location: {
        ar: "صنعاء، اليمن",
        en: "Sana’a, Yemen"
      },
      type: {
        ar: "مشروع تخرج ونظام مؤسسي متكامل",
        en: "Graduation Project & Enterprise System"
      },
      description: {
        ar: "تطوير لوحة تحكم إدارية متكاملة عبر الويب لنظام يمن نقل، مما مكّن من إدارة السائقين والعملاء وعمليات الرحلات وتكوين الأسعار وميزات إعداد التقارير الإدارية والتشغيلية.",
        en: "Developed a web-based administrative dashboard for Yemen Naql, enabling management of drivers, customers, trip operations, pricing configurations, and reporting functionalities."
      },
      responsibilities: {
        ar: [
          "تطوير لوحة تحكم إدارية لنظام يمن نقل تمكّن من إدارة السائقين، العملاء، عمليات الرحلات، وتكوين الأسعار وميزات إعداد التقارير",
          "بناء واجهات تحكم متجاوبة ووحدات إدارية لتسهيل وتنظيم عمليات النقل وتعزيز كفاءة المراقبة والتحكم باستخدام تقنيات تطوير الويب الحديثة",
          "تصميم مخطط قاعدة البيانات العلائقية وهيكلة جداول السائقين والرحلات والأسعار بكفاءة عالية",
          "تأمين الواجهات البرمجية وتطبيق صلاحيات وصول إدارية محكمة وفق معايير MVC"
        ],
        en: [
          "Developed a web-based administrative dashboard for Yemen Naql, enabling management of drivers, customers, trip operations, pricing configurations, and reporting functionalities.",
          "Built responsive dashboard interfaces and administrative modules to streamline transport operations and enhance monitoring efficiency using modern web development technologies.",
          "Architected normalized relational database schemas for drivers, trips, fares, and analytical audit logs.",
          "Implemented secure administrative authorization gates and robust RESTful API endpoints."
        ]
      },
      techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "RESTful APIs", "Git"]
    },
    {
      id: "exp-freelance-dev",
      role: {
        ar: "مطوّر ويب ونظم برمجية (Web Developer)",
        en: "Web Developer & Systems Builder"
      },
      companyOrContext: {
        ar: "مشاريع برمجية متكاملة وحلول ويب تجارية",
        en: "Integrated Software Solutions & Commercial Web Projects"
      },
      period: {
        ar: "خبرة عملية متواصلة (أكثر من سنتين)",
        en: "Over 2 Years Practical Experience"
      },
      location: {
        ar: "اليمن",
        en: "Yemen"
      },
      type: {
        ar: "تطوير برمجيات ونظم مؤسسية",
        en: "Software Engineering & Solutions"
      },
      description: {
        ar: "بناء وتطوير حلول برمجية متكاملة باستخدام PHP وLaravel، بما في ذلك نظام إدارة الفواتير، نظام إدارة المدارس، نظام إدارة المستشفيات، والمتاجر الإلكترونية.",
        en: "Engineered integrated software solutions using PHP and Laravel, including an Invoice Management System, School Management System, Hospital Management System, and E-commerce Stores."
      },
      responsibilities: {
        ar: [
          "كتابة كود PHP وLaravel نظيف وآمن وفق معمارية MVC وتطبيق أفضل ممارسات هندسة البرمجيات",
          "تصميم قواعد بيانات MySQL وتطبيع الجداول وتحسين استعلامات SQL",
          "بناء واجهات مستخدم متجاوبة وحديثة باستخدام Tailwind CSS وجافاسكريبت وHTML وCSS",
          "دمج حزم المصادقة والأمان مثل Laravel Sanctum لحماية الواجهات البرمجية",
          "إدارة الإصدارات البرمجية عبر Git & GitHub وتوثيق الكود بدقة"
        ],
        en: [
          "Wrote clean, secure PHP and Laravel code adhering to MVC architecture and software engineering best practices",
          "Designed and optimized MySQL relational database schemas, transactions, and SQL queries",
          "Crafted modern, fluid, responsive user interfaces using Tailwind CSS, JavaScript, HTML, and CSS",
          "Integrated authentication and authorization mechanisms including Laravel Sanctum for API security",
          "Maintained rigorous version control workflows with Git and GitHub"
        ]
      },
      techStack: ["PHP", "Laravel", "Laravel Sanctum", "MySQL", "Tailwind CSS", "JavaScript", "HTML/CSS", "Git"]
    }
  ] as ExperienceItem[],

  services: [
    {
      id: "srv-webapp",
      title: {
        ar: "تطوير تطبيقات ولوحات تحكم الويب (Web Dashboards & Apps)",
        en: "Custom Web Applications & Admin Dashboards"
      },
      description: {
        ar: "بناء لوحات تحكم إدارية وتطبيقات ويب متكاملة باستخدام PHP وLaravel مع واجهات متجاوبة وسريعة تمنحك تحكمًا كاملاً في بياناتك وعملياتك.",
        en: "Building bespoke administrative dashboards and web applications with PHP / Laravel, providing complete control over business operations."
      },
      scope: {
        ar: [
          "تحليل متطلبات العمل وهيكلة منطق النظام بدقة",
          "بناء لوحات تحكم إدارية متجاوبة وسريعة (Admin Dashboards)",
          "تأمين النظام ومصادقة المستخدمين عبر Laravel Sanctum",
          "تصدير التقارير الإدارية والإحصائية التفصيلية"
        ],
        en: [
          "Operational requirement analysis and system architecture",
          "Responsive, fast administrative dashboards and control modules",
          "Secure user authentication powered by Laravel Sanctum",
          "Detailed administrative and statistical reporting exports"
        ]
      },
      deliverables: {
        ar: "لوحة تحكم إدارية جاهزة للتشغيل مع كود نظيف وتوثيق كامل.",
        en: "Production-ready administrative web system with clean, maintainable code."
      }
    },
    {
      id: "srv-systems",
      title: {
        ar: "بناء النظم الإدارية والمؤسسية (Management Systems)",
        en: "Enterprise & Organizational Management Systems"
      },
      description: {
        ar: "تطوير أنظمة متخصصة مثل إدارة الفواتير والمدفوعات، إدارة المدارس، إدارة المستشفيات والعيادات، ونظم النقل اللوجستية.",
        en: "Developing specialized business systems such as invoicing, school management, hospital workflows, and transport logistics."
      },
      scope: {
        ar: [
          "نظم إدارة الفواتير وتتبع المدفوعات والتحصيلات",
          "نظم إدارة المدارس وشؤون الطلاب والحضور",
          "نظم إدارة المستشفيات والملفات الطبية والمواعيد",
          "أتمتة العمليات اليومية وتوليد التقارير المالية والإدارية"
        ],
        en: [
          "Invoicing and payment tracking systems",
          "School management, academic rosters, and attendance portals",
          "Hospital management, patient registries, and appointment booking",
          "Workflow automation and automated financial/administrative reporting"
        ]
      },
      deliverables: {
        ar: "نظام مؤسسي مخصص وموثوق يلبي احتياجات قطاع العمل بالكامل.",
        en: "Tailored management system built for high reliability and operational accuracy."
      }
    },
    {
      id: "srv-database",
      title: {
        ar: "تصميم وهيكلة قواعد البيانات (SQL & MySQL Design)",
        en: "Relational Database Design & SQL Optimization"
      },
      description: {
        ar: "تصميم مخططات قواعد بيانات MySQL علائقية نظيفة وموزونة، تطبيع الجداول، وتحسين أداء الاستعلامات لضمان أعلى سرعة واستقرار.",
        en: "Designing clean normalized MySQL schemas, relational keys, transaction management, and query optimization."
      },
      scope: {
        ar: [
          "تصميم المخططات العلائقية وتطبيع الجداول (Normalization)",
          "بناء العلاقات والمفاتيح الخارجية وفهرسة الجداول",
          "ضبط المعاملات المالية (ACID Transactions) لضمان سلامة البيانات",
          "تحسين استعلامات SQL ورفع سرعة الاستجابة"
        ],
        en: [
          "Relational schema modeling and database normalization",
          "Foreign keys, indexes, and relationship integrity",
          "ACID transactions guaranteeing financial and operational consistency",
          "SQL query profiling and response time tuning"
        ]
      },
      deliverables: {
        ar: "قاعدة بيانات متينة وعالية الأداء مع مخططات علائقية موثقة.",
        en: "Optimized, documented relational database schema delivering high reliability."
      }
    },
    {
      id: "srv-apis",
      title: {
        ar: "تطوير واجهات RESTful APIs وتأمينها (API Engineering)",
        en: "RESTful API Engineering & Integration"
      },
      description: {
        ar: "بناء وتوثيق واجهات برمجية قياسية لربط تطبيقات الويب بالهواتف والخدمات الخارجية مع تأمينها بالكامل عبر Tokens وSanctum.",
        en: "Engineering clean, secure RESTful APIs for web/mobile interoperability, secured by Laravel Sanctum token protocols."
      },
      scope: {
        ar: [
          "تصميم وتطوير نقاط اتصال RESTful APIs منظمة",
          "تأمين المصادقة والصلاحيات عبر Laravel Sanctum",
          "معالجة البيانات والتحقق من صحة المدخلات بدقة",
          "توثيق الواجهات البرمجية وتجهيزها للاختبار والتكامل"
        ],
        en: [
          "Standardized RESTful API endpoint design and implementation",
          "Token-based authentication and authorization gates via Laravel Sanctum",
          "Strict input payload validation and JSON responses",
          "Comprehensive API documentation for seamless client integration"
        ]
      },
      deliverables: {
        ar: "واجهات برمجية آمنة وسريعة وموثقة جاهزة للربط الفوري.",
        en: "Clean, documented, high-speed API layer ready for immediate integration."
      }
    }
  ] as ServiceItem[],

  education: [
    {
      id: "edu-alrazi",
      degree: {
        ar: "بكالوريوس في تقنية المعلومات (B.Sc. Information Technology)",
        en: "B.Sc. Information Technology"
      },
      institution: {
        ar: "جامعة الرازي (Al-Razi University) - صنعاء، اليمن",
        en: "Al-Razi University – Sana’a, Yemen"
      },
      period: {
        ar: "التخرج المتوقع: 2026 (Expected Graduation: 2026)",
        en: "Expected Graduation: 2026"
      },
      details: {
        ar: "دراسة أكاديمية متخصصة في تقنية المعلومات وهندسة البرمجيات، وتصميم قواعد البيانات العلائقية، وتطوير الويب، وشبكات الحاسوب، مع إنجاز مشروع تخرج رائد (لوحة تحكم نظام يمن نقل الإدارية).",
        en: "Academic degree program specializing in software engineering, database design, modern web technologies, and systems development, featuring the flagship Yemen Naql administrative system as a graduation project."
      },
      type: 'degree'
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-laravel-adv",
      name: {
        ar: "إطار عمل لارافيل المتقدم (Advanced Laravel Framework)",
        en: "Advanced Laravel Framework"
      },
      issuer: {
        ar: "شهادة معتمدة في تقنيات Laravel المتقدمة",
        en: "Advanced Laravel Certification"
      },
      year: "2024"
    },
    {
      id: "cert-laravel-core",
      name: {
        ar: "إطار عمل لارافيل (Laravel Framework)",
        en: "Laravel Framework"
      },
      issuer: {
        ar: "شهادة معتمدة في إطار عمل Laravel",
        en: "Laravel Framework Certification"
      },
      year: "2024"
    },
    {
      id: "cert-uiux",
      name: {
        ar: "تصميم واجهات وتجربة المستخدم (UI/UX Design)",
        en: "UI/UX Design Certification"
      },
      issuer: {
        ar: "شهادة متخصصة في تصميم تجربة المستخدم والواجهات",
        en: "UI/UX Professional Design Certification"
      },
      year: "2024"
    },
    {
      id: "cert-photoshop",
      name: {
        ar: "الشهادة المهنية الاحترافية في أدوبي فوتوشوب (Adobe Photoshop Professional Certification)",
        en: "Adobe Photoshop Professional Certification"
      },
      issuer: {
        ar: "شهادة مهنية احترافية معتمدة",
        en: "Adobe Professional Accreditation"
      },
      year: "2023"
    }
  ]
};

export const UI_TRANSLATIONS = {
  ar: {
    nav: {
      brand: "م. نشوان حاتم",
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      services: "الخدمات",
      contact: "التواصل",
      resume: "السيرة الذاتية",
      langToggle: "English",
      lightMode: "الوضع الفاتح",
      darkMode: "الوضع الداكن"
    },
    hero: {
      kicker: "مهندس برمجيات ومطوّر Full-Stack",
      greeting: "مرحبًا، أنا",
      role: "مهندس برمجيات ومطور Full-Stack متخصص في بناء تطبيقات الويب ونظم الأعمال القابلة للتوسع",
      ctaProjects: "استعراض المشاريع",
      ctaContact: "تواصل معي",
      ctaResume: "معاينة السيرة الذاتية",
      statYears: "3 سنوات خبرة",
      statSystems: "نظم مؤسسية ومشاريع متكاملة",
      statStack: "PHP Native • TALL • MySQL • Docker",
      location: "صنعاء، اليمن"
    },
    about: {
      sectionTitle: "نبذة مهنية",
      sectionSubtitle: "شغف بالهندسة البرمجية النظيفة، الكفاءة العالية، وحل المشكلات الواقعية.",
      badge: "عن المهندس",
      p1: "أنا م. نشوان قائد غالب حاتم، مهندس برمجيات ومطوّر Full-Stack مقيم في صنعاء، اليمن، بخبرة عملية تمتد لـ 3 سنوات في بناء تطبيقات الويب وهندسة النظم الإدارية وقواعد البيانات.",
      p2: "أنظر إلى البرمجة كأداة قوية لبناء حلول حقيقية تخدم قطاع الأعمال وتختصر الوقت والمجهود وفق مبدأ (Build • Solve • Improve). لذا، أركز على كتابة كود PHP نقي وموثوق، والاعتماد على قوة حزمة TALL (Tailwind CSS, Alpine.js, Laravel, Livewire) إلى جانب React وVue.js لتقديم واجهات فائقة السرعة والتفاعل، مع إدارة قواعد بيانات MySQL بكفاءة ومعالجة العمليات المتزامنة بأمان.",
      p3: "أهتم بشدة بجودة الكود وتطبيق مبادئ Clean Code وهندسة النظم (System Design)، وتأمين بيئات العمل عبر Docker، والالتزام بأفضل ممارسات الأمان وسرعة التحميل، مع حرص دائم على العمل الجماعي والتواصل الشفاف والمستمر مع العملاء وفرق العمل.",
      highlightsTitle: "المبادئ والقيم البرمجية:",
      h1Title: "كود نظيف ومعماري (Clean Architecture):",
      h1Desc: "كتابة كود مقروء، منظم وفق معايير SOLID، يسهل صيانته وتطويره مستقبلاً دون تعقيد.",
      h2Title: "كفاءة قواعد البيانات (Database Performance):",
      h2Desc: "تصميم مخططات متوازنة، حماية التنافسية بالمعاملات (Transactions)، وفهرسة الاستعلامات لسرعة استجابة فائقة.",
      h3Title: "تجربة مستخدم واقعية (Fast UX):",
      h3Desc: "واجهات سريعة التحميل وخفيفة الوزن، خالية من التعقيد الشكلي والبطء البرمجي غير المبرر.",
      h4Title: "أتمتة وحاويات تشغيل (Docker & CI):",
      h4Desc: "توحيد بيئة التطوير والإنتاج لضمان تشغيل ثابت ومستقر وتفادي مشاكل 'يعمل على جهازي فقط'."
    },
    skills: {
      sectionTitle: "المهارات والتقنيات",
      sectionSubtitle: "أدوات وتقنيات حقيقية تم استخدامها وصقلها عمليًا في مشاريع واقعية.",
      badge: "القدرات التقنية",
      tabs: {
        all: "جميع المهارات",
        backend: "الواجهة الخلفية & اللغات",
        frontend: "الواجهات الأمامية",
        databases: "قواعد البيانات",
        devops: "البيئة والأدوات"
      },
      levelLegend: "المستويات مبنية على التطبيق العملي الفعلي والإنتاجي."
    },
    projects: {
      sectionTitle: "معرض المشاريع",
      sectionSubtitle: "أعمال حقيقية وحلول برمجية تم تصميمها وتنفيذها لحل مشكلات أعمال قائمة.",
      badge: "سابقة الأعمال",
      filterAll: "الكل",
      filterTall: "حزمة TALL",
      filterSystems: "النظم والبنية",
      filterEcommerce: "التجارة والمدفوعات",
      viewDetails: "تفاصيل المشروع والحل المعماري",
      livePreview: "معاينة حية",
      viewCode: "المستودع في GitHub",
      featuresCount: "أبرز المزايا",
      techUsed: "التقنيات المستخدمة:",
      modalOverview: "نظرة عامة على المشروع",
      modalProblem: "المشكلة والحاجة التقنية",
      modalSolution: "الحل المنفذ والمعمارية",
      modalFeatures: "أهم الخصائص والمميزات",
      modalChallenges: "التحديات التقنية وكيف تم حلها",
      modalResults: "النتائج وقيمة المشروع",
      modalRole: "دوري في المشروع",
      closeModal: "إغلاق"
    },
    experience: {
      sectionTitle: "الخبرات والمسار المهني",
      sectionSubtitle: "3 سنوات من الخبرة العملية المتواصلة في تطوير الويب وحلول الأنظمة.",
      badge: "المسار المهني",
      keyResponsibilities: "أبرز المسؤوليات والإنجازات:"
    },
    services: {
      sectionTitle: "الخدمات التقنية",
      sectionSubtitle: "خدمات برمجية احترافية ومباشرة بأعلى معايير الجودة والاستقرار.",
      badge: "ماذا أقدم",
      scopeTitle: "نطاق العمل يشمل:",
      deliverablesTitle: "المخرجات المتوقعة:",
      requestCta: "طلب هذه الخدمة"
    },
    education: {
      sectionTitle: "التعليم والمؤهلات",
      sectionSubtitle: "أسس أكاديمية متينة مصحوبة بتطوير مهني وتقني مستمر.",
      badge: "المؤهلات"
    },
    resumeModal: {
      title: "السيرة المهنية الرقمية (Curriculum Vitae)",
      downloadPdf: "تنزيل السيرة الذاتية (PDF)",
      printCv: "طباعة السيرة الذاتية",
      close: "إغلاق النافذة",
      contactDirect: "للتواصل المباشر:"
    },
    contact: {
      sectionTitle: "تواصل معي",
      sectionSubtitle: "متاحة لمناقشة فرص العمل، عقود التطوير، وبناء الحلول الرقمية والنظم.",
      badge: "دعنا نتحدث",
      emailLabel: "البريد الإلكتروني المباشر",
      locationLabel: "الموقع الجغرافي",
      socialLabel: "المنصات المهنية",
      copyEmail: "نسخ البريد",
      copiedNotice: "تم نسخ البريد الإلكتروني بنجاح!",
      formTitle: "إرسال رسالة مباشرة",
      name: "الاسم الكامل",
      namePlaceholder: "اكتب اسمك هنا...",
      email: "البريد الإلكتروني",
      emailPlaceholder: "example@domain.com",
      service: "نوع الخدمة أو الاستفسار",
      serviceOptions: {
        general: "استفسار عام أو فرصة عمل",
        webapp: "تطوير تطبيق ويب مخصص",
        systems: "بناء نظام ERP أو إدارة مخزون",
        database: "تصميم أو تحسين قاعدة بيانات MySQL",
        api: "تطوير أو ربط واجهات برمجة APIs"
      },
      message: "تفاصيل الرسالة أو فكرة المشروع",
      messagePlaceholder: "يرجى توضيح المتطلبات أو نبذة عن المشروع وكيف يمكنني مساعدتك...",
      sendBtn: "إرسال الرسالة الآن",
      sendingBtn: "جارٍ الإرسال...",
      successTitle: "شكرًا لك! تم إرسال رسالتك بنجاح.",
      successDesc: "سأقوم بالرد على بريدك الإلكتروني في أقرب وقت ممكن.",
      sendAnother: "إرسال استفسار آخر",
      directEmailBtn: "أو أرسل عبر تطبيق بريدك المفضل (mailto)"
    },
    footer: {
      rights: "جميع الحقوق محفوظة © 2026",
      bioBrief: "مطوّرة Full-Stack متخصصة في PHP Native، وحزمة TALL، وMySQL، وDocker. بناء نظم قابلة للتوسع وحلول ويب سريعة ورصينة.",
      quickLinks: "روابط سريعة",
      connect: "تواصل مهني",
      backToTop: "العودة للأعلى"
    }
  },

  en: {
    nav: {
      brand: "Nashwan Hatem",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      resume: "Resume",
      langToggle: "العربية",
      lightMode: "Light Mode",
      darkMode: "Dark Mode"
    },
    hero: {
      kicker: "Full-Stack Developer & Systems Specialist",
      greeting: "Hello, I am",
      role: "Software engineer specializing in resilient web applications, TALL stack, and scalable business systems",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
      ctaResume: "View Curriculum Vitae",
      statYears: "3 Years Experience",
      statSystems: "Enterprise Systems & Web Apps",
      statStack: "PHP Native • TALL • MySQL • Docker",
      location: "Sana'a, Yemen"
    },
    about: {
      sectionTitle: "About Me",
      sectionSubtitle: "A strong passion for clean software architecture, computational efficiency, and real-world problem solving.",
      badge: "Biography & Mindset",
      p1: "I am Nashwan Qiad Ghalib Hatem, a Full-Stack Software Developer based in Sana'a, Yemen, with 3 years of hands-on experience designing robust web applications, enterprise management portals, and scalable database systems.",
      p2: "I view software engineering as a discipline to deliver tangible business efficiency. My engineering foundation is centered on clean, reliable native PHP patterns, leveraging the modern reactive power of the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire) for lightweight, instantaneous user experiences, alongside optimized relational MySQL schemas and robust concurrency management.",
      p3: "I place great emphasis on code quality, modular architecture, reproducible containerization using Docker, and rigorous security invariants—backed by transparent team collaboration and proactive communication.",
      highlightsTitle: "Guiding Engineering Principles:",
      h1Title: "Clean & Maintainable Architecture:",
      h1Desc: "Writing clean, SOLID-compliant code that is straightforward to test, audit, and extend as business needs scale.",
      h2Title: "Database Performance & Concurrency:",
      h2Desc: "Designing normalized schemas, protecting transactional integrity with ACID locks, and indexing queries for minimal latency.",
      h3Title: "Practical, Lightweight UX:",
      h3Desc: "Fast-loading, accessible interfaces free from bloated dependencies or unnecessary visual fluff.",
      h4Title: "Dockerized Environments & Repeatability:",
      h4Desc: "Standardizing development and production setups to guarantee high uptime and eliminate environment drift."
    },
    skills: {
      sectionTitle: "Skills & Technical Stack",
      sectionSubtitle: "Authentic technologies verified through production-tested implementations.",
      badge: "Technical Capabilities",
      tabs: {
        all: "All Capabilities",
        backend: "Backend & Languages",
        frontend: "Frontend & Reactive UI",
        databases: "Databases & Architecture",
        devops: "DevOps & Tooling"
      },
      levelLegend: "Proficiency ratings are based on real practical system implementations."
    },
    projects: {
      sectionTitle: "Selected Projects",
      sectionSubtitle: "Real-world web solutions engineered to address genuine operational and business needs.",
      badge: "Case Studies",
      filterAll: "All Works",
      filterTall: "TALL Stack",
      filterSystems: "Systems & Ops",
      filterEcommerce: "E-Commerce & Payments",
      viewDetails: "View Full Architectural Case Study",
      livePreview: "Live Preview",
      viewCode: "GitHub Repository",
      featuresCount: "Key Capabilities",
      techUsed: "Tech Stack:",
      modalOverview: "Project Overview",
      modalProblem: "Problem & Business Need",
      modalSolution: "Engineered Architecture & Solution",
      modalFeatures: "Key Features & Capabilities",
      modalChallenges: "Technical Challenges & Mitigation",
      modalResults: "Measurable Impact & Value",
      modalRole: "My Role & Responsibilities",
      closeModal: "Close"
    },
    experience: {
      sectionTitle: "Experience & Timeline",
      sectionSubtitle: "3 years of continuous professional hands-on software development and systems engineering.",
      badge: "Career Journey",
      keyResponsibilities: "Key Responsibilities & Deliverables:"
    },
    services: {
      sectionTitle: "Services Offered",
      sectionSubtitle: "Focused, production-ready software engineering services built with reliability at the core.",
      badge: "What I Deliver",
      scopeTitle: "Scope of work includes:",
      deliverablesTitle: "Expected deliverables:",
      requestCta: "Inquire About This Service"
    },
    education: {
      sectionTitle: "Education & Qualifications",
      sectionSubtitle: "Solid academic foundation reinforced by continuous hands-on technical advancement.",
      badge: "Qualifications"
    },
    resumeModal: {
      title: "Professional Curriculum Vitae",
      downloadPdf: "Download Resume (PDF)",
      printCv: "Print Resume",
      close: "Close Window",
      contactDirect: "Direct Contact:"
    },
    contact: {
      sectionTitle: "Get in Touch",
      sectionSubtitle: "Open to discussing engineering roles, contract development, and bespoke software projects.",
      badge: "Let's Connect",
      emailLabel: "Direct Email Address",
      locationLabel: "Location",
      socialLabel: "Professional Profiles",
      copyEmail: "Copy Email",
      copiedNotice: "Email address copied to clipboard!",
      formTitle: "Send a Direct Message",
      name: "Your Full Name",
      namePlaceholder: "Jane Doe / John Smith",
      email: "Email Address",
      emailPlaceholder: "example@domain.com",
      service: "Project Scope or Inquiry Type",
      serviceOptions: {
        general: "General Inquiry or Job Opportunity",
        webapp: "Custom Full-Stack Web Application",
        systems: "ERP or Multi-Branch Inventory System",
        database: "MySQL Database Design & Query Tuning",
        api: "REST API Development & 3rd-Party Integration"
      },
      message: "Message Details & Project Scope",
      messagePlaceholder: "Describe your project requirements, timeline, and how I can help...",
      sendBtn: "Send Message Now",
      sendingBtn: "Sending...",
      successTitle: "Thank you! Your message has been sent.",
      successDesc: "I will respond to your inquiry as promptly as possible.",
      sendAnother: "Send Another Message",
      directEmailBtn: "Or send directly via your mail client (mailto)"
    },
    footer: {
      rights: "All Rights Reserved © 2026",
      bioBrief: "Full-Stack Developer specializing in PHP Native, TALL Stack, MySQL, and Docker. Crafting scalable systems and resilient digital tools.",
      quickLinks: "Quick Navigation",
      connect: "Connect",
      backToTop: "Back to Top"
    }
  }
};
