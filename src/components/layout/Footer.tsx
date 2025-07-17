import { Github, Linkedin, Instagram, Mail, MapPin, Phone, Clock, ArrowUpRight, Heart, Code2, Coffee, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'API Integration',
    'Responsive Design'
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/kinshukkush",
      label: "GitHub",
      color: "hover:bg-gray-800 dark:hover:bg-gray-700"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/kinshuk-saxena-/",
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]"
    },
    {
      icon: <Instagram size={20} />,
      href: "http://instagram.com/kinshuk._.saxena",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "kinshuksaxena3@gmail.com",
      href: "mailto:kinshuksaxena3@gmail.com"
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 9057538521",
      href: "tel:+919057538521"
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      href: "https://maps.google.com/?q=Jaipur,Rajasthan"
    },
    {
      icon: <Clock size={18} />,
      label: "Availability",
      value: "Mon-Fri, 9AM-6PM IST"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="container-custom relative">
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-2xl p-8 mb-12 text-white"
        >
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
            <p className="mb-6 opacity-90">Have a project in mind? I'd love to hear about it!</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-xl font-bold">Kinshuk Saxena</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative digital solutions that make a difference. 
                Currently pursuing B.Tech CSE at LPU.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <Coffee size={16} />
              <span>Fueled by creativity & coffee</span>
            </div>
          </motion.div>

          {/* Quick links & Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary-500 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span>
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.label === 'Location' ? '_blank' : undefined}
                      rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                        <span className="text-primary-600 dark:text-primary-400">
                          {info.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <span className="text-primary-600 dark:text-primary-400">
                          {info.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} Kinshuk Saxena. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Built with <Heart size={12} className="inline text-red-500" /> using React & Tailwind CSS
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">Follow me:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 ${link.color}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="fixed bottom-8 right-8 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 z-40"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;