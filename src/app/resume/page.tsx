'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageTransition } from '@/components/PageTransition';
import { Download, FileText } from 'lucide-react';

const highlights = [
  'Graduate Research Assistant at CSULB: passive EV BTMS (PCM-coupled two-phase thermosyphon)',
  'Led team of 5 undergraduates; reduced prototype build time 30% and cost 10× with SolidWorks, CNC, 3D printing',
  'Thermal-fluid research: boiling/condensation modeling in ANSYS Fluent, experimental validation',
  'Topology optimization (Altair Inspire): 40% mass reduction on electric scooter components',
  'Skills: SolidWorks, AutoCAD, ANSYS Fluent, LabVIEW, Engineering Documentation, Data Analysis',
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
          <span className="flex items-center gap-2 text-sm text-slate-500">
            <FileText className="h-4 w-4" />
            Place your resume PDF at <code className="rounded bg-white/10 px-1">public/resume/VarunNarendraPatil_Resume.pdf</code> for the download link to work.
          </span>
        </motion.div>

        <motion.div
          className="mt-10 rounded-xl border border-white/10 bg-slate-900/30 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <p className="text-sm text-slate-500">
            For the full resume with education, experience, projects, and technical skills, use the download button above once the PDF is in place, or request a copy via the <Link href="/contact" className="text-accent-cyan hover:underline">Contact</Link> page.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
