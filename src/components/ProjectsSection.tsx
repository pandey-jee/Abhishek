import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'CraneSafeAI',
    subtitle: 'AI & IoT Platform',
    description: 'AI-powered crane monitoring and predictive maintenance platform with real-time IoT dashboards, AI comparison tools, and impact analytics for improved safety and cost efficiency.',
    tech: ['React', 'Tailwind CSS', 'Recharts', 'AI/ML', 'IoT'],
    live: 'https://cranesafe.vercel.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    featured: true,
  },
  {
    title: 'SS Cleaners',
    subtitle: 'Full-Stack Services Platform',
    description: 'Modern cleaning services platform with service browsing, booking, real-time chat, and secure Razorpay payments. Features an Admin Dashboard for enquiry tracking and revenue analytics.',
    tech: ['React', 'Supabase', 'Razorpay', 'Edge Functions', 'Realtime'],
    live: 'https://ss-cleaners.vercel.app',
    github: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    featured: true,
  },
  {
    title: 'CitySense',
    subtitle: 'Urban Issue Reporter',
    description: 'Full-stack urban issue reporting platform with Firebase authentication, Cloudinary uploads, geolocation-based reports using Leaflet.js, and an admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'Firebase', 'Leaflet.js'],
    live: 'https://city-sense-flame.vercel.app',
    github: '#',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with ultra-smooth scroll
      gsap.fromTo('.projects-header',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Project cards with buttery smooth stagger and scroll sync
      gsap.fromTo('.project-card',
        { opacity: 0, y: 120, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          stagger: {
            amount: 0.6,
            from: 'start',
            ease: 'sine.inOut'
          },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
            end: 'top 30%',
            scrub: 2.5,
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-4">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-primary font-mono text-sm">{'projects.map()'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've built that showcase my skills in full-stack development, 
            AI integration, and creating impactful user experiences.
          </p>
        </div>

        {/* Projects Grid - All Cards Same Size */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="project-card glass-card overflow-hidden group relative border border-border/50"
            >
              {/* Animated Neon Border Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-border-flow blur-sm" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 bg-background rounded-xl p-6 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Subtitle Badge */}
                <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <p className="text-primary font-mono text-xs">{project.subtitle}</p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shimmer transition-all duration-300 bg-[length:200%_100%]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded bg-muted/30 text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-auto">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 hover:border-primary group transition-all duration-300"
            onClick={() => window.open('https://github.com/pandey-jee', '_blank')}
          >
            <span className="font-mono text-primary">&lt;</span>
            View All Projects
            <span className="font-mono text-primary">/&gt;</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
