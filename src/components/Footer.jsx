import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Code2 className="text-purple-400" size={24} />
            <span className="text-white font-bold text-lg">Matheus Paternez</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-slate-400"
          >
            <span>© 2026 • Matheus Paternez</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            React • Tailwind CSS • Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}