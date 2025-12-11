import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.2 }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

