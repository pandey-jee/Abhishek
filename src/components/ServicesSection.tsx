import { Code2, Smartphone, Database, Rocket, Zap, Layout, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.9, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const services = [
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'Building scalable, modern web applications using MERN stack, Next.js, and TypeScript with responsive design.',
    features: ['React & Next.js', 'Node.js & Express', 'REST APIs', 'Database Integration'],
    color: 'from-primary to-primary/50',
  },
  {
    icon: Smartphone,
    title: 'Responsive UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces with Tailwind CSS, animations, and pixel-perfect responsive layouts.',
    features: ['Tailwind CSS', 'CSS Animations', 'Mobile-First Design', 'Figma to Code'],
    color: 'from-secondary to-secondary/50',
  },
  {
    icon: Database,
    title: 'Backend & Database Solutions',
    description: 'Developing robust backend systems with MongoDB, MySQL, Firebase, and Supabase integration.',
    features: ['Database Design', 'API Development', 'Authentication', 'Cloud Integration'],
    color: 'from-accent to-accent/50',
  },
  {
    icon: Rocket,
    title: 'Full Project Deployment',
    description: 'End-to-end deployment on Vercel, Netlify, or Render with CI/CD pipelines and monitoring.',
    features: ['Vercel/Netlify', 'Domain Setup', 'Performance Optimization', 'SEO Ready'],
    color: 'from-primary to-secondary',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed optimization, code splitting, lazy loading, and best practices for lightning-fast websites.',
    features: ['Code Optimization', 'Lazy Loading', 'Bundle Size Reduction', 'Lighthouse Score'],
    color: 'from-secondary to-accent',
  },
  {
    icon: Layout,
    title: 'Landing Page Development',
    description: 'High-converting landing pages for startups, products, and services with modern animations.',
    features: ['Conversion Focused', 'Modern Design', 'Fast Loading', 'Analytics Ready'],
    color: 'from-accent to-primary',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(173_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 services-header"
        >
          <p className="text-primary font-mono text-sm mb-2">{'<Services />'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life. 
            From concept to deployment, I've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="service-card group glass-card-hover p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`service-icon inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Gradient Line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your project?
          </p>
          <a href="#contact">
            <button className="glow-button px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform">
              Let's Work Together
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
