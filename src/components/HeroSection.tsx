import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Animated Particles - CSS Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-primary/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Greeting */}
          <div className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-primary font-mono text-sm md:text-base">
              {'~/portfolio > hello_world'}
            </span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>

          {/* Name with Glitch Effect */}
          <h1 className="hero-name text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            I'm <span className="gradient-text">
              Abhishek Kumar
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground">Pandey</span>
          </h1>

          {/* Dynamic Role with Code Style */}
          <div className="hero-role h-12 md:h-16 flex items-center justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <span className="text-primary font-mono text-sm">const role =</span>
              <span className="text-xl md:text-2xl font-semibold text-foreground font-mono">
                "{displayText}"
              </span>
              <span className="w-0.5 h-6 bg-primary animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <p className="hero-description text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            I build fast, scalable web applications with modern technologies. 
            Passionate about crafting seamless user experiences and solving complex problems.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-scale-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            <a 
              href="https://github.com/pandey-jee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social p-3 glass-card-hover rounded-full hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-kumar-pandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social p-3 glass-card-hover rounded-full hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:pandeyji252002@gmail.com"
              className="hero-social p-3 glass-card-hover rounded-full hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <Button 
              size="lg" 
              className="hero-cta glow-button w-full sm:w-auto px-8 relative overflow-hidden group"
              onClick={scrollToProjects}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
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
          </div>
        </div>
      </div>
    </section>
  );
};
