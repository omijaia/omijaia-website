import React from 'react';
import { mainContainer, leftContainer, rightContainer, logo, roundedButton, copyright } from '../styles/container.css';

const Page = () => {
  return (
    <div className={mainContainer}>
      <div className={leftContainer}>
        <img className={logo} src="/assets/images/omijaia.png" alt="Omijaia Logo" />
        <div className={roundedButton}>About</div>
        <div className={roundedButton}>Get In Touch</div>
        <div className={copyright}>Omijaia &#169; 2024</div>
      </div>
      <div className={rightContainer}>
        <div className={roundedButton}>Works</div>
        <div className={roundedButton}>Development Process</div>
      </div>
    </div>
  );
};

export default Page;
