'use client'
import Image from 'next/image'
import React, { useState } from 'react';
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
  
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div className={hero}>
        <div className={header}>
          <Image src={Omijaia} className={logo} alt="Logo Omijaia" style={{ width: '50px', height: '50px' }} />
          <div className={slogan}>This is a rat race, but I'm no rat, I'm a turtle, ninja turtle. So what's your favorite? Mine is Michaelangelo.</div>
        </div>
        <h1 className={title}>THE BUTTON <br />
          <button className={button} onClick={togglePopup}></button>{isOpen && (
        <div className="overlay">
          <div className="popup">
            <h2>Formulario</h2>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}FOR CLAIM <br />
          YOUR WEBSITE</h1>
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
        icono github

        about y post with framermotion shared layout
      </div>
    </div>
  );
};

export default Page;
