// Import images from assets
import uberhomeImg from '../assets/uberhome.png';
import homeImg from '../assets/home.png';
import contactImg from '../assets/contact.png';
import cardsImg from '../assets/cards.png';
import dashImg from '../assets/dash.png';
import createeventImg from '../assets/createevent.png';
import eventdetailsImg from '../assets/eventdetails.png';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  features: string[];
  category: string; // Added for better organization
  status: 'completed' | 'in-progress' | 'live'; // Added project status
  githubLink?: string;
  liveLink?: string;
  demoCredentials?: { // Added for projects that need login
    username?: string;
    password?: string;
  };
}

export const projects: Project[] = [

  {
    id: 'music-website',
    title: 'Mood Ki Sun - Music Streaming Platform',
    shortDescription: 'A feature-rich music platform that allows users to stream, discover, and organize their favorite tracks across various genres.',
    fullDescription: 'Mood Ki Sun is a comprehensive music streaming platform built with modern web technologies. The application features a sleek, responsive interface that adapts seamlessly across devices. Users can create accounts, build custom playlists, explore music by genre, mood, or artist, and enjoy an immersive listening experience with a custom-built audio player featuring advanced controls like shuffle, repeat, and queue management.',
    thumbnail: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Web Audio API', 'LocalStorage API', 'Responsive Design'],
    features: [
      'Secure user authentication system',
      'Advanced music player with custom controls',
      'Dynamic playlist creation and management',
      'Genre and mood-based music discovery',
      'Search functionality with filters',
      'Fully responsive design for all devices',
      'Offline playlist support using LocalStorage',
      'Social sharing features'
    ],
    category: 'Web Application',
    status: 'completed',
    githubLink: 'https://github.com/kinshukkush/mood-ki-sun',
    liveLink: 'https://mood-ki-sun.netlify.app' // Add your actual live link
  },
  {
    id: 'car-sharing',
    title: 'RideShare - Car Sharing Platform',
    shortDescription: 'A secure and user-friendly car sharing platform enabling seamless ride booking and journey management.',
    fullDescription: 'RideShare is a modern car sharing application built with React.js and styled for optimal user experience. The platform revolutionizes urban transportation by connecting drivers with passengers through an intuitive interface. Features include real-time ride tracking, secure payment processing, driver ratings, and an efficient booking system. The application prioritizes user safety with verified driver profiles and in-app emergency features.',
    thumbnail: 'https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      uberhomeImg,
      homeImg,
      contactImg,
      cardsImg
    ],
    technologies: ['React.js', 'React Router', 'Context API', 'CSS Modules', 'Axios', 'Google Maps API', 'Stripe API'],
    features: [
      'Secure user registration and authentication',
      'Real-time ride booking system',
      'GPS-based journey tracking',
      'Integrated payment processing',
      'Driver and passenger rating system',
      'Ride history and receipts',
      'Push notifications for ride updates',
      'Emergency contact feature'
    ],
    category: 'Web Application',
    status: 'live',
    githubLink: 'https://github.com/kinshukkush/uber-car-sharing',
    liveLink: 'https://carsharing-kinshuk.netlify.app',
    demoCredentials: {
      username: 'demo@example.com',
      password: 'demo123'
    }
  },
  {
    id: 'event-management',
    title: 'EventHub - Event Management System',
    shortDescription: 'A comprehensive Laravel-based platform for seamless event creation, discovery, and booking management.',
    fullDescription: 'EventHub is a full-stack event management solution built with Laravel and styled with Tailwind CSS. The platform serves as a bridge between event organizers and attendees, offering features like event creation with rich media support, advanced search filters, secure booking system, and comprehensive admin controls. The system includes automated email notifications, QR code generation for tickets, and analytics dashboard for event organizers to track performance.',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      dashImg,
      createeventImg,
      eventdetailsImg,
      'https://cdni.iconscout.com/illustration/premium/thumb/event-planning-illustration-download-in-svg-png-gif-file-formats--agenda-organization-business-task-timetable-coordination-schedule-sign-pack-illustrations-10138557.png?f=webp',
      'https://img.freepik.com/free-vector/appointment-booking-landing-page_23-2148565869.jpg?semt=ais_hybrid&w=740'
    ],
    technologies: ['Laravel 10', 'Tailwind CSS', 'Blade Templates', 'MySQL', 'Alpine.js', 'Laravel Livewire', 'Stripe API'],
    features: [
      'Dynamic event listing with advanced filters',
      'Secure booking system with payment integration',
      'My Booked Events dashboard with cancellation',
      'Comprehensive admin panel for event management',
      'QR code generation for event tickets',
      'Email notifications for bookings',
      'Event analytics and reporting',
      'Social media integration',
      'Responsive design with smooth animations',
      'Multi-language support'
    ],
    category: 'Full Stack Application',
    status: 'completed',
    githubLink: 'https://github.com/kinshukkush/event-management',
    liveLink: 'https://eventhub-demo.com'
  },
  {
    id: 'netflix-clone',
    title: 'StreamFlix - Netflix Clone',
    shortDescription: 'A pixel-perfect Netflix clone featuring real-time movie data, responsive design, and smooth user interactions.',
    fullDescription: 'StreamFlix is a feature-rich Netflix clone that demonstrates proficiency in modern React development and API integration. Built using React.js with hooks and functional components, it fetches real-time data from The Movie Database (TMDB) API. The application features a dynamic hero banner that showcases trending content, category-based movie organization, smooth horizontal scrolling carousels, and hover effects that reveal additional movie information. The responsive design ensures a seamless experience across all devices.',
    thumbnail: 'https://images.pexels.com/photos/5082582/pexels-photo-5082582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/5082582/pexels-photo-5082582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://www.codewithrandom.com/wp-content/uploads/2022/08/netflix-1024x428.png',
      'https://www.justinlowen.dev/img/portfolio-01-netflix-clone.png',
      'https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p9bvi12wbxneyc6eyhwz.PNG'
    ],
    technologies: ['React.js', 'React Hooks', 'TMDB API', 'CSS3', 'Axios', 'React Router', 'Firebase (Authentication)', 'Responsive Design'],
    features: [
      'Dynamic hero banner with featured content',
      'Category-wise content organization',
      'Real-time data fetching from TMDB API',
      'Smooth horizontal scroll for content rows',
      'Hover effects with preview information',
      'Search functionality',
      'Responsive design for all screen sizes',
      'Lazy loading for optimal performance',
      'Video trailer integration',
      'Watchlist functionality'
    ],
    category: 'Frontend Application',
    status: 'live',
    githubLink: 'https://github.com/kinshukkush/netflix-clone',
    liveLink: 'https://netflix-clone-kinshuk.netlify.app' // Add your actual live link
  },

  {
    id: 'ui-ux-assignment',
    title: 'UI-UX Assignment - Responsive Dashboard Redesign',
    shortDescription: 'A modern and visually refined dashboard interface built with Next.js and Tailwind CSS, focusing on improved layout balance, dark mode, and recruiter workflow optimization.',
    fullDescription: 'UI-UX Assignment is a professionally designed dashboard application developed using Next.js and TypeScript. The project demonstrates UI/UX enhancements such as optimized spacing, balanced color usage, and refined typography to deliver a clean and consistent interface. It introduces a dark mode for better readability, distinct job status indicators (Open/Closed), and accessible recruiter actions like Log Call, Add Note, and Send Email. The design focuses on usability, responsive adaptability, and improved interaction flow, ensuring recruiters can manage job listings efficiently. Deployed on Vercel, this project showcases practical design thinking, frontend performance optimization, and a keen eye for visual aesthetics.',
    thumbnail: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Hooks', 'Framer Motion', 'Vercel'],
    features: [
      'Dark mode for reduced eye strain and enhanced UI consistency',
      'Balanced spacing and improved layout structure',
      'Interactive recruiter actions: Log Call, Add Note, Send Email',
      'Distinct job status indicators for better visual clarity',
      'Optimized contrast, typography, and visual hierarchy',
      'Fully responsive design with accessibility improvements',
      'Modern animations powered by Framer Motion',
      'Deployed seamlessly on Vercel for production use'
    ],
    category: 'UI/UX Design & Frontend Development',
    status: 'completed',
    githubLink: 'https://github.com/kinshukkush/UI-UX-Assignment',
    liveLink: 'https://ui-ux-assignment-mu.vercel.app'
  },
  {
    id: 'smart-split',
    title: 'Smart Split - Group Expense & Bill Splitting App',
    shortDescription: 'A modern single-page web application built with Vite and TypeScript that simplifies group expense tracking, bill splitting, and shared payment management.',
    fullDescription: 'Smart Split is a responsive and user-friendly web application designed to make splitting bills and managing group expenses effortless. Built with Vite, React, and TypeScript, it allows users to add participants, record expenses, and automatically calculate each member’s share. The interface emphasizes clarity and simplicity with a clean layout powered by Tailwind CSS. The app is optimized for both desktop and mobile devices, ensuring seamless accessibility and fast performance. Ideal for roommates, friends, or travel groups, Smart Split eliminates manual calculations and keeps shared payments transparent and organized. This project highlights practical UI/UX thinking, TypeScript proficiency, and efficient SPA development.',
    thumbnail: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'PostCSS', 'ESLint'],
    features: [
      'Single Page Application (SPA) architecture for fast navigation',
      'Add participants and record shared expenses',
      'Automatic calculation of individual payment shares',
      'Intuitive and minimal UI design for easy usability',
      'Fully responsive layout for desktop and mobile users',
      'Optimized build performance with Vite',
      'Clean and scalable code structure using TypeScript',
      'Deployed with GitHub Pages for public access'
    ],
    category: 'Web Application',
    status: 'completed',
    githubLink: 'https://github.com/kinshukkush/SmartSplit',
    liveLink: 'https://kinshukkush.github.io/SmartSplit/'
  },
  {
    id: 'xeno-crm',
    title: 'Xeno CRM - Customer Relationship Management Platform',
    shortDescription: 'A comprehensive CRM platform for managing customer data, creating targeted campaigns, and tracking delivery metrics.',
    fullDescription: 'Xeno CRM is a full-stack customer relationship management application built with React.js and Spring Boot. The platform enables businesses to manage customer relationships effectively through advanced audience segmentation, campaign creation, and real-time delivery tracking. Features include Google OAuth authentication, AI-powered message suggestions, sophisticated customer filtering based on spending and visit patterns, and comprehensive campaign history. The application uses JWT-based authentication for secure cross-domain communication and MongoDB for scalable data storage.',
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdrhY6zM7txEf61nPO67_Cl7rOyCGsyEb9GaIEqe3M-p-yN2nJeBUGCXkDygK7t8xYVcKwSgu4v0_u6EZF5srUh16p0vNl1K8hBeBV8dg-KcOpt7y8vrkamMOU2HxW0STp0JDEp21FWuCWxDXZX0EtxoLPSBWR6WwhXZglXIvWXbh24ojuyofD6htY8D4/s3396/userinter.png',
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Campaign builder
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Dashboard
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Analytics
      'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  // Campaign history
    ],
    technologies: [
      'React.js',
      'Spring Boot',
      'MongoDB',
      'JWT Authentication',
      'Google OAuth 2.0',
      'Pub/Sub Messaging',
      'RESTful API',
      'Axios',
      'Maven',
      'Docker'
    ],
    features: [
      'Google OAuth 2.0 authentication with JWT tokens',
      'Advanced customer segmentation and filtering',
      'Dynamic audience size calculation',
      'AI-powered campaign message suggestions',
      'Real-time campaign creation and management',
      'Comprehensive campaign history and analytics',
      'Customer spending and visit pattern analysis',
      'Delivery receipt tracking via Pub/Sub',
      'Responsive and modern UI design',
      'Secure cross-domain authentication',
      'RESTful API architecture',
      'MongoDB Atlas cloud database integration'
    ],
    category: 'Web Application',
    status: 'live',
    githubLink: 'https://github.com/kinshukkush/CRM-FRONTEND',
    liveLink: 'https://crm-frontend-three-wheat.vercel.app',
    demoCredentials: {
      username: 'Login with Google OAuth',
      password: 'Auto generated upon login'
    }
  },
  {
    id: 'mern-ecommerce-store',
    title: 'MERN Store - E-Commerce Platform',
    shortDescription: 'A modern full-stack e-commerce platform with shopping cart, order management, and admin panel built using the MERN stack.',
    fullDescription: 'MERN Store is a comprehensive e-commerce solution built with MongoDB, Express.js, React 19, and Node.js. The platform provides a complete shopping experience with features like product catalog with search functionality, real-time shopping cart updates with promo code support, secure JWT authentication, order tracking with status workflow (Pending → Shipped → In Transit → Delivered), and a powerful admin panel for managing users, products, and orders. The application features a beautiful dark theme UI with smooth animations, Indian Rupee (₹) currency support, and is fully responsive across all devices. Built with modern technologies including Vite for lightning-fast development, React Router for seamless navigation, and deployed on Vercel for optimal performance.',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    technologies: ['React 19', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Vite', 'JWT', 'Bcrypt', 'Mongoose', 'Lucide React', 'Vercel'],
    features: [
      'Product catalog with search and filtering',
      'Real-time shopping cart with promo codes',
      'Secure JWT authentication and authorization',
      'Order placement and tracking system',
      'Order status workflow management',
      'User profile management',
      'Admin panel for users, products, and orders',
      'Role-based access control (Admin/User)',
      'Indian Rupee (₹) currency support',
      'Dark theme UI with smooth animations',
      'Fully responsive design',
      'About page with company information'
    ],
    category: 'Full Stack Application',
    status: 'completed',
    githubLink: 'https://github.com/kinshukkush/MERN-FRONTENT',
    liveLink: 'https://mern-frontent-main.vercel.app',
    demoCredentials: {
      username: 'demo@example.com',
      password: 'demo123'
    }
  },
  {
    id: 'python-data-pipeline-frontend',
    title: 'E-Commerce Analytics Dashboard',
    shortDescription: 'A modern, dark-themed analytics dashboard built with React, TypeScript, and Tailwind CSS for real-time e-commerce insights.',

    fullDescription: `A powerful frontend dashboard for the Python-based E-Commerce Data Pipeline project. 
Built with React, TypeScript, TailwindCSS, and Recharts, this application provides real-time analytics, 
product and order management, and dynamic visualizations. Features include a stunning glassmorphism 
dark UI, smooth animations, responsive layout, live FastAPI backend integration, and automated 
order/product calculations. The dashboard is optimized with Vite for fast builds and deployed on Vercel 
for reliable performance.`,

    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    images: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    ],

    technologies: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Recharts',
      'Lucide React',
      'FastAPI (Python)',
      'Render',
      'Vercel'
    ],

    features: [
      'Real-time analytics dashboard with charts',
      'Product management with search and pagination',
      'Order creation with auto-calculation',
      'Dark theme glassmorphism UI',
      'Responsive design for all devices',
      'Dynamic forms with validation',
      'Revenue trends and top-product charts',
      'API integration with FastAPI backend',
      'CORS-safe Vite proxy setup',
      'Interactive data visualization with tooltips'
    ],

    category: 'Frontend Application',
    status: 'completed',

    githubLink: 'https://github.com/kinshukkush/PYTHON-DATA-PIPELINE-FRONTEND',
    liveLink: 'https://python-frontend-iota.vercel.app',

    demoCredentials: {
      username: 'demo@example.com',
      password: 'demo123'
    }
  },
  {
    id: 'endless-run-unity-game',
    title: 'Endless Run – Enhanced Unity Edition',
    shortDescription: 'A polished 3D endless runner game built in Unity with a modern UI theme system, advanced animations, particle effects, and optimized gameplay features.',

    fullDescription: `Endless Run – Enhanced Edition is a fully upgraded version of Unity’s original Endless Runner sample game. 
This edition modernizes the entire experience with a professional UI/UX overhaul, 5 dynamic theme presets, an advanced 
animation system, particle effect manager, combo-based score system, enhanced button interactions, and complete 
documentation. The game includes optimized object pooling, improved performance, better code quality, and bug fixes. 
Built with Unity (2019.3+), it showcases gameplay programming, visual effects, UI animation workflows, and 
production-ready component design suitable for professional game development portfolios.`,

    thumbnail: 'https://images.pexels.com/photos/907173/pexels-photo-907173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    images: [
      'https://images.pexels.com/photos/907173/pexels-photo-907173.jpeg',
      'https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg',
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
      'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    ],

    technologies: [
      'Unity 2019.3+',
      'C#',
      'Git LFS',
      'Addressables System',
      'Unity UI Toolkit',
      'Particle Systems',
      'Object Pooling'
    ],

    features: [
      'Modern UI theme system with 5 presets',
      'Advanced UI animation system',
      'Enhanced score display with combos',
      'Interactive buttons with hover, ripple, click animations',
      'Dynamic particle effects with pooling',
      'Improved gameplay stability and bug fixes',
      'Character selection system',
      'Consumables and power-ups',
      'Mission and leaderboard systems',
      'Mobile-optimized performance',
      'Complete setup and build documentation',
      'Addressables-based asset loading'
    ],

    category: 'Game Development (Unity 3D)',
    status: 'completed',

    githubLink: 'https://github.com/kinshukkush/ENDLESS-RUN',
  },
  {
  id: 'library-management-system',
  title: 'Library Management System – Java CLI App',
  shortDescription: 'A fully functional command-line library management system built in Java using OOP, Collections, and File I/O for persistent data storage.',

  fullDescription: `A console-based Library Management System developed in Java, showcasing Object-Oriented Programming, 
data structures, and file handling. The system allows librarians to manage books, register members, and handle 
book lending operations with real-time availability updates. All data is securely stored using Java’s serialization 
(File I/O), ensuring the library state is preserved across sessions. This project demonstrates clean class design, 
practical application of OOP principles, and modular code architecture suitable for beginners and intermediate 
Java developers.`,

  thumbnail: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

  images: [
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
    'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    'https://cdn.slidesharecdn.com/ss_thumbnails/librarymanagementsystem-180928203554-thumbnail.jpg?width=640&height=640&fit=bounds',
    'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg'
  ],

  technologies: [
    'Java',
    'Object-Oriented Programming (OOP)',
    'Java Collections Framework',
    'Serialization (FileOutputStream, ObjectOutputStream)',
    'Scanner (User Input)',
    'UUID'
  ],

  features: [
    'Add new books (ISBN, title, author)',
    'Register library members with unique IDs',
    'Check-out and return books with status tracking',
    'Real-time availability updates',
    'Automatic data persistence using serialization',
    'View all books and members in formatted lists',
    'Clean modular OOP architecture (Book, Member, Library classes)'
  ],

  category: 'Java Application',
  status: 'completed',

  githubLink: 'https://github.com/kinshukkush/LIBRARY-MANAGEMENT-SYSTEM',
},
{
  "id": "parse-n-practice",
  "title": "Parse & Practice – AI Test Generator",
  "shortDescription": "AI-powered practice test generator that transforms study materials into interactive, timed tests with analytics using React, TypeScript, and OpenRouter AI.",

  "fullDescription": `Parse & Practice is an AI-powered web application that instantly converts any study material into interactive practice tests. Using OpenRouter AI (GPT-3.5 Turbo), it automatically detects questions and answers from uploaded text files or pasted content, generates timed practice modes with progress tracking, achievement badges, and detailed analytics. Built with modern React 18, TypeScript, Tailwind CSS, and shadcn/ui, this responsive app simulates real exam conditions and helps students identify weak areas through smart performance tracking. Perfect for competitive exam preparation, interview practice, and academic studying.`,

  "thumbnail": "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",

  "images": [
    "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
    "https://cdn.slidesharecdn.com/ss_thumbnails/librarymanagementsystem-180928203554-thumbnail.jpg?width=640&height=640&fit=bounds"
  ],

  "technologies": [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "OpenRouter AI (GPT-3.5 Turbo)",
    "Zustand",
    "Framer Motion",
    "Lucide React"
  ],

  "features": [
    "AI-powered question detection from any text content",
    "Instant test generation with multiple question formats",
    "Timed practice mode with customizable timers",
    "Smart progress tracking and performance analytics",
    "Achievement system with badges and milestones",
    "AI chat interface for content discussion",
    "Fully responsive design (mobile + desktop)",
    "Drag & drop file upload or text paste support",
    "Real-time feedback and answer review",
    "Modern UI with smooth animations"
  ],

  "category": "Web Application",
  "status": "completed",

  "githubLink": "https://github.com/kinshukkush/PARSE-N-PRACTICE",
  liveLink: 'https://parse-n-practice.vercel.app/',
},
{
  "id": "health-hub-connect",
  "title": "HealthHub Connect – Healthcare Platform",
  "shortDescription": "Modern full-stack healthcare management platform with React, TypeScript, MongoDB, dark mode UI, JWT auth, appointment booking, medical records, and admin dashboard.",

  "fullDescription": `HealthHub Connect is a production-ready healthcare management platform featuring a beautiful dark-mode interface by default. Patients can browse doctors, book appointments with approval workflows, manage medical records securely, and customize preferences through a comprehensive settings page. Administrators access analytics dashboards and manage all appointments. Built with React 18, TypeScript, TailwindCSS, Node.js, Express, MongoDB Atlas, and JWT authentication, it includes smooth Framer Motion animations, responsive design, and complete deployment guides for Vercel (frontend) + Render/Railway (backend).`,

  "thumbnail": "https://t4.ftcdn.net/jpg/15/95/75/33/360_F_1595753359_hT7suC4spWzNghicEcUEWwAriNwnyy2g.jpg",

  "images": [
    "https://imgs.search.brave.com/pkvUf5O5oMJKrOlZXcauD7oqJBoqID8yWCkgJ3CXCOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zNDA4/ODYucGNkbi5jby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/MS9oZWxsby1wb3J0/ZXItcy1zLXRodW1i/LmpwZw",
    "https://arcadia.io/assets/_webpMobile600/199687/Healthcare-Data-Platform_Integration-Challenges.webp",
    "https://cdn.prod.website-files.com/63c0fd37a12dc3164ef8e448/65de012749ec1682e08cb28b_64883735e545bb88ffa060a1_mahalo_database.png",
    "https://img.freepik.com/premium-photo/telemedicine-hand-holding-smartphone-medical-doctor-online-communicating-patient-vr-medical_102957-286.jpg?semt=ais_hybrid&w=740&q=80"
  ],

  "technologies": [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Mongoose",
    "JWT Authentication",
    "bcrypt",
    "React Router v6",
    "React Context API"
  ],

  "features": [
    "Secure JWT authentication with bcrypt password hashing",
    "Real-time doctor search and appointment booking",
    "Medical records management with secure storage",
    "Admin dashboard with comprehensive analytics",
    "Dark mode default with theme switcher (Light/Dark/System)",
    "Smooth Framer Motion animations and transitions",
    "Responsive design across all devices",
    "Settings page with profile management",
    "Appointment approval workflow for admins",
    "MongoDB Atlas integration with full schema",
    "Production deployment (Vercel + Render/Railway)",
    "Demo accounts for immediate testing"
  ],

  "category": "Full-Stack Application",
  "status": "completed",

  "githubLink": "https://github.com/kinshukkush/health-hub-connect",
  "liveLink" : "https://health-hub-connect-livid.vercel.app/dashboard"
},

