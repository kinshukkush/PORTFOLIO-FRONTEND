import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img from '../../assets/img.jpg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Problem Solver', 'Full Stack Developer', 'UI/UX Enthusiast', 'Tech Explorer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Technologies', value: '15+' },
  ];

  const badges = [
    { icon: <GraduationCap size={14} />, text: 'LPU Student' },
    { icon: <Briefcase size={14} />, text: 'B.Tech CSE' },
    { icon: <MapPin size={14} />, text: 'Jaipur, India' },
    { icon: <Calendar size={14} />, text: '2+ Years Exp' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 mesh-bg scanlines overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Content Left */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-[#00f0ff20] bg-[#00f0ff05]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-muted)' }}
                >
                  <span className="text-[#00f0ff]">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={itemVariants} className="mb-4">
              <span className="block text-sm tracking-[0.3em] uppercase mb-2 text-[#00f0ff] font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                // hello, i'm
              </span>
              <span className="block font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                Kinshuk <span className="text-[#00f0ff] text-glow">Saxena</span>
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--text-muted)' }}>
                I'm a
              </span>
              <div className="h-10 overflow-hidden relative">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block text-xl md:text-2xl font-bold text-[#7c3aed]"
                >
                  {roles[currentRole]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: 'var(--text-muted)' }}
            >
              Passionate about crafting exceptional digital experiences through clean code and intuitive design.
              Currently pursuing <span className="text-[#f0f4ff]">B.Tech in Computer Science at Lovely Professional University</span>,
              where I'm honing my skills in modern web technologies and exploring the frontiers of software development.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="btn-primary group gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/resume" className="btn-outline group gap-2">
                View Resume
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 max-w-md">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-extrabold text-[#00f0ff] mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed] rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative border-spin p-1 rounded-2xl overflow-hidden" style={{ width: 'clamp(300px, 40vw, 450px)', height: 'clamp(350px, 50vw, 550px)' }}>
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0d1224]">
                  <img
                    src={img}
                    alt="Kinshuk Saxena"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              </div>

              {/* Decorative tags */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-4 py-3 bg-[#0d1224]/80 backdrop-blur-md border border-[#1a2238] rounded-xl shadow-2xl"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-[10px] uppercase tracking-widest text-[#8892a4] mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-[#f0f4ff]">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;