import type {
  Project,
  Experience,
  Education,
  Service,
  Testimonial,
  FAQItem,
  WorkflowStep,
  AboutData,
} from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bablu-verma.vercel.app/'

export const projects: Project[] = [

  {
    id: '1',
    slug: 'woost-web',
    title: 'Woost.io Web',
    description: 'Freelancing & collaboration web platform',
    shortDescription:
      'Real-time freelancing platform for web users',
    image: `${baseUrl}p/woost.png`,
    tags: [
      'React.js',
      'TypeScript',
      'Redux',
      'Tailwind CSS',
      'Socket.io',
    ],

    overview:
      'Woost.io is a freelancing and collaboration ecosystem where freelancers and clients can manage projects, communicate in real time, and track work progress. I worked on the frontend architecture, dashboard systems, authentication modules, API integrations, and real-time collaboration features for the web platform.',

    challenges: [
      'Handling real-time collaboration between users',
      'Managing scalable frontend architecture',
      'Maintaining global application state',
      'Optimizing dashboard rendering performance',
    ],

    solutions: [
      'Implemented Socket.io for real-time communication',
      'Used Redux Toolkit for centralized state management',
      'Created reusable scalable component architecture',
      'Applied lazy loading and code splitting',
    ],

    results: [
      'Improved collaboration speed',
      'Better frontend scalability',
      'Optimized performance for large dashboards',
      'Enhanced real-time user experience',
    ],

    liveUrl: 'https://woost.io/',
    featured: true,
  },

  {
    id: '2',
    slug: 'woost-mobile-app',
    title: 'Woost.io Mobile App',
    description: 'Cross-platform freelancing mobile application',
    shortDescription:
      'React Native app with real-time collaboration',
    image: `${baseUrl}p/woost.png`,
    tags: [
      'React Native',
      'Redux',
      'Socket.io',
      'Firebase',
    ],

    overview:
      'Cross-platform mobile application for Woost.io built using React Native and Expo. The app enables freelancers and clients to communicate, manage projects, receive notifications, and collaborate in real time.',

    challenges: [
      'Managing complex mobile navigation',
      'Handling real-time socket communication',
      'Maintaining app performance on low-end devices',
      'Reliable push notification delivery',
    ],

    solutions: [
      'Used Expo ecosystem for faster development',
      'Integrated Socket.io for real-time communication',
      'Implemented Firebase push notifications',
      'Optimized rendering and API handling',
    ],

    results: [
      'Smooth cross-platform experience',
      'Reliable notification delivery',
      'Improved user engagement',
      'Stable real-time communication',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.woost&hl=en_IN',
    featured: true,
  },

  {
    id: '3',
    slug: 'freekaamaal-web',
    title: 'Freekaamaal Web',
    description: 'Cashback & deals platform',
    shortDescription:
      'SEO optimized deals and cashback platform',
    image: `${baseUrl}p/freekaamaal.png`,
    tags: [
      'Next.js',
      'React.js',
      'TypeScript',
      'SEO',
      'SSR',
    ],

    overview:
      'Freekaamaal is a high-traffic cashback and coupon platform where users can discover deals and cashback offers from multiple brands. I worked on frontend development, SEO optimization, and performance improvements.',

    challenges: [
      'Handling heavy traffic during sale events',
      'Maintaining SEO rankings',
      'Reducing page load times',
      'Managing dynamic deal pages',
    ],

    solutions: [
      'Implemented SSR and ISR using Next.js',
      'Optimized image loading and code splitting',
      'Applied SEO best practices',
      'Created scalable frontend architecture',
    ],

    results: [
      '90+ Lighthouse performance score',
      'Improved Google indexing',
      'Increased organic traffic',
      'Better user experience during peak traffic',
    ],

    liveUrl: 'https://freekaamaal.com/',
    featured: true,
  },

  {
    id: '4',
    slug: 'freekaamaal-backend',
    title: 'Freekaamaal Backend API',
    description: 'Scalable deals backend infrastructure',
    shortDescription:
      'Node.js backend with Redis caching',
    image: `${baseUrl}p/freekaamaal.png`,
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'API',
    ],

    overview:
      'Backend infrastructure powering Freekaamaal cashback and deals ecosystem. I worked on scalable APIs, caching systems, database optimization, and third-party integrations.',

    challenges: [
      'Handling large API traffic',
      'Reducing database query latency',
      'Managing high concurrent requests',
      'Maintaining server stability',
    ],

    solutions: [
      'Implemented Redis caching layer',
      'Optimized MongoDB indexing',
      'Built scalable REST APIs',
      'Added retry and queue handling system',
    ],

    results: [
      'Handled 20K+ API requests daily',
      'Reduced response time below 80ms',
      'Maintained high backend uptime',
      'Improved overall scalability',
    ],

    liveUrl: 'https://freekaamaal.com/',
    featured: true,
  },
  {
    id: '14',
    slug: 'freekaamaal-mobile-app',
    title: 'Freekaamaal Mobile App',
    description: 'Cashback & deals mobile application',
    shortDescription:
      'React Native cashback and coupon mobile app',
    image: `${baseUrl}p/freekaamaal.png`,
    tags: [
      'React Native',
      'Redux',
      'Node.js',
      'Firebase',
      'REST API',
    ],

    overview:
      'Freekaamaal Mobile App is a cross-platform cashback and deals application developed using React Native and Expo. The app allows users to browse deals, cashback offers, coupons, and shopping discounts from multiple brands with optimized performance and real-time updates.',

    challenges: [
      'Handling large dynamic deals data efficiently',
      'Maintaining smooth app performance during heavy API loads',
      'Optimizing mobile rendering for low-end devices',
      'Managing scalable state across multiple screens',
      'Implementing reliable push notification delivery',
    ],

    solutions: [
      'Implemented Redux Toolkit for centralized state management',
      'Optimized API handling with pagination and lazy loading',
      'Used reusable component architecture for scalability',
      'Integrated Firebase push notifications',
      'Applied performance optimizations for list rendering',
    ],

    results: [
      'Improved mobile user engagement',
      'Smooth browsing experience across devices',
      'Faster deals loading performance',
      'Reliable notification delivery system',
      'Enhanced mobile shopping experience',
    ],

    liveUrl:
      'https://play.google.com/store/apps/details?id=com.freekaamaalapp',

    featured: true,
  },


  {
    id: '5',
    slug: 'bachatjar-platform',
    title: 'BachatJar',
    description: 'Coupon & cashback aggregator',
    shortDescription:
      'Fast deals platform with Redis caching',
    image: `${baseUrl}p/bachatjar_logo.png`,
    tags: ['Next.js', 'MongoDB', 'Redis', 'SEO'],

    overview:
      'Deals aggregation platform optimized for speed and SEO with caching systems for fast API responses and better mobile experience.',

    challenges: [
      'Handling large scraped datasets',
      'Reducing API response latency',
      'Maintaining SEO optimization',
    ],

    solutions: [
      'Implemented Redis caching',
      'Optimized backend microservices',
      'Improved query performance',
    ],

    results: [
      'Reduced response time to 200ms',
      'Improved mobile performance',
      'Better SEO rankings',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/bachatjar',
    featured: false,
  },

  {
    id: '6',
    slug: 'gaurastra-ecommerce',
    title: 'Gaurastra',
    description: 'Full-stack e-commerce platform',
    shortDescription:
      'E-commerce platform with PhonePe integration',
    image: `${baseUrl}p/gaurastra.png`,
    tags: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'PhonePe',
    ],

    overview:
      'Modern Ayurvedic e-commerce platform with secure payment integration, order management, and scalable backend systems.',

    challenges: [
      'Handling payment failures',
      'Reliable order processing',
      'Maintaining transaction consistency',
    ],

    solutions: [
      'Integrated PhonePe payment gateway',
      'Implemented webhook verification',
      'Automated order reconciliation',
    ],

    results: [
      '99.9% payment success rate',
      '5000+ successful orders',
      'Reliable order management',
    ],

    liveUrl: 'https://www.gaurastra.com',
    featured: true,
  },

  {
    id: '7',
    slug: 'pos-system',
    title: 'POS System',
    description: 'Offline-first billing system',
    shortDescription:
      'Retail POS system with offline sync support',
    image: `${baseUrl}p/gaurastra.png`,
    tags: ['Node.js', 'MongoDB', 'Socket.io'],

    overview:
      'Retail billing system designed to work even without internet connectivity with automatic sync after reconnect.',

    challenges: [
      'Offline data consistency',
      'Reliable synchronization after reconnect',
      'Preventing duplicate billing',
    ],

    solutions: [
      'Built local storage sync engine',
      'Implemented background synchronization',
      'Added conflict resolution system',
    ],

    results: [
      'Zero downtime billing',
      'Reliable offline operations',
      'Improved billing stability',
    ],

    liveUrl:
      'https://test.gaurastra.com/offline/login',
    featured: false,
  },

  {
    id: '8',
    slug: 'strategy-classes-web',
    title: 'Strategy Classes Web',
    description: 'Online exam platform',
    shortDescription:
      'High-scale LMS and examination platform',
    image: `${baseUrl}p/strategy.png`,
    tags: [
      'React.js',
      'Node.js',
      'PostgreSQL',
    ],

    overview:
      'Online learning management system handling examinations, lectures, student dashboards, and high concurrent traffic.',

    challenges: [
      'Handling thousands of concurrent users',
      'Maintaining server stability during exams',
      'Managing large datasets',
    ],

    solutions: [
      'Optimized PostgreSQL queries',
      'Implemented load balancing',
      'Built scalable backend APIs',
    ],

    results: [
      'Supported 10K+ concurrent users',
      'Stable during examination traffic',
      'Improved overall performance',
    ],

    liveUrl: 'http://strategyclasses.in/',
    featured: false,
  },
  {
    id: '9',
    slug: 'strategy-classes-mobile-app',
    title: 'Strategy Classes Mobile App',
    description: 'Mobile LMS application',
    shortDescription:
      'React Native LMS app with online exams',
    image: `${baseUrl}p/strategy.png`,
    tags: [
      'React Native',
      'Expo',
      'Redux',
      'Firebase',
    ],

    overview:
      'Cross-platform mobile LMS application for online lectures, examinations, student performance tracking, and notifications.',

    challenges: [
      'Managing video streaming performance',
      'Handling exam submission reliability',
      'Maintaining app stability',
    ],

    solutions: [
      'Optimized API and media loading',
      'Implemented centralized state management',
      'Added reliable exam submission flow',
    ],

    results: [
      'Improved mobile learning experience',
      'Better student engagement',
      'Stable exam system',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.strategy&hl=en_IN',
    featured: false,
  },

  {
    id: '10',
    slug: 'strategy-classes-backend',
    title: 'Strategy Classes Backend',
    description: 'Backend infrastructure for LMS',
    shortDescription:
      'Scalable Node.js backend for examinations',
    image: `${baseUrl}p/strategy.png`,
    tags: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
    ],

    overview:
      'Backend infrastructure handling online exams, authentication, analytics, attendance, and student management systems.',

    challenges: [
      'Handling heavy exam traffic',
      'Preventing downtime during peak usage',
      'Optimizing database-heavy reports',
    ],

    solutions: [
      'Optimized PostgreSQL queries',
      'Implemented Redis caching',
      'Created modular scalable APIs',
    ],

    results: [
      'Stable high-traffic backend',
      'Faster report generation',
      'Improved platform scalability',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/tuners-projects/tree/main/strategyclasses-backend',
    featured: false,
  },

  {
    id: '16',
    slug: 'ebay-listing-scraper-tool',
    title: 'eBay Listing Scraper Tool',
    description: 'Automated eBay product listing scraping tool',
    shortDescription:
      'JavaScript-based eBay scraping and listing extraction tool',
    image: `${baseUrl}p/e-bay-scraper.jpg`,

    tags: [
      'JavaScript',
      'Node.js',
      'Web Scraping',
      'Cheerio',
      'Axios',
      'REST API',
    ],

    overview:
      'A custom JavaScript-based eBay scraping tool developed to extract product listings, pricing data, seller details, product URLs, and marketplace information from eBay search pages. The tool was designed for automated data collection, listing analysis, and marketplace monitoring with optimized scraping performance and structured data handling.',

    challenges: [
      'Handling dynamic eBay page structures',
      'Preventing request blocking and rate limiting',
      'Extracting structured data from inconsistent HTML',
      'Managing pagination for large datasets',
      'Maintaining scraper stability after DOM changes',
    ],

    solutions: [
      'Used Axios for efficient HTTP requests',
      'Implemented Cheerio for HTML parsing and extraction',
      'Built reusable scraping utility functions',
      'Added retry and error handling mechanisms',
      'Implemented pagination handling for bulk scraping',
    ],

    results: [
      'Automated large-scale listing extraction',
      'Reduced manual marketplace research effort',
      'Fast and structured product data collection',
      'Reliable extraction of pricing and seller information',
      'Improved scraping performance and stability',
    ],

    liveUrl:
      'https://github.com/Bablu-Verma/ebay-scrape---listing',

    featured: false,
  },

  {
    id: '12',
    slug: 'real-time-chat-system',
    title: 'Real-time Chat System',
    description:
      'Scalable real-time messaging infrastructure',
    shortDescription:
      'Socket.io chat app with Redis scaling',
    image: `${baseUrl}p/cinch.png`,
    tags: [
      'Node.js',
      'Socket.io',
      'Redis',
      'MongoDB',
    ],

    overview:
      'Scalable real-time messaging infrastructure supporting concurrent users with horizontal scaling and socket authentication.',

    challenges: [
      'Handling concurrent socket connections',
      'Maintaining synchronization across servers',
      'Reliable reconnection handling',
    ],

    solutions: [
      'Implemented Socket.io Redis adapter',
      'Used JWT socket authentication',
      'Added Redis Pub/Sub synchronization',
    ],

    results: [
      'Supported 500+ concurrent users',
      'Reliable instant messaging',
      'Stable reconnection handling',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.cinchoffline.ccm',
    featured: false,
  },
  {
    id: '13',
    slug: 'cinch-ccm-mobile',
    title: 'CINCH CCM Mobile',
    description:
      'Appointment & department management app',
    shortDescription:
      'React Native appointment management app',
    image: `${baseUrl}p/cinch.png`,
    tags: [
      'React Native',
      'Redux',
      'Firebase',
      'Socket.io',
    ],

    overview:
      'Cross-platform appointment and department management mobile application with real-time communication and authentication features.',

    challenges: [
      'Managing complex mobile state',
      'Reliable live chat implementation',
      'Push notification handling',
    ],

    solutions: [
      'Used Redux for centralized state',
      'Integrated Socket.io live chat',
      'Implemented Firebase notifications',
    ],

    results: [
      'Smooth real-time communication',
      'Reliable notifications',
      'Optimized mobile experience',
    ],

    liveUrl:
      'https://play.google.com/store/apps/details?id=com.cinchoffline.ccm',
    featured: true,
  },
  {
    id: '15',
    slug: 'portfolio-mobile-app',
    title: 'Developer Portfolio Mobile App',
    description: 'Personal portfolio mobile application',
    shortDescription:
      'Expo React Native portfolio application',
    image: `${baseUrl}p/portfolio.png`,
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux',
      'NativeWind',
      'React Navigation',
    ],

    overview:
      'Cross-platform developer portfolio mobile application built using React Native and Expo to showcase projects, technical skills, experience, and achievements in a modern mobile interface. The application focuses on smooth navigation, responsive layouts, scalable architecture, and optimized mobile performance.',

    challenges: [
      'Designing a scalable mobile UI architecture',
      'Maintaining smooth navigation between screens',
      'Optimizing rendering performance on low-end devices',
      'Creating reusable and maintainable components',
      'Ensuring responsive layouts across multiple screen sizes',
    ],

    solutions: [
      'Built using Expo ecosystem for faster development',
      'Used TypeScript for scalable and maintainable codebase',
      'Implemented reusable component architecture',
      'Integrated React Navigation for structured navigation flow',
      'Optimized rendering and screen loading performance',
      'Used NativeWind/Tailwind styling for consistent UI design',
    ],

    results: [
      'Smooth cross-platform mobile experience',
      'Responsive UI across Android and iOS devices',
      'Improved project showcase accessibility',
      'Scalable and maintainable application structure',
      'Fast and optimized mobile performance',
    ],

    liveUrl: 'https://bablu-verma.vercel.app/#apkInstall',

    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: '4tuners Technologies',
    companySlug: '4tuners',
    role: 'Full Stack Developer',
    startDate: '2025-07',
    endDate: '2026-03',
    current: false,
    description:
      'Led development of scalable full-stack applications using Next.js, Node.js, PostgreSQL, and Redis with focus on performance optimization and offline-first architecture.',
    responsibilities: [
      'Architected scalable Node.js/Express backend handling 300+ concurrent requests',
      'Built offline-first POS system with background sync and conflict resolution',
      'Led frontend architecture for 3 production Next.js applications',
      'Implemented 4-tier RBAC system with audit logging',
      'Integrated Docker-based deployment workflows and CI/CD pipelines',
      'Mentored junior developers and reviewed production code',
    ],
    achievements: [
      'Reduced PostgreSQL query latency by 73% (450ms → 120ms)',
      'Improved LCP by 50% using frontend optimizations',
      'Reduced bundle size by 32% through code splitting',
      'Successfully delivered production-grade offline POS system',
    ],
    location: 'Greater Noida, India',
  },

  {
    id: '2',
    company: 'Freekaamaal.com',
    companySlug: 'freekaamaal',
    role: 'React.js & React Native Developer',
    startDate: '2022-09',
    endDate: '2025-05',
    current: false,
    description:
      'Built and scaled high-traffic web and mobile applications with real-time systems, SEO optimization, and cross-platform mobile architecture.',
    responsibilities: [
      'Built scalable React.js and Next.js applications',
      'Developed React Native mobile applications using Expo',
      'Implemented SSR/ISR for SEO optimization',
      'Integrated Firebase Cloud Messaging and analytics',
      'Built real-time deal tracking using Socket.io',
      'Collaborated with backend teams on API architecture',
    ],
    achievements: [
      'Achieved 20K+ app downloads with 4.2 rating',
      'Improved organic traffic by 55% using SSR optimization',
      'Reduced TTI from 3.2s to 1.8s',
      'Employee of the Year 2024',
      'Increased user engagement by 35%',
    ],
    location: 'Noida, India',
  },

  {
    id: '3',
    company: 'Qwerty Code',
    companySlug: 'qwerty',
    role: 'Web Developer',
    startDate: '2021-10',
    endDate: '2022-08',
    current: false,
    description:
      'Worked on backend systems, REST APIs, authentication infrastructure, and frontend optimization for scalable web applications.',
    responsibilities: [
      'Built RESTful APIs using Node.js and Express.js',
      'Implemented JWT authentication and refresh token rotation',
      'Optimized MongoDB aggregation pipelines',
      'Built reusable React.js frontend components',
      'Integrated centralized logging and validation middleware',
      'Wrote unit and integration tests using Jest',
    ],
    achievements: [
      'Reduced MongoDB query latency by 73%',
      'Reduced frontend bundle size by 28%',
      'Improved production stability through middleware standardization',
      'Reduced production bugs by 35%',
    ],
    location: 'Noida, India',
  },

];

export const aboutData: AboutData = {


  bio: [
    "I'm a Full Stack Developer with 4+ years of experience building scalable web applications, backend systems, mobile apps, and real-time infrastructures. My core expertise lies in React.js, Next.js, Node.js, Express.js, React Native, PostgreSQL, and MongoDB.",

    "I specialize in high-performance architectures including SSR/SSG/ISR rendering, real-time communication systems, offline-first applications, caching strategies, and database optimization. I focus on building production-ready applications that are scalable, maintainable, and optimized for performance.",

    "Beyond development, I actively work on system design, DevOps workflows, CI/CD pipelines, Dockerized deployments, and engineering best practices. I enjoy solving complex scalability problems and transforming business requirements into reliable technical solutions.",
  ],

  skillGroups: [
    {
      title: 'Frontend & Mobile',
      items: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'React Native',
        'Expo',
        'Redux Toolkit',
        'React Query',
        'Material UI',
        'Styled Components',
      ],
    },

    {
      title: 'Backend & APIs',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Socket.io',
        'BullMQ',
        'Redis Pub/Sub',
        'JWT Authentication',
        'RBAC',
      ],
    },

    {
      title: 'Database & Performance',
      items: [
        'MongoDB',
        'PostgreSQL',
        'Redis',
        'Prisma ORM',
        'Mongoose',
        'Query Optimization',
        'Caching Strategies',
        'Indexing',
      ],
    },

    {
      title: 'DevOps & Infrastructure',
      items: [
        'Docker',
        'GitHub Actions',
        'AWS',
        'Nginx',
        'PM2',
        'Vercel',
        'Netlify',
        'Firebase',
      ],
    },

    {
      title: 'Tools & Testing',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'Jest',
        'React Testing Library',
        'Swagger',
        'Sentry',
        'Linux',
      ],
    },
  ],
};

