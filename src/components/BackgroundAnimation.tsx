import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const BackgroundAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce animation intensity on mobile
  const orbScale = isMobile ? [1, 1.1, 1] : [1, 1.3, 1];
  const orbDuration = isMobile ? 30 : 20;
  const particleCount = isMobile ? 10 : 30;
  const blurAmount = isMobile ? '100px' : '150px';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full"
        style={{ filter: `blur(${blurAmount})` }}
        animate={{
          x: [0, isMobile ? 50 : 100, 0],
          y: [0, isMobile ? -25 : -50, 0],
          scale: orbScale,
        }}
        transition={{
          duration: orbDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-secondary/20 rounded-full"
        style={{ filter: `blur(${blurAmount})` }}
        animate={{
          x: [0, isMobile ? -50 : -100, 0],
          y: [0, isMobile ? 50 : 100, 0],
          scale: isMobile ? [1, 1.15, 1] : [1, 1.3, 1],
        }}
        transition={{
          duration: isMobile ? 35 : 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/15 rounded-full"
        style={{ filter: `blur(${isMobile ? '80px' : '120px'})` }}
        animate={{
          x: [0, isMobile ? -40 : -80, 0],
          y: [0, isMobile ? 40 : 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: isMobile ? 28 : 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles - Reduced on mobile */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(100 + Math.random() * (isMobile ? 100 : 200))],
            x: [0, (Math.random() - 0.5) * (isMobile ? 50 : 100)],
            opacity: [0, 1, 0],
            scale: [0, 1 + Math.random(), 0],
          }}
          transition={{
            duration: isMobile ? 8 : 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Grid Pattern - Static on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]" />
    </div>
  );
};
