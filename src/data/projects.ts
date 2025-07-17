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
      '/uberhome.png',
      '/home.png',
      '/contact.png',
      '/cards.png'
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
      '/eventhome.png', 
      '/createevent.png',
      '/eventdetails.png',
      '/dash.png',
      '/mybookings.png' 
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