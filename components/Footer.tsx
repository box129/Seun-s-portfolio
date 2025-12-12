'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { personalInfo, contactData, navLinks } from '@/lib/site-data';

const iconMap: Record<string, any> = {
  linkedin: Icons.Linkedin,
  github: Icons.Github,
  twitter: Icons.Twitter,
  mail: Icons.Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: About */}
          <div>
            <Link href="/" className="text-2xl font-heading font-black text-gradient inline-block mb-3">
              {personalInfo.name.split(' ')[0]}
            </Link>
            <p className="text-neutral-400 text-sm mb-4">
              {personalInfo.title} crafting exceptional digital experiences.
            </p>
            <p className="text-neutral-500 text-xs">
              {personalInfo.location}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Social Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {contactData.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon] || Icons.ExternalLink;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-neutral-800 hover:bg-primary-500 rounded-lg
                             text-neutral-400 hover:text-white transition-all group"
                    title={social.platform}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-neutral-800 hover:bg-primary-500 rounded-lg
                         text-neutral-400 hover:text-white transition-all"
                title="Email"
              >
                <Icons.Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs mt-2">
            Designed & Built by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
