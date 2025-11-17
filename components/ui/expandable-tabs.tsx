'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { IconName } from '@/lib/site-data';

type LucideIcon = typeof Icons.Home;

interface Tab {
  id: string;
  label: string;
  icon?: IconName;
  href?: string;
  external?: boolean;
}

interface ExpandableTabsProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  separatorAfter?: number; // Add separator after this index
  variant?: 'default' | 'compact';
  className?: string;
}

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  home: Icons.Home,
  folder: Icons.Folder,
  user: Icons.User,
  mail: Icons.Mail,
  react: Icons.Code2,
  code: Icons.Code,
  server: Icons.Server,
  layout: Icons.Layout,
  palette: Icons.Palette,
  'git-branch': Icons.GitBranch,
  database: Icons.Database,
  cloud: Icons.Cloud,
  linkedin: Icons.Linkedin,
  github: Icons.Github,
  twitter: Icons.Twitter,
  'external-link': Icons.ExternalLink,
  'arrow-right': Icons.ArrowRight,
  download: Icons.Download,
  lightbulb: Icons.Lightbulb,
  'message-circle': Icons.MessageCircle,
  'alert-circle': Icons.AlertCircle,
  'trending-up': Icons.TrendingUp,
  check: Icons.Check,
  x: Icons.X,
  menu: Icons.Menu,
  'chevron-down': Icons.ChevronDown,
};

export function ExpandableTabs({
  tabs,
  activeTab,
  onTabChange,
  separatorAfter,
  variant = 'default',
  className = '',
}: ExpandableTabsProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [expandedTabs, setExpandedTabs] = useState<Set<string>>(new Set());

  const handleTabClick = (tab: Tab) => {
    if (tab.external && tab.href) {
      window.open(tab.href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (onTabChange) {
      onTabChange(tab.id);
    }

    // Toggle expansion for active tab
    setExpandedTabs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tab.id)) {
        newSet.delete(tab.id);
      } else {
        newSet.add(tab.id);
      }
      return newSet;
    });
  };

  const getIcon = (iconName?: IconName) => {
    if (!iconName) return null;
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  const isExpanded = (tabId: string) =>
    expandedTabs.has(tabId) || activeTab === tabId || hoveredTab === tabId;

  return (
    <div
      className={`flex items-center gap-2 ${
        variant === 'compact' ? 'gap-1' : 'gap-2'
      } ${className}`}
    >
      {tabs.map((tab, index) => {
        const expanded = isExpanded(tab.id);
        const active = activeTab === tab.id;

        return (
          <div key={tab.id} className="flex items-center gap-2">
            <motion.button
              onClick={() => handleTabClick(tab)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-lg
                transition-colors duration-200 overflow-hidden
                ${
                  active
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon */}
              {tab.icon && (
                <span className="flex-shrink-0">{getIcon(tab.icon)}</span>
              )}

              {/* Label with expand/collapse animation */}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap font-medium overflow-hidden"
                  >
                    {tab.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active indicator */}
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary-500 rounded-lg -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>

            {/* Separator */}
            {separatorAfter !== undefined && index === separatorAfter && (
              <div className="w-px h-6 bg-neutral-700" />
            )}
          </div>
        );
      })}
    </div>
  );
}

// Variant for navigation with always-expanded labels
export function NavTabs({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}: Omit<ExpandableTabsProps, 'separatorAfter' | 'variant'>) {
  const getIcon = (iconName?: IconName) => {
    if (!iconName) return null;
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <nav className={`flex items-center gap-1 ${className}`}>
      {tabs.map((tab) => {
        const active = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`
              relative flex items-center gap-2 px-4 py-2 rounded-lg
              font-medium transition-colors duration-200
              ${
                active
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.icon && getIcon(tab.icon)}
            <span>{tab.label}</span>

            {/* Active indicator */}
            {active && (
              <motion.div
                layoutId="navActiveTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}
