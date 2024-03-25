import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Omijaia from '../../../public/assets/images/omijaia.svg';
import * as nav from '../../styles/styles.css';
import WhatsApp from '../components/whatsapp';
import "../globals.css";

const Nav = () => {
  return (
    <nav>
      <div className='main_nav'>
          <Link href="/">
              <Image src={Omijaia} className={nav.logo} alt="The personal brand logo of the web developer behind Omijaia" style={{ width: '50px', height: 'auto' }} />
          </Link>
        
        <div className={nav.navLinks}>
          <Link className={nav.navLink} href="/visual-identity">
            Visual Identity
          </Link>
          <Link className={nav.navLink} href="/workflow">
            Workflow
          </Link>
          <Link className={nav.navLink} href="/works">
            Works 
          </Link>
          
        </div>
        <div className={nav.animatedNotification}>
          <WhatsApp  />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

