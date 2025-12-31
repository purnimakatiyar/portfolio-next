'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/config/app.config';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {PROJECTS.heading}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.items.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  rounded-2xl
                  border border-purple-500/20
                  bg-gradient-to-br from-purple-500/10 to-pink-500/10
                  backdrop-blur-sm
                  p-6
                  flex flex-col
                "
              >
       
                <div className="h-[140px] flex items-center justify-center mb-4 rounded-xl bg-purple-500/10">
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-6xl drop-shadow-[0_0_16px_rgba(168,85,247,0.6)]"
                  >
                    {project.image}
                  </motion.span>
                </div>

                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs bg-purple-500/20 rounded-full border border-purple-400/30 text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto
                    inline-flex items-center gap-2
                    text-sm
                    font-medium
                    text-purple-300
                    hover:text-pink-400
                    transition-colors
                  "
                >
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
