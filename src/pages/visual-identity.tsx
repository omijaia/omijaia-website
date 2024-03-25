import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'


const VisualIdentity = () => {
  return (
    <Layout>
      <div className={styles.hero}>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Soon</h2>
          <div className={styles.logoContainer}>
            <div className={styles.logos}>
            </div>
            <div className={styles.logos}>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisualIdentity;