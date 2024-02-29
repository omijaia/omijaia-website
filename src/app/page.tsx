'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { main, mobileStyles, mainContainer } from '../styles/main.css';
import { footer, footerLink, footerText } from '../styles/footer.css';


const Home = () => {
  const isMobile = true;
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonId: string) => {
    setActiveButtons((prevButtons) => {
      if (prevButtons.includes(buttonId)) {
        return prevButtons.filter((id) => id !== buttonId);
      } else {
        return [...prevButtons, buttonId];
      }
    });
  };

  const buttonVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 },
  };

  return (
    <div className={`${mainContainer} main-container`}>
      <div className={`${main} ${isMobile ? mobileStyles : ''}`}>
        <Header />
        <Button activeButtons={activeButtons} handleButtonClick={handleButtonClick} />
  
        {/* Footer */}
        <div className={footer}>
          <p className={footerText}>
            <a href="https://omijaia.com" className={footerLink} target="_blank" rel="noopener noreferrer">
              Omijaia
            </a>{' '}
            @ 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;


