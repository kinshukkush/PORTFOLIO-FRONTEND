import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Download,
  FileText,
  Plus,
  GraduationCap,
  Award,
  Briefcase,
  Code,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  Star,
  Target,
  BookOpen,
  Trophy
} from 'lucide-react';
import { useState, useEffect, type MouseEvent, type ReactNode } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import resume from '../assets/resume.pdf';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useSEO';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  location: string;
  achievements?: string[];
  coursework?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  more?: boolean;
  category?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance';
  description: string[];
  technologies?: string[];
}

interface Skill {
  category: string;
  items: string[];
  icon: ReactNode;
}

const Resume = () => {
  const [downloading, setDownloading] = useState(false);

  // Certifications pagination + filtering
  const [visibleCertCount, setVisibleCertCount] = useState(6);
  const [activeCertCategory, setActiveCertCategory] = useState<string>('All');

  useDocumentTitle({
    title: 'Resume',
    description:
      "View Kinshuk Saxena's resume, including education, experience, skills, and certifications in full-stack web development."
  });

  const handleDownload = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  const education: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Lovely Professional University',
      period: '2022 - 2026',
      location: 'Phagwara, Punjab',
      description: 'Currently pursuing B.Tech with CGPA: 7.4',
      achievements: [
        'Member of Technical Club',
        'Participated in multiple hackathons',
        'Completed 5+ industry-relevant projects'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Web Development',
        'Machine Learning'
      ]
    },
    {
      degree: '12th Grade - Science Stream',
      institution: 'St. Teresa Senior Secondary School',
      period: '2021 - 2022',
      location: 'Jaipur, Rajasthan',
      description: 'Completed with 65%',
      achievements: [
        'Focused on Physics, Chemistry, and Mathematics',
        'Active participant in science exhibitions'
      ]
    },
    {
      degree: '10th Grade',
      institution: 'St. Teresa Senior Secondary School',
      period: '2019 - 2020',
      location: 'Jaipur, Rajasthan',
      description: 'Completed with 76%',
      achievements: ['Excellence in Mathematics', 'School quiz competition winner']
    }
  ];

  const experience: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: [
        'Developed and deployed 5+ full-stack web applications for clients',
        'Implemented responsive designs and optimized performance',
        'Collaborated with clients to understand requirements and deliver solutions'
      ],
      technologies: ['React.js', 'Node.js', 'Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      title: 'Open Source Contributor',
      company: 'Various Projects',
      period: '2022 - Present',
      location: 'Remote',
      type: 'Part-time',
      description: [
        'Contributed to multiple open-source projects on GitHub',
        'Fixed bugs and implemented new features',
        'Engaged with the community and participated in code reviews'
      ],
      technologies: ['JavaScript', 'Python', 'Git', 'GitHub Actions']
    }
  ];

  const certifications: Certification[] = [
    {
      name: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'Jul-Oct 2024',
      category: 'Cloud',
      credentialId: 'NPTEL24CS123',
      link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S157020135504431363.pdf'
    },
    {
      name: 'Dynamic Programming, Greedy Algorithms',
      issuer: 'University of Colorado Boulder',
      date: 'Apr 4, 2024',
      category: 'Algorithms',
      credentialId: '5QP5FL3H7YP7',
      link: 'https://coursera.org/share/267f8467920cf93b0b6e24a1c243737a'
    },
    {
      name: 'Python Essentials 2',
      issuer: 'Cisco',
      date: 'November 29, 2025',
      category: 'Programming',
      link: 'https://www.credly.com/badges/e5e23c36-2535-479a-ae17-cdcc3fde9481/public_url'
    },
    {
      name: 'Introduction to Front-End Development',
      issuer: 'Meta',
      date: 'November 25, 2025',
      category: 'Development',
      credentialId: '5ZT6Y1T8ZANJ',
      link: 'https://coursera.org/share/919fa65698ee5a5310b1f3dddd26fdfe'
    },
    {
      name: 'Programming in C++: A Hands-on Introduction',
      issuer: 'Codio',
      date: 'February 2, 2024',
      category: 'Development',
      credentialId: 'RRMH867BNDYY',
      link: 'https://coursera.org/share/dce9e8939e08aa4b22aea2844747ef24'
    },
    {
      name: 'Introduction to C# Programming and Unity',
      issuer: 'University of Colorado System',
      date: 'November 15, 2025',
      category:
        'Game Development',
      credentialId: 'SY2CIQJC6VOR',
      link: 'https://coursera.org/share/aadc0fea2ea5ac45ce92b6afdbb3f0b9'
    },
    {
      name: 'Agile Project Management',
      issuer: 'University of Colorado Boulder',
      date: 'November 16, 2025',
      category: 'Project Management',
      credentialId: '23CWKEQJOYK2',
      link: 'https://coursera.org/share/5a9cbc78cb0b1e75836b3aea6d9f83a3'
    },
    {
      name: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI',
      date: 'May 5, 2024',
      category: 'AI',
      credentialId: 'XGJ76YE3HY9C',
      link: 'https://coursera.org/share/20b83425812358b344e54a50faf37747'
    },
    {
      name: 'Foundations of Coding Back-End',
      issuer: 'Microsoft',
      date: 'April 4, 2025',
      category: 'Back-End Development',
      credentialId: '1EY2FYFU9XFZ',
      link: 'https://coursera.org/share/997abb2c19840f2f4c887c67e3d8f9f2'
    },
    {
      name: 'Developer and Technology Job Simulation',
      issuer: 'Accenture',
      date: 'November 16, 2025',
      category: 'Career',
      credentialId: 'fB3djAtyXqwwAHn3B'
    },
    {
      name: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy',
      date: 'October 19, 2023',
      category: 'DSA',
      credentialId: 'UC-96ede1db-bec1-4b33-8c24-9c61ce8e1be1',
      link: 'https://www.udemy.com/certificate/UC-96ede1db-bec1-4b33-8c24-9c61ce8e1be1/'
    },
    {
      name: 'Advanced Software Engineering Job Simulation',
      issuer: 'Walmat',
      date: 'November 16th, 2025',
      category: 'DSA',
      credentialId: 'fB3djAtyXqwwAHn3B'
    },
    {
      name: ' IBM Z Datathon 2025 - A Global Datathon Event',
      issuer: 'IBM',
      date: '2025',
      category: 'PARTICIPATION'
    }
  ];

  const skills: Skill[] = [
    {
      category: 'Frontend',
      icon: <Code className="w-5 h-5" />,
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Redux']
    },
    {
      category: 'Backend',
      icon: <Briefcase className="w-5 h-5" />,
      items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Database',
      icon: <BookOpen className="w-5 h-5" />,
      items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      category: 'Tools & Others',
      icon: <Target className="w-5 h-5" />,
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'AWS Basics', 'Figma']
    }
  ];

  // Build category list with "All"
  const certCategories: string[] = [
    'All',
    ...Array.from(new Set(certifications.map((cert) => cert.category).filter(Boolean))) as string[]
  ];

  // Filter certifications by active category
  const filteredCerts = certifications.filter((cert) =>
    activeCertCategory === 'All' ? true : cert.category === activeCertCategory
  );

  // Slice based on visible count (pagination)
  const displayedCerts = filteredCerts.slice(0, visibleCertCount);
  const hasMoreCerts = visibleCertCount < filteredCerts.length;

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCertCount(6);
  }, [activeCertCategory]);

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <SectionHeading
            title="My Resume"
            subtitle="A comprehensive overview of my qualifications, experience, and achievements"
            centered
          >
            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href={resume}
                download
                onClick={handleDownload}
                className={`btn-primary group relative overflow-hidden ${
                  downloading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: downloading ? 1 : 1.05 }}
                whileTap={{ scale: downloading ? 1 : 0.95 }}
                tabIndex={downloading ? -1 : 0}
                aria-disabled={downloading}
              >
                {downloading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    <span>Preparing...</span>
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    <span>Download Resume PDF</span>
                  </>
                )}
              </motion.a>
              <Link to="/contact" className="btn-outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </SectionHeading>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { label: 'Years of Experience', value: '2+', icon: <Briefcase /> },
              { label: 'Projects Completed', value: '25+', icon: <Target /> },
              { label: 'Certifications', value: `${certifications.length}+`, icon: <Award /> },
              { label: 'Technologies', value: '15+', icon: <Code /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="text-primary-500 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="subsection-heading">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500"
                  layout
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2">
                        {item.company}
                        <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                          {item.type}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.period}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {item.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="subsection-heading">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500"
                  layout
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {item.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 font-medium">
                        {item.period}
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1 justify-end">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>

                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.coursework && item.coursework.length > 0 && (
                    <details className="group">
                      <summary className="cursor-pointer text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-2">
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                        View Relevant Coursework
                      </summary>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </details>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="subsection-heading">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillCategory) => (
                <motion.div
                  key={skillCategory.category}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  layout
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      {skillCategory.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <Star className="w-3 h-3 text-primary-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="subsection-heading">Certifications</h2>
            </div>

            {/* Certification Categories */}
            <div className="flex flex-wrap gap-2 mb-6 items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Filter by category:
              </span>
              {certCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCertCategory(category)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${
                    activeCertCategory === category
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {displayedCerts.map((cert, index) => (
                  <motion.div
                    key={`${cert.name}-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 10 }}
                    layout
                    className="card p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex-1">
                          {cert.name}
                        </h3>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-primary-500 hover:text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                      {cert.category && (
                        <span className="inline-block mt-2 text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 rounded text-primary-600 dark:text-primary-400">
                          {cert.category}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                      {cert.credentialId && (
                        <span className="text-xs text-gray-400">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Show More/Less Button (pagination style) */}
            {filteredCerts.length > 6 && (
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.button
                  onClick={() => {
                    if (hasMoreCerts) {
                      setVisibleCertCount((prev) =>
                        Math.min(prev + 6, filteredCerts.length)
                      );
                    } else {
                      setVisibleCertCount(6);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hasMoreCerts ? (
                    <>
                      <Plus className="w-5 h-5" />
                      Show More ({filteredCerts.length - visibleCertCount} more)
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5 rotate-180" />
                      Show Less
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Work Together?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and interesting projects.
              Let&apos;s connect and see how we can create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={resume}
                download
                onClick={handleDownload}
                className={`inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors ${
                  downloading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: downloading ? 1 : 1.05 }}
                whileTap={{ scale: downloading ? 1 : 0.95 }}
                tabIndex={downloading ? -1 : 0}
                aria-disabled={downloading}
              >
                {downloading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    <span>Preparing...</span>
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    <span className="font-medium">Download Full Resume</span>
                  </>
                )}
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
