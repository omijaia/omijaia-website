import React from 'react';
import { workContainer, workSquare } from '../styles/work.css';

const Work = () => {
  return (
    <div className={workContainer}>
      <div className={workSquare}>Square 1</div>
      <div className={workSquare}>Square 2</div>
      <div className={workSquare}>Square 3</div>
    </div>
  );
};

export default Work;