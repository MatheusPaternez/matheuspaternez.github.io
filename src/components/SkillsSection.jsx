import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'MySQL', level: 84 },
      { name: 'DJango', level: 80 },
      { name: 'PHP', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Postman', level: 80 },
    ],
  },
];

const SkillBar = ({ skill, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-slate-300 font-medium">{skill.name}</span>
      <span className="text-slate-500 text-sm">{skill.level}%</span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 1, ease: 'easeOut' }}
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
      />
    </div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The technologies and tools I leverage to build scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={catIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}