import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'
import { AiOutlineArrowRight, AiOutlineCoffee } from "react-icons/ai";
import Tremunda from '../../public/assets/images/works/tremunda.ico';
import MasterPieceOf from '../../public/assets/images/works/masterpieceof.ico';
import VosEnglish from '../../public/assets/images/works/vosenglish.ico';


const VisualIdentity = () => {
  return (
    <Layout>
      <div className={styles.hero}>
      </div>
          <div className={styles.content}>

          <div className={styles.section}>
            <div className={styles.workImage}>
                <Image src={MasterPieceOf} alt="Master Piece Of" className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Master Piece Of</h2>
                <div className={styles.buttonContainer}>
                  <button className={styles.techButton}>NextJS</button>
                  <button className={styles.techButton}>Tailwind CSS</button>
                  <button className={styles.techButton}>Replicate</button>
                  <button className={styles.techButton}>ControlNET</button>


                </div>
                <p className={styles.paragraph}>Use AI to refine your sketch into an image. Replicate's API allows you to run machine learning models in the cloud, while Control-NET, an open-source model, generates images from text and scribbles.</p>
              </div>

            </div>


          <div className={styles.section}>
              <div className={styles.workImage}>
                <Image src={Tremunda} alt="Tremunda" className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Tremunda</h2>
                <div className={styles.buttonContainer}>
                  <button className={styles.techButton}>NextJS</button>
                  <button className={styles.techButton}>Tailwind CSS</button>
                </div>
                <p className={styles.paragraph}>Tremunda's website is a single-page application that integrates with Calendly for appointment booking. It serves as an inflection point between social media and functions as a blog and e-commerce platform.</p>
                <a href="https://tremunda.com" target="_blank" className={styles.link}>Visit Website <AiOutlineArrowRight /></a>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.workImage}>
                <Image src={VosEnglish} alt="VosEnglish" className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Vos English</h2>
                <p className={styles.paragraph}>E-learning platform for English language education with complete free resources and student track progress.</p>
                <a className={styles.working}>Working on <AiOutlineCoffee /></a>
              </div>
            </div>

          
          </div>
            
        
    </Layout>
  );
};

export default VisualIdentity;

