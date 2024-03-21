import React from 'react';
import * as styles from '../styles/styles.css';
import Layout from '../app/components/layout';



const Works = () => {

  return (
    <Layout>
    <div>
        <div className={styles.doit}>
          <strong>The Reality is...</strong>
          <br/>
          <p>
            If you have an <b>e-commerce</b>, ensure that your website effectively caters to the search intent of the final buyer
            through artificial intelligence and is well-positioned with SEO.
            <br />
            <br />
            If you have a <b>landing page</b>, make sure it captures the attention of your visitors and motivates them to take a
            specific action.
            <br />
            <br />
            If you have an <b>e-learning</b> platform, focus on providing an intuitive and engaging educational experience for
            your users, facilitating access to content and tracking student progress.
          </p>
        </div>
        <div className={styles.imagesContainer}>
          <img src={Smartphone.src} alt="Smartphone mockup" className={styles.smartphone} style={{ maxWidth: '30%', height: 'auto' }}  />
          <img src={Notebook.src} alt="Notebook mockup" className={styles.notebook} style={{ maxWidth: '50%', height: 'auto%' }} />
        </div>
    </div>
    </Layout>

  );

};

export default Works;