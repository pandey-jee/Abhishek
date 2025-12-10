import { useEffect, useRef } from 'react';
import { Code2, Server, Database, Wrench, Brain, Palette, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-primary to-primary/50',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-secondary to-secondary/50',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Edge Functions'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-accent to-accent/50',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Firestore'],
  },
  {
    title: 'UI/UX',
    icon: Palette,
    color: 'from-primary to-secondary',
    skills: ['Figma', 'Responsive Design', 'Flexbox/Grid', 'Animations', 'Micro-interactions'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: 'from-secondary to-accent',
    skills: ['Git/GitHub', 'Vercel', 'Netlify', 'Postman', 'Render'],
  },
  {
    title: 'Problem Solving',
    icon: Brain,
    color: 'from-accent to-primary',
    skills: ['DSA', 'Algorithms', 'CodeChef 3★', 'Codeforces', '300+ Problems'],
  },
];

const languages = [
  { name: 'JavaScript', abbr: 'JS', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', abbr: 'TS', color: 'from-blue-400 to-blue-600' },
  { name: 'Java', abbr: 'JV', color: 'from-red-400 to-red-600' },
  { name: 'C++', abbr: 'C+', color: 'from-purple-400 to-purple-600' },
  { name: 'SQL', abbr: 'SQ', color: 'from-cyan-400 to-cyan-600' },
  { name: 'HTML/CSS', abbr: 'HC', color: 'from-orange-400 to-pink-600' },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with ultra-smooth scroll
      gsap.fromTo('.skills-header',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.skills-header',
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Skill cards with buttery smooth stagger
      gsap.fromTo('.skill-card',
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
            trigger: '.skills-grid',
            start: 'top 85%',
            end: 'top 30%',
            scrub: 2.5,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Languages bar with ultra-smooth scroll sync
      gsap.fromTo('.lang-item',
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: {
            amount: 0.5,
            from: 'center',
            ease: 'sine.inOut'
          },
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.languages-bar',
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
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(250_60%_60%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="skills-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-sm mb-4">
            <Cpu className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-mono text-sm">{'skills.forEach()'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience with modern web technologies
            and competitive programming.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="skill-card glass-card p-6 group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default border border-transparent hover:border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Bar - Simplified */}
        <div className="languages-bar mt-16 glass-card p-8 border border-border/50">
          <h3 className="text-xl font-semibold mb-8 text-center">
            <span className="font-mono text-primary">&lt;</span>
            Programming Languages
            <span className="font-mono text-primary">/&gt;</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {languages.map((lang) => (
              <div key={lang.name} className="lang-item text-center group cursor-default">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                  <span className="font-mono text-lg md:text-xl font-bold text-white relative z-10">
                    {lang.abbr}
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
