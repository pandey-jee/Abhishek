import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyWorkSection } from '@/components/WhyWorkSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const pageVariants = {
  initial: { 
    opacity: 0,
    scale: 0.98,
    y: 20
  },
  in: { 
    opacity: 1,
    scale: 1,
    y: 0
  },
  out: { 
    opacity: 0,
    scale: 1.02,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.22, 0.9, 0.3, 1],
  duration: 0.5
};

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <main>
        <HeroSection />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
        >
          <ServicesSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1], delay: 0.1 }}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
        >
          <SkillsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1], delay: 0.1 }}
        >
          <AboutSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
        >
          <WhyWorkSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1], delay: 0.1 }}
        >
          <ResumeSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
