import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lightfall from '../effects/Lightfall';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'API Integration',
    'Responsive Design',
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/kinshukkush', label: 'GitHub', color: '#ffffff' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/kinshuk-saxena-/', label: 'LinkedIn', color: '#0077B5' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/kinshuk_.saxena', label: 'Instagram', color: '#E1306C' },
    { icon: <Mail size={20} />, href: 'mailto:kinshuksaxena3@gmail.com', label: 'Email', color: '#00f0ff' },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, label: 'Email', value: 'kinshuksaxena3@gmail.com', href: 'mailto:kinshuksaxena3@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 9057538521', href: 'tel:+919057538521' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Gurugram, Haryana, India' },
    { icon: <Clock size={18} />, label: 'Availability', value: 'Mon-Fri, 9AM-6PM IST' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#030608] pb-10 pt-20 text-[#f0f4ff]">
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <Lightfall
          colors={['#00f0ff', '#7c3aed', '#f0f4ff']}
          backgroundColor="#030608"
          speed={0.55}
          streakCount={42}
          streakWidth={0.65}
          streakLength={0.75}
          glow={0.5}
          density={0.65}
          twinkle={0.18}
          bloom={0.3}
          opacity={0.72}
          mouseInteraction
          holdToWarp={false}
          fade={0.42}
          dpr={1.5}
        />
      </div>
      <div className="footer-stars absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030608]/35 via-[#030608]/65 to-[#030608]" />
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff40] to-transparent" />

      {/* Ghost text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none text-white">
        <span className="text-[20vw] font-black tracking-tighter" style={{ fontFamily: "'Raleway', sans-serif" }}>KINSHUK</span>
      </div>

      <div className="container-custom relative z-10">
        {/* CTA Section */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-glass inline-block w-full max-w-4xl rounded-3xl p-8"
          >
            <h2 className="mb-4 text-3xl font-bold text-[#f0f4ff] md:text-5xl">Build Something That Works</h2>
            <p className="mb-8 text-lg text-[#a8b3c6]">Have a hard problem or a production idea? Let's turn it into reliable software.</p>
            <Link to="/contact" className="btn-primary px-10 py-4 text-lg gap-2">
              <MessageSquare size={20} />
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#f0f4ff]">Kinshuk Saxena</h3>
            <p className="text-[#a8b3c6] leading-relaxed">
              AI-focused Software Developer at CyberJoar AI, building production-ready computer vision, backend and full-stack systems for offline and on-prem environments.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00f0ff10] flex items-center justify-center text-[#00f0ff]">
                ☕
              </div>
              <p className="text-sm italic text-[#8892a4]">Fueled by creativity & coffee</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold text-[#f0f4ff] mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#8892a4] hover:text-[#00f0ff] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#00f0ff] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-[#f0f4ff] mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-[#8892a4] hover:text-[#00f0ff] transition-colors flex items-center gap-2 cursor-default group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a2238] group-hover:bg-[#00f0ff] transition-all" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold text-[#f0f4ff] mb-6 uppercase tracking-widest text-xs">Get in Touch</h4>
            <ul className="space-y-6">
              {contactInfo.map((info, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 text-[#00f0ff] opacity-60">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8892a4] mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-[#f0f4ff] hover:text-[#00f0ff] transition-colors block font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#f0f4ff] font-medium">{info.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#1a2238] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-gray-500 dark:text-[#8892a4] text-sm text-center md:text-left">
            <p>© {currentYear} <span className="text-[#f0f4ff] font-bold">Kinshuk Saxena</span>. All rights reserved.</p>
            <p className="mt-1">Built with 💙 using React & Tailwind CSS</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-xs uppercase tracking-widest text-[#8892a4]">Follow me:</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social group relative flex h-11 w-11 items-center justify-center rounded-xl text-[#d8e2f0] hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a2238] text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
