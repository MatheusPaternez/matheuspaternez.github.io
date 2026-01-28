import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import expenseTracker from '../assets/expense-tracker.png'
import courseHub from '../assets/course-hub.png'
import ptzStore from '../assets/ptzStore.png'

const projects = [
  {
    id: 1,
    title: 'Expense Tracker',
    description: 'JS Expense Tracker implementing CRUD functionality for financial management. Built with Scrum workflow.',
    image: expenseTracker,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Scrum'],
    category: 'web',
    github: 'https://github.com/MatheusPaternez/Expense-Tracker-with-Scrum',
    live: 'https://matheuspaternez.github.io/Expense-Tracker-with-Scrum/',
  },
  {
    id: 2,
    title: 'Course Hub App',
    description: 'Dynamic Course Hub built with React and Scrum. Features modular components for a seamless user experience.',
    image: courseHub,
    tags: ['Tailwind', 'React', 'Scrum'],
    category: 'web',
    github: 'https://github.com/MatheusPaternez/course-hub-react-app',
    live: 'https://matheuspaternez.github.io/course-hub-react-app/',
  },
  {
    id: 3,
    title: 'Course Hub Backend',
    description: 'A RESTful API for a Course Hub built with PHP. Designed to handle data requests via standard HTTP methods (GET, POST, PUT, DELETE) and deliver structured JSON responses.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['PHP', 'MySQL', 'RestFUL API'],
    category: 'web',
    github: 'https://github.com/MatheusPaternez/course-hub-php',
    live: 'https://github.com/MatheusPaternez/course-hub-php',
  },
  {
    id: 4,
    title: 'DJango Grocery Store',
    description: 'A full-stack Grocery Store application built with Django. Designed to manage secure authentication, product inventory, and cart orders requiring staff approval across three distinct user roles.',
    image: ptzStore,
    tags: ['DJango', 'NoSQL', 'Database', 'FullStack Web Application'],
    category: 'web',
    github: 'https://github.com/MatheusPaternez/grocery-store-django',
    live: 'https://github.com/MatheusPaternez/grocery-store-django',
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-violet-500/50 transition-all duration-500"
  >
    {/* Image */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      
      {/* Overlay Links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.a
          href={project.github}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github size={20} />
        </motion.a>
        <motion.a
          href={project.live}
          className="p-3 rounded-full bg-violet-600 text-white hover:bg-violet-500 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ExternalLink size={20} />
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 ">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Selected
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            A selection of some projects in Web Development
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}