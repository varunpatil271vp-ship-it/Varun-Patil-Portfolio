'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Calendar, MapPin } from 'lucide-react';

const roles = [
  {
    title: 'Graduate Research Assistant',
    org: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    period: 'Jul 2025 - Present',
    bullets: [
      'Designed two battery-cooling rigs in SolidWorks; built acrylic/aluminium enclosures, copper loops, and 3D-printed coil supports.',
      'Installed eight K-type thermocouples on surrogate walls and copper piping plus a loop-pressure transducer; used LabVIEW with MCC USB-TC and NI DAQ to log temperatures at approximately 3 Hz and monitor absolute loop pressure during testing.',
      'Tested five thermal configurations at about 20.5 W using PCM, 5 wt.% expanded graphite, and thermosyphon combinations.',
      'Joined two independent copper loops into a shared circuit to simplify fluid charging within the compact experimental enclosure.',
      'Benchmarked two ANSYS Fluent cases within 0.90 K of published 720 s results; used MATLAB to analyse PCM liquid fractions.',
      'Led a team of 5 undergraduates from design concepts through prototyping and instrumentation of benchtop thermal systems.',
      'Designed, built, and tested flow-loop test-section prototypes using SolidWorks, CNC-machined aluminum, and 3D printing (PLA, PC), reducing build time by 30% and cost by 10× while maintaining measurement accuracy.',
    ],
    tags: ['BTMS', 'PCM', 'Thermosyphon', 'SolidWorks', 'LabVIEW', 'ANSYS Fluent', 'MATLAB', 'CNC', '3D Printing'],
  },
  {
    title: 'Research Mentor',
    org: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    period: 'Jul 2025 - Aug 2025',
    bullets: [
      'Mentored a five-student undergraduate team that won first prize for its final senior design project.',
      'Supported three undergraduate students developing a GPU cooling system using a deionized-water thermosyphon.',
      'Guided an undergraduate honours thesis investigating composite materials to improve thermal conductivity and heat transfer.',
    ],
    tags: ['Mentorship', 'Thermal Systems', 'Undergraduate Research'],
  },
  {
    title: 'Volunteer Research Assistant',
    org: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    period: 'Mar 2025 - Jul 2025',
    bullets: [
      'Helped assemble piping, a centrifugal pump, pressure accumulator, and flowmeter for pool- and flow-boiling experiments.',
      'Integrated K-type thermocouples and pressure transducers for temperature and pressure measurements during testing.',
      'Configured assembly of copper and ITO-coated sapphire heaters with PTFE gaskets and RTV silicone seals for boiling experiments.',
      'Contributed fabricating SS304 test sections and flanges using CNC milling, drilling, boring, tapping, and stock preparation.',
      'Troubleshot and repaired 3D printers and a nanoindenter to support prototype fabrication and laboratory materials testing.',
    ],
    tags: ['Pool/Flow Boiling', 'CNC', 'Instrumentation', 'Lab Setup'],
  },
  {
    title: 'Thermal Utilities Intern, Manufacturing Operations',
    org: 'Aryan Paper Mill Pvt. Ltd.',
    location: 'Gujarat, India',
    period: 'Jul 2023 - Jun 2024',
    bullets: [
      'Monitored boiler operations supplying steam to a turbine-generator for electricity generation in recycled-paper manufacturing.',
      'Assisted root-cause analysis of boiler and steam-system faults affecting steam availability for plant power generation.',
      'Conducted preventive maintenance of boiler and steam-supply systems to maintain readiness for turbine-generator operation.',
    ],
    tags: ['Boiler Operations', 'Steam Systems', 'Preventive Maintenance'],
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
          Graduate research, mentoring, volunteer research, and thermal utilities in manufacturing.
        </motion.p>

        <div className="mt-12 space-y-10">
          {roles.map((role, i) => (
            <motion.article
              key={`${role.title}-${role.period}`}
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
