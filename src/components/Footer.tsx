import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-semibold gradient-text">Abhishek Pandey</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} • Built with <Heart className="h-3 w-3 text-destructive inline" /> using React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/pandey-jee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-kumar-pandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:pandeyji252002@gmail.com"
              className="p-2 rounded-lg hover:bg-muted/50 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {['Home', 'Projects', 'About', 'Contact'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
