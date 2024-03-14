'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { container, 
         header, 
         hero, 
         logo, 
         slogan, 
         title, 
         imagesContainer, 
         smartphone, 
         notebook, 
         button, 
         main, 
         doit } from '../styles/styles.css';
import Omijaia from '../../public/assets/images/omijaia.svg';
import Smartphone from '../../public/assets/images/smartphone.png';
import Notebook from '../../public/assets/images/notebook.png';
import DevProcess from './components/DevProcess';
import WorkList from './components/WorkList';
import AnimatedText from './components/AnimatedText';
import AnimatedNotification from './components/AnimatedNotification';


const Page = () => {
  const controls = useAnimation();
  const doitControls = useAnimation();
  const mainControls = useAnimation();
  const buttonControls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const spring = {
    type: 'spring',
    damping: 15,
    stiffness: 100,
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: spring });
    buttonControls.start({ opacity: 1, scale: 1, transition: spring });
  }, []); 

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 

  return (
    <div className={container}>
      <div className={hero}>
        <motion.div className={header} initial={{ opacity: 0, y: -50 }} animate={controls}>
          <Image src={Omijaia} className={logo} alt="Logo Omijaia" style={{ width: '50px', height: '50px' }} />
          <div className={slogan}>This is a rat race, but I'm no rat, I'm a turtle, ninja turtle. So what's your favorite? Mine is Michaelangelo.</div>
        </motion.div>

        <motion.h1 className={title} initial={{ opacity: 0, y: 50 }} animate={controls}>
          THE BUTTON <br />
          <button className={button} onClick={togglePopup}></button>
          {isOpen && (
            <div className="overlay">
              <div className="popup">
                <h2>Formulario</h2>
                <button onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}FOR CLAIM <br />
          YOUR WEBSITE
        </motion.h1>

        <div className={imagesContainer}>
          <Image src={Smartphone} alt="Smartphone mockup" className={smartphone} style={{ maxWidth: '30%', height: 'auto' }}  />
          <Image src={Notebook} alt="Notebook mockup" className={notebook} style={{ maxWidth: '50%', height: 'auto%' }} />
        </div>
      </div>
      
      <div className={doit}>
        <AnimatedText />
      </div>

      <div className={main}>
        <AnimatedNotification />
        <br/>
        <h1>Development Process</h1>
        <DevProcess />
        <h1>Works</h1>
        <WorkList />
      </div>
    </div>
  );
};

export default Page;