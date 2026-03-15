import Link from 'next/link';
import { Mail, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-white">Varun Narendra Patil</p>
            <p className="text-xs text-slate-500">M.S. Mechanical Engineering · Design & Manufacturing</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a
              href="mailto:varunnpatil3333@gmail.com"
              className="flex items-center gap-2 transition hover:text-accent-cyan"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/varun-narendra-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-accent-cyan"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Long Beach, CA
            </span>
          </div>
        </div>
        <div className="mt-6 border-t border-white/5 pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Varun Narendra Patil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
