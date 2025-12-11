'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavTabs } from './ui/expandable-tabs';
import { personalInfo, navLinks } from '@/lib/site-data';

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const currentTab = navLinks.find((link) => {
    if (link.href === '/' && pathname === '/') return true;
    if (link.href !== '/' && pathname.startsWith(link.href)) return true;
    return false;
  })?.href || '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
          ? 'bg-contrast-900/90 backdrop-blur-md border-b border-contrast-800/50 shadow-[0_4px_20px_rgba(0,178,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-heading font-black"
            >
              {/* TODO: USER INPUT - Update with your name/logo */}
              <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              <span className="text-contrast-50 ml-1">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavTabs
              tabs={navLinks.map((link) => ({
                id: link.href,
                label: link.label,
                icon: link.icon,
              }))}
              activeTab={currentTab}
              onTabChange={(href) => {
                window.location.href = href;
              }}
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary-200 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-contrast-800/50 bg-contrast-900/95 backdrop-blur-md rounded-b-xl shadow-lg"
            >
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => {
                  const active = pathname === link.href ||
                                (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                        active
                          ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20'
                          : 'text-contrast-100 hover:bg-contrast-800 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
