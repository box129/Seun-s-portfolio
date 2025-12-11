'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/site-data';

interface ProjectCardProps {
  project: Omit<Project, 'sections'>;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative card-hover overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover overlay - neon tint on hover */}
        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-contrast-100 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-contrast-900 text-primary-300 text-xs rounded-lg font-medium border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-contrast-100 text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="btn-primary text-sm py-2 px-4"
          >
            View Details
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-contrast-100 hover:text-primary-400 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-contrast-100 hover:text-primary-400 transition-colors"
              title="View Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Compact variant for grid displays
export function ProjectCardCompact({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative card overflow-hidden cursor-pointer"
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-contrast-900 to-transparent">
          <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-contrast-900/80 backdrop-blur-sm text-primary-300 text-xs rounded border border-primary-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
