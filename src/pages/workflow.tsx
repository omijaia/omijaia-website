  import React from 'react';
  import Layout from '../app/layout';
  import GetInTouch from './get-in-touch';
  import * as styles from '../styles/styles.css'

  const Workflow = () => {
    return (
      <Layout>
        <div className={styles.hero}>
        </div>
            <div className={styles.content}>
              <div className={styles.section}>
                <h2 className={styles.heading}>I. Meeting</h2>
                <p className={styles.paragraph}>We explore the website's objectives, requirements and its target audience. 
                  A successful website begins by understanding the users and anticipating their needs. <br/>— The rest flows from there.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.heading}>II. Wireframing</h2>
                <p className={styles.paragraph}>Your user's needs are then translated into a sitemap outlining all your pages and their underlying structure. 
                  Once approved, we provide initial wireframes of the site, which are then refined through iterations to confirm the site's layout.
                </p>
              </div>
              
              <div className={styles.section}>
                  <h2 className={styles.heading}>III. SEO Analysis</h2>
                  <p className={styles.paragraph}>We'll cover keyword research, competitor analysis, and on-page optimization to ensure your website is well-prepared to rank prominently. 
                    Additionally, we'll implement GEO (Generative Engine Optimization), a new trend that leverages artificial intelligence 
                  </p>
              </div>

                <div className={styles.section}>
                  <h2 className={styles.heading}>IV. Figma design</h2>
                  <p className={styles.paragraph}>We'll discuss the look and feel of the site, and how we can catch your web visitors. 
                    Based on this conversation, I'll design Figma mockups of your site's pages for your review before finalizing them. 
                  </p>
              </div>
              
                <div className={styles.section}>
                  <h2 className={styles.heading}>V. Develop & Launch</h2>
                  <p className={styles.paragraph}>I'll develop your website or application. Google Analytics will be installed, SEO will be optimized, 
                    and I will provide the necessary documentation for you to learn how to manage your website and apply SEO techniques yourself. 
                    After a few walkthroughs, you'll be ready to go.
                  </p>
              </div>
              <GetInTouch />
          </div>
      </Layout>
    );
  };

  export default Workflow;