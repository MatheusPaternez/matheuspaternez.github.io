import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Sparkles } from 'lucide-react';
import proPic from '../assets/proPic.JPG'

const highlights = [
  { icon: Code2, title: 'Web Development', desc: 'React, Next.js, TypeScript' },
  { icon: Server, title: 'Backend', desc: 'Node.js, Python, Django, APIs' },
  { icon: Database, title: 'SAP', desc: 'ABAP, S/4HANA (Still learning!)' },
  { icon: Sparkles, title: 'UI/UX', desc: 'Design Systems, Figma' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Developer Passionate for{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-3xl blur-2xl opacity-30" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-56 h-56 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-white/5">
                      <img src={proPic} alt="Matheus Paternez" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Matheus Paternez</h3>
                    <p className="text-slate-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-2xl shadow-violet-500/25"
              >
                <p className="text-white font-bold text-lg">1+ Years</p>
                <p className="text-violet-200 text-sm">of Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am a developer passionate about creating digital solutions that make a difference. 
              My journey began in web development, and I am currently expanding my horizons into the SAP universe, 
              learning how to combine the best of both worlds.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I believe technology should be elegant, functional, and accessible. For me, every project is a chance to learn 
              something new and tackle creative challenges.
              My goal is to grow into an SAP Specialist, while keeping my core development skills sharp.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-violet-400 mb-3 group-hover:text-cyan-400 transition-colors" />
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}