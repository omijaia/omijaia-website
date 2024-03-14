import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Whatsapp from '../../../public/assets/images/whatsapp.png';
import "../globals.css";

const AnimatedNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); 
    };

    toggleNotification();

    const interval = setInterval(toggleNotification, 1200);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="whatsapp-button-container">
      <div className="whatsapp-button">
      <a href="https://wa.me/542212233181" target="_blank" rel="noopener noreferrer">
      <motion.div
        className="whatsapp-button"
        whileHover={{ translateY: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={Whatsapp} className='whatsapp-logo' alt="Logo Omijaia" style={{ width: '100px', height: 'auto' }} />
        {isVisible && (
        <motion.div
            className="notification"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
          >
            <p><b>1</b></p>
        </motion.div>
        )}
      </motion.div>
      </a>
      </div>
    </div>
  );
};

export default AnimatedNotification;
