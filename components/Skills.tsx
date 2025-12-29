'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/config/app.config';

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-6 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {SKILLS.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.categories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={SKILLS.animation.cardHover}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
              >
                <category.icon className="w-12 h-12 mb-4 text-purple-400" />

                <h3 className="text-2xl font-bold mb-4">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.items.map((skill, j) => (
                    <motion.div
                      key={skill}
                      {...SKILLS.animation.skillBar}
                      viewport={{ once: true }}
                      transition={{
                        ...SKILLS.animation.skillBar.transition,
                        delay: i * 0.1 + j * 0.05,
                      }}
                      className="px-3 py-2 bg-purple-500/20 rounded-lg text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
