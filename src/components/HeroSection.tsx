import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 0.9, 0.3, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const roles = [
  'Full-Stack Developer',
  'MERN Stack Specialist',
  'React Enthusiast',
  'Problem Solver',
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Particles with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-primary/40"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              scale: 0
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 30}%`],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Glowing Orbs with Parallax */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Terminal Greeting */}
          <motion.div 
            variants={fadeInUp}
            className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6"
          >
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-primary font-mono text-sm md:text-base">
              {'~/portfolio > hello_world'}
            </span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1 
            variants={fadeInUp}
            className="hero-name text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            I'm <span className="gradient-text">
              Abhishek Kumar
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground">Pandey</span>
          </motion.h1>

          {/* Dynamic Role with Code Style */}
          <motion.div 
            variants={fadeInUp}
            className="hero-role h-12 md:h-16 flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <span className="text-primary font-mono text-sm">const role =</span>
              <span className="text-xl md:text-2xl font-semibold text-foreground font-mono">
                "{displayText}"
              </span>
              <span className="w-0.5 h-6 bg-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="hero-description text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            I build fast, scalable web applications with modern technologies. 
            Passionate about crafting seamless user experiences and solving complex problems.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.a 
              href="https://github.com/pandey-jee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social p-3 glass-card-hover rounded-full hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/abhishek-kumar-pandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social p-3 glass-card-hover rounded-full hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="mailto:pandeyji252002@gmail.com"
              className="hero-social p-3 glass-card-hover rounded-full hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="hero-cta glow-button w-full sm:w-auto px-8 relative overflow-hidden group"
                onClick={scrollToProjects}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="hero-cta w-full sm:w-auto px-8 border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.2)] transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="font-mono">&lt;</span>
              Get In Touch
              <span className="font-mono">/&gt;</span>
            </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