{
  id: 'famous-connect',
  title: 'Famous Connect - Service Marketplace App',
  shortDescription: 'A modern React Native mobile application connecting users with local service providers including plumbers, electricians, cleaners, painters, and movers.',
  fullDescription: 'Famous Connect is a premium mobile marketplace that seamlessly connects users with local service providers through a sleek, performant cross-platform experience. Built with React Native, Expo, and TypeScript, the app delivers modern features including Supabase authentication with persistent sessions, real-time chat with service providers using Supabase subscriptions, comprehensive service discovery with pagination and pull-to-refresh, and a favorites system with local persistence. The application emphasizes UI/UX excellence with dark mode support, smooth animations, custom icons from Lucide React Native, and a professional theme system. State management is handled efficiently with TanStack Query for server state and Context API for global state, ensuring optimal performance and user experience across iOS and Android platforms.',
  thumbnail: 'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  images: [
    'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4792284/pexels-photo-4792284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ],
  technologies: [
    'React Native',
    'Expo',
    'TypeScript',
    'Supabase',
    'TanStack Query',
    'React Navigation',
    'AsyncStorage',
    'Lucide Icons',
    'Formik',
    'Yup',
    'Axios'
  ],
  features: [
    'Secure authentication with Supabase (email/password)',
    'Persistent user sessions across app restarts',
    'Real-time chat with service providers using subscriptions',
    'Service discovery with search, filtering, and pagination',
    'Favorites system with AsyncStorage persistence',
    'Dark mode with system preference detection',
    'Comprehensive service details with image gallery',
    'Contact options (call, chat) and booking functionality',
    'Pull-to-refresh for latest service updates',
    'Profile management with booking statistics',
    'Smooth animations and responsive design',
    'Cross-platform support (iOS & Android)',
    'Form validation with Formik and Yup',
    'Native screen optimization and gesture handling'
  ],
  category: 'Mobile Application',
  status: 'completed',
  githubLink: 'https://github.com/kinshukkush/FAMOUS-CONNECT',
  // demoCredentials: {
  //   username: 'See DEMO_CREDENTIALS.md in repository'
  // }
}

];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter(project =>
    project.technologies.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const projectCategories = [
  'Web Application',
  'Full Stack Application',
  'Frontend Application',
  'Mobile Application'
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();