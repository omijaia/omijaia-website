import React from 'react';
import * as styles from '../../styles/styles.css';
import Navbar from '../../app/components/nav';
import Footer from '../../app/components/footer';
import Smartphone from '../../../public/assets/images/smartphone.png';
import Notebook from '../../../public/assets/images/notebook.png';


const Post2 = () => {

  return (
    <div>

        <Navbar />
    
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
      <Footer />
      <div className={styles.imagesContainer}>
        <img src={Smartphone.src} alt="Smartphone mockup" className={styles.smartphone} style={{ maxWidth: '30%', height: 'auto' }}  />
        <img src={Notebook.src} alt="Notebook mockup" className={styles.notebook} style={{ maxWidth: '50%', height: 'auto%' }} />
      </div>
    </div>
  );
};

export default Post2;