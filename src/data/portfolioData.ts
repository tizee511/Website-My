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
    nameAr: "م. نشوان قائد غالب حاتم",
    nameEn: "Eng. Nashwan Hatem",
    shortNameAr: "م. نشوان حاتم",
    shortNameEn: "Eng. Nashwan Hatem",
    roleAr: "مهندس ومطوّر نظم وتطبيقات ويب (Full-Stack Developer)",
    roleEn: "Full-Stack Developer & Systems Specialist",
    specializationAr: "Web Development & Systems ⚙️ PHP Native • TALL • MySQL • Docker | Building scalable systems",
    specializationEn: "Web Development & Systems ⚙️ PHP Native • TALL • MySQL • Docker | Building scalable systems",
    taglineAr: "بناء تطبيقات الويب الحديثة. أتمتة مسارات العمل. إنشاء حلول رقمية رصينة وموثوقة وقابلة للتوسع (BUILD • SOLVE • IMPROVE).",
    taglineEn: "Building Web Applications. Automating Workflows. Creating Digital Solutions that scale (BUILD • SOLVE • IMPROVE).",
    summaryAr: "مهندس برمجيات ومطوّر Full-Stack بخبرة 3 سنوات عملية متخصصة في هندسة تطبيقات الويب النظيفة وبناء الأنظمة المؤسسية. أركز بعمق على كفاءة قواعد بيانات MySQL، وحزمة TALL (Tailwind, Alpine.js, Laravel, Livewire)، وكتابة PHP Native رصين، وأتمتة بيئات العمل عبر Docker، وتطبيق مبادئ Clean Code وSystem Design لتحويل الاحتياجات المعقدة إلى برمجيات سلسة وسريعة.",
    summaryEn: "Full-Stack Software Engineer with 3 years of hands-on experience specializing in architecting resilient web applications and business systems. Deeply focused on MySQL efficiency, the modern TALL stack (Tailwind, Alpine.js, Laravel, Livewire), robust native PHP patterns, Docker containerization, and applying Clean Code and System Design principles.",
    locationAr: "اليمن، صنعاء",
    locationEn: "Sana'a, Yemen",
    email: "nashwanqiad@gmail.com",
    githubUrl: "https://github.com/tizee511",
    linkedinUrl: "https://www.linkedin.com/in/𓆩eng-nashwan-hatem𓅓𓆪-38599b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatarImage: "/src/assets/images/eng_nashwan_exact_photo_1791582899101.jpg",
    yearsOfExperience: 3,
    spokenLanguages: [
      { nameAr: "العربية", nameEn: "Arabic", levelAr: "اللغة الأم", levelEn: "Native" },
      { nameAr: "الإنجليزية", nameEn: "English", levelAr: "إتقان مهني وتقني", levelEn: "Professional Technical" }
    ],
    resumePdfUrl: "#resume-preview",
    cvAvailable: true,
  },

  skillsCategories: [
    {
      id: "backend",
      title: {
        ar: "هندسة الواجهة الخلفية واللغات",
        en: "Backend Engineering & Core Languages"
      },
      description: {
        ar: "تطوير منطق الأعمال، معالجة البيانات بكفاءة، وبناء خدمات ويب آمنة وعالية الاعتمادية.",
        en: "Developing robust business logic, high-throughput data processing, and secure APIs."
      },
      skills: [
        {
          name: "PHP (Native & Modern OOP)",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["PHP 8.x", "OOP", "Design Patterns", "Clean Code"]
        },
        {
          name: "Laravel Framework",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["MVC", "Eloquent ORM", "Queues & Jobs", "Service Providers", "Middleware"]
        },
        {
          name: "RESTful API Architecture",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 3,
          tags: ["API Design", "JWT / Sanctum", "Rate Limiting", "JSON Web Services"]
        },
        {
          name: "Livewire",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 2,
          tags: ["Component State", "Realtime Hydration", "Full-Stack Reactivity"]
        }
      ]
    },
    {
      id: "frontend",
      title: {
        ar: "الواجهات الأمامية والتفاعل",
        en: "Frontend & Reactive Interfaces"
      },
      description: {
        ar: "تصميم واجهات حديثة وسريعة الاستجابة بأقل كود جافاسكريبت غير ضروري وتوافق تام للشاشات.",
        en: "Crafting lightweight, responsive interfaces with clean utility styles and agile reactivity."
      },
      skills: [
        {
          name: "Tailwind CSS",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["Fluid Layouts", "Dark / Light Mode", "Design Tokens", "RTL / LTR"]
        },
        {
          name: "Alpine.js & Vue.js",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["Declarative DOM", "Vue 3", "Micro-Interactions", "Transitions", "Reactivity"]
        },
        {
          name: "React & Modern UI",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["Hooks", "Component Lifecycle", "SPA State", "TypeScript"]
        },
        {
          name: "JavaScript (ES6+) & TypeScript",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 3,
          tags: ["DOM APIs", "Async / Await", "Fetch / Axios", "State Management"]
        },
        {
          name: "Semantic HTML5 & Modern CSS",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["Accessibility (a11y)", "Responsive Grids", "Flexbox", "Typography"]
        }
      ]
    },
    {
      id: "databases",
      title: {
        ar: "قواعد البيانات وهيكلة النظم",
        en: "Databases & System Architecture"
      },
      description: {
        ar: "تصميم المخططات العلائقية المعقدة، نمذجة البيانات، وفهرسة الاستعلامات لضمان أقصى سرعة.",
        en: "Designing normalized relational schemas, query tuning, and index optimization."
      },
      skills: [
        {
          name: "MySQL & Relational Design",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["Schema Normalization", "Foreign Keys", "Transactions & ACID", "Stored Procedures"]
        },
        {
          name: "Query Optimization & Indexing",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 3,
          tags: ["EXPLAIN Plans", "B-Tree Indexes", "Slow Query Log", "Eager Loading"]
        },
        {
          name: "Data Modeling & Workflows",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 3,
          tags: ["ER Diagrams", "Workflow Engines", "Audit Trail Logging", "Role-Based Access (RBAC)"]
        }
      ]
    },
    {
      id: "devops",
      title: {
        ar: "الحاويات، الأدوات وبيئة العمل",
        en: "DevOps, Containerization & Tools"
      },
      description: {
        ar: "تأمين بيئات تشغيل متطابقة، إدارة النسخ، والتشغيل الآمن والمستقر للمشاريع.",
        en: "Reproducible deployment environments, version control hygiene, and steady operations."
      },
      skills: [
        {
          name: "Docker & Docker Compose",
          level: "Advanced",
          levelAr: "متقدم",
          experienceYears: 2,
          tags: ["Multi-stage Builds", "Container Orchestration", "Volume Mounts", "LEMP Stacks"]
        },
        {
          name: "Git & Version Control",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["Branching Workflows", "Merge / Rebase", "Pull Requests", "Code Reviews"]
        },
        {
          name: "Composer, NPM & Dependency Hygiene",
          level: "Core Mastery",
          levelAr: "إتقان أساسي",
          experienceYears: 3,
          tags: ["Package Management", "Autoloading PSR-4", "Build Pipelines", "Vite"]
        },
        {
          name: "Nginx & Linux Server Essentials",
          level: "Proficient",
          levelAr: "كفاءة عالية",
          experienceYears: 2,
          tags: ["Virtual Hosts", "SSL / Let's Encrypt", "Reverse Proxy", "Cron Jobs"]
        }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "stockflow-erp",
      title: {
        ar: "نظام إدارة المخزون وسلاسل التوريد (StockFlow ERP)",
        en: "StockFlow - Enterprise Inventory & Supply Chain ERP"
      },
      shortDescription: {
        ar: "نظام متكامل لإدارة المخازن المتعددة، تتبع حركة البضائع، ومراقبة الحدود الحرجة للمخزون في الوقت الحقيقي.",
        en: "A robust multi-warehouse inventory management platform with real-time stock level monitoring and automated requisition workflows."
      },
      fullDescription: {
        ar: "تم بناء هذا النظام لتلبية متطلبات الشركات والمؤسسات التي تدير آلاف الأصناف عبر مخازن جغرافية متعددة. يوفر لوحة تحكم ذكية تمنح الإدارة رؤية شاملة عن حركة الوارد والصادر ومستويات الأمان للمخزون مع تقارير دقيقة وتحليلات بيانية.",
        en: "Architected for enterprises handling thousands of SKUs across distributed warehouses. The platform delivers real-time stock reconciliation, automated reorder triggers, purchase order workflows, and interactive analytics."
      },
      problem: {
        ar: "كانت المؤسسة تعاني من عدم دقة تتبع المخزون اليدوي، وحدوث عجز متكرر في الأصناف الأساسية دون إنذار مسبق، إلى جانب بطء إصدار التقارير المحاسبية وصعوبة متابعة أذونات الصرف.",
        en: "Manual spreadsheet records led to inconsistent stock counts, delayed requisition approvals, and unexpected stockouts of high-velocity items without proactive warning alerts."
      },
      solution: {
        ar: "تصميم نظام مؤسسي موحد مبني على حزمة TALL وقاعدة بيانات MySQL مع معالجة حركات المخزون عبر المعاملات البنكية (Database Transactions) لضمان عدم حدوث تضارب في الكميات، مع واجهات تفاعلية عبر Livewire تتيح الفلترة والبحث الفوري بدون إعادة تحميل الصفحة.",
        en: "Built a centralized system using Laravel, Livewire, Alpine.js, and MySQL. Enforced strict database transactions and row-locking on critical stock transfers, combined with an instant Livewire search interface and automated daily stock alerts."
      },
      category: 'tall',
      categoryLabel: {
        ar: "حزمة TALL والنظم المؤسسية",
        en: "TALL Stack & Systems"
      },
      technologies: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL", "Docker", "Database Transactions"],
      role: {
        ar: "مهندسة ومطوّرة كامل المنظومة (Full-Stack Architect)",
        en: "Full-Stack Architect & Developer"
      },
      keyFeatures: {
        ar: [
          "إدارة المستودعات المتعددة مع تحويلات داخلية فورية موثقة برقم إذن",
          "نظام تنبيهات ذكي للأصناف التي تقترب من نقطة إعادة الطلب (Reorder Point)",
          "تصدير واستيراد مجمّع لبيانات المنتجات بصيغ Excel وPDF",
          "صلاحيات مستخدمين متعددة المستويات (مدير نظام، أمين مستودع، مسؤول مشتريات)",
          "سجل تدقيق كامل (Audit Log) لجميع عمليات الصرف والإضافة والتعديل"
        ],
        en: [
          "Multi-location warehouse management with verified inter-branch transfer tickets",
          "Automated threshold alert system when stock approaches the reorder safety point",
          "Bulk CSV/Excel batch processing and automated PDF voucher generation",
          "Role-Based Access Control (RBAC) separating warehouse keepers, purchasers, and executives",
          "Immutable transaction audit logs for every stock mutation and deduction"
        ]
      },
      technicalChallenges: {
        ar: "التحدي الأبرز كان معالجة التنافسية (Race Conditions) عند قيام عدة مستخدمين بصرف نفس الصنف في نفس اللحظة. تم حل ذلك باستخدام Pessimistic Locking على مستوى صف قاعدة البيانات وفهرسة مخصصة لجداول الحركات الكبيرة.",
        en: "Mitigating race conditions when multiple terminal operators simultaneously deducted quantities from the same SKU. Solved using pessimistic row locks in MySQL transactions alongside compound indexing."
      },
      results: {
        ar: "انخفاض بنسبة 95% في الأخطاء المخزنية وتسريع استخراج التقارير الشهرية من ساعات إلى ثوانٍ معدودة.",
        en: "Reduced inventory discrepancy rate by 95% and lowered month-end reporting time from hours to instantaneous generation."
      },
      image: "/src/assets/images/project_erp_systems_1791580655363.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "moderna-commerce",
      title: {
        ar: "منصة التجارة الإلكترونية وبوابة المدفوعات (Moderna Luxe)",
        en: "Moderna Luxe - High-Conversion Commerce & Order Hub"
      },
      shortDescription: {
        ar: "منصة تجارة إلكترونية سريعة التحميل مع سلة شراء تفاعلية، إدارة الكوبونات، والتكامل مع بوابات الدفع الإلكتروني.",
        en: "A high-performance e-commerce platform featuring an interactive reactive cart, coupon engine, and resilient payment gateway integration."
      },
      fullDescription: {
        ar: "منصة رقمية مخصصة للبيع بالتجزئة مصممة لتقديم تجربة تسوق فائقة السلاسة دون أي تباطؤ. تحتوي على إدارة مرنة لكتالوج المنتجات، إدارة المخزون التلقائي عند إتمام الدفع، ولوحة تحكم شاملة لإدارة طلبات العملاء وحالات الشحن.",
        en: "A bespoke modern commerce solution engineered for high conversion rates. Features lightning-fast catalogue browsing, dynamic cart state management via Alpine.js, webhook-driven order fulfillment, and automated shipment tracking."
      },
      problem: {
        ar: "بطء استجابة المنصات الجاهزة، صعوبة تخصيص طرق الدفع المحلية والعالمية، وارتفاع معدل التخلي عن سلة الشراء بسبب تعقيد خطوات الدفع.",
        en: "Bloated off-the-shelf platforms suffered from slow load times, poor mobile UX, and abandoned checkouts due to brittle payment redirection."
      },
      solution: {
        ar: "بناء واجهة مخصصة بالكامل باستخدام Tailwind CSS وAlpine.js لتوفير سرعة استثنائية، وربط خلفي مع PHP/Laravel عبر واجهات RESTful APIs محمية، مع تطبيق نظام Idempotency للمدفوعات لضمان عدم الخصم المزدوج.",
        en: "Built a streamlined lightweight storefront with Tailwind CSS and Alpine.js, backed by a robust Laravel engine with webhook idempotency keys to ensure zero double-charges during network dropouts."
      },
      category: 'ecommerce',
      categoryLabel: {
        ar: "التجارة الإلكترونية والمدفوعات",
        en: "E-Commerce & Payments"
      },
      technologies: ["PHP", "Laravel", "Tailwind CSS", "Alpine.js", "MySQL", "Payment Webhooks", "Docker"],
      role: {
        ar: "مطوّرة Full-Stack ومسؤولة تكامل المدفوعات",
        en: "Full-Stack Developer & Payment Integration Lead"
      },
      keyFeatures: {
        ar: [
          "سلة تسوق عائمة تفاعلية فورية ومزامنة سريعة لحالات المنتجات",
          "تكامل آمن مع بوابات الدفع ومعالجة الإشعارات الفورية (Webhooks)",
          "نظام كوبونات وخصومات متقدم مع شروط استحقاق مخصصة",
          "لوحة إدارة متكاملة لتحديث الكتالوج، وتتبع الشحنات، وطباعة الفواتير",
          "تصميم متجاوب بالكامل وسريع التحميل على شبكات الهواتف المحمولة"
        ],
        en: [
          "Reactive slide-over cart with instant quantity updates and stock validation",
          "Resilient payment gateway integrations with secure webhook verification",
          "Dynamic promo code engine with validation rules and expiration controls",
          "Comprehensive merchant dashboard for order tracking and automated invoice generation",
          "Mobile-first responsive layout optimized for low-bandwidth environments"
        ]
      },
      technicalChallenges: {
        ar: "معالجة انقطاع الاتصال أثناء عودة إشعار البنك (Webhook Retries)؛ تم تنفيذ نظام طوابير (Queue Worker) للتحقق المتقاطع وإعادة المحاولة التلقائية الآمنة.",
        en: "Handling intermittent connectivity and webhook retries from payment processors. Implemented dedicated queue workers with retry backoff strategies."
      },
      results: {
        ar: "تحقيق زمن تحميل أولي يقل عن 1.1 ثانية ومعدل إتمام دفع سلس للمستخدمين.",
        en: "Achieved sub-1.1s initial page load time and frictionless checkout completion."
      },
      image: "/src/assets/images/project_ecommerce_platform_1791580666034.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "hypervisor-api",
      title: {
        ar: "بوابة الواجهات البرمجية ومعالجة المهام الخلفية الموزعة (API Gateway & Queue Engine)",
        en: "Containerized API Gateway & Async Queue Processing Hub"
      },
      shortDescription: {
        ar: "بنية تحتية لتنظيم حركة الواجهات البرمجية، تحديد معدل الطلبات (Rate Limiting)، وتشغيل المهام الثقيلة في الخلفية داخل حاويات Docker.",
        en: "A robust micro-services orchestration engine featuring token authentication, rate limiting, and asynchronous background worker queues using Docker."
      },
      fullDescription: {
        ar: "منظومة تقنية مصممة لمعالجة آلاف الطلبات المتزامنة وتوزيع الأحمال. تقوم البوابة بالتحقق من الهويات، فحص صلاحيات الوصول، تحويل الطلبات، وإسناد المهام الشاقة (مثل معالجة الصور وإرسال البريد المجمع وإعداد التقارير الضخمة) إلى عمال خلفيين مستقلين.",
        en: "An operational infrastructure built to handle concurrent requests reliably. Dispatches compute-heavy tasks into background worker processes, shielding public-facing endpoints from bottlenecks."
      },
      problem: {
        ar: "توقف الخوادم وبطء استجابة واجهات الويب عند تشغيل تقارير ثقيلة أو إرسال آلاف الإشعارات في نفس اللحظة من قبل مستخدمين متعددين.",
        en: "Monolithic applications hung whenever resource-heavy batch exports or transactional notifications were executed in synchronous HTTP cycles."
      },
      solution: {
        ar: "فصل المهام الثقيلة عن مسار الـ HTTP الرئيسي باستخدام بيئة معزولة داخل Docker، مع جدولة المهام وتحديد سقف الاستهلاك (Rate Throttling) ومراقبة صحة الخادم في الوقت الفعلي.",
        en: "Isolated background tasks into dedicated Dockerized workers using asynchronous job queues and Redis caching, coupled with token throttling middleware and health-check monitoring."
      },
      category: 'systems',
      categoryLabel: {
        ar: "النظم والبنية التحتية",
        en: "Systems & Infrastructure"
      },
      technologies: ["PHP Native", "Laravel", "Docker", "Docker Compose", "MySQL", "Redis", "Nginx", "Linux"],
      role: {
        ar: "مهندسة نظم وبنية تحتية خلفية (Backend & DevOps)",
        en: "Backend & Systems Infrastructure Engineer"
      },
      keyFeatures: {
        ar: [
          "تجهيز بيئة إنتاج معيارية بالكامل باستخدام Docker Compose وNginx",
          "نظام حماية من الهجمات وتحديد معدل الطلبات (Rate Limiting)",
          "معالجة غير متزامنة لمهام التصدير والبريد وسجلات التدقيق",
          "لوحة مراقبة لمؤشرات أداء الحاويات ومعدل استهلاك الذاكرة والمعالج",
          "تشفير البيانات والتحقق الدقيق من سلامة الترويسات (Headers)"
        ],
        en: [
          "Standardized reproducible deployment configuration via Docker Compose & Nginx",
          "Token-based API rate limiting and protection middleware against request bursts",
          "Asynchronous job execution for massive reporting, email dispatches, and log rotation",
          "Operational health status tracking for worker nodes and memory consumption",
          "Strict payload sanitization and structured JSON error responses"
        ]
      },
      technicalChallenges: {
        ar: "ضبط استهلاك ذاكرة PHP CLI للعمال الخلفيين الذين يعملون لفترات طويلة (Memory Leaks Prevention) وضمان استئناف المهام في حال تعطل الحاوية دون فقدان البيانات.",
        en: "Preventing daemon memory creep during 24/7 background worker execution and architecting atomic state recovery on container restarts."
      },
      results: {
        ar: "استقرار تام بنسبة 99.9% في توفر الخدمات وعدم تأثر سرعة استجابة المستخدمين أثناء المعالجة الثقيلة.",
        en: "Maintained 99.9% uptime with zero degradation to user HTTP response times during heavy batch export workloads."
      },
      image: "/src/assets/images/project_api_gateway_1791580677557.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: true
    },
    {
      id: "portal-automation",
      title: {
        ar: "بوابة العمليات الإدارية وأتمتة مسارات العمل (Operations Automation Portal)",
        en: "Operations Automation & Workflow Portal"
      },
      shortDescription: {
        ar: "بوابة إلكترونية مركزية لإدارة دورات الموافقات الإدارية، طلبات الموظفين، وأرشفة الوثائق الرسمية إلكترونيًا.",
        en: "A unified internal portal streamlining managerial approval chains, internal requisitions, and digital document archiving."
      },
      fullDescription: {
        ar: "تطبيق ويب تفاعلي استبدل المعاملات الورقية المعقدة بمسار عمل رقمي ذكي يمر بمراحل اعتماد محددة تلقائيًا، مع إشعارات فورية وإمكانية توقيع وطباعة النماذج بضغطة زر واحدة.",
        en: "Eliminated paper-based bureaucratic workflows by introducing an automated multi-step requisition pipeline with dynamic form validation, status tracking, and audit-ready PDF generation."
      },
      problem: {
        ar: "ضياع المعاملات الورقية وتأخر اعتماد المراسلات لعدة أيام لعدم معرفة مكان المعاملة الحالي ومن هو المسؤول المنتظر.",
        en: "Internal approval bottlenecks and misplaced paper documentation caused significant operational delays and lack of accountability."
      },
      solution: {
        ar: "بناء مسار موافقات مرن يتيح لكل قسم متابعة معاملاته في ثوانٍ، مدعومًا بواجهات Livewire المباشرة وسجلات تدقيق واضحة.",
        en: "Constructed a dynamic state-machine workflow with Livewire and Tailwind CSS, providing full transparency into approval stages and historical decisions."
      },
      category: 'tall',
      categoryLabel: {
        ar: "حزمة TALL والأتمتة",
        en: "TALL Stack & Automation"
      },
      technologies: ["PHP", "Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL"],
      role: {
        ar: "مطوّرة Full-Stack",
        en: "Full-Stack Developer"
      },
      keyFeatures: {
        ar: [
          "محرك موافقات متعدد المراحل مع إمكانية الرفض مع ذكر السبب أو الإحالة",
          "نماذج إدخال ديناميكية ذكية تتحقق من صحة البيانات أثناء الكتابة",
          "توليد مستندات PDF رسمية معتمدة مع باركود تتبع فريد",
          "لوحة مؤشرات توضح زمن إنجاز المعاملات ومتوسط سرعة الاعتماد"
        ],
        en: [
          "Configurable multi-stage approval engine with conditional routing and feedback notes",
          "Dynamic interactive forms with real-time field validation without page reloads",
          "Automated certified PDF document compilation with unique verification QR/barcodes",
          "Operational metrics visualizer tracking average approval turnaround times"
        ]
      },
      technicalChallenges: {
        ar: "تصميم هيكل قاعدة بيانات مرن يسمح بإضافة خطوات اعتماد جديدة دون الحاجة لإعادة كتابة كود النظام الأساسي.",
        en: "Designing a modular schema representing dynamic state progressions without requiring hardcoded schema alterations for new approval hierarchies."
      },
      results: {
        ar: "تسريع دورة اعتماد الطلبات من 4 أيام إلى أقل من ساعتين فقط.",
        en: "Reduced average corporate request approval cycle from 4 days to under 2 hours."
      },
      image: "/src/assets/images/project_erp_systems_1791580655363.jpg",
      githubUrl: "https://github.com/tizee511",
      liveUrl: undefined,
      isFeatured: false
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: {
        ar: "مطوّرة Full-Stack ونظم ويب مستقلة",
        en: "Full-Stack Developer & Systems Specialist"
      },
      companyOrContext: {
        ar: "مشاريع تقنية وأنظمة أعمال مخصصة",
        en: "Independent Tech Projects & Client Systems"
      },
      period: {
        ar: "2023 - حتى الآن (3 سنوات خبرة تراكمية)",
        en: "2023 - Present (3 Years Cumulative Experience)"
      },
      location: {
        ar: "صنعاء، اليمن (وعمل عن بُعد)",
        en: "Sana'a, Yemen & Remote"
      },
      type: {
        ar: "عمل حر وعقود تطوير",
        en: "Freelance & Contract"
      },
      description: {
        ar: "قيادة وتطوير تطبيقات الويب المتكاملة للشركات والمؤسسات، مع التركيز على بناء نظم ERP مخصصة، وأتمتة مسارات العمل، وبناء واجهات تفاعلية وسريعة باستخدام حزمة TALL وPHP.",
        en: "Leading the development of end-to-end web applications and business portals, focusing on custom ERP workflows, API gateways, and reactive TALL stack implementations."
      },
      responsibilities: {
        ar: [
          "تصميم وبناء تطبيقات ويب كاملة من الصفر باستخدام PHP Native وLaravel وLivewire",
          "تخطيط وهيكلة قواعد بيانات MySQL المعقدة وتطبيق أفضل ممارسات الفهرسة وتطبيع الجداول",
          "تطوير واجهات مستخدم متجاوبة تمامًا وعصرية باستخدام Tailwind CSS وAlpine.js",
          "إعداد حاويات Docker لتوحيد بيئات التطوير والتشغيل وضمان الاستقرار العالي",
          "تحسين أداء الاستعلامات البطيئة وخفض استهلاك موارد الخادم بنسب ملحوظة"
        ],
        en: [
          "Architecting full-stack web applications from concept to deployment using PHP, Laravel, and Livewire",
          "Designing normalized MySQL relational database schemas with optimized indexes and concurrency handling",
          "Building sleek, accessible, responsive user interfaces using Tailwind CSS and Alpine.js",
          "Standardizing developer environments and deployment pipelines with Docker and Docker Compose",
          "Profiling slow SQL queries and tuning server response times for optimal throughput"
        ]
      },
      techStack: ["PHP", "Laravel", "TALL Stack", "MySQL", "Docker", "REST APIs", "Git"]
    },
    {
      id: "exp-2",
      role: {
        ar: "مطوّرة واجهات أمامية وخلفية (Full-Stack Engineer)",
        en: "Web Application & Backend Engineer"
      },
      companyOrContext: {
        ar: "مشاريع برمجية تجارية وحلول رقمية",
        en: "Commercial Software Solutions & Portals"
      },
      period: {
        ar: "2022 - 2023",
        en: "2022 - 2023"
      },
      location: {
        ar: "اليمن",
        en: "Yemen"
      },
      type: {
        ar: "تطوير تطبيقات ومشاريع",
        en: "Software Development"
      },
      description: {
        ar: "تطوير وحدات برمجية مخصصة للتحكم في البيانات، ربط واجهات API الخارجية، وبناء لوحات التحكم التفاعلية للمؤسسات.",
        en: "Engineered administrative dashboards, automated business reporting engines, and integrated third-party REST web services."
      },
      responsibilities: {
        ar: [
          "برمجة نقاط اتصال RESTful APIs محمية ومعالجة البيانات بصيغة JSON بسرعة وكفاءة",
          "بناء أنظمة المصادقة والصلاحيات متعددة المستويات (Role-Based Permissions)",
          "تحويل تصاميم واجهات المستخدم إلى كود نظيف ومتجاوب يتوافق مع مختلف أحجام الشاشات",
          "إجراء اختبارات الجودة وحل المشكلات التقنية وتوثيق الكود البرمجي بوضوح"
        ],
        en: [
          "Developed secure, sanitized RESTful API endpoints handling JSON payloads",
          "Implemented multi-tenant authentication systems and role-based authorization gates",
          "Converted UI prototypes into clean, maintainable, responsive Tailwind CSS layouts",
          "Conducted debugging, performance tuning, and technical documentation"
        ]
      },
      techStack: ["PHP Native", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      id: "exp-3",
      role: {
        ar: "مطوّرة ويب ومصممة قواعد بيانات (Junior Web Developer)",
        en: "Junior Web & Database Developer"
      },
      companyOrContext: {
        ar: "مشاريع عملية وبناء برمجيات تطبيقية",
        en: "Applied Systems & Practical Implementations"
      },
      period: {
        ar: "2021 - 2022",
        en: "2021 - 2022"
      },
      location: {
        ar: "اليمن",
        en: "Yemen"
      },
      type: {
        ar: "تطوير عملي وبداية المسار المهني",
        en: "Applied Development"
      },
      description: {
        ar: "بناء الأسس البرمجية القوية في كتابة كود PHP نقي، فهم بنية النظم الموجهة للكائنات (OOP)، وإتقان لغة SQL والاستعلامات العلائقية.",
        en: "Established robust software engineering fundamentals in native PHP, object-oriented design, relational modeling, and version control."
      },
      responsibilities: {
        ar: [
          "كتابة سكربتات PHP Native لمعالجة مدخلات النماذج وتخزينها في MySQL بأمان",
          "تطبيق معايير الأمان ضد ثغرات SQL Injection وXSS وCSRF",
          "استخدام Git لإدارة النسخ وتتبع التغييرات البرمجية بدقة",
          "تصميم صفحات ويب متناسقة باستخدام CSS وJavaScript الحديث"
        ],
        en: [
          "Wrote clean native PHP scripts sanitizing inputs and persisting data safely into MySQL",
          "Applied security invariants protecting against SQL injection, XSS, and CSRF vulnerabilities",
          "Utilized Git for atomic commits and branch-based workflow collaboration",
          "Constructed semantic, accessible responsive layouts using modern CSS and JavaScript"
        ]
      },
      techStack: ["PHP Native", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"]
    }
  ] as ExperienceItem[],

  services: [
    {
      id: "srv-webapp",
      title: {
        ar: "تطوير تطبيقات الويب المتكاملة (Custom Web Apps)",
        en: "Custom Full-Stack Web Applications"
      },
      description: {
        ar: "بناء تطبيقات ويب مخصصة وسريعة من الصفر تلائم طبيعة عملك بدقة، مع لوحات تحكم مرنة وتجربة مستخدم سلسة واستقرار عالي.",
        en: "End-to-end bespoke web application development tailored specifically to your business workflows, with high stability and fast execution."
      },
      scope: {
        ar: [
          "تحليل المتطلبات وهيكلة منطق العمل بدقة",
          "واجهات تفاعلية وسريعة باستخدام حزمة TALL (Tailwind + Alpine + Laravel + Livewire)",
          "لوحات تحكم إدارية مرنة مع تقارير تفاعلية",
          "حماية أمنية مشددة للمعلومات والبيانات الحساسة"
        ],
        en: [
          "Requirements analysis and architectural blueprint design",
          "Reactive, modern UI powered by the TALL stack",
          "Rich administrative control portals with dynamic analytics",
          "Strict data privacy, encryption, and authorization checks"
        ]
      },
      deliverables: {
        ar: "تطبيق ويب جاهز للتشغيل مع الكود المصدري وبيئة Docker كاملة وتوثيق التشغيل.",
        en: "Production-ready web application with clean source code, Docker configs, and setup documentation."
      }
    },
    {
      id: "srv-systems",
      title: {
        ar: "بناء نظم إدارة العمليات والمخزون (ERP & Systems)",
        en: "ERP, Inventory & Workflow Systems"
      },
      description: {
        ar: "أتمتة الأعمال الإدارية والمخزنية وسلاسل التوريد المعقدة وتحويلها إلى نظام رقمي موحد يقضي على الأخطاء اليدوية ويوفر الوقت.",
        en: "Digitizing and automating operational workflows, warehouse inventory, order pipelines, and department approval chains."
      },
      scope: {
        ar: [
          "تتبع المخزون والوارد والصادر والأصناف الحرجة",
          "مسارات اعتماد وموافقات إلكترونية متعددة المستويات",
          "تصدير واستيراد التقارير التلقائية بصيغ Excel وPDF",
          "سجل تدقيق كامل لكافة الأنشطة والعمليات"
        ],
        en: [
          "Stock tracking, batch numbers, and reorder threshold automation",
          "Multi-tier digital approval matrices and task assignment",
          "Automated financial & inventory export reports (Excel/PDF)",
          "Comprehensive immutable audit logging for accountability"
        ]
      },
      deliverables: {
        ar: "نظام إداري مركزي وموثوق ومخصص بالكامل وقابل للتوسع المستقبلي.",
        en: "Robust, tailored operational system designed for continuous growth and business scale."
      }
    },
    {
      id: "srv-database",
      title: {
        ar: "تصميم وتحسين قواعد بيانات MySQL (Database Tuning)",
        en: "MySQL Database Design & Query Optimization"
      },
      description: {
        ar: "إعادة هيكلة قواعد البيانات، فهرسة الجداول، وتحسين الاستعلامات البطيئة لرفع سرعة الاستجابة ومنع تجميد النظام عند ضغط العمل.",
        en: "Relational schema design, query profiling, index optimization, and resolving bottlenecks under heavy multi-user loads."
      },
      scope: {
        ar: [
          "تصميم مخططات علائقية متوازنة وتطبيع الجداول (Normalization)",
          "تحليل الاستعلامات البطيئة عبر EXPLAIN وفهرسة المفاتيح المناسبة",
          "ضبط المعاملات البنكية (ACID Transactions) لضمان سلامة البيانات",
          "استراتيجيات النسخ الاحتياطي والأرشفة الدورية"
        ],
        en: [
          "Normalized relational database modeling and relationship integrity",
          "Query optimization with EXPLAIN plans and tailored B-Tree indexing",
          "Concurrency control and ACID transactions for financial-grade data integrity",
          "Automated backup strategies and data retention policies"
        ]
      },
      deliverables: {
        ar: "مخطط قاعدة بيانات عالي الأداء مع تقرير تحسين الاستعلامات واستقرار وسرعة مضاعفة.",
        en: "Optimized database architecture, query profiling report, and drastically lower latency."
      }
    },
    {
      id: "srv-apis",
      title: {
        ar: "تطوير واجهات RESTful APIs والربط مع الخدمات",
        en: "RESTful API Engineering & 3rd-Party Integrations"
      },
      description: {
        ar: "إنشاء واجهات برمجية قياسية لربط تطبيقات الويب بالهواتف أو الخدمات الخارجية، مع تأمين بوابات الدفع والرسائل النصية والـ Webhooks.",
        en: "Building standardized, secure REST APIs for web/mobile sync, payment gateways, messaging services, and external microservices."
      },
      scope: {
        ar: [
          "هندسة واجهات برمجية منظمة وفق معايير RESTful",
          "تأمين المصادقة عبر Tokens وتحديد معدلات الاستخدام (Rate Limiting)",
          "الربط مع بوابات الدفع الإلكتروني واستقبال الـ Webhooks بأمان",
          "توثيق الواجهات البرمجية وتوفير مجموعات Postman للاختبار"
        ],
        en: [
          "RESTful endpoint architecture following best API design conventions",
          "Token authentication (Sanctum/JWT) and burst rate limiting",
          "Payment gateway, SMS, and transactional webhook integration",
          "Interactive API documentation and comprehensive Postman collection"
        ]
      },
      deliverables: {
        ar: "واجهات برمجية آمنة وموثقة تمامًا مع أمثلة للاستخدام وتدابير الحماية.",
        en: "Clean, documented, secure API layer with test suites and integration guides."
      }
    }
  ] as ServiceItem[],

  education: [
    {
      id: "edu-1",
      degree: {
        ar: "بكالوريوس في علوم الحاسوب / تقنية المعلومات",
        en: "Bachelor's Degree in Computer Science / Information Technology"
      },
      institution: {
        ar: "جامعة معتمدة - صنعاء، اليمن",
        en: "Accredited University - Sana'a, Yemen"
      },
      period: {
        ar: "مؤهل أكاديمي متخصص",
        en: "Degree Qualification"
      },
      details: {
        ar: "تركيز معمق على هياكل البيانات (Data Structures)، الخوارزميات، هندسة البرمجيات، شبكات الحاسوب، وتصميم قواعد البيانات العلائقية.",
        en: "In-depth study of data structures, algorithms, software engineering principles, computer networking, and relational database systems."
      },
      type: 'degree'
    },
    {
      id: "edu-2",
      degree: {
        ar: "شهادة معتمدة في هندسة تطبيقات الويب بـ PHP وLaravel",
        en: "Certified Advanced Web Engineering with PHP & Laravel"
      },
      institution: {
        ar: "برامج تدريب مهني متخصصة في تطوير النظم",
        en: "Professional Systems Engineering Programs"
      },
      period: {
        ar: "تدريب مهني مستمر ومتقدم",
        en: "Professional Accreditation"
      },
      details: {
        ar: "تطبيقات عملية مكثفة على نمط MVC، إدارة المعاملات، الحماية البرمجية المتقدمة، وبناء بيئات العمل المعزولة بحاويات Docker.",
        en: "Intensive hands-on mastery in MVC architecture, database concurrency, secure application coding, and Docker deployment."
      },
      type: 'certification'
    }
  ] as EducationItem[]
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
