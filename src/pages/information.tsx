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
            <p className={styles.paragraph}>
              I'm a 25-year-old web developer with over 3 years of experience and technician specializing in programming and my commitment is to deliver a website that meets the client's needs and expectations and to continous learning keeps me abreast of the latest trends.
              <br/>
              <br/>
              Since I was 19, I've been exploring various fields such as graphic design, social media management, hacking, and pure mathematics to enhance my programming skills.    
              <br/>
              <br/>
              Nowadays my tastes are changing as new ways of optimizing my work appear. Resolving more in software development as a livelihood, but trying to give main focus to pentesting and artificial intelligence. 
              <br/>
              I don't pretend to be a generalist, but to have enough knowledge in business and more focused on the technical.
              <br/>
              <br/>
              I really like science and nature. I consider myself a nerd with style. If I could live isolated in a forest I would.
              Music is one of my favorite hobbies, literature of all kinds and keeping my mind and body healthy.
              <br/>
              <br/>

              </p>
            <ul className={styles.list}>
            </ul>
          </div>
        </div>
    </Layout>
  );
};

export default Information;