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
import pic from '../assets/portrait-about.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  useDocumentTitle({
    title: 'About Me',
    description: 'Learn more about Kinshuk Saxena — Software Developer at CyberJoar AI building computer vision, backend and full-stack systems.'
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
      description: "Gurugram, India",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Focus",
      description: "AI Systems",
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
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/kinshuk_.saxena", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/KINSHUKSAXENA_", label: "Twitter" },
  ];

  const tabContent = {
    story: {
      title: "My Story",
      content: [
        "I'm Kinshuk Saxena, a Software Developer at CyberJoar AI in Gurugram. I build production-oriented AI, backend and full-stack products, with a particular focus on computer vision systems that must stay fast, private and dependable in real operational environments.",
        "My work spans Python, FastAPI, React, ONNX Runtime, WebSockets and Docker. Across products such as PEHCHAAN, CMS and METIS, I have worked from architecture and asynchronous inference pipelines through APIs, security, deployment and the interfaces operators use every day.",
        "I completed my B.Tech in Computer Science Engineering at Lovely Professional University in May 2026. Before joining CyberJoar AI, freelance engineering taught me to translate loosely defined client needs into maintainable releases, communicate trade-offs clearly and own delivery end to end.",
        "What keeps me engaged is the boundary between ambitious ideas and software that genuinely works: measurable performance, thoughtful failure handling, privacy-aware design and an experience that remains clear under pressure. Outside work, hiking and photography keep my eye trained on patterns, framing and detail."
      ]
    },
    approach: {
      title: "My Approach",
      content: [
        "I start with the operating constraint, not the framework: who uses the system, what must happen in real time, what can fail, and what data is allowed to leave the machine. That keeps architecture grounded in the product's actual environment.",
        "For AI workloads, I separate capture, inference and persistence so expensive models can run concurrently without freezing the interface. I profile before optimizing, build graceful CPU/GPU fallbacks, and make uncertain classifications visible for human review instead of presenting estimates as ground truth.",
        "For product engineering, I prefer typed contracts, small testable services, clear logs and secure defaults such as JWT/RBAC. Automated tests, code review, reproducible Docker builds and staged releases are part of development—not tasks postponed until the end.",
        "I communicate decisions in plain language and keep feedback loops short with operators, designers and stakeholders. The result I aim for is software that is maintainable for engineers, understandable for users and reliable after deployment."
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
              <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
                {/* Image with Overlay */}
                <div className="group relative mx-auto mt-4 aspect-square w-28 overflow-hidden rounded-2xl sm:mt-0 sm:aspect-auto sm:w-full sm:rounded-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={pic} 
                    alt="Kinshuk Kush" 
                    width={800}
                    height={1200}
                    className="h-full w-full select-none object-cover object-top transition duration-500 group-hover:scale-105 sm:h-auto"
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
                    href="/resume"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Browse Resumes
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
                  year: "Mar 2026",
                  title: "Software Developer — CyberJoar AI",
                  description: "Building production computer vision, backend and full-stack systems in Gurugram.",
                  side: "left"
                },
                {
                  year: "May 2026",
                  title: "Completed B.Tech CSE",
                  description: "Graduated from Lovely Professional University with a foundation in software engineering.",
                  side: "right"
                },
                {
                  year: "2024–25",
                  title: "Freelance Software Engineer",
                  description: "Delivered full-stack products for clients from requirements through deployment.",
                  side: "left"
                },
                {
                  year: "2022",
                  title: "Started B.Tech CSE",
                  description: "Began formal computer science study and expanded from web projects into systems engineering.",
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

        </div>
      </section>
    </PageTransition>
  );
};

export default About;
