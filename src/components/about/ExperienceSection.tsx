import { motion } from 'framer-motion';
import { BriefcaseIcon, MapPin, Calendar, Building, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  companyUrl?: string;
  type?: 'Full-time' | 'Part-time' | 'Freelance' | 'Contract';
}

const experiences: Experience[] = [
  {
    title: 'Student Placement Coordinator',
    company: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2022 - Present',
    type: 'Part-time',
    companyUrl: 'https://www.lpu.in',
    description: [
      'Coordinating with companies and organizing placement drives for students',
      'Guiding and mentoring peers in resume building and interview skills',
      'Facilitating communication between students and potential employers',
    ],
    skills: ['Leadership', 'Communication', 'Mentoring', 'Event Management']
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2021 - Present',
    type: 'Freelance',
    description: [
      'Developed a variety of web applications for small businesses and startups',
      'Worked closely with clients to understand their requirements and deliver tailored solutions',
      'Utilized modern frameworks such as React, Vue.js, and Node.js to build full-stack solutions',
    ],
    skills: ['React', 'Vue.js', 'Node.js', 'Full-stack Development', 'Client Management']
  },
  {
    title: 'Project Developer',
    company: 'Various Projects',
    location: 'Remote',
    period: '2020 - Present',
    type: 'Contract',
    description: [
      'Designed and developed complex web applications as part of academic and personal projects',
      'Collaborated with teams to deliver robust solutions on time',
      'Gained experience in deploying applications on cloud platforms',
    ],
    skills: ['Web Development', 'Cloud Platforms', 'Team Collaboration', 'Project Management']
  },
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            My professional journey and contributions
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <span className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-medium">
                      {experience.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Building size={16} />
                      {experience.companyUrl ? (
                        <a 
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1"
                        >
                          {experience.company}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        experience.company
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {experience.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                    {experience.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {experience.skills && (
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;