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
              className="relative pl-20"
            >
              {/* Icon */}
              <div
                className="absolute left-0 w-16 h-16 bg-primary-500/10 border-4 border-primary-500
                           rounded-full flex items-center justify-center"
              >
                <Icon className="w-7 h-7 text-primary-400" />
              </div>

              {/* Content */}
              <div className="card bg-neutral-800 hover:bg-neutral-700 transition-colors">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {monthYear(startDate)} - {exp.endDate === 'Present' ? 'Present' : monthYear(endDate)}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-neutral-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
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
