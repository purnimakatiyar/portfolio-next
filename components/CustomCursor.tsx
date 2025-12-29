'use client';

import { motion } from 'framer-motion';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  cursorVariant: string;
}

export default function CustomCursor({ mousePosition, cursorVariant }: CustomCursorProps) {
  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-purple-400 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorVariant === 'hover' ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />

      <motion.div
        className="fixed w-2 h-2 rounded-full bg-purple-400 pointer-events-none z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.3
        }}
      />
    </>
  );
}
