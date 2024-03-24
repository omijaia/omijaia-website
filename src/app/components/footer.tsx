import React from 'react';
import Link from 'next/link';
import * as styles from '../../styles/styles.css';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineFacebook} from "react-icons/ai";

const footer = () => {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>This is a rat race, but I'm no rat, I'm a turtle, ninja turtle. So what's your favorite? Mine is Michaelangelo.</div>
        <div className={styles.footerMenu}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}><Link href="/workflow">Workflow</Link></li>
            <li className={styles.navLink}><Link href="/works">Works</Link></li>
           {/* <li className={styles.navLink}><Link href="/resources">Resources</Link></li> */}
            <li className={styles.navLink}><Link href="/information">Information</Link></li>
            <li className={styles.navLink}><Link href="mailto:hiomijaia@gmail.com">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
        <ul>
            <li>
            <a href="https://github.com/omijaia" target="_blank" rel="noopener">              
            <AiOutlineGithub className={styles.footerIcons} />
            </a>
            </li>
            <li>
            <a href="https://facebook.com/omijaia" target="_blank" rel="noopener">
              <AiOutlineFacebook className={styles.footerIcons} />
            </a>
            </li>

            <li>
            <a href="https://instagram.com/omijaia" target="_blank" rel="noopener">
              <AiOutlineInstagram className={styles.footerIcons} />
            </a>
            </li>
            </ul>
        </div>
      </div>
    </div>
    <div className={styles.footerRights}>
        <div>2024 © Omijaia
      </div>
      </div>
    </>
  );
};

export default footer;