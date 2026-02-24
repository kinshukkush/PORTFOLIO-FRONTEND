import { motion } from 'framer-motion';
import { 
  Code, 
  GraduationCap, 
  MapPin,
  Calendar,
  Award,
  Coffee,
  Heart,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Download,
  Instagram,
  Twitter
} from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import SkillsSection from '../components/about/SkillsSection';
import { useDocumentTitle } from '../hooks/useSEO';
import ExperienceSection from '../components/about/ExperienceSection';
import { useState } from 'react';
import pic from '../assets/pic.png';
import resume from '../assets/resume.pdf';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  useDocumentTitle({
    title: 'About Me',
    description: 'Learn more about Kinshuk Saxena - Full Stack Developer with 2+ years of experience in React, Spring Boot, and modern web technologies.'
  });

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Experience",
      description: "2+ Years",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education",
      description: "B.Tech CSE",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      description: "Jaipur, India",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Focus",
      description: "Full Stack",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "25+", icon: <Award /> },
    { label: "Technologies Mastered", value: "15+", icon: <Code /> },
    { label: "Cups of Coffee", value: "∞", icon: <Coffee /> },
    { label: "Happy Clients", value: "20+", icon: <Heart /> }
  ];

  const interests = [
    "🎯 Problem Solving",
    "🚀 Open Source",
    "📱 Mobile Development",
    "🤖 Machine Learning",
    "🎨 UI/UX Design",
    "📊 Data Visualization",
    "⛰️ Hiking & Trekking",
    "📸 Photography"
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/kinshukkush", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/kinshukkush", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:kinshuksaxena3@gmail.com", label: "Email" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/kinshuk._.saxena", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/KINSHUKSAXENA_", label: "Twitter" },
  ];

  const tabContent = {
    story: {
      title: "My Story",
      content: [
        "Hello! I'm Kinshuk Saxena, a passionate Full Stack Developer based in the vibrant city of Jaipur, Rajasthan. My journey into the world of technology began during my school days at St. Teresa School, where I first discovered the magic of turning ideas into digital reality.",
        "Currently pursuing my B.Tech in Computer Science Engineering, I've immersed myself in the ever-evolving landscape of web development. My expertise spans across modern frameworks like React.js, Node.js, and Laravel, allowing me to craft end-to-end solutions that not only function flawlessly but also provide exceptional user experiences.",
        "What drives me is the challenge of solving complex problems and the satisfaction of seeing my code come to life. From building responsive music streaming platforms to developing comprehensive event management systems, each project has been a stepping stone in my continuous learning journey.",
        "Beyond coding, I'm an avid hiker who finds inspiration in nature's patterns and a photography enthusiast who captures moments that tell stories. I believe in the philosophy of continuous improvement and am always eager to explore new technologies and methodologies that push the boundaries of what's possible."
      ]
    },
    approach: {
      title: "My Approach",
      content: [
        "I believe in writing clean, maintainable code that stands the test of time. My development philosophy centers around three core principles: User-First Design, Performance Optimization, and Continuous Innovation.",
        "When tackling a new project, I start by deeply understanding the problem space and user needs. This involves thorough research, stakeholder interviews, and competitive analysis to ensure the solution truly addresses the core challenges.",
        "I'm a strong advocate for agile development methodologies and believe in the power of iterative improvement. Regular testing, code reviews, and user feedback loops are integral parts of my development process.",
        "Collaboration is key to my work style. Whether working with designers, backend developers, or clients, I prioritize clear communication and believe that the best solutions emerge from diverse perspectives coming together."
      ]
    },
    values: {
      title: "My Values",
      content: [
        "Excellence in Execution: I'm committed to delivering high-quality work that exceeds expectations. Every line of code is written with purpose, and every feature is crafted with the end-user in mind.",
        "Continuous Learning: Technology evolves rapidly, and I embrace this change. I dedicate time each week to learning new technologies, attending webinars, and contributing to open-source projects.",
        "Ethical Development: I believe in building technology that respects user privacy, promotes accessibility, and contributes positively to society. Every project is an opportunity to make a meaningful impact.",
        "Work-Life Balance: While I'm passionate about coding, I also value personal growth and well-being. My hobbies like hiking and photography help me maintain perspective and bring fresh creativity to my work."
      ]
    }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              title="About Me"
              subtitle="Passionate developer, creative thinker, lifelong learner"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
            
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                {/* Image with Overlay */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={pic} 
                    alt="Kinshuk Kush" 
                    className="w-full h-auto transform transition duration-500 group-hover:scale-105 select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold">Kinshuk Kush</h3>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-4">
                  {/* Quick Info */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Available for freelance projects</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>

                  {/* Download Resume Button */}
                  <motion.a
                    href={resume}
                    download
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </motion.a>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 ${item.bgColor} rounded-lg`}>
                        <div className={item.color}>{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interests */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Content */}
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Tab Navigation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 bg-primary-50 dark:bg-primary-900/10'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                      <span className="w-10 h-1 bg-primary-500 rounded-full"></span>
                      {tabContent[activeTab as keyof typeof tabContent].title}
                    </h2>
                    <div className="space-y-4">
                      {tabContent[activeTab as keyof typeof tabContent].content.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-primary-500 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote Section */}
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <blockquote className="text-lg italic">
                  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
                </blockquote>
                <cite className="block text-sm mt-2 text-white/80">- Steve Jobs</cite>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              My Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
              
              {/* Timeline Items */}
              {[
                {
                  year: "2024",
                  title: "Full Stack Developer",
                  description: "Working on exciting projects using React, Node.js, and modern web technologies.",
                  side: "left"
                },
                {
                  year: "2023",
                  title: "Started B.Tech CSE",
                  description: "Enrolled in Computer Science Engineering to deepen my technical knowledge.",
                  side: "right"
                },
                {
                  year: "2022",
                  title: "First Web Project",
                  description: "Built my first complete web application, sparking my passion for development.",
                  side: "left"
                },
                {
                  year: "2021",
                  title: "Discovered Programming",
                  description: "Wrote my first lines of code and fell in love with problem-solving.",
                  side: "right"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center mb-8 ${
                    item.side === 'left' ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: item.side === 'left' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  <div className={`flex-1 ${item.side === 'left' ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <div className="text-primary-500 font-bold">{item.year}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Skills and Experience Sections */}
          <SkillsSection />
          <ExperienceSection />

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Work Together
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </motion.a>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;