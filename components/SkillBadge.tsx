'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { IconName, Skill } from '@/lib/site-data';

const iconMap: Record<string, any> = {
  react: Icons.Code2,
  code: Icons.Code,
  server: Icons.Server,
  layout: Icons.Layout,
  palette: Icons.Palette,
  'git-branch': Icons.GitBranch,
  database: Icons.Database,
  cloud: Icons.Cloud,
  lightbulb: Icons.Lightbulb,
  'message-circle': Icons.MessageCircle,
};

interface SkillBadgeProps {
  skill: { name: string; icon: IconName };
  index?: number;
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  const IconComponent = iconMap[skill.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-3 p-4 bg-contrast-850 border border-contrast-800/50 rounded-xl hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(0,178,255,0.15)] transition-all group"
    >
      <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
        <IconComponent className="w-8 h-8 text-primary-400" />
      </div>
      <span className="text-sm font-semibold text-contrast-100 group-hover:text-primary-400 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

// Detailed skill card for About page
export function SkillCard({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const IconComponent = iconMap[skill.icon] || Icons.Code;
  const proficiency =
    typeof skill.proficiency === 'number' ? skill.proficiency : 80;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card bg-contrast-850 border border-contrast-800/50 hover:shadow-[0_0_20px_rgba(0,178,255,0.1)] transition-all"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 bg-primary-500/10 rounded-lg flex-shrink-0">
          <IconComponent className="w-6 h-6 text-primary-400" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              {skill.yearsOfExperience && (
                <p className="text-sm text-contrast-100/70">
                  {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''} experience
                </p>
              )}
            </div>
            {typeof proficiency === 'number' && (
              <span className="text-primary-400 font-semibold">{proficiency}%</span>
            )}
          </div>

          {/* Description */}
          {skill.description && (
            <p className="text-sm text-contrast-100/80 mb-3">{skill.description}</p>
          )}

          {/* Proficiency bar */}
          {typeof proficiency === 'number' && (
            <div className="w-full h-2 bg-contrast-900 rounded-full overflow-hidden border border-contrast-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${proficiency}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full shadow-[0_0_10px_rgba(0,178,255,0.4)]"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
