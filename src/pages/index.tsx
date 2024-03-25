import React from 'react';
import Link from 'next/link';
import * as styles from '../styles/styles.css';
import Card from '../app/components/cardinfo';
import Layout from '../app/layout';
import "../app/globals.css";

const Index = () => {
  return (
    <Layout>
        <div className={styles.hero}>
          <span className={styles.buttonText}>Get your website</span>
          <Link href="https://plumsail-8tvh9dr5k4qe.plumsail.io/1aca2600-29ce-4e33-a521-eae0983600bc/5ce2edc6-e67a-4a7e-ba74-2a0186da16d2" className={styles.button}>
          </Link>
        </div>
        <Card />
    </Layout>
  );
};

export async function getStaticProps() {
 
  const isClient = false;

  return {
    props: {
      isClient,
    },
  };
}

export default Index;
