import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pandeyji252002@gmail.com',
    href: 'mailto:pandeyji252002@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 90316 98085',
    href: 'tel:+919031698085',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/pandey-jee',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abhishek-kumar-pandey',
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Web3Forms API with custom email template
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '33d592ab-0fdc-43ca-8716-016a70aad5e3',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `🚀 New Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
          replyto: formData.email,
          // Custom HTML email template
          template: 'portfolio',
          custom_fields: {
            'Sender Name': formData.name,
            'Sender Email': formData.email,
            'Message': formData.message,
            'Submitted At': new Date().toLocaleString('en-US', { 
              timeZone: 'Asia/Kolkata',
              dateStyle: 'full',
              timeStyle: 'short'
            }),
            'Source': 'Portfolio Website'
          }
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try emailing directly or contact via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>{/*  */}
          <p className="text-primary font-mono text-sm mb-2">{'<Contact />'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="contact-content grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-info space-y-6 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {/* WhatsApp CTA - Featured */}
            <div className="glass-card p-6 border-2 border-primary/30 relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Quick Response</p>
                      <p className="font-semibold">Message on WhatsApp</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-xs font-semibold text-green-500">Fastest</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/919031698085"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {contactInfo.map((item) => (
              <div 
                key={item.label}
                className="glass-card-hover p-6 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="text-sm">{social.label}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form glass-card p-8 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full glow-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
