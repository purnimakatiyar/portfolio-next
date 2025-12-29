'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '@/config/app.config';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (section: string) => void;
  setCursorVariant: (variant: string) => void;
}

export default function Navigation({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  setCursorVariant,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            {...NAVIGATION.animation.brand}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {NAVIGATION.brand}
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {NAVIGATION.items.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`capitalize transition-colors ${
                  activeSection === item
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
                {...NAVIGATION.animation.menuItem}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...NAVIGATION.animation.mobileMenu}
            className="md:hidden bg-slate-900 border-t border-purple-500/20"
          >
            {NAVIGATION.items.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 capitalize hover:bg-purple-500/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
