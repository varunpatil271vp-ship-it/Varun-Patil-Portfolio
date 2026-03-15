'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Cpu, Factory, FlaskConical, LineChart } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    title: 'Design & Simulation',
    text: 'CAD-driven design, topology optimization, and multiphysics simulation to bridge concept and validation.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Prototyping',
    text: 'From CNC-machined aluminum and 3D-printed test sections to documentation and build procedures.',
  },
  {
    icon: FlaskConical,
    title: 'Experimental Validation',
    text: 'Instrumentation, calibration, uncertainty tracking, and repeatable tests under transient and battery-like conditions.',
  },
  {
    icon: LineChart,
    title: 'Optimization & Data',
    text: 'Thermal-fluid optimization, ML-informed heat transfer, and data-driven design decisions.',
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          About
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I am a Master&apos;s student in Mechanical Engineering at California State University, Long Beach, specializing in Design and Manufacturing. My work sits at the intersection of design, simulation, manufacturing, and testing—translating concepts into prototypes and validated experiments.
        </motion.p>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {pillars.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-6 card-hover"
            >
              <item.icon className="h-10 w-10 text-accent-cyan" />
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 rounded-xl border border-white/10 bg-slate-900/50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-white">Education</h2>
          <p className="mt-2 text-slate-400">
            <strong className="text-white">M.S. Mechanical Engineering</strong> (Design & Manufacturing) — California State University, Long Beach · Aug 2024 – Present
          </p>
          <p className="mt-2 text-slate-400">
            <strong className="text-white">B.E. Mechanical Engineering</strong> — Dr. A.P.J. Abdul Kalam University, Indore, India · June 2019 – June 2023
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
