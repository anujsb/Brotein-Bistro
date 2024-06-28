import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import 'tailwindcss/tailwind.css';

interface SlideInOnScrollProps {
  children: ReactNode;
  className?: string;
}

const SlideInOnScroll: React.FC<SlideInOnScrollProps> = ({ children, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-100vw' }}
      animate={{ x: inView ? 0 : '-100vw' }}
      transition={{ type: 'spring', stiffness: 50 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInOnScroll;
