import React, { useEffect } from 'react';
import Script from 'next/script';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css';

const GetInTouch = () => {
  useEffect(() => {
    const fd = new Plumsail.Form("#plumsail-form-f0vu", "1aca2600-29ce-4e33-a521-eae0983600bc");
  }, []);

  return (
    <Layout>
      <div className={styles.hero}></div>
      <div className={styles.content}>
        <Script
          id="plumsail-form"
          src="https://forms.plumsail.com/api/widget/1aca2600-29ce-4e33-a521-eae0983600bc"
          onLoad={() => {
            const fd = new Plumsail.Form("#plumsail-form-f0vu", "1aca2600-29ce-4e33-a521-eae0983600bc");
          }}
        />
        <div id="plumsail-form-f0vu"></div>
      </div>
    </Layout>
  );
};

export default GetInTouch;
