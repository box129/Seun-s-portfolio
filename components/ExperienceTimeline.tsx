'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Experience } from '@/lib/site-data';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent" />

      {/* Experience items */}
      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const Icon = exp.type === 'work' ? Briefcase : GraduationCap;
          const startDate = new Date(exp.startDate);
          const endDate = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
          const monthYear = (date: Date) =>
            date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20 group" // Added 'group' class for hover effects
            >
              {/* Icon */}
              <div className="absolute left-0 w-12 h-12 rounded-full bg-contrast-850 border border-primary-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,178,255,0.2)] z-10 group-hover:border-primary-400 group-hover:shadow-[0_0_20px_rgba(0,178,255,0.4)] transition-all duration-300">
                <Icon className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <div className="card p-6 border-l-4 border-l-primary-500/50 hover:border-l-primary-400 bg-contrast-900/50 shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-contrast-100/60 font-mono bg-contrast-900/50 px-2 py-1 rounded">
                    {monthYear(startDate)} - {exp.endDate === 'Present' ? 'Present' : monthYear(endDate)}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-contrast-100/80">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 shadow-[0_0_5px_rgba(0,178,255,0.5)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
