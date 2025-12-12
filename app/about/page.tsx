'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, MapPin, BookOpen } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { SkillCard } from '@/components/SkillBadge';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { aboutData, personalInfo } from '@/lib/site-data';

export default function AboutPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: 'code' as const },
    { id: 'backend', label: 'Backend', icon: 'server' as const },
    { id: 'tools', label: 'Tools', icon: 'palette' as const },
    { id: 'softSkills', label: 'Soft Skills', icon: 'message-circle' as const },
  ];

  const currentSkills =
    aboutData.skills[activeSkillCategory as keyof typeof aboutData.skills] || [];

  return (
    <div className="min-h-screen bg-contrast-900">
      {/* Hero Section */}
      <section className="section-mobile bg-contrast-850 border-b border-contrast-800/50 grid-pattern">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Photo */}
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,178,255,0.2)]">
                  {/* TODO: USER INPUT - Add your professional photo in lib/site-data.ts */}
                  <Image
                    src={aboutData.hero.photoUrl}
                    alt={aboutData.hero.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl" />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-primary-400 font-semibold mb-2">
                  {aboutData.hero.greeting}
                </p>
                <h1 className="text-4xl md:text-6xl font-heading font-black text-contrast-900 mb-4">
                  {aboutData.hero.greeting} <span className="text-primary-400">{aboutData.hero.name}</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-contrast-100 font-semibold mb-6">
                  {aboutData.hero.title}
                </h2>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{aboutData.hero.location}</span>
                  </div>
                </div>
                <p className="text-lg text-contrast-100/80 mb-8 max-w-lg">
                  {aboutData.hero.missionStatement}
                </p>
                <a
                  href={aboutData.resumeUrl}
                  download
                  className="btn-primary inline-flex"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-black text-contrast-900 mb-8 text-center">
                My Story
              </h2>
              {/* TODO: USER INPUT - Write your professional story in lib/site-data.ts */}
              <div className="space-y-6 text-lg text-contrast-100 leading-relaxed">
                {aboutData.bio.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-contrast-850">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-contrast-100/70 max-w-2xl mx-auto">
                My technical proficiency spans across full-stack development, with a focus on modern web technologies and best practices.
              </p>
            </div>

            {/* Category Tabs */}
            {/* TODO: USER INPUT - Add all your skills by category in lib/site-data.ts */}
            <div className="flex justify-center mb-12">
              <ExpandableTabs
                tabs={skillCategories}
                activeTab={activeSkillCategory}
                onTabChange={setActiveSkillCategory}
              />
            </div>

            {/* Skills Grid */}
            <motion.div
              key={activeSkillCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-contrast-900 grid-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Experience
              </h2>
              <p className="text-contrast-100/70 max-w-2xl mx-auto">
                My professional journey and educational background
              </p>
            </div>

            {/* TODO: USER INPUT - Add your work experience and education in lib/site-data.ts */}
            <div className="max-w-4xl mx-auto">
              <ExperienceTimeline experiences={aboutData.experience} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="section bg-gradient-to-br from-contrast-900 via-contrast-850 to-primary-900/20 border-t border-primary-500/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="p-3 bg-primary-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-contrast-900 mb-6">
              Always Learning
            </h2>
            {/* TODO: USER INPUT - Add what you're currently learning in lib/site-data.ts */}
            <p className="text-lg text-contrast-600 mb-8">
              I believe in continuous growth and staying up-to-date with the latest technologies.
              Here's what I'm currently exploring:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {aboutData.currentlyLearning.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="px-6 py-3 bg-white border border-primary-200 rounded-full text-primary-600 font-semibold shadow-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests */}
      <section className="section bg-contrast-850">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-12">
                Beyond Coding
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {aboutData.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-contrast-700 rounded-lg border border-neutral-200 shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
