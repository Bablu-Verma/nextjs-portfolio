import type {
  Project,
  Experience,
  Education,
  Service,
  Testimonial,
  FAQItem,
  WorkflowStep,
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
      'Worked on scalable full-stack applications using Next.js and Node.js.',
    responsibilities: [
      'Developed scalable applications',
      'Built offline POS system',
      'Implemented SSR/SSG',
      'Led team of 5 developers',
    ],
    achievements: [
      'Improved performance and maintainability',
      'Successfully delivered POS system',
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
      'Built scalable web and mobile applications with real-time features.',
    responsibilities: [
      'Developed SPA using React & Next.js',
      'Built mobile apps using React Native',
      'Integrated Firebase & Google APIs',
      'Implemented real-time systems',
    ],
    achievements: [
      '35% increase in engagement',
      'Delivered high-performance apps',
      'Employee of the Year',
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
      'Developed REST APIs and backend systems with Node.js.',
    responsibilities: [
      'Built REST APIs',
      'Implemented authentication',
      'Optimized database queries',
    ],
    achievements: [
      'Reduced API latency',
      'Improved system stability',
    ],
    location: 'Noida, India',
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Amity University',
    degree: 'Bachelor of Computer Applications',
    field: 'Cloud & Cyber Security',
    startDate: '2023',
    endDate: '2026',
    description:
      'Pursuing a strong foundation in computer applications with a focus on cloud computing and cybersecurity. Gaining hands-on experience in modern web technologies, system architecture, and secure application development through academic and practical projects.',
  },
  {
    id: '2',
    institution: 'GBSS School, Delhi',
    degree: 'Senior Secondary',
    field: '',
    startDate: '2020',
    endDate: '2021',
    description:
      'Completed senior secondary education with a focus on analytical thinking and problem-solving skills. Built a strong academic base that helped transition into the field of computer science and technology.',
  },
  {
    id: '3',
    institution: 'Self Learning & Online Platforms',
    degree: 'Continuous Learning',
    field: 'Full Stack Development, System Design, DevOps',
    startDate: '2021',
    endDate: 'Present',
    description:
      'Continuously learning and upgrading skills through real-world projects, online courses, and hands-on development. Focused on mastering modern web technologies, building scalable applications, and staying aligned with industry best practices.',
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