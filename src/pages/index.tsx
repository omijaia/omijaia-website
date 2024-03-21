import React from 'react';
import Link from 'next/link';
import * as styles from '../styles/styles.css';
import Card from '../app/components/cardinfo';
import Layout from '../app/components/layout';

const Index = () => {
  return (
    <Layout>
      <div>
        <div className={styles.hero}>
          <span className={styles.buttonText}>Get your website</span>
          <Link href="/get-in-touch" className={styles.button}>
          </Link>
        </div>
        <Card />
      </div>
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
