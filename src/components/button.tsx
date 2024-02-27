'use client'
import React, { useState } from 'react';
import { buttonWithFloat, buttonContainer, buttonWithFloatActive } from '../styles/button.css';

const Button = () => {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonId: string) => {
    setActiveButtons((prev) => {
      if (prev.includes(buttonId)) {
        return prev.filter((id) => id !== buttonId);
      } else {
        return [...prev, buttonId];
      }
    });
  };

  const isButtonActive = (buttonId: string) => activeButtons.includes(buttonId);

  return (
    <div className={buttonContainer}>
      <button
        className={`${isButtonActive('button1') ? buttonWithFloatActive : buttonWithFloat}`}
        onClick={() => handleButtonClick('button1')}
      >
        Work
      </button>
      <button
        className={`${isButtonActive('button2') ? buttonWithFloatActive : buttonWithFloat}`}
        onClick={() => handleButtonClick('button2')}
      >
        About
      </button>
      <button
        className={`${isButtonActive('button3') ? buttonWithFloatActive : buttonWithFloat}`}
        onClick={() => handleButtonClick('button3')}
      >
        Blog
      </button>
    </div>
  );
};

export default Button;
