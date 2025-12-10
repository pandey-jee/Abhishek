import { motion } from 'framer-motion';

const slideVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
  },
};

const slideTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const PageTransition = () => {
  return (
    <>
      {/* Sliding curtain effect with stagger */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-primary origin-bottom z-[9999] pointer-events-none"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        transition={{ ...slideTransition, delay: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-secondary origin-bottom z-[9998] pointer-events-none"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        transition={{ ...slideTransition, delay: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent origin-bottom z-[9997] pointer-events-none"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        transition={{ ...slideTransition, delay: 0.2 }}
      />
    </>
  );
};
