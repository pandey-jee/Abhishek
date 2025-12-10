import { useEffect, useRef } from 'react';
import { Clock, MessageSquare, Target, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround time without compromising on quality. Your project delivered on schedule.',
    stat: '2-4 weeks',
    color: 'from-primary to-cyan-400',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates, transparent progress tracking, and always available for questions.',
    stat: '24/7 Support',
    color: 'from-secondary to-purple-400',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Focused on achieving your business objectives with pixel-perfect execution.',
    stat: '100% Satisfaction',
    color: 'from-accent to-teal-400',
  },
  {
    icon: TrendingUp,
    title: 'Modern Tech Stack',
    description: 'Using latest technologies - React, Next.js, TypeScript, and cutting-edge tools.',
    stat: 'Latest Tools',
    color: 'from-primary to-blue-400',
  },
  {
    icon: Shield,
    title: 'Reliable & Professional',
    description: 'Clean code, best practices, security-first approach, and comprehensive testing.',
    stat: 'Production Ready',
    color: 'from-secondary to-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Creative Solutions',
    description: 'Innovative problem-solving with attention to detail and user experience.',
    stat: 'Unique Designs',
    color: 'from-accent to-emerald-400',
  },
];

export const WhyWorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with ultra-smooth scroll
      gsap.fromTo('.whywork-header',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.whywork-header',
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Reason cards with buttery smooth scroll and stagger
      gsap.fromTo('.reason-card',
        { opacity: 0, y: 120, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          stagger: {
            amount: 0.8,
            from: 'start',
            ease: 'sine.inOut'
          },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.reasons-grid',
            start: 'top 85%',
            end: 'top 30%',
            scrub: 2.5,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // CTA Section with ultra-smooth scroll
      gsap.fromTo('.why-cta',
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.why-cta',
            start: 'top 85%',
            end: 'top 40%',
            scrub: 2,
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-work" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(250_60%_60%_/_0.05)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 why-header">
          <p className="text-primary font-mono text-sm mb-2">{'<WhyWorkWithMe />'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I don't just write code—I build solutions that drive results. 
            Here's what makes working with me different.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card group glass-card-hover p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon & Stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${reason.color} shadow-lg`}>
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="stat-badge px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs font-semibold text-primary">{reason.stat}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${reason.color} transition-all duration-500 rounded-full`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="why-cta glass-card p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Ready to Start?</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a new project or improving an existing one, I'm here to help turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact">
                <Button size="lg" className="glow-button px-8">
                  Get in Touch
                </Button>
              </a>
              <a href="https://wa.me/919031698085" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="px-8 border-primary/30 hover:border-primary hover:bg-primary/5">
                  Message on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
