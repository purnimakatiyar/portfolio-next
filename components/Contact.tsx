'use client';

import { motion } from 'framer-motion';
import { CONTACT } from '@/config/app.config';

interface ContactProps {
  setCursorVariant: (variant: string) => void;
}

export default function Contact({ setCursorVariant }: ContactProps) {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-6 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {CONTACT.heading}
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {CONTACT.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {CONTACT.methods.map((method, i) => (
              <motion.a
                key={i}
                href={method.href}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-colors"
              >
                <method.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <p className="text-sm text-gray-300">{method.text}</p>
              </motion.a>
            ))}
          </div>

          <motion.a
            href={CONTACT.cta.href}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            {CONTACT.cta.label}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