export const education: Education[] = [
  {
    id: '1',
    institution: 'Amity University',
    degree: 'Bachelor of Computer Applications',
    field: 'Cloud & Cyber Security',
    startDate: '2023',
    endDate: '2026',
    description:
      'Pursuing BCA with specialization in Cloud Computing and Cyber Security while simultaneously working full-time in the software industry. Focused on scalable application architecture, backend systems, secure development practices, distributed systems, and modern cloud technologies.',
  },

  {
    id: '2',
    institution: 'GBSS School, Delhi',
    degree: 'Senior Secondary (12th)',
    field: '',
    startDate: '2020',
    endDate: '2021',
    description:
      'Completed senior secondary education with strong analytical and problem-solving foundation that supported transition into software engineering and full stack development.',
  },

  {
    id: '3',
    institution: 'Self Learning & Industry Experience',
    degree: 'Continuous Professional Learning',
    field: 'Full Stack Development, System Design & DevOps',
    startDate: '2021',
    endDate: 'Present',
    description:
      'Continuously learning through real-world production projects, system architecture implementation, technical documentation, advanced frontend/backend engineering, DevOps workflows, and scalable infrastructure development.',
  },

  {
    id: '4',
    institution: 'Udemy',
    degree: 'Next.js 14 & React - The Complete Guide',
    field: 'Frontend Engineering',
    startDate: '2023',
    endDate: '2023',
    description:
      'Covered advanced React.js and Next.js concepts including App Router, Server Components, SSR, SSG, ISR, API Routes, authentication systems, and production deployment strategies.',
  },

  {
    id: '5',
    institution: 'Udemy',
    degree: 'Full Stack Development Bootcamp',
    field: 'MERN Stack Development',
    startDate: '2024',
    endDate: '2024',
    description:
      'Comprehensive training covering React.js, Node.js, Express.js, MongoDB, REST APIs, authentication systems, backend architecture, and scalable production deployment workflows.',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'End-to-end scalable web applications with modern architecture and clean code practices.',
    icon: 'code',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Cross-platform apps with smooth performance, native feel and great UX.',
    icon: 'smartphone',
    tech: ['React Native', 'Expo', 'Firebase'],
  },
  {
    id: '3',
    title: 'API & Backend',
    description: 'Secure RESTful & GraphQL APIs with optimized backend systems.',
    icon: 'database',
    tech: ['Node.js', 'Express', 'GraphQL', 'MongoDB'],
  },
  {
    id: '4',
    title: 'Performance Optimization',
    description: 'Boost speed, SEO & scalability with industry best practices.',
    icon: 'zap',
    tech: ['SSR', 'Caching', 'Lighthouse', 'CDN'],
  },
  {
    id: '5',
    title: 'UI/UX & Frontend Design',
    description: 'Pixel-perfect, responsive interfaces with modern animations and accessibility.',
    icon: 'palette',
    tech: ['Tailwind CSS', 'Framer Motion', 'Figma', 'GSAP'],
  },
  {
    id: '6',
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines, cloud infrastructure and automated deployment workflows.',
    icon: 'cloud',
    tech: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ravi Kumar',
    role: 'Founder',
    company: 'Freekaamaal',

    content:
      'Bablu transformed our complex ecommerce requirements into a seamless, high-performing reality. His expertise in Node.js and real-time systems is unparalleled.',
  },
  {
    id: '2',
    name: 'Aayush',
    role: 'CTO',
    company: '4tuners Tech',

    content:
      'Exceptional attention to detail and a true partner in development. The POS system he built for us has revolutionized our offline operations.',
  },
  {
    id: '3',
    name: 'Sanjay',
    role: 'Director',
    company: 'Strategy Classes',

    content:
      'Working with Bablu was a breeze. He understands business goals as much as technical constraints. Highly recommended for any serious web project.',
  },
];

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'What is your typical project timeline?',
    answer:
      'Typically, a web project takes 3 to 6 weeks, and mobile apps can take 6 to 10 weeks depending on the complexity, features, and integrations required.',
  },
  {
    id: '2',
    question: 'What tech stack do you recommend for startups?',
    answer:
      'For most startups, I recommend the MERN stack (MongoDB, Express, React, Node.js) or Next.js. These are fast, scalable, and have a strong ecosystem for future growth.',
  },
  {
    id: '3',
    question: 'Do you help with deployment?',
    answer:
      'Yes, I handle the complete process — from development and testing to deployment on AWS, Vercel, and app stores.',
  },
  {
    id: '4',
    question: 'How do you ensure post-launch support?',
    answer:
      'I provide 3 to 6 months of active maintenance support after launch to ensure everything runs smoothly and handle any improvements.',
  },
  {
    id: '5',
    question: 'What if I need changes after the project is complete?',
    answer:
      'I offer flexible maintenance and update plans. Whether it’s a small tweak or a major feature, I am available for long-term collaboration.',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: '1',
    title: 'Discovery',
    description:
      'We start by understanding your goals, requirements, and target audience through detailed discussions.',
    number: 1,
  },
  {
    id: '2',
    title: 'Planning',
    description:
      'I create a detailed project plan with timeline, milestones, and technical specifications.',
    number: 2,
  },
  {
    id: '3',
    title: 'Development',
    description:
      'Using agile methodology, I develop your project in iterations with regular check-ins.',
    number: 3,
  },
  {
    id: '4',
    title: 'Launch',
    description:
      'After thorough testing, I deploy your project and ensure everything runs smoothly.',
    number: 4,
  },
];

export const galleryImages = [
  { src: `${baseUrl}g/woost1.png`, alt: 'Woost.io' },
  { src: `${baseUrl}g/woost2.png`, alt: 'Woost.io' },
  { src: `${baseUrl}g/woost3.png`, alt: 'Woost.io' },
  { src: `${baseUrl}g/gaur1.png`, alt: 'Gaurastra' },
  { src: `${baseUrl}g/gaur2.png`, alt: 'Gaurastra' },

  { src: `${baseUrl}g/cinch1.png`, alt: 'CINCH' },
  { src: `${baseUrl}g/cinch2.png`, alt: 'CINCH' },
  { src: `${baseUrl}g/class1.png`, alt: 'Strategy Classes' },
  { src: `${baseUrl}g/class2.png`, alt: 'Strategy Classes' },
  { src: `${baseUrl}g/fkm1.png`, alt: 'Freekaamaal' },
  { src: `${baseUrl}g/fkm2.png`, alt: 'Freekaamaal' },

  { src: `${baseUrl}g/portfolio1.png`, alt: 'Portfolio' },
  { src: `${baseUrl}g/portfolio2.png`, alt: 'Portfolio' },


];