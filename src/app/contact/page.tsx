'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';

const RECIPIENT_EMAIL = 'varunnpatil3333@gmail.com';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Contact from ${firstName.trim() || 'Someone'} ${lastName.trim()}`.trim();
    const body = [
      message.trim(),
      '',
      '---',
      `Sent by: ${[firstName.trim(), lastName.trim()].filter(Boolean).join(' ') || 'Visitor'}`,
      email.trim() ? `Reply to: ${email.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\r\n');
    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact me
        </motion.h1>
        <motion.p
          className="mt-3 text-lg italic text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          I&apos;d like to hear from you!
        </motion.p>
        <motion.p
          className="mt-2 text-sm text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          If you have any questions or just want to say hi, please use the contact form.
        </motion.p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Left: contact info */}
          <motion.div
            className="space-y-6 rounded-xl border border-white/10 bg-slate-900/50 p-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <a
              href={`mailto:${RECIPIENT_EMAIL}`}
              className="flex items-center gap-4 text-slate-300 transition hover:text-accent-cyan"
            >
              <Mail className="h-6 w-6 shrink-0 text-accent-cyan" />
              <span className="underline">{RECIPIENT_EMAIL}</span>
            </a>
            <a
              href="tel:+15625836346"
              className="flex items-center gap-4 text-slate-300 transition hover:text-accent-cyan"
            >
              <Phone className="h-6 w-6 shrink-0 text-accent-cyan" />
              <span>(562) 583-6346</span>
            </a>
            <a
              href="https://www.linkedin.com/in/varun-patil-b4530a327"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-slate-300 transition hover:text-accent-cyan"
            >
              <Linkedin className="h-6 w-6 shrink-0 text-accent-cyan" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-4 text-slate-400">
              <MapPin className="h-6 w-6 shrink-0 text-accent-cyan" />
              <span>Long Beach, CA</span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSend}
            className="rounded-xl border border-white/10 bg-slate-900/50 p-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="mb-1 block text-sm font-medium text-slate-300">
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="mb-1 block text-sm font-medium text-slate-300">
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">
                Email <span className="text-slate-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50"
                placeholder="your@email.com"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-y rounded-lg border border-white/10 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50"
                placeholder="Your message..."
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-accent-cyan px-6 py-2.5 font-medium text-slate-950 transition hover:bg-accent-cyan/90"
              >
                Send
              </button>
            </div>
          </motion.form>
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Open to research collaborations, industry internships, and full-time roles in design, manufacturing, and thermal systems.
        </motion.p>
      </div>
    </PageTransition>
  );
}
