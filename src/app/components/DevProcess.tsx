// DevProcess.tsx

import React from 'react';
import * as styles from '../../styles/dev.css';

const DevProcess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.processContainer}>
        <div className={styles.processItem} style={{ alignSelf: 'flex-start' }}>
          <div className={styles.textContainer}>
            <h2>I</h2>
            <p>At the beginning we will talk about the objective of your website or application, the target audience
              the content you will need and the structure that best suits your needs. <br/>— The rest flows from there.
            </p>
          </div>
        </div>
        <div className={styles.processItem} style={{ alignSelf: 'flex-end' }}>
          <div className={styles.textContainer}>
            <h2>II</h2>
            <p>Contenedor redondeado con texto</p>
          </div>
        </div>
        <div className={styles.processItem} style={{ alignSelf: 'flex-start' }}>
          <div className={styles.textContainer}>
            <h2>III</h2>
            <p>Contenedor redondeado con texto</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DevProcess;
