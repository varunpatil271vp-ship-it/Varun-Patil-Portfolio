'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Get in touch for research, internships, or collaboration.
        </motion.p>

        <motion.div
          className="mt-10 space-y-6 rounded-xl border border-white/10 bg-slate-900/50 p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="mailto:varunnpatil3333@gmail.com"
            className="flex items-center gap-4 text-slate-300 transition hover:text-accent-cyan"
          >
            <Mail className="h-6 w-6 shrink-0 text-accent-cyan" />
            <span>varunnpatil3333@gmail.com</span>
          </a>
          <a
            href="tel:+15625836346"
            className="flex items-center gap-4 text-slate-300 transition hover:text-accent-cyan"
          >
            <Phone className="h-6 w-6 shrink-0 text-accent-cyan" />
            <span>(562) 583-6346</span>
          </a>
          <a
            href="https://www.linkedin.com/in/varun-narendra-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-slate-300 transition hover:text-accent-cyan"
          >
            <Linkedin className="h-6 w-6 shrink-0 text-accent-cyan" />
            <span>LinkedIn</span>
          </a>
          <div className="flex items-center gap-4 text-slate-400">
            <MapPin className="h-6 w-6 shrink-0 text-accent-cyan" />
            <span>Long Beach, CA</span>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Open to research collaborations, industry internships, and full-time roles in design, manufacturing, and thermal systems.
        </motion.p>
      </div>
    </PageTransition>
  );
}
