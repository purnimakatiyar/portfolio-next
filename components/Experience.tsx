'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/config/app.config';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ---------------- Heading ---------------- */}
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {EXPERIENCE.heading}
          </h2>

          {/* ---------------- Experience Timeline ---------------- */}
          <div className="space-y-12">
            {EXPERIENCE.items.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-500/20 border border-purple-500/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.highlights.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
