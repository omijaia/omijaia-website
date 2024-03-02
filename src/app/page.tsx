import React from 'react';
import { mainContainer, leftContainer, rightContainer, logo, roundedLeftButton, roundedRightButton, copyright } from '../styles/container.css';

const Page = () => {
  return (
    <div className={mainContainer}>
      <div className={leftContainer}>
        <img className={logo} src="/assets/images/omijaia.png" alt="Omijaia Logo" />
        <div className={roundedLeftButton}>A<br/>b<br/>o<br/>u<br/>t</div>
        <div className={roundedLeftButton}>G<br/>e<br/>t<br/><br/>I<br/>n<br/><br/>T<br/>o<br/>u<br/>c<br/>h</div>
        <div className={copyright}><a href="https://www.omijaia.com">Omijaia</a> &#169; 2024</div>
      </div>
      <div className={rightContainer}>
        <div className={roundedRightButton}>Works</div>
        <div className={roundedRightButton}>Development Process</div>
        <div className={roundedRightButton}>Blog</div>

      </div>
    </div>
  );
};

export default Page;
