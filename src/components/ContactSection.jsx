import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin,File } from 'lucide-react';
import resume from '../assets/MatheusPaternezResume.pdf'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Brazil' },
  { icon: Phone, label: 'Cell Number', value: '+55 (12) 99163-2638' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/MatheusPaternez', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/matheuspaternez', label: 'LinkedIn' },
  { icon: File, href: resume, label: 'Resume' },
];

export default function ContactSection() {

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Talk?
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Get in touch and let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow me on social media</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white text-xl font-semibold mb-4">Email</h3>
              <a href="mailto:matheusgfpaternez2006@gmail.com" className="text-cyan-400 font-medium text-lg break-all">
                matheusgfpaternez2006@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}