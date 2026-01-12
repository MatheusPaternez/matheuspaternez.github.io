import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'High School Diploma',
    company: 'Poliedro',
    period: '2022 - 2024',
    description: 'High school curriculum enriched with technical coursework. I gained early experience in agile methodologies using Scrum and developed practical projects involving Arduino and Computer Science fundamentals.',
    color: 'from-violet-500 to-fuchsia-500',
  },{
    type: 'education',
    icon: GraduationCap,
    title: 'Web Development Diploma',
    company: 'Tamwood Careers',
    period: '2025 - 2026',
    description: 'During my studies at Tamwood Careers in Canada, I specialized in building dynamic web applications through rigorous coursework. The program sharpened my skills in both front-end and back-end technologies, preparing me to solve complex coding challenges.',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Science and Technology',
    company: 'Bachelor of Science and Technology',
    period: '2025 - 2028',
    description: 'Degree focused on scientific and technological principles, emphasizing applied mathematics, logic, and software engineering concepts.',
    color: 'from-cyan-500 to-blue-500',
  }
];

const TimelineItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
        >
          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white`}>
              {experience.period}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
          <p className="text-violet-400 font-medium mb-3">{experience.company}</p>
          <p className="text-slate-400 text-sm leading-relaxed">{experience.description}</p>
        </motion.div>
      </div>

      {/* Icon */}
      <div className="hidden md:flex relative">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg z-10`}
        >
          <experience.icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Empty Space */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Background Elements */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent hidden md:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience &{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional and academic journey so far
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}