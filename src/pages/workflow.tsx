  import React from 'react';
  import Link from 'next/link';
  import Layout from '../app/layout';
  import * as styles from '../styles/styles.css'
  

  const Workflow = () => {
    return (
      <Layout>
        <div className={styles.hero}>
        </div>
            <div className={styles.content}>
            <div className={styles.section}>
                <h2 className={styles.heading}>I am not an expert</h2>
                <p className={styles.paragraph}>I have an incredible hunger for progress and with 13 years of internet experience, I know how to recognize and search for quality information.
                                                My goal is not just to sell you a website or optimize it with SEO. Instead, my role is to help you learn how to build your online presence and be aware of what it involves, in terms of performance, reputation and data protection. 
                </p>
              </div>

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
                  <h2 className={styles.heading}>III. SEO Audit & Research</h2>
                  <p className={styles.paragraph}>I'll conduct in-depth keyword research and competitor analysis to understand your website's current SEO standing and identify areas for improvement.
                  </p>
              </div>

              <div className={styles.section}>
                  <h2 className={styles.heading}>IV. SEO On Page Optimization</h2>
                  <p className={styles.paragraph}>I'll focus on optimizing individual pages of your website to enhance their relevance and visibility for target keywords. This includes optimizing meta tags, headings, content, and internal linking structure to improve search engine rankings and drive organic traffic.
                  </p>
              </div>

                <div className={styles.section}>
                  <h2 className={styles.heading}>V. Figma design</h2>
                  <p className={styles.paragraph}>We'll discuss the look and feel of the site, and how we can catch your web visitors. 
                    Based on this conversation, I'll design Figma mockups of your site's pages for your review before finalizing them. 
                  </p>
                </div>
              
                <div className={styles.section}>
                  <h2 className={styles.heading}>VI. Develop & Launch</h2>
                  <p className={styles.paragraph}>I'll develop your website. Google Analytics will be installed, SEO will be optimized, 
                    and I'll provide the necessary documentation for you to learn and a final SEO report, including all actions taken and the current ranking status of your website. After a few walkthroughs, you'll be ready to go.

                  </p>
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

  export default Workflow;