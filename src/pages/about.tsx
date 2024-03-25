import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import { saveAs } from 'file-saver';
import axios from 'axios';
import * as styles from '../styles/styles.css'
import Profile from '../../public/assets/images/miguel.png'

const About = () => {

    const downloadCV = async () => {
      try {
        const response = await axios.get('/cv.pdf', {
          responseType: 'blob', 
        });
  
        saveAs(response.data, 'CV_Miguel_Munoz.pdf');
      } catch (error) {
        console.error('Failed to Download CV:', error);
      }
    };

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      alert('Email copied!');
    };

  return (
    <Layout>
      <div className={styles.hero}></div>
      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <Image src={Profile} alt="Miguel Muñoz" loading='lazy' className={styles.profileImage} />
          <div className={styles.textAbout}>
            <h2 className={styles.heading}>Miguel Muñoz</h2>
            <p className={styles.paragraph}>
              I'm a 25-year-old web developer with over 3 years of experience and technician specializing in programming and my commitment is to deliver a website that meets the client's needs and expectations and to continous learning keeps me abreast of the latest trends.
              <br/>
              <br/>
              I do not distinguish between working as an entrepreneur or for a company, only in providing value to whoever takes advantage of the fruits of my labor. I recognize that my instinct is more entrepreneurial.
              <br/>
              <br/>
              Since I was 19, I've been exploring various fields such as dj, computer science, graphic design, social media management, hacking, and mathematics.   
              <br/>
              <br/>
              Nowadays my tastes are changing as new ways of optimizing my work appear. Resolving more in software development as a livelihood, but trying to give main focus to pentesting and SEO. 
              I don't pretend to be a generalist, but to have enough knowledge in business, focused on the technical aspect and and know how to prevent threats.
              <br/>
              <br/>
              I like anchovy pizza, one piece, horror literature, and discovering musical artists, I'm open to most musical genres and I mix music in my free time.
              <br/>
              <br/>
            </p>
            <button className={styles.techButton} onClick={downloadCV}>Download CV</button>
            <p className={styles.emailLink} onClick={() => copyToClipboard('hi@mijaia.com')} style={{ cursor: 'pointer' }}>
              hi@mijaia.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;