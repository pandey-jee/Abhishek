import { GraduationCap, Award, Trophy, Users, User, ChevronRight } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: '3rd place at Hack With Impact 2025, Top 10 at Hack With Tricity 2024',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Award,
    title: 'Competitive Coder',
    description: 'CodeChef 3★ (Rating: 1657), Codeforces Pupil, 500+ problems solved',
    color: 'from-primary to-secondary',
  },
  {
    icon: Users,
    title: 'Event Coordinator',
    description: 'Organized 10+ university events with 1000+ participants',
    color: 'from-secondary to-accent',
  },
  {
    icon: GraduationCap,
    title: 'Certifications',
    description: 'META Frontend & JavaScript, NASA Space Apps Organizer',
    color: 'from-accent to-primary',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-32 right-10 w-24 h-24 border border-secondary/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="about-header text-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-4">
            <User className="h-4 w-4 text-primary" />
            <span className="text-primary font-mono text-sm">{'whoami'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get To <span className="gradient-text">Know Me</span>
          </h2>
        </div>

        <div className="about-content grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="bio-card glass-card p-8 relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 font-mono text-sm text-muted-foreground">about.tsx</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary font-mono">//</span> Hello there! 👋
              </h3>
              <div className="bio-content space-y-4 text-muted-foreground leading-relaxed">
                <p className="reveal-text">
                  I'm a <span className="text-foreground font-medium">Software Engineer</span> and 
                  final-year <span className="text-foreground font-medium">B.E. Computer Science</span> student 
                  at Chandigarh University (CGPA: 7.4).
                </p>
                <p className="reveal-text">
                  I specialize in <span className="text-primary font-semibold">MERN stack development</span>, building 
                  scalable applications with React, Node.js, and MongoDB. My passion lies in creating 
                  seamless user experiences and solving complex problems through code.
                </p>
                <p className="reveal-text">
                  Currently working on <span className="text-primary font-semibold">AI-powered platforms</span> and
                  <span className="text-primary font-semibold"> IoT integrations</span>, pushing the boundaries of 
                  what's possible with modern web technologies.
                </p>
                <p className="reveal-text">
                  When I'm not coding, you'll find me participating in hackathons, solving algorithmic 
                  challenges, or exploring new technologies.
                </p>
              </div>

              {/* Code decoration */}
              <div className="absolute -bottom-2 -right-2 font-mono text-6xl text-primary/5 font-bold">
                {'</>'}
              </div>
            </div>

            {/* Education */}
            <div className="bio-card glass-card p-6 group animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold">Education</h4>
              </div>
              <div className="flex justify-between items-start p-3 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    B.E. Computer Science
                  </p>
                  <p className="text-sm text-muted-foreground ml-6">Chandigarh University</p>
                </div>
                <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">2022 - 2026</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="achievements-grid space-y-4">
            {achievements.map((item, index) => (
              <div 
                key={item.title}
                className="achievement-card glass-card p-6 flex gap-4 group relative overflow-hidden animate-fade-in"
                style={{ perspective: '1000px', animationDelay: `${0.9 + index * 0.15}s`, animationFillMode: 'both' }}
              >
                {/* Gradient line on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} h-fit shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
