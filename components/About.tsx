'use client';

import { motion } from 'framer-motion';
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
        
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {ABOUT.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-9xl"
            >
              {ABOUT.emoji}
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

              <div className="flex flex-wrap gap-4">
                {ABOUT.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30"
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
