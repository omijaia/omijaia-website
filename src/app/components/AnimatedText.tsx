'use client'
import { useState, useEffect } from 'react';
import '../globals.css';

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`animated-text ${isVisible ? 'visible' : ''}`}>
      <h3 className={isVisible ? 'fade-in-down' : ''}>The Reality is...</h3>
      <p className={isVisible ? 'fade-in-down' : ''}>
        If you have an <b>e-commerce</b>, ensure that your website effectively caters to the search intent of the final buyer
        through artificial intelligence and is well-positioned with SEO.
        <br />
        <br />
        If you have a <b>landing page</b>, make sure it captures the attention of your visitors and motivates them to take a
        specific action.
        <br />
        <br />
        If you have an <b>e-learning</b> platform, focus on providing an intuitive and engaging educational experience for
        your users, facilitating access to content and tracking student progress.
      </p>
    </div>
  );
};

export default AnimatedText;
