import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clipboard, Download, ExternalLink, FileText } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import GlassSurface from '../components/ui/GlassSurface';
import { useDocumentTitle } from '../hooks/useSEO';

interface ResumeVariant {
  id: string;
  title: string;
  focus: string;
  file: string;
  filename: string;
  pages: number;
  driveUrl?: string;
}

const resumeVariants: ResumeVariant[] = [
  {
    id: 'backend',
    title: 'Backend Engineer',
    focus: 'APIs, databases, distributed services and backend delivery',
    file: '/resumes/backend-engineer.pdf',
    filename: 'Kinshuk-Saxena-Backend-Engineer.pdf',
    pages: 2,
    driveUrl: import.meta.env.VITE_RESUME_BACKEND_DRIVE_URL,
  },
  {
    id: 'general',
    title: 'General CV',
    focus: 'A concise overview of experience, education and core capabilities',
    file: '/resumes/general-cv.pdf',
    filename: 'Kinshuk-Saxena-General-CV.pdf',
    pages: 1,
    driveUrl: import.meta.env.VITE_RESUME_GENERAL_DRIVE_URL,
  },
  {
    id: 'qa',
    title: 'QA Engineer',
    focus: 'Testing, quality processes, automation and reliable releases',
    file: '/resumes/qa-engineer.pdf',
    filename: 'Kinshuk-Saxena-QA-Engineer.pdf',
    pages: 2,
    driveUrl: import.meta.env.VITE_RESUME_QA_DRIVE_URL,
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Engineer',
    focus: 'React applications, APIs, data systems and end-to-end ownership',
    file: '/resumes/full-stack-resume.pdf',
    filename: 'Kinshuk-Saxena-Full-Stack-Engineer.pdf',
    pages: 2,
    driveUrl: import.meta.env.VITE_RESUME_FULLSTACK_DRIVE_URL,
  },
  {
    id: 'updated',
    title: 'Latest Resume',
    focus: 'The most recently updated all-purpose resume',
    file: '/resumes/updated-resume.pdf',
    filename: 'Kinshuk-Saxena-Latest-Resume.pdf',
    pages: 2,
    driveUrl: import.meta.env.VITE_RESUME_UPDATED_DRIVE_URL,
  },
];

const Resume = () => {
  const [selectedId, setSelectedId] = useState(resumeVariants[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useDocumentTitle({
    title: 'Resume Library',
    description: 'Choose and download the Kinshuk Saxena resume tailored to your role or hiring need.',
  });

  const selected = useMemo(
    () => resumeVariants.find(resume => resume.id === selectedId) ?? resumeVariants[0],
    [selectedId],
  );

  const copyLink = async (resume: ResumeVariant) => {
    const url = resume.driveUrl || new URL(resume.file, window.location.origin).toString();
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const input = document.createElement('textarea');
      input.value = url;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setCopiedId(resume.id);
    window.setTimeout(() => setCopiedId(current => current === resume.id ? null : current), 1800);
  };

  return (
    <PageTransition>
      <section className="mesh-bg min-h-screen pb-20 pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Resume Library"
            subtitle="Choose the version that best matches the opportunity, preview it, download it, or copy its share link."
            centered
            accent
          />

          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <div className="space-y-3" role="list" aria-label="Available resumes">
              {resumeVariants.map((resume, index) => {
                const active = selected.id === resume.id;
                return (
                  <motion.button
                    key={resume.id}
                    type="button"
                    role="listitem"
                    onClick={() => setSelectedId(resume.id)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className={`glass-surface w-full p-4 text-left transition ${active ? 'glass-surface-strong ring-1 ring-[#00f0ff]/70' : 'hover:-translate-y-0.5'}`}
                    aria-pressed={active}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`rounded-xl p-2.5 ${active ? 'bg-[#00f0ff] text-[#050810]' : 'bg-[#00f0ff]/10 text-[#00f0ff]'}`}>
                        <FileText size={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-[var(--text-primary)]">{resume.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-[var(--text-muted)]">{resume.focus}</span>
                        <span className="mt-2 block font-mono text-xs text-[#00b8c4] dark:text-[#72f5ff]">PDF · {resume.pages} {resume.pages === 1 ? 'page' : 'pages'}</span>
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <GlassSurface className="overflow-hidden" strength="strong">
              <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="eyebrow">Selected resume</p>
                  <h2 className="text-2xl font-bold">{selected.title}</h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{selected.focus}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href={selected.file} download={selected.filename} className="btn-primary gap-2 px-4 py-2.5">
                    <Download size={17} /> Download
                  </a>
                  <button type="button" onClick={() => copyLink(selected)} className="glass-button inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-medium">
                    {copiedId === selected.id ? <Check size={17} /> : <Clipboard size={17} />}
                    {copiedId === selected.id ? 'Copied' : 'Copy link'}
                  </button>
                  <a href={selected.driveUrl || selected.file} target="_blank" rel="noreferrer" className="glass-button inline-flex h-11 w-11 items-center justify-center rounded-lg" aria-label={`Open ${selected.title} in a new tab`}>
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
              <div className="h-[72vh] min-h-[560px] bg-white/80 p-2 sm:p-4">
                <iframe title={`${selected.title} preview`} src={`${selected.file}#view=FitH`} className="h-full w-full rounded-lg bg-white" />
              </div>
            </GlassSurface>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-[var(--text-muted)]">
            Share buttons use the matching Google Drive URL when configured and automatically fall back to the hosted PDF link.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
