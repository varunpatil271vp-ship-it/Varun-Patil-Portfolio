'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';

const categories = [
  {
    title: 'CAD / Design',
    items: ['SolidWorks', 'AutoCAD', 'GD&T', 'Engineering Drawings', 'Prototyping'],
  },
  {
    title: 'Simulation / Analysis',
    items: ['ANSYS Fluent', 'FEA', 'CFD', 'Multiphysics Modeling', 'VOF / Boiling & Condensation'],
  },
  {
    title: 'Manufacturing',
    items: ['CNC Machining', '3D Printing (PLA, PC)', 'DFM', 'Lean Manufacturing', 'Quality Control'],
  },
  {
    title: 'Programming / Data / Controls',
    items: ['LabVIEW', 'MATLAB', 'Python', 'Data Analysis', 'DAQ Integration'],
  },
  {
    title: 'Experimental / Instrumentation',
    items: ['Thermocouples', 'Pressure Sensors', 'IR Thermography', 'Temperature Controllers', 'Calibration & Uncertainty'],
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
          CAD, simulation, manufacturing, programming, and experimental instrumentation.
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
