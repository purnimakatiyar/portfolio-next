'use client';

import { motion, MotionValue } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HERO } from '@/config/app.config';

interface HeroProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  setCursorVariant: (variant: string) => void;
}

type Blob = {
  width: number;
  height: number;
  left: string;
  top: string;
  x: number;
  y: number;
  scale: number;
  duration: number;
};

export default function Hero({ opacity, scale, setCursorVariant }: HeroProps) {
  const [blobs, setBlobs] = useState<Blob[]>([]);

  useEffect(() => {
    const {
      count,
      minSize,
      maxSize,
      animationOffset,
      minDuration,
      maxDuration,
    } = HERO.blobs;

    const generated: Blob[] = Array.from({ length: count }, () => ({
      width: Math.random() * (maxSize - minSize) + minSize,
      height: Math.random() * (maxSize - minSize) + minSize,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: Math.random() * animationOffset - animationOffset / 2,
      y: Math.random() * animationOffset - animationOffset / 2,
      scale: Math.random() + 0.5,
      duration: Math.random() * (maxDuration - minDuration) + minDuration,
    }));

    setBlobs(generated);
  }, []);

  if (!blobs.length) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >

      <div className="absolute inset-0 overflow-hidden">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500/10 rounded-full"
            style={{
              width: blob.width,
              height: blob.height,
              left: blob.left,
              top: blob.top,
            }}
            animate={{
              x: [0, blob.x, 0],
              y: [0, blob.y, 0],
              scale: [1, blob.scale, 1],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {HERO.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {HERO.subtitle}
          </p>


          <div className="flex flex-wrap justify-center gap-4 mb-12">

            <motion.a
              href={HERO.cta.primary.href}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              {HERO.cta.primary.label}
            </motion.a>


            <motion.a
              href={HERO.cta.secondary.href}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
            >
              {HERO.cta.secondary.label}
            </motion.a>

            <motion.a
              href="/Purnima_Katiyar_Resume.pdf"
              download
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 flex items-center gap-2 border border-pink-400/40 rounded-full font-semibold text-pink-300 hover:bg-pink-400/10 transition-colors"
            >
              <Download size={18} />
               Resume
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            {HERO.socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target='_blank'
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
