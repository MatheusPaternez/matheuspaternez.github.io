import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Animated gradient orbs as 3D-like background effect
const GradientOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Floating particles animation
const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-violet-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// 3D-like sphere using CSS
const AnimatedSphere = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ perspective: 1000 }}
      >
        {/* Main sphere */}
        <motion.div
          className="w-64 h-64 md:w-96 md:h-96 rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(34, 211, 238, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(79, 70, 229, 0.2) 100%)
            `,
            boxShadow: `
              inset -30px -30px 60px rgba(0, 0, 0, 0.4),
              inset 30px 30px 60px rgba(255, 255, 255, 0.1),
              0 0 100px rgba(139, 92, 246, 0.5),
              0 0 200px rgba(34, 211, 238, 0.3)
            `,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner glow rings */}
          <motion.div
            className="absolute inset-4 rounded-full border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border border-cyan-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-12 rounded-full border border-violet-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Orbiting rings */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: 75, rotateZ: [0, 360] }}
          transition={{ 
            rotateZ: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        >
          <div 
            className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border border-violet-500/30"
            style={{ transform: 'rotateX(75deg)' }}
          />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotateX: 75, rotateZ: [0, -360] }}
          transition={{ 
            rotateZ: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        >
          <div 
            className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border border-cyan-500/20"
            style={{ transform: 'rotateX(75deg)' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient Orbs */}
      <GradientOrb 
        className="w-96 h-96 bg-violet-600/30 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" 
        delay={0} 
      />
      <GradientOrb 
        className="w-80 h-80 bg-cyan-600/20 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" 
        delay={2} 
      />
      <GradientOrb 
        className="w-64 h-64 bg-fuchsia-600/20 top-1/2 right-1/3" 
        delay={4} 
      />
      
      {/* Particles */}
      <Particles />
      
      {/* 3D Sphere */}
      <AnimatedSphere />
    </div>
  );
}