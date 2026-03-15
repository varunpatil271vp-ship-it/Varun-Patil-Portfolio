'use client';

import { motion } from 'framer-motion';

export function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-60" style={{ backgroundSize: '24px 24px' }} />
      {/* Gradient orbs */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent-cyan/10 blur-3xl" />
      <div className="absolute -right-40 top-1/2 h-60 w-60 rounded-full bg-accent-amber/10 blur-3xl" />
      {/* Animated flow lines */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.3, scaleX: 1 }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 2 }}
            style={{ transformOrigin: '50% 50%' }}
          />
        ))}
      </div>
      {/* Topology-inspired shape */}
      <motion.div
        className="absolute right-[10%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-lg border border-accent-cyan/20 bg-slate-900/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute inset-2 rounded border border-accent-cyan/10 bg-gradient-to-br from-accent-cyan/5 to-transparent" />
      </motion.div>
    </div>
  );
}
