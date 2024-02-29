
import React from 'react';
import { motion } from 'framer-motion';
import { workContainer, workSquare } from '../styles/work.css'; // Ajusta la ruta según tu estructura de archivos
import { contentVariants } from '../components/animations';

const Work = () => {
  return (
    <motion.div
      className={workContainer}
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      <motion.div className={workSquare} variants={contentVariants}>
        Square 1
      </motion.div>
      <motion.div className={workSquare} variants={contentVariants}>
        Square 2
      </motion.div>
      <motion.div className={workSquare} variants={contentVariants}>
        Square 3
      </motion.div>
    </motion.div>
  );
};

export default Work;