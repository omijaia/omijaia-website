import React from 'react';
import Link from 'next/link';
import * as styles from '../../styles/styles.css';


const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>This is a rat race, but I'm no rat, I'm a turtle, ninja turtle. So what's your favorite? Mine is Michaelangelo.</div>
        <div className={styles.footerMenu}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}><Link href="/workflow">Workflow</Link></li>
            <li className={styles.navLink}><Link href="/works">Works</Link></li>
            <li className={styles.navLink}><Link href="/resources">Resources</Link></li>
            <li className={styles.navLink}><Link href="/information">Information</Link></li>
            <li className={styles.navLink}><Link href="mailto:hiomijaia@gmail.com">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
        <ul>
            <li>
            <a href="https://github.com/omijaia" target="_blank" rel="noopener">
            <i className='bx bxl-github bx-xs'></i>

            </a>
            </li>
            <li>
            <a href="https://facebook.com/omijaia" target="_blank" rel="noopener">
            <i className='bx bxl-facebook bx-xs'></i>
            </a>
            </li>

            <li>
            <a href="https://instagra.com/omijaia" target="_blank" rel="noopener">
            <i className='bx bxl-instagram bx-xs'></i>
            </a>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;