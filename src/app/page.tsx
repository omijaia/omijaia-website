import React from 'react';
import Header from '../components/header';
import Button from '../components/button';
import { main, mobileStyles } from '../styles/main.css';
import { footer, footerLink, footerText } from '../styles/footer.css';

const Home = () => {
  const isMobile = true;

  return (
    <div className={`${main} ${isMobile ? mobileStyles : ''}`}>
      <Header />
      <Button />
      {/* Contenido de la página */}
      
      {/* Footer */}
      <div className={footer}>
        <p className={footerText}>
        <a href="https://omijaia.com" className={footerLink} target="_blank" rel="noopener noreferrer">Omijaia</a> @ 2024 
        </p>
      </div>
    </div>
  );
};

export default Home;
