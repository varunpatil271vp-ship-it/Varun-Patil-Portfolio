'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, FlaskConical, FileText, Mail, Wrench } from 'lucide-react';
import { HeroVisual } from '@/components/HeroVisual';
import { useState } from 'react';

const ctaLinks = [
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: Wrench },
  { href: '/research', label: 'Research & Experiments', icon: FlaskConical },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function HomePage() {
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950">
      <HeroVisual />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left: Photo + intro */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-2xl border-2 border-accent-cyan/30 shadow-xl shadow-accent-cyan/10 sm:h-56 sm:w-56">
              {!heroImageError ? (
                <Image
                  src="/images/hero.png"
                  alt="Varun Narendra Patil - Mechanical Engineering"
                  fill
                  className="object-cover"
                  sizes="224px"
                  priority
                  onError={() => setHeroImageError(true)}
                />
              ) : null}
              {heroImageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-500">
                  <span className="text-6xl font-bold">VNP</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Varun Narendra Patil
            </h1>
            <p className="mt-2 text-lg text-accent-cyan">M.S. Mechanical Engineering</p>
            <p className="mt-1 text-sm text-slate-400">Design & Manufacturing</p>
            <p className="mt-4 max-w-md text-slate-400">
              Thermal-fluid systems · Optimization · Prototyping · Experimental validation
            </p>
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            className="flex w-full max-w-md flex-col gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Explore
            </h2>
            {ctaLinks.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white transition hover:border-accent-cyan/30 hover:bg-slate-800/50"
              >
                <span className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-accent-cyan" />
                  {item.label}
                </span>
                <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-accent-cyan" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="mt-16 text-center text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          California State University, Long Beach · Graduate Research Assistant
        </motion.p>
      </div>
    </div>
  );
}
