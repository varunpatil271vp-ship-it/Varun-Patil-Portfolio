'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { projects } from '@/data/projects';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Thermal Systems', 'Optimization & Design', 'Experimental Research', 'Manufacturing & Prototyping', 'Materials / Testing'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Thermal systems, optimization, experimentation, manufacturing, and materials.
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition',
                filter === cat
                  ? 'bg-accent-cyan text-slate-950'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 card-hover"
              >
                <div className="relative h-48 w-full bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium text-accent-cyan">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-white group-hover:text-accent-cyan">
                    {project.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                    {project.shortSummary}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{project.period}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-accent-cyan">
                    <span>View project</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
