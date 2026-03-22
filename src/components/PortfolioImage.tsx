'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const popSpring = { type: 'spring' as const, stiffness: 520, damping: 18 };
const lightboxSpring = { type: 'spring' as const, stiffness: 400, damping: 26 };

export function PortfolioImage({ className, fill, alt, src, onClick, ...props }: ImageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [lightboxOpen, close]);

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setLightboxOpen(true);
  };

  const overlay =
    mounted &&
    typeof document !== 'undefined' &&
    createPortal(
      <AnimatePresence>
        {lightboxOpen && typeof src === 'string' && (
          <motion.div
            key="portfolio-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={typeof alt === 'string' ? alt : 'Enlarged image'}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-slate-950/88 backdrop-blur-[2px]"
              aria-label="Close image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.div
              className="relative z-10 w-full max-w-[min(96vw,1200px)]"
              initial={{ scale: 0.78, opacity: 0, y: 32 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={lightboxSpring}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-xl border border-white/15 bg-slate-900 shadow-2xl shadow-black/50">
                <div className="relative h-[min(85vh,880px)] w-full">
                  <Image
                    src={src}
                    alt={typeof alt === 'string' ? alt : 'Portfolio image'}
                    fill
                    className="object-contain p-2 sm:p-4"
                    sizes="(max-width: 1280px) 96vw, 1200px"
                    priority
                  />
                </div>
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded-full bg-slate-950/90 p-2 text-white ring-1 ring-white/20 transition hover:bg-slate-800"
                  onClick={close}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <motion.div
        className={cn(
          fill ? 'absolute inset-0 overflow-hidden' : 'relative overflow-hidden',
          !fill && 'inline-block max-w-full',
          'cursor-zoom-in'
        )}
        initial={false}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 1.06 }}
        transition={popSpring}
        title="Click to enlarge"
        role="button"
        tabIndex={0}
        onClick={openLightbox}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            setLightboxOpen(true);
          }
        }}
      >
        <Image
          alt={alt}
          fill={fill}
          src={src}
          className={cn(fill && 'object-cover', className)}
          {...props}
          onClick={onClick}
        />
      </motion.div>
      {overlay}
    </>
  );
}
