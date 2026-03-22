'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { PortfolioImage } from '@/components/PortfolioImage';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { getProject } from '@/data/projects';
import { projectDetails } from '@/data/projectDetails';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = getProject(id);
  const detail = project ? projectDetails[id] : null;

  if (!project) notFound();

  const visualImages = project.gallery?.length
    ? project.gallery
    : [project.image];

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent-cyan"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <motion.div
          className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-slate-800 sm:h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <PortfolioImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <div className="pointer-events-none absolute bottom-4 left-4 z-10">
            <span className="text-xs font-medium text-accent-cyan">{project.category}</span>
            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{project.title}</h1>
            <p className="text-sm text-slate-400">{project.period}</p>
          </div>
        </motion.div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="mt-2 text-slate-400">{project.shortSummary}</p>
          </section>

          {detail && (
            <>
              {detail.problem && (
                <section>
                  <h2 className="text-lg font-semibold text-white">Problem</h2>
                  <p className="mt-2 text-slate-400">{detail.problem}</p>
                </section>
              )}
              {detail.objective && (
                <section>
                  <h2 className="text-lg font-semibold text-white">Objective</h2>
                  <p className="mt-2 text-slate-400">{detail.objective}</p>
                </section>
              )}
              {detail.role && (
                <section>
                  <h2 className="text-lg font-semibold text-white">My Role</h2>
                  <p className="mt-2 text-slate-400">{detail.role}</p>
                </section>
              )}
            </>
          )}

          <section>
            <h2 className="text-lg font-semibold text-white">Tools / Methods</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/5 px-3 py-1 text-sm text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {detail?.process && (
            <section>
              <h2 className="text-lg font-semibold text-white">Design / Research Process</h2>
              <p className="mt-2 text-slate-400">{detail.process}</p>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold text-white">Result / Outcome</h2>
            <p className="mt-2 text-slate-400">{project.outcome}</p>
          </section>

          {detail?.learnings && (
            <section>
              <h2 className="text-lg font-semibold text-white">Key Learnings</h2>
              <p className="mt-2 text-slate-400">{detail.learnings}</p>
            </section>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Visuals</h2>
          <p className="mt-1 text-sm text-slate-500">
            Figures, photos, and visuals from this project.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visualImages.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-800"
              >
                <PortfolioImage
                  src={src}
                  alt={`${project.title}, figure ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
