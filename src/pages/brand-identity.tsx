import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'
import logo1 from '../../public/assets/images/visual-identity/logo1.jpeg';
import logo2 from '../../public/assets/images/visual-identity/logo2.jpeg';
import logo3 from '../../public/assets/images/visual-identity/logo3.jpeg';
import logo4 from '../../public/assets/images/visual-identity/logo4.jpeg';
import logo6 from '../../public/assets/images/visual-identity/logo6.jpeg';
import logo7 from '../../public/assets/images/visual-identity/logo7.jpeg';
import logo8 from '../../public/assets/images/visual-identity/logo8.jpeg';
import logo9 from '../../public/assets/images/visual-identity/logo9.jpeg';
import logo10 from '../../public/assets/images/visual-identity/logo10.jpeg';
import logo11 from '../../public/assets/images/visual-identity/logo11.jpeg';
import logo12 from '../../public/assets/images/visual-identity/logo12.jpeg';

const VisualIdentity = () => {
  return (
    <Layout>
      <div className={styles.hero}>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.heading}>
            <h1 className={styles.headerPostText}>Logos</h1>
            </div>
          <div className={styles.logoContainer}>
          <div className={styles.logos}>
                <Image src={logo1} alt="Logo 1" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo2} alt="Logo 2" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>  
                <Image src={logo3} alt="Logo 3" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo4} alt="Logo 4" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo6} alt="Logo 6" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo7} alt="Logo 7" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo8} alt="Logo 8" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo9} alt="Logo 9" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo10} alt="Logo 10" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo11} alt="Logo 11" loading="lazy" className={styles.logoImage} />
              </div>
              <div className={styles.logos}>
                <Image src={logo12} alt="Logo 12" loading="lazy" className={styles.logoImage} />
              </div>
          </div>
        </div>
        <button
          onClick={() => window.open("https://plumsail-8tvh9dr5k4qe.plumsail.io/1aca2600-29ce-4e33-a521-eae0983600bc/5ce2edc6-e67a-4a7e-ba74-2a0186da16d2")}
          className={styles.sharedButton}
          >
          Get In Touch!
          </button>
      </div>
    </Layout>
  );
};

export default VisualIdentity;