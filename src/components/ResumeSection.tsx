import { useState } from 'react';
import { Download, FileText, CheckCircle, Award, Briefcase, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // Download from public folder
    window.open('/resume.pdf', '_blank');
  };

  const handleViewDrive = () => {
    // View on Google Drive
    window.open('https://drive.google.com/file/d/1T_RHfpB6EAhB8hPPMhv1d7umvL4cmOpz/view?usp=drive_link', '_blank');
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Full Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full h-full max-w-5xl max-h-[95vh] m-4 bg-card border-2 border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold gradient-text">Complete Resume</h3>
                  <p className="text-xs text-muted-foreground">Abhishek Kumar Pandey</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="hover:bg-destructive/20 hover:text-destructive rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Full Resume Content */}
            <div className="overflow-y-auto custom-scrollbar h-[calc(100%-5rem)] p-8 md:p-12">
              <div className="max-w-4xl mx-auto bg-background rounded-xl border border-border/50 p-8 md:p-12 shadow-xl">
                {/* Header Section */}
                <div className="text-center mb-8 pb-6 border-b-2 border-primary/30">
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">ABHISHEK KUMAR PANDEY</h1>
                  <p className="text-lg text-muted-foreground mb-4">Full-Stack Developer | Problem Solver | Hackathon Winner</p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-3">
                    <span className="flex items-center gap-1">📧 pandeyabhishek0852@gmail.com</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">📱 +91 90316 98085</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">📍 Gurugram, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href="https://github.com/pandey-jee" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                      🔗 GitHub
                    </a>
                    <span>•</span>
                    <a href="https://linkedin.com/in/abhishek-kumar-pandey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                      🔗 LinkedIn
                    </a>
                    <span>•</span>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      🔗 Portfolio
                    </a>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Award className="h-6 w-6" /> EDUCATION
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-lg font-semibold">B.Tech in Computer Science & Engineering</p>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">2021 - 2025</span>
                      </div>
                      <p className="text-muted-foreground">NIET, Greater Noida</p>
                      <p className="text-sm text-muted-foreground mt-1">CGPA: <span className="text-primary font-semibold">7.5</span></p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6" /> EXPERIENCE
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-lg font-semibold">Full-Stack Developer Intern</p>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">Jun 2024 - Aug 2024</span>
                      </div>
                      <p className="text-muted-foreground mb-3">Tech Company</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Built responsive web applications using React and Node.js</li>
                        <li>Implemented RESTful APIs and integrated third-party services</li>
                        <li>Optimized database queries improving performance by 40%</li>
                        <li>Collaborated with cross-functional teams using Agile methodologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" /> TECHNICAL SKILLS
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold text-primary mb-2">Languages</p>
                      <p className="text-sm text-muted-foreground">JavaScript, TypeScript, Java, C++, Python, SQL</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold text-primary mb-2">Frontend</p>
                      <p className="text-sm text-muted-foreground">React.js, Next.js, Tailwind CSS, Bootstrap, HTML/CSS</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold text-primary mb-2">Backend</p>
                      <p className="text-sm text-muted-foreground">Node.js, Express.js, REST APIs, JWT Authentication</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold text-primary mb-2">Database</p>
                      <p className="text-sm text-muted-foreground">MongoDB, MySQL, Firebase, Supabase, Firestore</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold text-primary mb-2">Tools & DevOps</p>
                      <p className="text-sm text-muted-foreground">Git, GitHub, Vercel, Netlify, Postman, VS Code</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold text-primary mb-2">Other</p>
                      <p className="text-sm text-muted-foreground">Responsive Design, RESTful APIs, Agile, Problem Solving</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6" /> PROJECTS
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="text-lg font-semibold mb-2">CraneSafeAI - AI-Powered Crane Monitoring Platform</p>
                      <p className="text-sm text-muted-foreground mb-3">React • Tailwind CSS • Recharts • AI/ML • IoT</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Developed AI-powered platform for crane safety monitoring with real-time IoT dashboards</li>
                        <li>Implemented predictive maintenance algorithms to reduce downtime by 35%</li>
                        <li>Built comprehensive analytics dashboard with Recharts for impact visualization</li>
                        <li>Integrated AI comparison tools for enhanced safety protocols</li>
                      </ul>
                      <a href="https://cranesafe.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline mt-2 inline-block">
                        🔗 View Live Project
                      </a>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="text-lg font-semibold mb-2">SS Cleaners - Full-Stack Service Platform</p>
                      <p className="text-sm text-muted-foreground mb-3">React • Supabase • Razorpay • Edge Functions • Realtime</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Built modern cleaning services platform with secure Razorpay payment integration</li>
                        <li>Implemented real-time chat system using Supabase Realtime for customer support</li>
                        <li>Developed Admin Dashboard for enquiry tracking and revenue analytics</li>
                        <li>Optimized database queries and edge functions for 50% faster response times</li>
                      </ul>
                      <a href="https://ss-cleaners.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline mt-2 inline-block">
                        🔗 View Live Project
                      </a>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="text-lg font-semibold mb-2">CitySense - Urban Issue Reporting Platform</p>
                      <p className="text-sm text-muted-foreground mb-3">React • Node.js • Express • Firebase • Leaflet.js</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Created full-stack geolocation-based reporting system with Leaflet.js maps</li>
                        <li>Integrated Firebase authentication and Cloudinary for secure uploads</li>
                        <li>Built admin dashboard for issue management and resolution tracking</li>
                        <li>Implemented real-time notifications for issue status updates</li>
                      </ul>
                      <a href="https://city-sense-flame.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline mt-2 inline-block">
                        🔗 View Live Project
                      </a>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Award className="h-6 w-6" /> ACHIEVEMENTS & CERTIFICATIONS
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold mb-2">🏆 Hackathons</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>3rd Place - Hack With Impact 2025</li>
                        <li>Top 10 - Hack With Tricity 2024</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold mb-2">⭐ Competitive Programming</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>CodeChef 3★ Rated (Max: 1657)</li>
                        <li>Codeforces Pupil</li>
                        <li>300+ Problems Solved</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold mb-2">📜 Certifications</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>META Frontend Developer</li>
                        <li>META JavaScript Certification</li>
                        <li>NASA Space Apps Organizer</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <p className="font-semibold mb-2">🎯 Leadership</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Event Coordinator - 5 Events</li>
                        <li>200+ Participants Managed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border/50">
                  <Button
                    size="lg"
                    onClick={handleDownload}
                    className="glow-button px-8 gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download PDF Resume
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleViewDrive}
                    className="px-8 gap-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Google Drive
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    <section id="resume" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(173_80%_50%_/_0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="resume-card max-w-4xl mx-auto glass-card p-8 md:p-12 border border-primary/20 relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
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
                      className="highlight-item flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}
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
                    className="resume-download-btn glow-button w-full md:w-auto px-8 gap-2 animate-scale-in"
                    style={{ animationDelay: '1s', animationFillMode: 'both' }}
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
              <div className="resume-preview relative cursor-pointer animate-fade-in" onClick={openModal} style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <div className="aspect-[3/4] rounded-2xl border-2 border-primary/30 bg-background relative overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
                  {/* Actual HTML Resume Preview */}
                  <div className="absolute inset-0 overflow-y-auto custom-scrollbar p-6 text-xs pointer-events-none">
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
                        <span className="text-primary">GitHub</span>
                        <span>•</span>
                        <span className="text-primary">LinkedIn</span>
                        <span>•</span>
                        <span className="text-primary">Portfolio</span>
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

                  {/* Click to View Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/90">
                    <div className="text-center">
                      <div className="p-6 rounded-full bg-primary/20 border-2 border-primary mx-auto mb-4 animate-pulse">
                        <FileText className="h-12 w-12 text-primary" />
                      </div>
                      <p className="text-lg font-bold gradient-text mb-2">View Full Resume</p>
                      <p className="text-sm text-muted-foreground">Click to expand</p>
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
    </>
  );
};
