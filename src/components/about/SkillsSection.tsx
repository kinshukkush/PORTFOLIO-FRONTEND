import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  experience?: string;
  projects?: number;
}

interface SkillCategory {
  category: string;
  icon: JSX.Element;
  description: string;
  skills: Skill[];
  color: string;
}

const skills: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: <Code size={24} />, // Added size prop
    description: 'Building responsive and interactive user interfaces',
    color: 'text-blue-500',
    skills: [
      { name: 'HTML & CSS', level: 90, experience: '3 years', projects: 15 },
      { name: 'JavaScript', level: 85, experience: '2.5 years', projects: 12 },
      { name: 'React', level: 80, experience: '2 years', projects: 8 },
      { name: 'TypeScript', level: 75, experience: '1.5 years', projects: 6 },
      { name: 'Tailwind CSS', level: 85, experience: '2 years', projects: 10 },
    ],
  },
  {
    category: 'Backend Development',
    icon: <Server size={24} />,
    description: 'Creating robust server-side applications',
    color: 'text-green-500',
    skills: [
      { name: 'Node.js', level: 75, experience: '2 years', projects: 7 },
      { name: 'Express', level: 70, experience: '2 years', projects: 6 },
      { name: 'MongoDB', level: 65, experience: '1.5 years', projects: 5 },
      { name: 'SQL', level: 60, experience: '1 year', projects: 4 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: <Wrench size={24} />, // Changed to Wrench
    description: 'Essential development tools and practices',
    color: 'text-purple-500',
    skills: [
      { name: 'Git', level: 80, experience: '3 years', projects: 20 },
      { name: 'UI/UX Design', level: 70, experience: '2 years', projects: 8 },
      { name: 'Responsive Design', level: 85, experience: '3 years', projects: 15 },
      { name: 'Testing', level: 65, experience: '1 year', projects: 5 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color} bg-opacity-10`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full rounded-full ${getProgressColor(skill.level)}`}
                      />
                    </div>

                    <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>{skill.experience}</span>
                      <span>{skill.projects} projects</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getProgressColor = (level: number): string => {
  if (level >= 85) return 'bg-green-500';
  if (level >= 70) return 'bg-blue-500';
  if (level >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
};

export default SkillsSection;