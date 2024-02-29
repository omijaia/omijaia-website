import React from 'react';
import { motion } from 'framer-motion';
import { aboutContainer, aboutImage, aboutText } from '../styles/about.css';
import { contentVariants } from '../components/animations';

const About = () => {
  return (
    <motion.div
      className={aboutContainer}
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      <motion.img className={aboutImage} src="/images/profile.jpg" alt="Foto de Miguel Angel Muñoz" variants={contentVariants} />
      <motion.div className={aboutText} variants={contentVariants}>
        <h2>Miguel Angel Muñoz</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque corporis quo blanditiis
          saepe culpa deleniti, et aliquid! Laudantium ab id voluptatibus, beatae earum
          praesentium, qui dolores sequi, quod incidunt ipsum?
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
