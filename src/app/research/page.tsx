'use client';

import { PortfolioImage } from '@/components/PortfolioImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { FileText, FlaskConical, Thermometer } from 'lucide-react';

export default function ResearchPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Research
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Thermal-fluid systems, boiling, battery thermal management, ML for heat transfer, and experimentation.
        </motion.p>

        {/* Thesis / in-progress */}
        <motion.section
          className="mt-12 rounded-xl border border-accent-cyan/20 bg-slate-900/50 p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 text-accent-cyan">
            <FlaskConical className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Thesis (In Progress)</span>
          </div>
          <h2 className="mt-3 text-xl font-semibold text-white">
            Passive EV Battery Thermal Management Using PCM-Coupled Two-Phase Thermosyphon
          </h2>
          <p className="mt-2 text-slate-400">
            TRANSPORT 2026 – California State University Transportation Consortium (CSUTC). PI: Dr. Paul O. Ayegba.
            This project develops and validates a buoyancy-driven, two-phase loop integrated with nano-enhanced phase change materials (PCM) for passive thermal regulation of EV battery modules. The design uses a low-boiling-point refrigerant circulating naturally through mini-tube networks embedded around a battery–PCM cluster—no pumps, reduced complexity, and scalable to stationary storage and marine electrification.
          </p>
          <ul className="mt-3 list-inside list-disc text-sm text-slate-400">
            <li>SW section: battery/PCM heat source; NE section: fin-augmented condensers</li>
            <li>Nano-enhanced PCM for improved thermal conductivity and latent heat buffering</li>
            <li>CFD/VOF modeling (ANSYS Fluent) + enthalpy–porosity for PCM; benchtop prototype with ITO heaters, thermocouples, IR thermography, pressure/temperature sensors</li>
            <li>Target: pack temps below ~45°C (3–5C discharge), ΔT &lt; 5°C, no external pumping</li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Timeline: Literature & refrigerant/PCM selection (Jan–Feb); loop & fin design with CFD (Feb–Mar); PCM synthesis & testing (Mar–Apr); prototype fabrication (Apr–Jun); validation (Jul–Sep); model calibration & TEA (Sep–Nov).
          </p>
        </motion.section>

        {/* ML flow-boiling publication */}
        <motion.section
          className="mt-10 rounded-xl border border-white/10 bg-slate-900/50 p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-accent-amber">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Publication</span>
          </div>
          <h2 className="mt-3 text-xl font-semibold text-white">
            Prediction of Heat Transfer Coefficient for Saturated Flow-Boiling in Micro/Mini Tubes using Machine Learning and Annular-Flow Surrogates
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            P.O. Ayegba, S.S. Basarkar, R.M.A. Quddus, <strong className="text-slate-400">Varun Narendra Patil</strong>. Department of Mechanical and Aerospace Engineering, CSULB.
          </p>
          <p className="mt-3 text-slate-400">
            Two-part framework: (I) Literature database of 20,727 HTC measurements from 82 studies (22 fluids, multiple diameters and gravity conditions). Physics-informed dimensionless features; four ML models (DLNN, SVM, RF, GBM) compared to Kim–Mudawar correlation. RF and GBM achieved MAPE ~5%, R²~0.99. Grouped feature importance identified reduced pressure, heat-flux forcing, inertia, and two-phase structure as dominant drivers. Stepwise empirical benchmark derived for interpretability. (II) Chained annular-flow surrogate: image-derived features → wave velocity/frequency → interfacial shear → HTC, with boiling-number correction when nucleation intrudes; MAPE as low as 3%, R² up to 0.98.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Keywords: flow boiling; heat transfer coefficient; machine learning; SVM; gradient boosting; annular flow; mini/micro-channels.
          </p>
        </motion.section>

        {/* Research themes */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h2 className="text-lg font-semibold text-white">Research Themes</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-slate-900/30 p-4">
              <Thermometer className="h-8 w-8 text-accent-cyan" />
              <h3 className="mt-2 font-medium text-white">Thermal-Fluid Systems</h3>
              <p className="mt-1 text-sm text-slate-400">Boiling, condensation, two-phase flow, PCM, battery thermal management.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/30 p-4">
              <FlaskConical className="h-8 w-8 text-accent-cyan" />
              <h3 className="mt-2 font-medium text-white">Experimental Validation</h3>
              <p className="mt-1 text-sm text-slate-400">Benchtop prototyping, instrumentation, calibration, uncertainty, repeatability.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/30 p-4">
              <FileText className="h-8 w-8 text-accent-cyan" />
              <h3 className="mt-2 font-medium text-white">ML & Data-Driven Methods</h3>
              <p className="mt-1 text-sm text-slate-400">Physics-informed ML for HTC prediction; surrogate models from imaging.</p>
            </div>
          </div>
        </motion.section>

        {/* Lab visuals */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-white">Lab & Project Visuals</h2>
          <p className="mt-1 text-sm text-slate-400">Prototype and experimental setup imagery from current work.</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="relative aspect-square overflow-hidden rounded-lg bg-slate-800">
                <PortfolioImage
                  src={`/images/scooter-${n}.png`}
                  alt={`Project visual ${n}`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </motion.section>

        <p className="mt-8 text-center text-sm text-slate-500">
          For full project write-ups and experiment details, see <Link href="/projects" className="text-accent-cyan hover:underline">Projects</Link>.
        </p>
      </div>
    </PageTransition>
  );
}
