'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Calendar, MapPin } from 'lucide-react';

const roles = [
  {
    title: 'Graduate Research Assistant',
    org: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    period: 'Jul 2025 – Present',
    bullets: [
      'Conducting research on passive EV Battery Thermal Management Systems (BTMS) using PCM-coupled two-phase thermosyphon loops for pump-free heat removal and stable operating temperatures.',
      'Leading a team of 5 undergraduates from design concepts to prototyping: fabricating and instrumenting benchtop systems with thermocouples, pressure sensors, IR thermography, and temperature controllers.',
      'Performing tests under transient and battery-like discharge conditions; executing QA (calibration, repeatability, uncertainty tracking) and generating reports with results, plots, and recommendations.',
      'Creating and maintaining project documentation (BOMs, test procedures, lab logs); producing CAD-based engineering drawings; modeling boiling/condensation in ANSYS Fluent and validating against experimental data.',
      'Designed, built, and tested flow-loop test-section prototypes using SolidWorks, CNC-machined aluminum, and 3D printing (PLA, PC), reducing build time by 30% and cost by 10× while maintaining measurement accuracy.',
    ],
    tags: ['SolidWorks', 'ANSYS Fluent', 'LabVIEW', 'CNC', '3D Printing', 'Thermal Systems'],
  },
  {
    title: 'Volunteer Research Assistant',
    org: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    period: 'Mar 2025 – Jul 2025',
    bullets: [
      'Assembled and troubleshot three lab instruments with vendor technicians; adapted to changing lab constraints while ensuring equipment reliability, safety, and readiness for experiments.',
      'Supported undergraduate researchers with report generation and symposium preparation through data organization, figure generation, and iterative feedback.',
    ],
    tags: ['Lab Setup', 'Collaboration'],
  },
  {
    title: 'Trainee Boiler Attendant – Manufacturing Operations',
    org: 'Aryan Paper Mill Pvt. Ltd.',
    location: 'Gujarat, India',
    period: 'Sep 2023 – Feb 2024',
    bullets: [
      'Learned recycling and production operations in a 100+ ton/day packaging facility; followed preventive maintenance and safety SOPs for operational reliability and consistent output quality.',
      'Worked in a team to evaluate 10+ ply configurations; supported project development improving compression strength 7× (95–180 lbs) and contributed to corrugated hospital bed development for large-scale shelters during the pandemic.',
    ],
    tags: ['Manufacturing', 'Quality', 'Lean'],
  },
];

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Graduate research, volunteer research, and manufacturing roles.
        </motion.p>

        <div className="mt-12 space-y-10">
          {roles.map((role, i) => (
            <motion.article
              key={role.title}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-6 card-hover"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * (i + 1) }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="text-xl font-semibold text-white">{role.title}</h2>
                  <p className="text-accent-cyan">{role.org}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {role.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {role.location}
                  </span>
                </div>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400">
                {role.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
