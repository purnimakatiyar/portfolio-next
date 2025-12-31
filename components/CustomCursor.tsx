'use client';

import { motion } from 'framer-motion';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  cursorVariant: string;
}

export default function CustomCursor({
  mousePosition,
  cursorVariant,
}: CustomCursorProps) {
  return (
    <>

      <motion.div
        className="fixed pointer-events-none z-20 hidden lg:block"
        style={{
          width: 160,
          height: 160,
          background:
            'radial-gradient(circle, rgba(168,85,247,0.35), rgba(236,72,153,0.25), transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{
          type: 'spring',
          stiffness: 18,
          damping: 35,
          mass: 4,
        }}
      />

      <motion.div
        className="fixed pointer-events-none z-30 hidden lg:block"
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background:
            'conic-gradient(from 0deg, #a855f7, #ec4899, #22d3ee, #a855f7)',
          filter: 'blur(2px)',
          opacity: 0.9,
        }}
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          rotate: 360,
          scale: cursorVariant === 'hover' ? 1.25 : 1,
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          },
          x: { type: 'spring', stiffness: 200, damping: 25 },
          y: { type: 'spring', stiffness: 200, damping: 25 },
          scale: { type: 'spring', stiffness: 260, damping: 20 },
        }}
      />

      <motion.div
        className="fixed pointer-events-none z-40 hidden lg:block"
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 30% 30%, #ffffff, #a855f7, #22d3ee)',
          filter: 'blur(3px)',
        }}
        animate={{
          x: mousePosition.x - 17,
          y: mousePosition.y - 17,
          borderRadius: [
            '50% 50% 45% 55%',
            '55% 45% 50% 50%',
            '45% 55% 55% 45%',
            '50% 50% 45% 55%',
          ],
        }}
        transition={{
          x: { type: 'spring', stiffness: 450, damping: 30 },
          y: { type: 'spring', stiffness: 450, damping: 30 },
          borderRadius: {
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          },
        }}
      />


      <motion.div
        className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          background: '#ffffff',
          boxShadow:
            '0 0 10px rgba(168,85,247,0.9), 0 0 20px rgba(236,72,153,0.6)',
        }}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 45,
        }}
      />
    </>
  );
}
