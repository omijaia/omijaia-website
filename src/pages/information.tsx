import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'
import Profile from '../../public/assets/images/miguel.png'

const Information = () => {
  return (
    <Layout>
      <div className={styles.hero}></div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.imageContainer}>
            <Image src={Profile} alt="Miguel Muñoz" className={styles.profile} />
          </div>
            <h2 className={styles.heading}>Miguel Muñoz</h2>
            <p className={styles.paragraph}>We explore the website's objectives, requirements and its target audience. A successful website begins by understanding the users and anticipating their needs.</p>
            <ul className={styles.list}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
    </Layout>
  );
};

export default Information;