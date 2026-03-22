'use client';

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

const popSpring = { type: 'spring' as const, stiffness: 520, damping: 18 };

/** Spring scale on hover/tap. With `fill`, parent must be `relative` with explicit size. */
export function PortfolioImage({ className, fill, alt, ...props }: ImageProps) {
  return (
    <motion.div
      className={cn(
        fill ? 'absolute inset-0 overflow-hidden' : 'relative overflow-hidden',
        !fill && 'inline-block max-w-full'
      )}
      initial={false}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.12 }}
      transition={popSpring}
    >
      <Image
        alt={alt}
        fill={fill}
        className={cn(fill && 'object-cover', className)}
        {...props}
      />
    </motion.div>
  );
}
