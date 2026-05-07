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

export const projects: Project[] = [
  {
    id: '1',
    slug: 'woost-platform',
    title: 'Woost.io',
    description: 'Freelancing & collaboration ecosystem',
    shortDescription: 'Real-time freelancing platform (Web + App)',
    image: 'https://play-lh.googleusercontent.com/Q0ctVoXZLX9_bygKC3g8WHSlqK1pbB0yQkep4NtXbMDGCnxZZxikohw6HfEUs0eaPA=w526-h296-rw',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
    overview:
      'Freelancing platform with real-time collaboration features across web and mobile.',
    challenges: [
      'Handling real-time multi-user collaboration',
      'Maintaining sync across platforms',
    ],
    solutions: [
      'Used Socket.io for real-time updates',
      'Redux for state consistency',
    ],
    results: [
      '40% faster collaboration',
      'Scaled to thousands of freelancers',
    ],
    liveUrl: 'https://woost.io/',
    featured: true,
  },

  {
    id: '2',
    slug: 'freekaamaal-platform',
    title: 'Freekaamaal',
    description: 'Cashback & deals platform',
    shortDescription: 'SEO optimized deals platform',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslUBIWXTFgqKVhflb_9hFIU79c7YrSGQ9pg&s',
    tags: ['React.js', 'Next.js', 'TypeScript', 'SEO'],
    overview:
      'High traffic cashback platform optimized for SEO and performance.',
    challenges: [
      'Handling heavy traffic during sales',
      'Maintaining SEO performance',
    ],
    solutions: [
      'Used SSR & ISR in Next.js',
      'Optimized images and code splitting',
    ],
    results: [
      '90+ Lighthouse score',
      '25% increase in organic traffic',
    ],
    liveUrl: 'https://freekaamaal.com/',
    featured: true,
  },

  {
    id: '3',
    slug: 'bachatjar-platform',
    title: 'BachatJar',
    description: 'Coupon & cashback aggregator',
    shortDescription: 'Fast deals platform with Redis caching',
    image: 'https://media.licdn.com/dms/image/v2/D560BAQFnL_ppasbG5g/company-logo_200_200/B56Zc6_R_DG0AI-/0/1749041357267/bachat_jar_logo',
    tags: ['Next.js', 'MongoDB', 'Redis', 'SEO'],
    overview:
      'Deals aggregation platform with fast API response using caching.',
    challenges: [
      'Handling large scraped data',
      'Reducing API latency',
    ],
    solutions: [
      'Redis caching layer',
      'Optimized backend microservices',
    ],
    results: [
      'Response time reduced to 200ms',
      'Better mobile UX',
    ],
    liveUrl: 'https://bachatjar.com',
    featured: false,
  },

  {
    id: '4',
    slug: 'gaurastra-ecommerce',
    title: 'Gaurastra',
    description: 'Full-stack e-commerce platform',
    shortDescription: 'E-commerce with PhonePe integration',
    image: 'https://www.gaurastra.com/static/media/loginbg.40097bd9cadc2f9e5bad.webp',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'PhonePe'],
    overview:
      'Modern Ayurvedic e-commerce platform with secure payments.',
    challenges: [
      'Handling payment failures',
      'Reliable order processing',
    ],
    solutions: [
      'PhonePe integration with webhooks',
      'Automated order reconciliation',
    ],
    results: [
      '99.9% payment success rate',
      '5000+ successful orders',
    ],
    liveUrl: 'https://www.gaurastra.com',
    featured: true,
  },

  {
    id: '5',
    slug: 'pos-system',
    title: 'POS System',
    description: 'Offline-first billing system',
    shortDescription: 'Retail POS with offline sync',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS34Q1m4GlZxV1WTh8Rrj2RcqA_jqVkZT1jg&s',
    tags: ['Node.js', 'MongoDB', 'Socket.io'],
    overview:
      'Retail billing system that works even without internet.',
    challenges: [
      'Offline data consistency',
      'Sync after reconnect',
    ],
    solutions: [
      'Local storage + sync engine',
      'Background sync system',
    ],
    results: [
      'Zero downtime billing',
      'Reliable offline operations',
    ],
    liveUrl: 'https://test.gaurastra.com/offline/login',
    featured: false,
  },

  {
    id: '6',
    slug: 'strategy-classes',
    title: 'Strategy Classes',
    description: 'Online exam platform',
    shortDescription: 'High-scale LMS system',
    image: 'https://strategyclasses.in/static/media/favicon.ee51e7eac7ceaec9d444.png',
    tags: ['Node.js', 'PostgreSQL', 'React.js'],
    overview:
      'Learning management system handling large exam traffic.',
    challenges: [
      'Handling thousands of concurrent users',
      'Server stability',
    ],
    solutions: [
      'Optimized SQL queries',
      'Load balancing with Nginx',
    ],
    results: [
      '10k+ concurrent users supported',
      'Zero downtime during exams',
    ],
    liveUrl: 'http://strategyclasses.in/',
    featured: false,
  },

  {
    id: '7',
    slug: 'axio-app',
    title: 'Axio',
    description: 'Cross-platform mobile app',
    shortDescription: 'React Native mobile application',
    image: 'https://your-axio-image-link.com/logo.png',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    overview:
      'Mobile app built for both Android & iOS using React Native.',
    challenges: [
      'Cross-platform performance',
      'Consistent UI',
    ],
    solutions: [
      'Optimized component rendering',
      'Efficient API integration',
    ],
    results: [
      'Smooth cross-platform UX',
      'Improved engagement',
    ],
    liveUrl: '#',
    featured: false,
  },
  // ADD THESE NEW PROJECTS INSIDE EXISTING projects ARRAY
  // Existing projects ko delete mat karna

  {
    id: '8',
    slug: 'real-time-chat-system',
    title: 'Real-time Chat System',
    description: 'Scalable real-time messaging infrastructure',
    shortDescription: 'Socket.io chat app with Redis scaling',
    image: 'https://socket.io/images/logo.svg',
    tags: ['Node.js', 'Socket.io', 'Redis', 'MongoDB'],
    overview:
      'High-performance real-time chat application supporting concurrent users with horizontal scaling and WebSocket authentication.',
    challenges: [
      'Handling concurrent socket connections',
      'Maintaining real-time sync across instances',
      'Reliable reconnection handling',
    ],
    solutions: [
      'Socket.io Redis adapter for horizontal scaling',
      'JWT authentication during WebSocket handshake',
      'Redis Pub/Sub for instant status synchronization',
    ],
    results: [
      'Supported 500+ concurrent users',
      'Instant real-time message delivery',
      'Reliable auto reconnection system',
    ],
    liveUrl: '#',
    featured: false,
  },

  {
    id: '9',
    slug: 'freekaamaal-api-backend',
    title: 'Freekaamaal API',
    description: 'High traffic deals backend infrastructure',
    shortDescription: 'Scalable deals API with Redis caching',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslUBIWXTFgqKVhflb_9hFIU79c7YrSGQ9pg&s',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io'],
    overview:
      'Scalable backend infrastructure powering real-time deals and cashback systems with optimized APIs and caching.',
    challenges: [
      'Handling high API traffic',
      'Reducing query latency',
      'Managing third-party API rate limits',
    ],
    solutions: [
      'Redis caching with TTL invalidation',
      'MongoDB compound indexing',
      'Request queue system with retry logic',
    ],
    results: [
      'Handled 20K+ daily API calls',
      'Reduced query time from 800ms to <80ms',
      'Maintained 99.5% uptime',
    ],
    liveUrl: 'https://freekaamaal.com/',
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
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80', alt: 'Mobile App' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80', alt: 'Team Work' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80', alt: 'Collaboration' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80', alt: 'Development' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80', alt: 'Analytics' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', alt: 'Office' },
];