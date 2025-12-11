'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { ProjectCard } from '@/components/ProjectCard';
import { allProjects, allTechnologies, contactData } from '@/lib/site-data';

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Filter projects based on selected technology
  const filteredProjects =
    selectedTech === 'all'
      ? allProjects
      : allProjects.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  // Create tabs for filtering
  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: 'folder' as const },
    ...allTechnologies.slice(0, 8).map((tech) => ({
      id: tech,
      label: tech,
      icon: 'code' as const,
    })),
    {
      id: 'github',
      label: 'GitHub',
      icon: 'github' as const,
      href: contactData.socialLinks.find((s) => s.platform === 'GitHub')?.url || '#',
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-contrast-900">
      {/* Page Header */}
      <section className="section-mobile bg-contrast-850 border-b border-contrast-800/50 grid-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            {/* TODO: USER INPUT - Customize your projects page subtitle */}
            <p className="text-lg md:text-xl text-contrast-100 mb-4">
              A collection of projects I've built to solve real problems and explore new technologies
            </p>
            <div className="inline-block px-4 py-2 bg-contrast-900 rounded-lg border border-primary-500/20 shadow-[0_0_10px_rgba(0,178,255,0.1)]">
              <span className="text-primary-400 font-semibold">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-contrast-900/95 backdrop-blur-md border-b border-contrast-800/50 py-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center overflow-x-auto pb-2"
          >
            {/* TODO: USER INPUT - Add all technologies you've used in lib/site-data.ts */}
            <ExpandableTabs
              tabs={filterTabs}
              activeTab={selectedTech}
              onTabChange={setSelectedTech}
              separatorAfter={filterTabs.length - 2}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center py-20"
              >
                <div className="max-w-md mx-auto card p-12 text-center">
                  <div className="w-20 h-20 bg-contrast-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-contrast-800">
                    <Github className="w-10 h-10 text-contrast-100/50" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    No Projects Found
                  </h3>
                  <p className="text-contrast-100/70 mb-6">
                    No projects found using <span className="text-primary-400 font-semibold">{selectedTech}</span>.
                    Try selecting a different technology.
                  </p>
                  <button
                    onClick={() => setSelectedTech('all')}
                    className="btn-primary"
                  >
                    View All Projects
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-mobile bg-contrast-850 border-t border-contrast-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Want to see more?
            </h2>
            <p className="text-lg text-contrast-100 mb-8">
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href={contactData.socialLinks.find((s) => s.platform === 'GitHub')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
