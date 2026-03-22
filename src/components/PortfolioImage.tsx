'use client';

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

const popSpring = { type: 'spring' as const, stiffness: 520, damping: 18 };

function openImageFullSize(src: string) {
  if (typeof window === 'undefined') return;
  const abs = new URL(src, window.location.origin).href;
  window.open(abs, '_blank', 'noopener,noreferrer');
}

/** Spring scale on hover/tap; click opens the image in a new tab at full size. With `fill`, parent must be `relative` with explicit size. */
export function PortfolioImage({ className, fill, alt, src, onClick, ...props }: ImageProps) {
  return (
    <motion.div
      className={cn(
        fill ? 'absolute inset-0 overflow-hidden' : 'relative overflow-hidden',
        !fill && 'inline-block max-w-full',
        'cursor-pointer'
      )}
      initial={false}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.12 }}
      transition={popSpring}
      title="Open image in new tab"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (typeof src === 'string') openImageFullSize(src);
        onClick?.(e);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          if (typeof src === 'string') openImageFullSize(src);
        }
      }}
    >
      <Image
        alt={alt}
        fill={fill}
        src={src}
        className={cn(fill && 'object-cover', className)}
        {...props}
      />
    </motion.div>
  );
}
