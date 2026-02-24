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
    skills: ['Leadership', 'Communication', 'Mentoring', 'Event Management'],
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
    skills: ['React', 'Vue.js', 'Node.js', 'Full-stack Development', 'Client Management'],
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
    skills: ['Web Development', 'Cloud Platforms', 'Team Collaboration', 'Project Management'],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00f0ff' }}
          >
            // career
          </p>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f0f4ff' }}
          >
            Work Experience
          </h2>
          <div style={{ width: 60, height: 3, background: '#00f0ff', borderRadius: 2 }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px]"
            style={{ background: 'linear-gradient(to bottom, #00f0ff40, #7c3aed40, transparent)' }}
          />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Pulsing dot on line */}
                <div
                  className="pulse-dot absolute left-[15px] top-3 w-3 h-3 rounded-full z-10"
                  style={{
                    background: '#050810',
                    border: '2px solid #00f0ff',
                    transform: 'translateX(0)',
                  }}
                />

                {/* Card */}
                <div
                  className="rounded-xl p-5 transition-all duration-300"
                  style={{
                    background: '#0d1224',
                    border: '1px solid #1a2238',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#00f0ff30')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#1a2238')}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BriefcaseIcon className="w-4 h-4" style={{ color: '#00f0ff' }} />
                        <h3
                          className="text-base font-semibold"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f0f4ff' }}
                        >
                          {experience.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs" style={{ color: '#8892a4' }}>
                        <span className="flex items-center gap-1">
                          <Building size={12} />
                          {experience.companyUrl ? (
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 hover:text-[#f0f4ff] transition-colors"
                            >
                              {experience.company}
                              <ExternalLink size={10} />
                            </a>
                          ) : experience.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {experience.location}
                        </span>
                        <span
                          className="flex items-center gap-1"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          <Calendar size={12} />
                          {experience.period}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded capitalize shrink-0"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: 'rgba(0, 240, 255, 0.08)',
                        color: '#00f0ff',
                        border: '1px solid rgba(0, 240, 255, 0.15)',
                      }}
                    >
                      {experience.type}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-1.5 mb-4">
                    {experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: '#8892a4' }}
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: '#00f0ff' }}
                        />
                        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill pills */}
                  {experience.skills && (
                    <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid #1a2238' }}>
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            background: '#050810',
                            color: '#8892a4',
                            border: '1px solid #1a2238',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;