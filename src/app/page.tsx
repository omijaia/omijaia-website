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
import Omijaia from '../../public/assets/images/omijaia.png';
import DevProcess from './components/DevProcess';
import WorkList from './components/WorkList';
import AnimatedText from './components/AnimatedText';



const Page = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div className={hero}>
        <div className={header}>
          <img src={Omijaia.src} className={logo} alt="Logo Omijaia" style={{ width: '33px' }} />
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
      )}FOR GET <br />
          YOUR WEBSITE</h1>
        <div className={imagesContainer}>
          <Image src="/assets/images/smartphone.png" alt="Imagen 1" className={smartphone} />
          <Image src="/assets/images/notebook.png" alt="Imagen 2" className={notebook} />
        </div>
      </div>
      <div className={doit}>
      <AnimatedText />
      </div>
      <div className={main}>
        whatsapp button with a popup notifcation emoji for engagment
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
