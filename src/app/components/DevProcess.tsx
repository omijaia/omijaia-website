// DevProcess.tsx

import React from 'react';
import Image from 'next/image';
import * as styles from '../../styles/dev.css';
import Meeting from '../../../public/assets/images/meeting-anim.svg';
import Wireframe from '../../../public/assets/images/wireframe-anim.svg';
import SEO from '../../../public/assets/images/seo.svg';
import Design from '../../../public/assets/images/figma-design.svg';
import Develop from '../../../public/assets/images/develop-anim.svg';

const DevProcess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.processContainer}>
        <div className={styles.processItem} style={{ alignSelf: 'flex-start' }}>
          <div className={styles.textContainer}>
            <Image src={Meeting} alt="Meeting" style={{ width: '70px', height: '70px' }}/>
            <h2>I Meeting</h2>
            <p>We explore the website's objectives, requirements and its target audience. 
              A successful website begins by understanding the users and anticipating their needs. <br/>— The rest flows from there.
            </p>
          </div>
        </div>
        <div className={styles.processItem} style={{ alignSelf: 'flex-end' }}>
          <div className={styles.textContainer}>
            <Image src={Wireframe} alt="Wireframe" style={{ width: '70px', height: '70px' }}/>
            <h2>II Wireframing</h2>
            <p>
            Your user's needs are then translated into a sitemap outlining all your pages and their underlying structure. 
            Once approved, we provide initial wireframes of the site, which are then refined through iterations to confirm the site's layout.
              </p>
          </div>
        </div>
        <div className={styles.processItem} style={{ alignSelf: 'flex-start' }}>
          <div className={styles.textContainer}>
            <Image src={SEO} alt="SEO" style={{ width: '70px', height: '70px' }}/>
            <h2>III SEO Analysis</h2>
            <p>We'll cover keyword research, competitor analysis, and on-page optimization to ensure your website is well-prepared to rank prominently. 
              Additionally, we'll implement GEO (Generative Engine Optimization), a new trend that leverages artificial intelligence 
            </p>
          </div>
        </div>
        <div className={styles.processItem} style={{ alignSelf: 'flex-start' }}>
          <div className={styles.textContainer}>
            <Image src={Design} alt="Figma Design" style={{ width: '70px', height: '70px' }}/>
            <h2>IV Figma design</h2>
            <p>We'll discuss the look and feel of the site, and how we can catch your web visitors. 
              Based on this conversation, I'll design Figma mockups of your site's pages for your review before finalizing them. 
            </p>
          </div>
        </div>
        <div className={styles.processItem} style={{ alignSelf: 'flex-start' }}>
          <div className={styles.textContainer}>
            <Image src={Develop} alt="Develop" style={{ width: '70px', height: '70px' }}/>
            <h2>V Develop & Launch</h2>
            <p>I'll develop your website or application. Google Analytics will be installed, SEO will be optimized, 
              and I will provide the necessary documentation for you to learn how to manage your website and apply SEO techniques yourself. 
              After a few walkthroughs, you'll be ready to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DevProcess;
