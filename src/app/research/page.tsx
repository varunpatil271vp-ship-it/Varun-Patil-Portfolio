'use client';

import { PortfolioImage } from '@/components/PortfolioImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Download, ExternalLink, FileText, FlaskConical, Thermometer, Users } from 'lucide-react';
import { highlightAuthor, publications } from '@/data/publications';
import { theses } from '@/data/theses';

export default function ResearchPage() {
  const ownThesis = theses.find((t) => t.kind === 'author');
  const contributedTheses = theses.filter((t) => t.kind === 'contributor');

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

        {/* Completed thesis */}
        {ownThesis && (
          <motion.section
            className="mt-12 rounded-xl border border-accent-cyan/20 bg-slate-900/50 p-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex flex-wrap items-center gap-2 text-accent-cyan">
              <FlaskConical className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">M.S. Thesis (Completed)</span>
              <span className="rounded-full bg-accent-cyan/10 px-2 py-0.5 text-xs font-medium text-accent-cyan">
                {ownThesis.year}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">{ownThesis.title}</h2>
            <p className="mt-1 text-sm text-slate-500">
              <strong className="text-slate-400">{ownThesis.author}</strong> · {ownThesis.degree},{' '}
              {ownThesis.institution}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Chair: {ownThesis.chair}
              {ownThesis.committee?.length
                ? ` · Committee: ${ownThesis.committee.join('; ')}`
                : null}
            </p>
            <p className="mt-3 text-slate-400">{ownThesis.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {ownThesis.pdfUrl && (
                <a
                  href={ownThesis.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-accent-cyan/90"
                >
                  <Download className="h-4 w-4" />
                  Download thesis PDF
                </a>
              )}
              {ownThesis.projectId && (
                <Link
                  href={`/projects/${ownThesis.projectId}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  Project write-up
                </Link>
              )}
            </div>
          </motion.section>
        )}

        {/* Peer-reviewed publications */}
        {publications.map((pub, index) => {
          const highlighted = highlightAuthor(pub.authors);
          return (
            <motion.section
              key={pub.id}
              className="mt-10 rounded-xl border border-white/10 bg-slate-900/50 p-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <div className="flex flex-wrap items-center gap-2 text-accent-amber">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Published</span>
                <span className="rounded-full bg-accent-amber/10 px-2 py-0.5 text-xs font-medium text-accent-amber">
                  {pub.year}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">{pub.title}</h2>
              <p className="mt-1 text-sm text-slate-500">
                {highlighted ? (
                  <>
                    {highlighted.before}
                    <strong className="text-slate-400">{highlighted.name}</strong>
                    {highlighted.after}
                  </>
                ) : (
                  pub.authors
                )}
                . Department of Mechanical and Aerospace Engineering, CSULB.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                <em>{pub.journal}</em>
                {' · '}
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  doi:{pub.doi}
                </a>
              </p>
              <p className="mt-3 text-slate-400">{pub.abstract}</p>
              <p className="mt-2 text-xs text-slate-500">Keywords: {pub.keywords}.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan transition hover:bg-accent-cyan/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  View publication
                </a>
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                )}
                {pub.projectId && (
                  <Link
                    href={`/projects/${pub.projectId}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
                  >
                    Project write-up
                  </Link>
                )}
              </div>
            </motion.section>
          );
        })}

        {/* Collaborative theses */}
        {contributedTheses.map((thesis, index) => (
          <motion.section
            key={thesis.id}
            className="mt-10 rounded-xl border border-white/10 bg-slate-900/50 p-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <div className="flex flex-wrap items-center gap-2 text-slate-300">
              <Users className="h-5 w-5 text-accent-cyan" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Collaborative thesis support
              </span>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs font-medium text-slate-400">
                {thesis.year}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">{thesis.title}</h2>
            <p className="mt-1 text-sm text-slate-500">
              Author: {thesis.author} · {thesis.degree}, {thesis.institution}
            </p>
            <p className="mt-1 text-sm text-slate-500">Chair: {thesis.chair}</p>
            {thesis.contributionNote && (
              <p className="mt-2 text-sm text-accent-cyan/90">{thesis.contributionNote}</p>
            )}
            <p className="mt-3 text-slate-400">{thesis.summary}</p>
            {thesis.projectId && (
              <div className="mt-4">
                <Link
                  href={`/projects/${thesis.projectId}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  Related project
                </Link>
              </div>
            )}
          </motion.section>
        ))}

        {/* Research themes */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
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
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-white">Lab & Project Visuals</h2>
          <p className="mt-1 text-sm text-slate-400">
            Phase Change and Multi-Phase Flow Laboratory, CSULB — experimental rigs, imaging, and prototypes.
          </p>
          <div className="relative mt-4 aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 sm:aspect-[4/3]">
            <PortfolioImage
              src="/images/lab-pcmf-figure.png"
              alt="Phase Change and Multi-Phase Flow Laboratory at CSULB — selected photos of test sections, high-speed imaging, and flow-loop prototypes"
              fill
              className="object-contain p-1 sm:p-2"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="mt-2 text-center text-xs text-slate-500">
            Figure 1. Phase Change and Multi-Phase Flow Laboratory (selected photos).
          </p>
        </motion.section>

        <p className="mt-8 text-center text-sm text-slate-500">
          For full project write-ups and experiment details, see{' '}
          <Link href="/projects" className="text-accent-cyan hover:underline">
            Projects
          </Link>
          .
        </p>
      </div>
    </PageTransition>
  );
}
