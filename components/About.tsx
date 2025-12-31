'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ABOUT } from '@/config/app.config';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {ABOUT.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ================= PHOTO SECTION (LEFT) ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden h-[470px]"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl" />


              <Image
                src="/mypic.jpg"
                alt="Purnima Katiyar"
                fill
                className="object-cover rounded-3xl relative z-10"
                priority
              />


              <div className="absolute inset-0 rounded-3xl border border-purple-500/30 z-20" />
            </motion.div>

            <div className="space-y-6">
              {ABOUT.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  {text}
                </p>
              ))}

              <div className="flex flex-wrap gap-4 pt-4">
                {ABOUT.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30 text-sm text-purple-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
