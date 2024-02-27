import React from 'react';
import { workContainer, workSquare } from '../styles/work.css';

const Work = () => {
  return (
    <div className={workContainer}>
      <div className={workSquare}>Cuadrado 1</div>
      <div className={workSquare}>Cuadrado 2</div>
      <div className={workSquare}>Cuadrado 3</div>
    </div>
  );
};

export default Work;