'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageTransition } from '@/components/PageTransition';
import { Download } from 'lucide-react';

const highlights = [
  'Graduate Research Assistant, CSULB: battery-cooling rigs, PCM/EG/thermosyphon testing at ~20.5 W, LabVIEW/DAQ instrumentation',
  'Co-author on two peer-reviewed papers (IJFT 2026; International Journal of Heat and Mass Transfer 2027) on flow-boiling HTC',
  'M.S. thesis: EV battery thermal management using PCM and a passive two-phase thermosyphon (Aug 2025 - Oct 2026)',
  'Research mentor: undergraduate senior-design team (1st prize), GPU cooling thermosyphon, honours thesis on thermal composites',
  'Skills: LabVIEW, NI/MCC DAQ, MATLAB, SolidWorks, CNC, ANSYS Fluent, BTMS/PCM/thermosyphons, pool and flow boiling',
];

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resume
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Summary and download.
        </motion.p>

        <motion.div
          className="mt-8 rounded-xl border border-accent-cyan/20 bg-slate-900/50 p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-white">Highlights</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-400">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/resume/VarunNarendraPatil_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-5 py-3 font-medium text-slate-950 transition hover:bg-accent-cyan/90"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </a>
        </motion.div>

        <motion.div
          className="mt-10 rounded-xl border border-white/10 bg-slate-900/30 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <p className="text-sm text-slate-500">
            For the full resume with education, experience, projects, and technical skills, use the download button above, or request a copy via the <Link href="/contact" className="text-accent-cyan hover:underline">Contact</Link> page.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
