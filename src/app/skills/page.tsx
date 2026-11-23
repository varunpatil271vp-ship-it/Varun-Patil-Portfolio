'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';

const categories = [
  {
    title: 'Testing and Instrumentation',
    items: [
      'LabVIEW',
      'NI / MCC DAQ',
      'Thermocouples',
      'Pressure Transducers',
      'Measurement & Logging',
    ],
  },
  {
    title: 'Data Analysis',
    items: [
      'MATLAB',
      'Data Processing & Visualization',
      'Transient Temperature Analysis',
      'Thermal-Performance Comparison',
    ],
  },
  {
    title: 'Test Hardware and Fabrication',
    items: [
      'SolidWorks',
      'Test-Rig Design & Assembly',
      'CNC Machining',
      'Conventional Milling',
      '3D Printing',
    ],
  },
  {
    title: 'Thermal Systems',
    items: [
      'Battery Thermal Management (BTMS)',
      'Phase Change Materials (PCM)',
      'Thermosyphons',
      'Transient Heat Transfer',
      'Pool and Flow Boiling',
    ],
  },
  {
    title: 'Simulation and Analysis',
    items: [
      'ANSYS Fluent (Transient Thermal / Phase-Change)',
      'ANSYS DesignModeler',
      'ANSYS Meshing',
    ],
  },
];

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills & Tools
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Instrumentation, thermal systems, fabrication, data analysis, and simulation.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-6 card-hover"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <h2 className="text-lg font-semibold text-accent-cyan">{cat.title}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
