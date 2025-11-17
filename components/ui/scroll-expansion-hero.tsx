'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ScrollExpandMediaProps {
  mediaUrl: string;
  mediaType?: 'image' | 'video';
  title: string;
  subtitle?: string;
  scrollText?: string;
  backgroundImage?: string;
  minHeight?: number;
  maxHeight?: number;
  minWidth?: number;
  maxWidth?: number;
}

export function ScrollExpandMedia({
  mediaUrl,
  mediaType = 'image',
  title,
  subtitle,
  scrollText = 'Scroll to see my work',
  backgroundImage,
  minHeight = 300,
  maxHeight = 600,
  minWidth = 300,
  maxWidth = 1200,
}: ScrollExpandMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Transform values based on scroll progress
  const mediaHeight = useTransform(scrollYProgress, [0, 0.5], [minHeight, maxHeight]);
  const mediaWidth = useTransform(scrollYProgress, [0, 0.5], [minWidth, maxWidth]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Split title into words for animation
  const titleWords = title.split(' ');
  const midpoint = Math.floor(titleWords.length / 2);
  const firstHalf = titleWords.slice(0, midpoint).join(' ');
  const secondHalf = titleWords.slice(midpoint).join(' ');

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-neutral-900/80 grid-pattern" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        {/* Expanding media */}
        <motion.div
          style={{
            height: mediaHeight,
            width: mediaWidth,
          }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto"
        >
          {mediaType === 'image' ? (
            <Image
              src={mediaUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <video
              src={mediaUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* Title overlay - split across media */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white">
                <span className="block text-gradient">{firstHalf}</span>
                <span className="block text-gradient">{secondHalf}</span>
              </h1>
              {subtitle && (
                <p className="mt-4 text-xl md:text-2xl text-neutral-300 font-semibold">
                  {subtitle}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollTextOpacity }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <p className="text-neutral-400 text-sm font-medium uppercase tracking-wider">
            {scrollText}
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-500 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Variant for homepage hero with background pattern
export function HeroScrollExpansion({
  mediaUrl,
  mediaType = 'image',
  title,
  subtitle,
}: Omit<ScrollExpandMediaProps, 'scrollText' | 'backgroundImage'>) {
  return (
    <ScrollExpandMedia
      mediaUrl={mediaUrl}
      mediaType={mediaType}
      title={title}
      subtitle={subtitle}
      scrollText="Scroll to explore"
      minHeight={300}
      maxHeight={700}
      minWidth={300}
      maxWidth={1400}
    />
  );
}
