'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Home,
  AlertCircle,
  Lightbulb,
  Code,
  TrendingUp,
} from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { allProjects, Project } from '@/lib/site-data';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = allProjects.find((p) => p.id === slug);

  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionsRef.current);
      for (const [id, element] of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-center max-w-md glass p-12 rounded-2xl">
          <h1 className="text-4xl font-heading font-black text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-neutral-400 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/projects" className="btn-primary">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const navTabs = [
    { id: 'overview', label: 'Overview', icon: 'home' as const },
    ...(project.sections?.challenge ? [{ id: 'challenge', label: 'Challenge', icon: 'alert-circle' as const }] : []),
    ...(project.sections?.solution ? [{ id: 'solution', label: 'Solution', icon: 'lightbulb' as const }] : []),
    ...(project.sections?.techStack ? [{ id: 'tech-stack', label: 'Tech Stack', icon: 'code' as const }] : []),
    ...(project.sections?.outcomes ? [{ id: 'outcomes', label: 'Outcomes', icon: 'trending-up' as const }] : []),
  ];

  const externalTabs = [
    ...(project.liveUrl ? [{ id: 'live', label: 'Live Demo', icon: 'external-link' as const, href: project.liveUrl, external: true }] : []),
    ...(project.githubUrl ? [{ id: 'github', label: 'GitHub', icon: 'github' as const, href: project.githubUrl, external: true }] : []),
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent" />

        <div className="absolute inset-0 container-custom flex flex-col justify-end pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-500/20 border border-primary-500/50 text-primary-400 rounded-lg text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
              {project.title}
            </h1>
            {project.role && (
              <p className="text-lg text-neutral-400">
                Role: <span className="text-white font-semibold">{project.role}</span>
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-800">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center overflow-x-auto">
            <ExpandableTabs
              tabs={navTabs}
              activeTab={activeSection}
              onTabChange={scrollToSection}
            />
            {externalTabs.length > 0 && (
              <div className="hidden md:block ml-4 pl-4 border-l border-neutral-700">
                <ExpandableTabs
                  tabs={externalTabs}
                  onTabChange={(id) => {
                    const tab = externalTabs.find((t) => t.id === id);
                    if (tab?.href) {
                      window.open(tab.href, '_blank', 'noopener,noreferrer');
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Overview */}
          <section
            ref={(el) => { sectionsRef.current.overview = el; }}
            id="overview"
          >
            <SectionHeader icon={Home} title="Overview" />
            <div className="space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                {project.sections?.overview.summary || project.fullDescription || project.shortDescription}
              </p>
              {project.sections?.overview.keyFeatures && (
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.sections.overview.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-300">
                        <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 bg-primary-400 rounded-full" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.sections?.overview && (
                <div className="grid grid-cols-2 gap-4 p-6 bg-neutral-800 rounded-xl">
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Duration</p>
                    <p className="text-white font-semibold">{project.sections.overview.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Role</p>
                    <p className="text-white font-semibold">{project.sections.overview.role}</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Challenge */}
          {project.sections?.challenge && (
            <section
              ref={(el) => { sectionsRef.current.challenge = el; }}
              id="challenge"
            >
              <SectionHeader icon={AlertCircle} title="The Challenge" />
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                {project.sections.challenge.problem}
              </p>
              {project.sections.challenge.constraints.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-white">Constraints & Requirements</h3>
                  <ul className="space-y-2">
                    {project.sections.challenge.constraints.map((constraint, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-300">
                        <span className="text-secondary-500">•</span>
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Solution */}
          {project.sections?.solution && (
            <section
              ref={(el) => { sectionsRef.current.solution = el; }}
              id="solution"
            >
              <SectionHeader icon={Lightbulb} title="The Solution" />
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                {project.sections.solution.approach}
              </p>
              {project.sections.solution.technicalDecisions.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-white">Technical Decisions</h3>
                  <div className="space-y-3">
                    {project.sections.solution.technicalDecisions.map((decision, i) => (
                      <div key={i} className="p-4 bg-neutral-800 rounded-lg border-l-4 border-primary-500">
                        <p className="text-neutral-300">{decision}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Tech Stack */}
          {project.sections?.techStack && (
            <section
              ref={(el) => { sectionsRef.current['tech-stack'] = el; }}
              id="tech-stack"
            >
              <SectionHeader icon={Code} title="Tech Stack" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.sections.techStack.technologies.map((tech, i) => (
                  <div key={i} className="card bg-neutral-800">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-neutral-400">{tech.purpose}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          {project.sections?.outcomes && (
            <section
              ref={(el) => { sectionsRef.current.outcomes = el; }}
              id="outcomes"
            >
              <SectionHeader icon={TrendingUp} title="Outcomes & Results" />
              <div className="space-y-8">
                {project.sections.outcomes.results.length > 0 && (
                  <div className="space-y-3">
                    {project.sections.outcomes.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3 text-neutral-300 text-lg">
                        <span className="text-2xl">✓</span>
                        {result}
                      </div>
                    ))}
                  </div>
                )}

                {project.sections.outcomes.metrics && project.sections.outcomes.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.sections.outcomes.metrics.map((metric, i) => (
                      <div key={i} className="p-6 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl text-center">
                        <p className="text-3xl font-heading font-black text-gradient mb-2">{metric.value}</p>
                        <p className="text-sm text-neutral-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {project.sections.outcomes.learnings.length > 0 && (
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">Key Learnings</h3>
                    <ul className="space-y-2">
                      {project.sections.outcomes.learnings.map((learning, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-300">
                          <span className="text-primary-400">→</span>
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <section>
              <h2 className="text-3xl font-heading font-black text-white mb-8">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, i) => (
                  <div key={i} className="group relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold">{img.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-primary-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary-400" />
      </div>
      <h2 className="text-3xl font-heading font-black text-white">{title}</h2>
    </div>
  );
}
