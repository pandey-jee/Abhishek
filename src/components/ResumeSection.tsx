import { useEffect, useRef } from 'react';
import { Download, FileText, CheckCircle, Award, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Briefcase,
    text: 'Full-Stack Developer',
  },
  {
    icon: Award,
    text: 'CodeChef 3★ Rated',
  },
  {
    icon: CheckCircle,
    text: 'Hackathon Winner',
  },
  {
    icon: FileText,
    text: 'META Certified',
  },
];

export const ResumeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main card with ultra-smooth scroll sync
      gsap.fromTo('.resume-card',
        { 
          opacity: 0, 
          y: 120,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.resume-card',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 2,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Highlights with ultra-smooth stagger
      gsap.fromTo('.highlight-item',
        { 
          opacity: 0, 
          x: -60,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          stagger: {
            amount: 0.4,
            from: 'start',
            ease: 'sine.inOut'
          },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.highlights-container',
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1.5,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Button animations
      gsap.fromTo('.resume-download-btn',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.resume-download-btn',
            start: 'top 90%',
            end: 'top 65%',
            scrub: 1.5,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Document preview animation
      gsap.fromTo('.resume-preview',
        { 
          opacity: 0, 
          x: 60,
          rotateY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.resume-preview',
            start: 'top 85%',
            end: 'top 45%',
            scrub: 2,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Button pulse animation
      gsap.to('.resume-download-btn', {
        boxShadow: '0 0 30px hsl(173 80% 50% / 0.4)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    // Download from public folder
    window.open('/resume.pdf', '_blank');
  };

  const handleViewDrive = () => {
    // View on Google Drive
    window.open('https://drive.google.com/file/d/1T_RHfpB6EAhB8hPPMhv1d7umvL4cmOpz/view?usp=drive_link', '_blank');
  };

  return (
    <section id="resume" ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(173_80%_50%_/_0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="resume-card max-w-4xl mx-auto glass-card p-8 md:p-12 border border-primary/20 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Resume</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Download My <span className="gradient-text">Resume</span>
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get a detailed overview of my experience, skills, projects, and achievements. 
                  Available for immediate opportunities.
                </p>

                {/* Highlights */}
                <div className="highlights-container space-y-3 mb-8">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="highlight-item flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <div className="space-y-3">
                  <Button
                    size="lg"
                    onClick={handleDownload}
                    className="resume-download-btn glow-button w-full md:w-auto px-8 gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleViewDrive}
                    className="w-full md:w-auto px-8 gap-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Drive
                  </Button>
                </div>
              </div>

              {/* Right Side - HTML Resume Preview */}
              <div className="resume-preview relative">
                <div className="aspect-[3/4] rounded-2xl border-2 border-primary/30 bg-background relative overflow-hidden group hover:border-primary/50 transition-colors shadow-2xl">
                  {/* Actual HTML Resume Preview */}
                  <div className="absolute inset-0 overflow-y-auto custom-scrollbar p-6 text-xs">
                    {/* Header Section */}
                    <div className="text-center mb-4 pb-3 border-b-2 border-primary/30">
                      <h1 className="text-lg font-bold gradient-text mb-1">ABHISHEK KUMAR PANDEY</h1>
                      <p className="text-[10px] text-muted-foreground mb-2">Full-Stack Developer | Problem Solver | Hackathon Winner</p>
                      <div className="flex flex-wrap items-center justify-center gap-2 text-[9px]">
                        <span>📧 pandeyabhishek0852@gmail.com</span>
                        <span>•</span>
                        <span>📱 +91 90316 98085</span>
                        <span>•</span>
                        <span>📍 Gurugram, India</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-1 text-[9px]">
                        <a href="https://github.com/pandey-jee" className="text-primary hover:underline">GitHub</a>
                        <span>•</span>
                        <a href="https://linkedin.com/in/abhishek-kumar-pandey" className="text-primary hover:underline">LinkedIn</a>
                        <span>•</span>
                        <a href="https://portfolio.com" className="text-primary hover:underline">Portfolio</a>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-3">
                      <h2 className="text-sm font-bold text-primary mb-2 flex items-center gap-1">
                        <Award className="h-3 w-3" /> EDUCATION
                      </h2>
                      <div className="space-y-1.5">
                        <div>
                          <div className="flex justify-between items-start">
                            <p className="font-semibold text-[10px]">B.Tech in Computer Science & Engineering</p>
                            <span className="text-[9px] text-muted-foreground">2021 - 2025</span>
                          </div>
                          <p className="text-[9px] text-muted-foreground">NIET, Greater Noida | CGPA: 7.5</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-3">
                      <h2 className="text-sm font-bold text-primary mb-2 flex items-center gap-1">
                        <Briefcase className="h-3 w-3" /> EXPERIENCE
                      </h2>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between items-start">
                            <p className="font-semibold text-[10px]">Full-Stack Developer Intern</p>
                            <span className="text-[9px] text-muted-foreground">Jun 2024 - Aug 2024</span>
                          </div>
                          <p className="text-[9px] text-muted-foreground mb-1">Tech Company</p>
                          <ul className="list-disc list-inside text-[9px] space-y-0.5 text-muted-foreground">
                            <li>Built responsive web applications using React and Node.js</li>
                            <li>Implemented RESTful APIs and integrated third-party services</li>
                            <li>Optimized database queries improving performance by 40%</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-3">
                      <h2 className="text-sm font-bold text-primary mb-2 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> TECHNICAL SKILLS
                      </h2>
                      <div className="space-y-1 text-[9px]">
                        <p><span className="font-semibold">Languages:</span> JavaScript, TypeScript, Java, C++, Python, SQL</p>
                        <p><span className="font-semibold">Frontend:</span> React.js, Next.js, Tailwind CSS, Bootstrap, HTML/CSS</p>
                        <p><span className="font-semibold">Backend:</span> Node.js, Express.js, REST APIs, JWT Authentication</p>
                        <p><span className="font-semibold">Database:</span> MongoDB, MySQL, Firebase, Supabase, Firestore</p>
                        <p><span className="font-semibold">Tools:</span> Git, GitHub, Vercel, Netlify, Postman, VS Code</p>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-3">
                      <h2 className="text-sm font-bold text-primary mb-2 flex items-center gap-1">
                        <FileText className="h-3 w-3" /> PROJECTS
                      </h2>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-[10px]">CraneSafeAI - AI-Powered Crane Monitoring</p>
                          <ul className="list-disc list-inside text-[9px] space-y-0.5 text-muted-foreground">
                            <li>Built AI platform for crane safety with IoT dashboards & predictive maintenance</li>
                            <li>Implemented real-time data visualization using Recharts</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-[10px]">SS Cleaners - Service Platform</p>
                          <ul className="list-disc list-inside text-[9px] space-y-0.5 text-muted-foreground">
                            <li>Developed full-stack platform with Razorpay integration & real-time chat</li>
                            <li>Built admin dashboard for booking management & analytics</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-[10px]">CitySense - Urban Issue Reporter</p>
                          <ul className="list-disc list-inside text-[9px] space-y-0.5 text-muted-foreground">
                            <li>Created geolocation-based reporting system with Leaflet.js maps</li>
                            <li>Integrated Firebase authentication & Cloudinary uploads</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h2 className="text-sm font-bold text-primary mb-2 flex items-center gap-1">
                        <Award className="h-3 w-3" /> ACHIEVEMENTS
                      </h2>
                      <ul className="list-disc list-inside text-[9px] space-y-0.5 text-muted-foreground">
                        <li>🏆 3rd Place - Hack With Impact 2025 Hackathon</li>
                        <li>🏆 Top 10 - Hack With Tricity 2024</li>
                        <li>⭐ CodeChef 3★ Rated (Max Rating: 1657)</li>
                        <li>📜 META Frontend Developer Certification</li>
                        <li>🎯 Solved 300+ DSA Problems across platforms</li>
                      </ul>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg group-hover:scale-110 transition-transform">
                    LIVE
                  </div>

                  {/* Download Icon Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/95 backdrop-blur-sm cursor-pointer" onClick={handleDownload}>
                    <div className="text-center">
                      <div className="p-6 rounded-full bg-primary/20 border-2 border-primary animate-bounce mx-auto mb-3">
                        <Download className="h-10 w-10 text-primary" />
                      </div>
                      <p className="text-sm font-semibold text-primary">Click to Download PDF</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
