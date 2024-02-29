import React from 'react';
import { logo } from '../styles/header.css';

const Header = () => {
  return (
    <img
      className={logo}
      src="/images/omijaia.png"
      alt="Omijaia Logo"
    />
  );
};

export default Header;
