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
    shortDescription: 'Real-time freelancing platform for web users',
    image: `${baseUrl}p/woost.png`,
    tags: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Socket.io',
      'REST API',
      'JWT Auth',
      'Axios',
      'React Router',
      'Vite',
    ],

    overview:
      'Woost.io is a comprehensive freelancing and collaboration ecosystem designed to bridge the gap between freelancers and clients. The platform enables project creation, real-time messaging, milestone tracking, contract management, and payment workflows within a single unified interface. I was responsible for architecting the entire frontend system from the ground up — building the dashboard infrastructure, authentication modules, API integrations, real-time collaboration features, and reusable component library. The application was built using React.js with TypeScript for type safety, Redux Toolkit for centralized state management, Tailwind CSS for consistent UI design, and Socket.io for live communication.',

    challenges: [
      'Building a scalable and maintainable frontend architecture from scratch for a complex multi-role platform',
      'Implementing real-time bidirectional communication between freelancers and clients without performance degradation',
      'Managing complex global application state across dashboards, notifications, chat, and project modules',
      'Handling authentication flows including JWT token refresh, session management, and role-based access',
      'Optimizing rendering performance for large data-heavy dashboards with dynamic content',
      'Ensuring consistent UI and UX across all modules while maintaining code reusability',
    ],

    solutions: [
      'Designed a modular component architecture with clearly separated concerns across features and pages',
      'Integrated Socket.io with custom event namespaces for real-time chat, notifications, and live project updates',
      'Implemented Redux Toolkit with slice-based state management for auth, projects, messages, and notifications',
      'Built a custom Axios interceptor layer for automatic JWT token refresh and centralized error handling',
      'Applied React.lazy and Suspense for code splitting and route-level lazy loading to reduce initial bundle size',
      'Created a shared UI component library with Tailwind CSS utility classes for design consistency',
      'Implemented role-based route guards and protected dashboard views for freelancers and clients',
    ],

    results: [
      'Delivered a production-ready freelancing platform with real-time collaboration capabilities',
      'Reduced initial page load time significantly through code splitting and lazy loading strategies',
      'Achieved scalable and maintainable frontend codebase with modular architecture',
      'Enabled seamless real-time communication with zero message loss in stable network conditions',
      'Improved developer experience through TypeScript integration and reusable component design patterns',
      'Successfully handled multi-role dashboards for freelancers, clients, and administrators',
    ],

    liveUrl: 'https://woost.io/',
    featured: true,
  },

  {
    id: '2',
    slug: 'woost-mobile-app',
    title: 'Woost.io Mobile App',
    description: 'Cross-platform freelancing mobile application',
    shortDescription: 'React Native app with real-time collaboration',
    image: `${baseUrl}p/woost.png`,
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux Toolkit',
      'Socket.io',
      'Firebase FCM',
      'React Navigation',
      'Axios',
      'AsyncStorage',
      'REST API',
    ],

    overview:
      'Woost.io Mobile is a cross-platform freelancing and collaboration application developed using React Native and Expo, delivering the full Woost.io experience on Android and iOS devices. The app enables freelancers and clients to manage active projects, communicate via real-time chat, track milestones, review proposals, and receive instant push notifications — all from a mobile-first interface. I worked on the complete mobile application architecture, navigation system, authentication flows, real-time Socket.io integration, Firebase push notification setup, and performance optimization across different device capabilities.',

    challenges: [
      'Designing a complex multi-screen navigation architecture for separate freelancer and client journeys',
      'Implementing reliable real-time socket communication with automatic reconnect on mobile network changes',
      'Maintaining consistent app performance on low-end Android devices with limited RAM',
      'Handling JWT authentication with secure token storage and automatic session refresh on mobile',
      'Delivering reliable and timely push notifications across both Android and iOS platforms',
      'Managing offline state gracefully when network connectivity is lost during active sessions',
    ],

    solutions: [
      'Used React Navigation with stack, tab, and drawer navigators for structured multi-role navigation flows',
      'Integrated Socket.io with connection lifecycle management and automatic reconnect logic on network events',
      'Implemented Firebase Cloud Messaging (FCM) for reliable cross-platform push notification delivery',
      'Used AsyncStorage for secure local persistence of authentication tokens and user session data',
      'Applied FlatList performance optimizations with keyExtractor, getItemLayout, and lazy rendering',
      'Implemented Redux Toolkit for centralized state management across all app modules',
      'Added background-to-foreground sync triggers to refresh data when app resumes from background',
    ],

    results: [
      'Delivered a stable and smooth cross-platform freelancing app on Android and iOS',
      'Achieved reliable real-time messaging with automatic reconnect on network interruptions',
      'Reduced notification delivery failure rate through Firebase FCM integration',
      'Improved app performance on low-end devices through rendering and state optimizations',
      'Enhanced user engagement through instant notifications and seamless project management workflows',
      'Successfully published and maintained on Google Play Store',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.woost&hl=en_IN',
    featured: true,
  },

  {
    id: '3',
    slug: 'freekaamaal-web',
    title: 'Freekaamaal Web',
    description: 'Cashback & deals platform',
    shortDescription: 'SEO optimized deals and cashback platform',
    image: `${baseUrl}p/freekaamaal.png`,
    tags: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'SSR',
      'ISR',
      'SEO',
      'REST API',
      'Axios',
      'Google Analytics',
    ],

    overview:
      'Freekaamaal is one of India\'s largest and most visited cashback, coupon, and deals discovery platforms, attracting millions of users monthly. The platform aggregates offers from hundreds of brands across categories including shopping, travel, food, and entertainment. I worked on the frontend development using Next.js, focusing on server-side rendering (SSR), incremental static regeneration (ISR), SEO optimization, performance improvements, and scalable page architecture. The primary goals were to maximize organic search visibility, reduce page load times during high-traffic sale events, and deliver a fast and reliable user experience across all device types.',

    challenges: [
      'Maintaining fast page load speeds during peak traffic events like Big Billion Days and Great Indian Festival',
      'Managing thousands of dynamically generated deal and coupon pages with proper SEO metadata',
      'Ensuring high Google Lighthouse scores across performance, accessibility, and SEO categories',
      'Handling real-time deal expiry and freshness without causing full page rebuilds',
      'Optimizing large image assets across deal listings for fast visual loading',
      'Maintaining consistent UI performance across mobile, tablet, and desktop screen sizes',
    ],

    solutions: [
      'Implemented SSR and ISR with Next.js for fast initial page delivery and automatic content freshness',
      'Applied dynamic metadata generation for category, brand, and deal pages to maximize SEO coverage',
      'Optimized all image assets using Next.js Image component with lazy loading and WebP format delivery',
      'Implemented route-based code splitting and dynamic imports to minimize JavaScript bundle sizes',
      'Built a reusable and scalable frontend component architecture for deal cards, categories, and listings',
      'Used structured data (JSON-LD) markup for breadcrumbs, products, and offers to enhance Google rich results',
      'Implemented skeleton loading states and progressive rendering for improved perceived performance',
    ],

    results: [
      'Achieved 90+ Google Lighthouse performance score consistently across key pages',
      'Improved organic search rankings resulting in measurable increase in monthly organic traffic',
      'Reduced page load time during high-traffic sale events through ISR and caching strategies',
      'Enhanced Google indexing speed and coverage through structured metadata and sitemap optimization',
      'Delivered responsive and consistent UI experience across all device breakpoints',
      'Reduced cumulative layout shift (CLS) and improved Core Web Vitals scores significantly',
    ],

    liveUrl: 'https://freekaamaal.com/',
    featured: true,
  },

  {
    id: '4',
    slug: 'freekaamaal-backend',
    title: 'Freekaamaal Backend API',
    description: 'Scalable deals backend infrastructure',
    shortDescription: 'Node.js backend with Redis caching',
    image: `${baseUrl}p/freekaamaal.png`,
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Redis',
      'REST API',
      'JWT Auth',
      'Cron Jobs',
      'Webhook',
      'Cloudinary',
    ],

    overview:
      'The Freekaamaal backend is a high-performance, scalable API infrastructure built to power one of India\'s largest cashback and deals platforms. It handles deal aggregation, user cashback tracking, affiliate link management, coupon validation, admin operations, third-party brand integrations, and high-concurrency API traffic. I worked on building and optimizing core APIs, implementing a Redis caching layer for frequently accessed data, optimizing MongoDB queries, setting up scheduled cron jobs for deal expiry and synchronization, and integrating affiliate partner webhooks. The backend is designed to maintain stability and fast response times even under heavy traffic loads during major sale events.',

    challenges: [
      'Handling 20,000+ daily API requests with consistently low response times under heavy concurrent load',
      'Reducing database query latency for frequently accessed deal, coupon, and category data',
      'Managing affiliate partner webhook integrations with varying data formats and delivery guarantees',
      'Scheduling automated deal expiry, cashback processing, and data synchronization tasks reliably',
      'Maintaining data consistency across user cashback records, deal inventories, and transaction logs',
      'Preventing server instability and downtime during peak traffic events like flash sales',
    ],

    solutions: [
      'Implemented a Redis caching layer for high-frequency endpoints including deals, categories, and user data',
      'Optimized MongoDB collections with compound indexing strategies for faster aggregation and lookup queries',
      'Built a robust REST API architecture with modular route and controller separation for maintainability',
      'Implemented cron-based scheduled jobs for deal expiry, cashback status updates, and data synchronization',
      'Added webhook signature verification and retry queue logic for reliable affiliate partner integrations',
      'Integrated Cloudinary for optimized deal image storage, transformation, and CDN delivery',
      'Implemented centralized error handling, request validation, and API rate limiting middleware',
    ],

    results: [
      'Successfully handled 20,000+ API requests daily with stable uptime and no major downtime incidents',
      'Reduced average API response time to under 80ms through Redis caching and query optimization',
      'Improved data consistency across cashback processing and deal management workflows',
      'Eliminated affiliate webhook data loss through retry queue and delivery verification systems',
      'Automated deal lifecycle management through reliable scheduled cron jobs',
      'Enhanced backend scalability to handle traffic spikes during major e-commerce sale events',
    ],

    liveUrl: 'https://freekaamaal.com/',
    featured: true,
  },

  {
    id: '14',
    slug: 'freekaamaal-mobile-app',
    title: 'Freekaamaal Mobile App',
    description: 'Cashback & deals mobile application',
    shortDescription: 'React Native cashback and coupon mobile app',
    image: `${baseUrl}p/freekaamaal.png`,
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux Toolkit',
      'Firebase FCM',
      'REST API',
      'Axios',
      'React Navigation',
      'AsyncStorage',
      'FlatList',
    ],

    overview:
      'Freekaamaal Mobile App is a cross-platform cashback, coupon, and deals discovery application developed using React Native and Expo. The app serves millions of deal-seeking users, allowing them to browse thousands of live deals, access cashback offers, copy coupon codes, explore brand-specific offers, and receive real-time notifications for new deals and cashback updates. I worked on the complete mobile application architecture, scalable state management, optimized list rendering for large datasets, push notification integration, and performance tuning across Android and iOS platforms. The app mirrors the web platform\'s content in a mobile-optimized experience with fast load times and smooth navigation.',

    challenges: [
      'Rendering thousands of dynamically updated deal listings efficiently without causing frame drops',
      'Managing scalable application state across deals, categories, cashback, and user profile modules',
      'Handling heavy API payloads with pagination for large deal category pages on mobile networks',
      'Maintaining smooth 60fps scrolling performance on mid-range and low-end Android devices',
      'Delivering timely and reliable push notifications for new deals and cashback status updates',
      'Ensuring responsive and consistent UI layout across various screen sizes and Android versions',
    ],

    solutions: [
      'Implemented Redux Toolkit for centralized and predictable state management across all app modules',
      'Optimized FlatList rendering with windowSize, maxToRenderPerBatch, and removeClippedSubviews props',
      'Built paginated API handling with infinite scroll for seamless deal browsing on slow connections',
      'Used reusable card and list components with memoization to minimize unnecessary re-renders',
      'Integrated Firebase Cloud Messaging (FCM) for reliable and targeted push notification delivery',
      'Applied lazy loading and skeleton screens for improved perceived performance during data fetching',
      'Used Expo ecosystem tooling for faster build cycles and OTA update delivery',
    ],

    results: [
      'Delivered a high-performance deals and cashback mobile experience for millions of users',
      'Achieved smooth scrolling through large deal listings with optimized FlatList configurations',
      'Reduced perceived load time through skeleton screens and progressive rendering strategies',
      'Improved user engagement and retention through timely push notification delivery',
      'Maintained stable performance across a wide range of Android devices and OS versions',
      'Successfully published and actively maintained on Google Play Store',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.freekaamaalapp',
    featured: true,
  },

  // ─── E-COMMERCE & BILLING ─────────────────────────────────────────────────

  {
    id: '6',
    slug: 'gaurastra-ecommerce',
    title: 'Gaurastra',
    description: 'Full-stack e-commerce platform',
    shortDescription: 'E-commerce platform with PhonePe integration',
    image: `${baseUrl}p/gaurastra.png`,
    tags: [
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'PhonePe Gateway',
      'Webhook',
      'JWT Auth',
      'Cloudinary',
      'Tailwind CSS',
      'REST API',
    ],

    overview:
      'Gaurastra is a modern full-stack Ayurvedic e-commerce platform offering a curated range of herbal and natural health products. The platform provides customers with a seamless shopping experience including product discovery, cart management, secure checkout, real-time order tracking, and admin-level order and inventory management. I built the complete full-stack application including the Next.js storefront, Node.js backend API, MongoDB database layer, PhonePe payment gateway integration, webhook-based payment verification, order management workflows, and Cloudinary-powered product image storage. The platform was designed for reliability, scalability, and a high payment success rate.',

    challenges: [
      'Integrating PhonePe payment gateway with robust transaction verification to prevent payment fraud',
      'Handling payment failure scenarios, partial completions, and webhook delivery retries gracefully',
      'Maintaining transactional consistency between payment records and order creation workflows',
      'Building a secure admin dashboard for order management, inventory updates, and sales reporting',
      'Managing product image storage and optimization at scale for diverse product catalogs',
      'Ensuring reliable and idempotent order processing even under network instability or duplicate webhooks',
    ],

    solutions: [
      'Integrated PhonePe payment gateway with server-side signature verification for all transactions',
      'Implemented webhook-based payment confirmation with idempotency checks to prevent duplicate orders',
      'Built an automated order reconciliation system to align payment statuses with order records',
      'Created a comprehensive admin dashboard with role-based access for order, product, and user management',
      'Used Cloudinary for product image upload, transformation, and CDN-accelerated delivery',
      'Implemented MongoDB transactions for atomic order creation and inventory deduction operations',
      'Added retry logic and failure notification alerts for critical payment webhook failures',
    ],

    results: [
      'Achieved 99.9% payment success rate with zero reported payment fraud incidents',
      'Successfully processed 5,000+ customer orders with reliable end-to-end order workflows',
      'Eliminated duplicate order creation through idempotent webhook processing',
      'Delivered a fast and responsive storefront with optimized product pages and checkout flow',
      'Empowered business operations through a feature-rich admin management dashboard',
      'Reduced image delivery latency through Cloudinary CDN integration',
    ],

    liveUrl: 'https://www.gaurastra.com',
    featured: true,
  },

  {
    id: '18',
    slug: 'babyshop-ecommerce-platform',
    title: 'BabyShop E-Commerce Platform',
    description:
      'Full-stack e-commerce platform for baby products with customer storefront, admin dashboard, and secure backend API',
    shortDescription:
      'Next.js e-commerce system with admin dashboard, Stripe payments, and MongoDB backend',

    image: `${baseUrl}p/babyshop.png`,

    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Stripe',
      'Zustand',
      'JWT',
      'Cloudinary',
      'Nodemailer',
      'Swagger',
      'Shadcn UI',
    ],

    overview:
      'BabyShop is a modern full-stack e-commerce platform built for baby products and kids essentials, consisting of a customer-facing storefront, an advanced admin dashboard, and a scalable backend API. The platform provides a complete shopping experience including product browsing, advanced filtering, Stripe-powered payments, order tracking, wishlist management, and responsive mobile-first UI. I developed the entire architecture across frontend, admin panel, and backend services, including authentication systems, REST APIs, payment integration, inventory management, image uploads, analytics dashboards, and production-ready deployment workflows.',

    challenges: [
      'Designing a scalable architecture to support client storefront, admin dashboard, and backend API simultaneously',
      'Implementing secure authentication and authorization across multiple user roles',
      'Handling Stripe payment workflows including success, failure, and webhook-based order verification',
      'Managing large product catalogs with filtering, sorting, pagination, and search optimization',
      'Building a responsive and performant UI across desktop, tablet, and mobile devices',
      'Optimizing MongoDB queries and relational data handling for products, users, and orders',
      'Implementing secure media upload and management with Cloudinary integration',
      'Maintaining centralized state consistency for cart, wishlist, authentication, and checkout flows',
    ],

    solutions: [
      'Built the customer storefront using Next.js 15 App Router with TypeScript and server/client component architecture',
      'Developed a dedicated admin dashboard using React, Vite, Zustand, and Recharts for analytics and management operations',
      'Integrated Stripe payment gateway with secure checkout sessions and payment verification handling',
      'Implemented JWT-based authentication with protected routes and middleware authorization',
      'Used MongoDB with Mongoose ODM for schema validation, optimized queries, and relationship management',
      'Integrated Cloudinary and Multer for secure product image upload and storage',
      'Implemented Zustand for lightweight and scalable global state management',
      'Used React Hook Form and Zod for robust form validation and error handling',
      'Created RESTful APIs with Express.js including Swagger API documentation',
      'Implemented Nodemailer for transactional emails such as order confirmations and user notifications',
    ],

    results: [
      'Delivered a complete production-ready full-stack e-commerce ecosystem',
      'Enabled secure online payments and streamlined checkout experiences using Stripe',
      'Improved admin productivity through centralized inventory, order, and customer management tools',
      'Achieved responsive and optimized user experience across all major device sizes',
      'Built scalable backend APIs capable of handling product, user, and order management efficiently',
      'Enhanced customer engagement through wishlist, order tracking, and account management features',
      'Provided maintainable and extensible architecture suitable for future feature expansion',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/baby-shop-e-commerce',

    featured: true,
  },
  {
    id: '7',
    slug: 'pos-system',
    title: 'POS System',
    description: 'Offline-first billing system',
    shortDescription: 'Retail POS system with offline sync support',
    image: `${baseUrl}p/gaurastra.png`,
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'LocalStorage',
      'IndexedDB',
      'REST API',
      'JWT Auth',
      'React.js',
      'Tailwind CSS',
    ],

    overview:
      'A fully offline-capable retail Point of Sale (POS) billing system designed for businesses that operate in environments with unreliable or intermittent internet connectivity. The system enables store staff to create bills, manage sales transactions, track inventory, and generate receipts without requiring an active internet connection. All data is stored locally using IndexedDB and automatically synchronized with the central MongoDB server when connectivity is restored. I built the core POS engine, offline storage layer, background sync mechanism, conflict resolution logic, and the billing interface — ensuring zero billing downtime regardless of network availability.',

    challenges: [
      'Maintaining full billing functionality and data integrity during complete internet outages',
      'Designing a reliable conflict resolution strategy when multiple offline sessions sync simultaneously',
      'Preventing duplicate billing entries when syncing locally created records to the central server',
      'Ensuring data consistency between local IndexedDB storage and remote MongoDB database after reconnect',
      'Handling inventory deduction accurately in offline mode without real-time stock validation',
      'Building a seamless user experience where staff are unaware of the underlying offline/online transitions',
    ],

    solutions: [
      'Implemented IndexedDB as the primary local data store for bills, inventory, and transaction queues',
      'Built a background synchronization engine that detects connectivity restoration and triggers smart sync',
      'Added unique client-generated transaction IDs to prevent duplicate entries during server sync',
      'Designed a conflict resolution algorithm that prioritizes server state while preserving offline changes',
      'Implemented Socket.io for real-time sync status feedback when the application transitions online',
      'Built a transaction queue system that replays failed sync operations with exponential backoff',
      'Created a clear offline/online status indicator in the UI with sync progress feedback for staff',
    ],

    results: [
      'Achieved zero billing downtime — the system operates fully during internet outages',
      'Eliminated duplicate billing entries through client-side transaction ID deduplication',
      'Delivered reliable and automatic data synchronization upon network restoration',
      'Maintained inventory accuracy across offline and online billing sessions',
      'Improved operational confidence for store staff in low-connectivity retail environments',
      'Reduced manual reconciliation effort through automated conflict resolution workflows',
    ],

    liveUrl: 'https://test.gaurastra.com/offline/login',
    featured: false,
  },

  // ─── EDUCATION PLATFORM ───────────────────────────────────────────────────

  {
    id: '8',
    slug: 'strategy-classes-web',
    title: 'Strategy Classes Web',
    description: 'Online exam platform',
    shortDescription: 'High-scale LMS and examination platform',
    image: `${baseUrl}p/strategy.png`,
    tags: [
      'React.js',
      'TypeScript',
      'Redux',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'REST API',
      'JWT Auth',
      'Tailwind CSS',
      'React Router',
    ],

    overview:
      'Strategy Classes is a high-traffic online learning management system (LMS) and examination platform serving thousands of students preparing for competitive exams. The platform delivers live and recorded lectures, practice tests, full-length mock examinations, real-time result processing, student performance analytics, attendance tracking, and fee management. I worked on the React.js-based frontend, building dashboard modules, examination interfaces, student progress tracking views, and optimized data tables. The platform was architected to handle massive concurrent traffic during examination windows without degrading performance or causing data integrity issues.',

    challenges: [
      'Handling 10,000+ concurrent users during live examination sessions without performance degradation',
      'Ensuring real-time result processing and score display immediately after exam submission',
      'Managing complex student dashboard data including performance graphs, attendance, and fee records',
      'Preventing exam session tampering and ensuring integrity during online test-taking',
      'Rendering large data tables with student records, rankings, and analytics efficiently',
      'Maintaining platform stability and uptime during scheduled batch exam events',
    ],

    solutions: [
      'Built optimized React components with memoization and virtualized data tables for large datasets',
      'Implemented Redux for centralized state management across exam sessions, results, and student data',
      'Applied PostgreSQL query optimization with indexing for fast student record and analytics retrieval',
      'Built exam session management with anti-refresh guards, time-sync, and server-validated submission',
      'Implemented load balancing strategy on the backend to distribute peak exam traffic effectively',
      'Used code splitting and lazy loading to reduce initial bundle size for faster dashboard load times',
      'Built reusable chart and analytics components for student performance visualization',
    ],

    results: [
      'Successfully supported 10,000+ concurrent users during live examination sessions',
      'Achieved stable platform performance throughout high-traffic scheduled exam windows',
      'Delivered real-time score processing and result display immediately after exam submission',
      'Reduced dashboard load time through code splitting and optimized component architecture',
      'Improved student experience through comprehensive performance analytics and progress tracking',
      'Maintained data integrity across all examination and attendance management workflows',
    ],

    liveUrl: 'http://strategyclasses.in/',
    featured: false,
  },

  {
    id: '9',
    slug: 'strategy-classes-mobile-app',
    title: 'Strategy Classes Mobile App',
    description: 'Mobile LMS application',
    shortDescription: 'React Native LMS app with online exams',
    image: `${baseUrl}p/strategy.png`,
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux',
      'Firebase FCM',
      'REST API',
      'Axios',
      'React Navigation',
      'AsyncStorage',
      'Video Streaming',
    ],

    overview:
      'Strategy Classes Mobile App is a cross-platform learning management application built for students preparing for competitive examinations on Android and iOS devices. The app provides access to live and recorded video lectures, chapter-wise practice questions, full-length mock tests with timer support, real-time result display, performance analytics, attendance records, and push notifications for new batches and exam schedules. I developed the complete mobile application including the navigation architecture, video streaming integration, examination module, state management, and Firebase notification system — focused on delivering a smooth and reliable learning experience across diverse device capabilities.',

    challenges: [
      'Delivering smooth video lecture streaming on slow and inconsistent mobile network connections',
      'Ensuring reliable exam submission from mobile devices with poor connectivity during timed tests',
      'Managing complex multi-screen navigation flows for students, batches, exams, and results',
      'Preventing performance degradation on low-RAM Android devices during media-heavy sessions',
      'Delivering timely push notifications for exam schedules, results, and batch announcements',
      'Maintaining accurate exam timer synchronization with the server to prevent time manipulation',
    ],

    solutions: [
      'Integrated adaptive video streaming with buffering controls and quality switching for slow networks',
      'Implemented server-synchronized exam timers with local fallback to prevent timer drift',
      'Built offline-tolerant exam submission with local answer caching and server sync on reconnect',
      'Used React Navigation with nested stack and tab navigators for clean multi-screen architecture',
      'Applied FlatList optimizations and component memoization for smooth performance on low-end devices',
      'Integrated Firebase Cloud Messaging for targeted and reliable push notification delivery',
      'Used Redux for centralized state management of exam sessions, results, and student data',
    ],

    results: [
      'Delivered a stable and feature-complete mobile LMS used by thousands of students daily',
      'Achieved reliable exam submission with no reported data loss from connectivity issues',
      'Improved student engagement through instant result display and performance analytics',
      'Maintained smooth video playback across 3G and 4G mobile network conditions',
      'Enhanced notification delivery reliability for exam schedule and result announcements',
      'Successfully published and maintained on Google Play Store',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.strategy&hl=en_IN',
    featured: false,
  },

  {
    id: '10',
    slug: 'strategy-classes-backend',
    title: 'Strategy Classes Backend',
    description: 'Backend infrastructure for LMS',
    shortDescription: 'Scalable Node.js backend for examinations',
    image: `${baseUrl}p/strategy.png`,
    tags: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'JWT Auth',
      'Cron Jobs',
      'REST API',
      'Multer',
      'Cloudinary',
      'Firebase Admin',
    ],

    overview:
      'The Strategy Classes backend is a robust and scalable API infrastructure built to power a high-traffic online examination and learning management platform. It manages student enrollment, batch assignments, lecture content, exam scheduling, real-time result processing, attendance tracking, fee management, performance analytics, and administrative operations. I worked on designing and optimizing the core API layer, implementing Redis caching for exam and student data, optimizing complex PostgreSQL queries for analytics and reporting, building scheduled cron jobs for automated exam lifecycle management, and integrating Firebase Admin for server-triggered push notifications.',

    challenges: [
      'Processing and returning exam results for thousands of simultaneous submissions without latency spikes',
      'Generating complex student performance reports and analytics from large multi-relational datasets',
      'Maintaining server stability and response times during peak exam traffic periods',
      'Scheduling and managing automated exam opening, closing, and result publication workflows',
      'Handling concurrent API requests for live lecture content and student activity tracking',
      'Ensuring secure and tamper-proof exam data storage and result processing pipelines',
    ],

    solutions: [
      'Implemented Redis caching for frequently accessed exam configurations, question banks, and student metadata',
      'Optimized complex PostgreSQL JOIN queries with targeted indexing for analytics and reporting endpoints',
      'Built a modular controller and service architecture for clean separation across platform domains',
      'Created cron-based automated workflows for exam scheduling, deadline enforcement, and result publishing',
      'Integrated Firebase Admin SDK for server-side targeted push notification delivery to student devices',
      'Implemented JWT-based authentication with role separation for students, instructors, and administrators',
      'Added database connection pooling and query timeout handling for stable performance under peak load',
    ],

    results: [
      'Maintained stable backend performance during simultaneous exam submission peaks from thousands of users',
      'Reduced analytics report generation time significantly through query optimization and caching',
      'Eliminated manual exam lifecycle management through reliable automated cron workflows',
      'Achieved consistent API response times under heavy concurrent load through Redis and query optimization',
      'Delivered a secure and maintainable backend codebase with modular service architecture',
      'Improved notification reliability for exam events through Firebase Admin server-side integration',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/tuners-projects/tree/main/strategyclasses-backend',
    featured: false,
  },

  // ─── REAL-TIME & COLLABORATION ────────────────────────────────────────────

  {
    id: '12',
    slug: 'real-time-chat-system',
    title: 'Real-time Chat System',
    description: 'Scalable real-time messaging infrastructure',
    shortDescription: 'Socket.io chat app with Redis scaling',
    image: `${baseUrl}p/cinch.png`,
    tags: [
      'Node.js',
      'Express.js',
      'Socket.io',
      'Redis',
      'Redis Pub/Sub',
      'MongoDB',
      'JWT Auth',
      'REST API',
      'React.js',
      'Tailwind CSS',
    ],

    overview:
      'A production-grade scalable real-time messaging infrastructure built to support high volumes of concurrent socket connections across multiple server instances. The system handles one-on-one messaging, group conversations, message delivery acknowledgments, typing indicators, online presence tracking, and message history — all in real time. I architected and built the complete messaging backend using Node.js and Socket.io, implemented Redis Pub/Sub for cross-instance message synchronization, added JWT-based socket authentication, designed the MongoDB message persistence layer, and built the React.js-based chat interface with live updates.',

    challenges: [
      'Maintaining message delivery consistency across multiple horizontally scaled server instances',
      'Handling 500+ concurrent socket connections without memory leaks or performance degradation',
      'Implementing secure socket connections with JWT-based authentication at the handshake level',
      'Ensuring reliable message delivery acknowledgments and handling failed delivery scenarios',
      'Synchronizing online presence and typing indicators across all connected clients in real time',
      'Managing graceful reconnection and message backfill when clients temporarily disconnect',
    ],

    solutions: [
      'Integrated Socket.io Redis Adapter to enable cross-instance event broadcasting via Redis Pub/Sub',
      'Implemented JWT verification at the socket handshake stage to prevent unauthorized connections',
      'Built delivery acknowledgment callbacks with server-side confirmation for guaranteed message receipt',
      'Designed MongoDB message schema with room-based indexing for efficient history retrieval',
      'Implemented presence tracking using Redis key-value store with TTL-based online status management',
      'Added reconnection event handlers with message backfill queries to recover missed messages',
      'Used Socket.io namespaces and rooms for organized multi-conversation management',
    ],

    results: [
      'Successfully supported 500+ concurrent socket connections with stable memory and CPU usage',
      'Achieved consistent message delivery across horizontally scaled server instances via Redis Pub/Sub',
      'Eliminated unauthorized socket connections through JWT handshake-level authentication',
      'Delivered reliable message acknowledgment system with zero reported message loss in stable conditions',
      'Enabled real-time presence and typing indicators with sub-100ms update latency',
      'Built a maintainable and extensible messaging infrastructure deployable across multiple server nodes',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.cinchoffline.ccm',
    featured: false,
  },

  {
    id: '19',

    slug: 'taskzeno-automation-saas',

    title: 'TaskZeno Automation SaaS',

    description:
      'AI-powered workflow automation SaaS platform for businesses with dashboard, billing, automation management, and admin controls',

    shortDescription:
      'Automation-as-a-Service platform with AI workflows, payments, and admin management',

    image: `${baseUrl}p/taskzeno.png`,

    tags: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Query',
      'JWT',
      'Firebase',
      'Google OAuth',
      'Cloudinary',
      'Puppeteer',
      'PDFKit',
      'Nodemailer',
      'Sharp',
      'Tiptap Editor',
      'Framer Motion',
    ],

    overview:
      'TaskZeno is a modern Automation-as-a-Service (AaaS) SaaS platform designed to help businesses automate repetitive manual workflows using AI-powered automation systems and pre-built services. The platform provides intelligent workflow execution, automation management dashboards, subscription billing, execution tracking, and centralized administration tools. I developed the complete full-stack architecture including the SaaS dashboard, authentication systems, automation execution flows, admin management panel, payment integration, invoice generation, image processing pipelines, and third-party integrations. The system was built with scalability, performance, and multi-business usability in mind while maintaining a modern responsive user experience.',

    challenges: [
      'Designing a scalable SaaS architecture capable of handling multiple business automation workflows simultaneously',
      'Implementing secure authentication flows with email/password, Google OAuth, and OTP verification',
      'Managing real-time workflow execution tracking and automation monitoring',
      'Handling complex third-party integrations including Google APIs and Firebase services',
      'Building a responsive dashboard with billing, automation management, and execution analytics',
      'Generating downloadable invoices and PDF reports dynamically for users',
      'Optimizing image uploads and processing workflows with Cloudinary and Sharp',
      'Ensuring reliable automation execution using Puppeteer and background task processing',
      'Maintaining secure role-based access control between users and administrators',
    ],

    solutions: [
      'Built the frontend using Next.js 15, React 19, TypeScript, and Tailwind CSS with scalable component architecture',
      'Implemented Redux Toolkit and React Query for centralized state management and efficient server-state synchronization',
      'Developed a robust backend using Node.js, Express 5, and MongoDB with Mongoose ODM',
      'Integrated JWT authentication along with Google OAuth and OTP verification flows for secure user access',
      'Created AI-powered workflow automation modules with reusable pre-built automation services',
      'Integrated payment gateway functionality with automated invoice generation using PDFKit',
      'Implemented rich content creation functionality using the Tiptap rich text editor',
      'Used Cloudinary and Sharp for optimized image upload, transformation, and delivery',
      'Integrated Puppeteer-based automation handling for browser automation workflows',
      'Implemented Nodemailer for transactional emails, notifications, and user communication',
      'Built a centralized admin panel for user management, automation monitoring, payment tracking, and newsletter/contact management',
    ],

    results: [
      'Delivered a production-ready SaaS automation platform capable of serving multiple businesses',
      'Enabled businesses to automate repetitive workflows and reduce manual operational effort',
      'Improved workflow efficiency through AI-powered automation execution systems',
      'Built a scalable dashboard infrastructure supporting billing, analytics, and automation tracking',
      'Enhanced user onboarding and accessibility through Google OAuth and OTP-based authentication',
      'Delivered secure payment processing with downloadable invoices and subscription management',
      'Achieved responsive and optimized performance across desktop and mobile devices',
      'Successfully established the brand positioning: "100+ Businesses Trust TaskZeno"',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/automation-saas',

    featured: false,
  },
  {
    id: '13',
    slug: 'cinch-ccm-mobile',
    title: 'CINCH CCM Mobile',
    description: 'Appointment & department management app',
    shortDescription: 'React Native appointment management app',
    image: `${baseUrl}p/cinch.png`,
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux',
      'Socket.io',
      'Firebase FCM',
      'REST API',
      'Axios',
      'React Navigation',
      'AsyncStorage',
    ],

    overview:
      'CINCH CCM is a cross-platform mobile application designed for appointment scheduling, department management, and internal team communication for businesses and service organizations. The app enables staff and administrators to create and manage appointments, coordinate across departments, communicate via real-time chat, and receive instant push notifications for scheduling events and updates. I worked on the complete mobile application including navigation architecture, Redux state management, Socket.io live chat integration, Firebase notification setup, REST API integration, and overall performance optimization.',

    challenges: [
      'Designing a complex navigation architecture to support multiple user roles — admin, staff, and clients',
      'Implementing reliable real-time chat that remains functional during unstable mobile connections',
      'Managing synchronized appointment state across multiple users editing the same scheduling data',
      'Delivering accurate and timely push notifications for appointment reminders and status changes',
      'Handling complex form workflows for appointment creation with validation and multi-step flows',
      'Maintaining app performance and responsiveness across various Android and iOS device configurations',
    ],

    solutions: [
      'Built a structured navigation system using React Navigation with role-based routing and deep linking',
      'Integrated Socket.io with reconnect logic and message queuing for stable chat during network drops',
      'Used Redux Toolkit for centralized management of appointments, departments, and messaging state',
      'Implemented Firebase Cloud Messaging with topic-based subscriptions for targeted notification delivery',
      'Built reusable multi-step form components with real-time validation for appointment workflows',
      'Applied AsyncStorage for local session persistence and offline data caching',
      'Optimized API calls with request debouncing and caching to reduce redundant network requests',
    ],

    results: [
      'Delivered a production-ready appointment and department management app for business operations',
      'Achieved reliable real-time chat communication even during intermittent mobile network conditions',
      'Improved scheduling coordination through synchronized appointment state across all user roles',
      'Enhanced staff responsiveness through reliable and targeted push notification delivery',
      'Maintained smooth and responsive UI across diverse Android and iOS device configurations',
      'Successfully published on Google Play Store with stable active user retention',
    ],

    liveUrl: 'https://play.google.com/store/apps/details?id=com.cinchoffline.ccm',
    featured: true,
  },

  // ─── DEALS & AGGREGATION ──────────────────────────────────────────────────

  {
    id: '5',
    slug: 'bachatjar-platform',
    title: 'BachatJar',
    description: 'Coupon & cashback aggregator',
    shortDescription: 'Fast deals platform with Redis caching',
    image: `${baseUrl}p/bachatjar_logo.png`,
    tags: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'SEO',
      'SSR',
      'REST API',
      'Tailwind CSS',
    ],

    overview:
      'BachatJar is a deals aggregation and cashback platform built to collect, organize, and display discount coupons and offers from multiple Indian e-commerce brands. The platform aggregates deals from various sources, categorizes them by brand and type, and serves them to users through an SEO-optimized and fast-loading web interface. I worked on the full-stack development including the Next.js frontend with SSR for SEO, the Node.js backend API, Redis-based caching for high-frequency deal endpoints, and MongoDB performance optimization for large aggregated datasets.',

    challenges: [
      'Handling and processing large volumes of scraped and aggregated deal data efficiently',
      'Reducing API response latency for high-frequency deal listing endpoints under concurrent requests',
      'Maintaining accurate SEO metadata across thousands of dynamically generated deal and brand pages',
      'Keeping deal and coupon data fresh while minimizing unnecessary database reads',
      'Delivering fast page loads on mobile networks where users typically browse deals',
    ],

    solutions: [
      'Implemented Redis caching with configurable TTL for frequently requested deal and category endpoints',
      'Used Next.js SSR and ISR for SEO-optimized page rendering with automatic content revalidation',
      'Optimized MongoDB aggregation pipelines with compound indexing for fast deal filtering and sorting',
      'Built backend microservice-style API modules for deals, categories, brands, and user interactions',
      'Applied image optimization and lazy loading for deal thumbnails and brand logos',
      'Implemented automated cache invalidation on deal updates to maintain content freshness',
    ],

    results: [
      'Reduced average API response time to under 200ms through Redis caching layer',
      'Improved mobile page load performance through SSR, ISR, and image optimization',
      'Achieved better SEO rankings through structured metadata and server-rendered deal pages',
      'Maintained deal data freshness with automated cache invalidation workflows',
      'Built a scalable platform capable of handling growing deal catalogs without performance loss',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/bachatjar',
    featured: false,
  },

  // ─── TOOLS & UTILITIES ────────────────────────────────────────────────────

  {
    id: '16',
    slug: 'ebay-listing-scraper-tool',
    title: 'eBay Listing Scraper Tool',
    description: 'Automated eBay product listing scraping tool',
    shortDescription: 'JavaScript-based eBay scraping and listing extraction tool',
    image: `${baseUrl}p/e-bay-scraper.jpg`,
    tags: [
      'JavaScript',
      'Node.js',
      'Cheerio',
      'Axios',
      'Web Scraping',
      'REST API',
      'JSON',
      'CSV Export',
      'Cron Jobs',
      'Error Handling',
    ],

    overview:
      'A custom Node.js-based automated scraping tool developed to extract structured product listing data from eBay search result pages and product detail pages at scale. The tool collects product titles, pricing information, seller details, listing URLs, shipping data, condition status, and marketplace category data — outputting the results as structured JSON and CSV for downstream analysis and inventory monitoring. I designed and built the complete scraping engine, HTML parsing logic using Cheerio, request throttling mechanisms, pagination handling for large result sets, retry logic for failed requests, and structured data export pipelines.',

    challenges: [
      'Handling frequently changing eBay HTML DOM structure that breaks parser selectors without warning',
      'Avoiding IP-based rate limiting and request blocking from eBay\'s anti-scraping infrastructure',
      'Extracting consistent structured data from inconsistently formatted product listing HTML',
      'Managing pagination efficiently for search queries returning hundreds of pages of results',
      'Handling network timeouts, partial responses, and failed requests without losing accumulated data',
      'Maintaining scraper stability and correctness across different eBay regional marketplace variants',
    ],

    solutions: [
      'Used Cheerio for fast and flexible server-side HTML parsing with adaptable CSS selector strategies',
      'Implemented Axios with configurable request headers, user-agent rotation, and delay intervals',
      'Built reusable and modular parser functions for different page types (search results, product pages)',
      'Implemented automatic pagination traversal with configurable page depth limits',
      'Added exponential backoff retry logic for failed or timeout requests to maximize data recovery',
      'Structured extracted data into clean JSON schema with CSV export capability for analysis workflows',
      'Created cron-based scheduling for automated periodic scraping runs with delta detection',
    ],

    results: [
      'Successfully automated extraction of thousands of eBay product listings per scraping session',
      'Reduced manual marketplace research effort by delivering structured and ready-to-analyze datasets',
      'Achieved reliable data collection through retry logic and error recovery mechanisms',
      'Delivered clean and consistent structured JSON and CSV exports for downstream processing',
      'Built a maintainable and modular scraping architecture adaptable to selector changes',
      'Enabled automated periodic monitoring of competitor listings and pricing through cron scheduling',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/ebay-scrape---listing',
    featured: false,
  },

  // ─── PROJECT MANAGEMENT ───────────────────────────────────────────────────

  {
    id: '17',
    slug: 'teamsync-project-management-platform',
    title: 'TeamSync Project Management Platform',
    description: 'Multi-tenancy team collaboration and project management platform',
    shortDescription: 'Full-stack collaborative workspace and task management system',
    image: `${baseUrl}p/teamsync.png`,
    tags: [
      'React',
      'Vite',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Shadcn UI',
      'Passport.js',
      'Google OAuth',
      'Resend Email',
      'Zod',
      'JWT Auth',
      'REST API',
    ],

    overview:
      'TeamSync is a production-grade multi-tenancy project management and team collaboration platform built for real-world organizations and distributed teams. The platform enables users to create isolated workspaces for different teams or organizations, manage multiple projects within each workspace, create and assign tasks with priority levels and due dates, invite team members via link or email, control access through role-based permissions, and track productivity through analytics dashboards. I built the complete full-stack application — including the React frontend with TypeScript, the Node.js/Express backend, MongoDB database layer with Mongoose transactions, Passport.js authentication with Google OAuth and local email/password flows, transactional email workflows using Resend, and comprehensive role-based access control across all platform operations.',

    challenges: [
      'Architecting a scalable multi-tenant data model that cleanly isolates workspace, project, and user data',
      'Implementing secure dual authentication with Google OAuth and email/password including OTP verification',
      'Designing a flexible role-based access control system supporting Owner, Admin, and Member permission tiers',
      'Building reliable transactional email workflows for OTP verification, password reset, and team invitations',
      'Managing complex task filtering, sorting, and paginated data retrieval across large project datasets',
      'Ensuring data integrity for workspace membership changes and project deletion with cascading operations',
      'Building a responsive multi-dashboard UI that scales across task management, analytics, and settings views',
    ],

    solutions: [
      'Designed a multi-tenant MongoDB schema with workspace-scoped collections and cross-reference validation',
      'Implemented Passport.js with Google OAuth 2.0 strategy and local strategy with bcrypt password hashing',
      'Built OTP-based email verification and secure password reset flows using Resend transactional email API',
      'Created a granular role-based permission middleware system enforced at both API route and UI levels',
      'Built invite-by-link and invite-by-email workflows with expiring signed invitation tokens',
      'Implemented Mongoose multi-document transactions for safe workspace deletion and membership operations',
      'Used Zod for strict request body validation across all API endpoints for type-safe input handling',
      'Built reusable dashboard, task board, and analytics components with TypeScript for type safety',
      'Implemented advanced task filtering by status, priority, assignee, and date with cursor-based pagination',
      'Used Tailwind CSS and Shadcn UI component library for consistent and responsive interface design',
    ],

    results: [
      'Delivered a fully functional multi-tenant project management platform ready for real-world team usage',
      'Implemented secure and seamless dual authentication supporting both Google OAuth and email/password flows',
      'Achieved reliable transactional email delivery for OTP, password reset, and invitation workflows',
      'Built a maintainable and type-safe full-stack TypeScript codebase following clean architecture principles',
      'Enabled flexible team collaboration through role-based access control with three permission tiers',
      'Delivered a responsive and modern UI optimized for both desktop and mobile screen sizes',
      'Built scalable task management with advanced filtering, pagination, and analytics insights',
      'Created a reusable and extensible component library for future platform feature expansion',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/project-management',
    featured: true,
  },

  // ─── PORTFOLIO ────────────────────────────────────────────────────────────

  {
    id: '15',
    slug: 'portfolio-mobile-app',
    title: 'Developer Portfolio Mobile App',
    description: 'Personal portfolio mobile application',
    shortDescription: 'Expo React Native portfolio application',
    image: `${baseUrl}p/portfolio.png`,
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux Toolkit',
      'NativeWind',
      'Tailwind CSS',
      'React Navigation',
      'Reanimated',
      'AsyncStorage',
      'Expo Router',
    ],

    overview:
      'A cross-platform developer portfolio mobile application built using React Native and Expo to showcase technical projects, professional experience, skills, certifications, and achievements in a polished and interactive mobile interface. The application serves as a mobile-native extension of my web portfolio, allowing recruiters and clients to explore my work directly from their Android or iOS devices. I designed and developed the complete application including the navigation architecture, component library, animated UI interactions, responsive layouts, and performance optimizations — ensuring a smooth and professional experience across all screen sizes and device types.',

    challenges: [
      'Designing a visually polished and responsive UI architecture that works across diverse screen sizes',
      'Maintaining smooth 60fps animations and transitions between portfolio sections and project detail screens',
      'Structuring a scalable navigation system that cleanly organizes projects, skills, experience, and contact sections',
      'Creating reusable and maintainable component architecture for a consistent design system',
      'Optimizing rendering performance on lower-end devices without sacrificing visual quality',
      'Delivering a native-quality mobile experience that accurately represents professional work and capabilities',
    ],

    solutions: [
      'Built with Expo and Expo Router for streamlined development, OTA updates, and simplified build workflows',
      'Used TypeScript throughout for type-safe props, navigation params, and state management',
      'Implemented NativeWind (Tailwind CSS) for consistent, responsive, and utility-first UI styling',
      'Integrated React Navigation with structured stack and tab navigators for intuitive section navigation',
      'Used Reanimated for smooth native-driven animations on project cards and screen transitions',
      'Implemented Redux Toolkit for managing application-level state across sections and themes',
      'Applied component memoization and lazy screen loading to optimize rendering on low-end devices',
      'Built a shared design token system through NativeWind configuration for visual consistency',
    ],

    results: [
      'Delivered a polished and professional cross-platform portfolio app on Android and iOS',
      'Achieved smooth 60fps animations and transitions throughout the application',
      'Maintained responsive and consistent UI layout across phones and tablets of various screen sizes',
      'Improved portfolio accessibility for recruiters and clients through a dedicated mobile experience',
      'Built a scalable and maintainable TypeScript codebase ready for future content and feature additions',
      'Demonstrated advanced React Native and mobile development capabilities through the project itself',
    ],

    liveUrl: 'https://bablu-verma.vercel.app/#apkInstall',
    featured: true,
  },
  {
    id: '21',
    slug: 'blinkit-ecommerce-platform',
    title: 'BlinkIt E-Commerce',
    description: 'Full-stack grocery & convenience store platform inspired by BlinkIt',
    shortDescription: '10-minute delivery grocery platform with Stripe payments',
    image: `${baseUrl}p/blinkeyit.jpg`,
    tags: [
      'React.js',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'Stripe',
      'Cloudinary',
      'JWT',
      'Tailwind CSS',
    ],

    overview:
      'BlinkIt E-Commerce is a full-stack grocery and convenience store web application inspired by BlinkIt, designed to provide a fast and seamless online shopping experience with 10-minute delivery messaging. The platform includes complete user authentication, product browsing with category and sub-category filtering, full-text search with infinite scrolling, shopping cart management, Stripe online payments, order history tracking, and address management. I developed both the frontend and backend architecture using React, Redux Toolkit, Node.js, Express, and MongoDB while implementing secure JWT authentication, Cloudinary image handling, and scalable REST APIs.',

    challenges: [
      'Managing scalable product filtering and full-text search with pagination across large product datasets',
      'Implementing secure JWT authentication with refresh token handling and protected admin routes',
      'Handling dynamic product structures with custom fields, discounts, stock, and multiple category mappings',
      'Building a smooth checkout workflow supporting both Cash on Delivery and Stripe online payments',
      'Maintaining responsive UI performance during infinite scrolling, cart updates, and large product rendering',
    ],

    solutions: [
      'Implemented MongoDB text indexing and optimized query pipelines for fast product search and filtering',
      'Built JWT-based authentication with access and refresh token mechanisms for secure session handling',
      'Designed modular REST APIs for users, products, categories, orders, carts, and address management',
      'Integrated Stripe payment gateway for secure online transactions alongside COD support',
      'Used Redux Toolkit for centralized state management across authentication, cart, and product flows',
      'Integrated Cloudinary for scalable image upload and hosting of product and user assets',
      'Implemented protected admin dashboards with role-based route authorization and CRUD operations',
    ],

    results: [
      'Delivered a complete production-ready full-stack e-commerce platform with scalable architecture',
      'Achieved fast product discovery using optimized search, category filtering, and infinite scrolling',
      'Improved user experience through persistent carts, responsive UI, and streamlined checkout flow',
      'Enabled secure payment processing with Stripe integration and protected authentication flows',
      'Built a maintainable admin system for managing products, categories, orders, and inventory efficiently',
    ],

    liveUrl: 'https://github.com/Bablu-Verma/binkeyit-e-commerce',
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
    "I'm a Full Stack Developer with 4+ years of experience building scalable web applications, backend systems, mobile apps, and real-time infrastructures. My core expertise lies in React.js, Next.js, Node.js, Express.js, Python, React Native, PostgreSQL, and MongoDB.",

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
        'Python'
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