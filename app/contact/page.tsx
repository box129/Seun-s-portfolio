'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { contactData, personalInfo } from '@/lib/site-data';

const iconMap: Record<string, any> = {
  linkedin: Icons.Linkedin,
  github: Icons.Github,
  twitter: Icons.Twitter,
  mail: Icons.Mail,
};

export default function ContactPage() {
  const availabilityConfig = {
    available: {
      color: 'bg-green-500',
      text: 'Available for opportunities',
    },
    open: {
      color: 'bg-yellow-500',
      text: 'Open to interesting projects',
    },
    employed: {
      color: 'bg-blue-500',
      text: 'Currently employed',
    },
  };

  const statusConfig = availabilityConfig[contactData.availability.status];

  return (
    <div className="min-h-screen bg-contrast-900">
      {/* Hero Section */}
      <section className="section-mobile bg-contrast-850 border-b border-contrast-800/50 grid-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            {/* TODO: USER INPUT - Update availability message in lib/site-data.ts */}
            <p className="text-lg md:text-xl text-contrast-100 mb-6">
              {contactData.availability.message}
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-contrast-900 rounded-full border border-primary-500/20 shadow-[0_0_10px_rgba(0,178,255,0.1)]">
              <span className={`w-3 h-3 ${statusConfig.color} rounded-full animate-pulse shadow-[0_0_8px_currentColor]`} />
              <span className="text-contrast-50 font-semibold">{statusConfig.text}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-heading font-black text-white mb-6">
                Send Me a Message
              </h2>
              {/* TODO: USER INPUT - Set up form endpoint in lib/site-data.ts */}
              <ContactForm />
            </motion.div>

            {/* Right: Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-heading font-black text-white mb-6">
                  Other Ways to Reach Me
                </h2>

                {/* Email */}
                <div className="card bg-contrast-850 p-4 mb-4 hover:border-primary-500/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-contrast-900 rounded-lg border border-contrast-800">
                      <Icons.Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-primary-400 hover:text-primary-300 transition-colors break-all"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card bg-contrast-850 p-4 mb-4 hover:border-primary-500/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-contrast-900 rounded-lg border border-contrast-800">
                      <Icons.MapPin className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-contrast-100/80">
                        {contactData.location.city}, {contactData.location.country}
                      </p>
                      <p className="text-contrast-100/50 text-sm mt-1">
                        {contactData.location.timezone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="card bg-contrast-850 p-4 hover:border-primary-500/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-contrast-900 rounded-lg border border-contrast-800">
                      <Icons.Clock className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Response Time</h3>
                      <p className="text-contrast-100/80">
                        I typically respond within {contactData.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  Connect With Me
                </h3>
                {/* TODO: USER INPUT - Add all your social profile URLs in lib/site-data.ts */}
                <div className="grid grid-cols-2 gap-4">
                  {contactData.socialLinks.map((social) => {
                    const IconComponent = iconMap[social.icon] || Icons.ExternalLink;
                    return (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="card bg-contrast-850 hover:bg-contrast-800 hover:border-primary-500 p-6 transition-all group text-center hover:shadow-[0_0_15px_rgba(0,178,255,0.2)]"
                      >
                        <IconComponent className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors mx-auto mb-3" />
                        <h4 className="text-white font-semibold mb-1 group-hover:text-primary-200 transition-colors">
                          {social.platform}
                        </h4>
                        <p className="text-contrast-100/60 text-sm group-hover:text-primary-200/80 transition-colors">
                          {social.username}
                        </p>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Optional: Calendly Link */}
              {contactData.calendlyUrl && (
                <div className="card bg-gradient-to-br from-contrast-900 via-contrast-850 to-primary-900/10 border border-primary-500/20 p-4 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-contrast-900 rounded-lg border border-contrast-800">
                      <Icons.Calendar className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">
                        Prefer to Schedule a Call?
                      </h3>
                      <p className="text-contrast-100/80 text-sm mb-4">
                        Book a time that works for you
                      </p>
                      <a
                        href={contactData.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm inline-flex"
                      >
                        <Icons.Calendar className="w-4 h-4" />
                        Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
