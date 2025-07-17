import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download, Mail, Calendar, MapPin, Code, ExternalLink, Sparkles, Coffee, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img from '../../assets/img.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Explorer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/kinshukkush",
      label: "GitHub",
      color: "hover:bg-gray-800 dark:hover:bg-gray-700",
      stats: "50+ repos"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/kinshuk-saxena-/",
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]",
      stats: "500+ connections"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:kinshuksaxena3@gmail.com",
      label: "Email",
      color: "hover:bg-red-500",
      stats: "Quick response"
    }
  ];

  const quickInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Jaipur, India",
      subtext: "Open to remote"
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Available for hire",
      subtext: "Full-time/Freelance"
    },
    {
      icon: <Coffee className="w-4 h-4" />,
      text: "2+ Years Experience",
      subtext: "In web development"
    }
  ];

  const highlights = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" }
  ];

  return (
    <section className="pt-32 pb-20 md:min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 rounded-full filter blur-3xl opacity-20" />
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-10 text-primary-500/20 dark:text-primary-400/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code size={60} />
      </motion.div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group max-w-md mx-auto">
              {/* Main Image */}
              <motion.div 
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-square">
                  <img 
                    src={img} 
                    alt="Kinshuk Saxena" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-2xl shadow-lg"
                initial={{ rotate: -30, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ rotate: 10 }}
              >
                <Sparkles size={24} />
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl"
                initial={{ rotate: 30, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Award className="text-primary-500" size={24} />
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">LPU Student</p>
                    <p className="font-semibold text-sm">B.Tech CSE</p>
                  </div>
                </div>
              </motion.div>

              {/* Status indicator */}
              <motion.div 
                className="absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Quick Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex flex-wrap gap-3">
                {quickInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="group bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-primary-500 dark:text-primary-400">{info.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{info.text}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{info.subtext}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                  Kinshuk Saxena
                </span>
              </h1>
            </motion.div>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span>I'm a</span>
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-primary-600 dark:text-primary-400 font-semibold"
                >
                  {roles[currentRole]}
                </motion.span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Passionate about crafting exceptional digital experiences through clean code and intuitive design. 
              Currently pursuing B.Tech in Computer Science at Lovely Professional University, 
              where I'm honing my skills in modern web technologies and exploring the frontiers of software development.
            </motion.p>

            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {highlights.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.h3 
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link 
                to="/contact" 
                className="group btn-primary flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get in touch</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/resume" 
                className="group btn-outline flex items-center gap-2 px-6 py-3 rounded-full"
              >
                <span>View Resume</span>
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="group flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <span>Let's work together</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 ${link.color}`}
                    aria-label={link.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                    <span className="text-xs opacity-60">{link.stats}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;