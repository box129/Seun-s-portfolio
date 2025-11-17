'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Download } from 'lucide-react';
import { HeroScrollExpansion } from '@/components/ui/scroll-expansion-hero';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillBadge } from '@/components/SkillBadge';
import {
  personalInfo,
  featuredProject,
  recentProjects,
  coreSkills,
} from '@/lib/site-data';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Scroll Expansion */}
      <section className="relative -mt-20">
        {/* TODO: USER INPUT - Update featured project in lib/site-data.ts */}
        <HeroScrollExpansion
          mediaUrl={featuredProject.image}
          mediaType="image"
          title={personalInfo.name}
          subtitle={personalInfo.title}
        />
      </section>

      {/* Featured Project Details */}
      <section className="section-mobile bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1 bg-primary-500/10 border border-primary-500/50 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
                Featured Project
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              {featuredProject.title}
            </h2>

            <p className="text-xl text-neutral-400 mb-6">
              {featuredProject.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-neutral-800 text-primary-400 border border-primary-500/30 rounded-lg font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {featuredProject.liveUrl && (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
              )}
              {featuredProject.githubUrl && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="section bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
                Hi, I'm{' '}
                <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              </h2>
              {/* TODO: USER INPUT - Update bio in lib/site-data.ts */}
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              <Link href="/about" className="btn-primary inline-flex">
                Learn More About Me
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Projects Grid */}
      <section className="section bg-neutral-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Here are some of my latest works. Check them out to see what I've been building.
            </p>
          </motion.div>

          {/* TODO: USER INPUT - Add your 3 recent projects in lib/site-data.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-outline inline-flex">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="section bg-neutral-900 grid-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Core Technologies
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Technologies I work with to build modern web applications
            </p>
          </motion.div>

          {/* TODO: USER INPUT - Add your core skills in lib/site-data.ts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {coreSkills.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-br from-primary-900/20 via-neutral-900 to-secondary-900/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              {personalInfo.availability}. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-outline"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
