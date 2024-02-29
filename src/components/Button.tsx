import React from 'react';
import Work from './Work';
import About from './About';
import Blog from './Blog';
import { motion } from 'framer-motion';


import { buttonWithFloat, buttonContainer, buttonWithFloatActive } from '../styles/button.css';

interface ButtonProps {
  activeButtons: string[];
  handleButtonClick: (buttonId: string) => void;
}

const Button = ({ activeButtons, handleButtonClick }: ButtonProps) => {
  const isButtonActive = (buttonId: string) => activeButtons.includes(buttonId);

  return (
    <div className={buttonContainer}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}
      >
        <button
          className={`${isButtonActive('button1') ? buttonWithFloatActive : buttonWithFloat}`}
          onClick={() => handleButtonClick('button1')}
        >
          Work
        </button>
      </motion.div>
      {isButtonActive('button1') && <Work />}
      
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}
      >
        <button
          className={`${isButtonActive('button2') ? buttonWithFloatActive : buttonWithFloat}`}
          onClick={() => handleButtonClick('button2')}
        >
          About
        </button>
      </motion.div>
      {isButtonActive('button2') && <About />}

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}
      >
        <button
          className={`${isButtonActive('button3') ? buttonWithFloatActive : buttonWithFloat}`}
          onClick={() => handleButtonClick('button3')}
        >
          Blog
        </button>
      </motion.div>
      {isButtonActive('button3') && <Blog />}
    </div>
  );
};


export default Button;
