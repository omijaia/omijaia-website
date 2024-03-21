  import React from 'react';

  import Layout from '../app/components/layout';
  import * as styles from '../styles/styles.css'


  const GetInTouch = () => {
    return (
      <Layout>
        <div className={styles.hero}>
        </div>
            <div className={styles.content}>
            <script type="text/javascript" src="https://forms.plumsail.com/api/widget/1aca2600-29ce-4e33-a521-eae0983600bc"></script>
            <div id="plumsail-form-bax1"><div className="fd-form-loading"></div></div>
            <script type="text/javascript">
                var fd = new Plumsail.Form("#plumsail-form-bax1", "1aca2600-29ce-4e33-a521-eae0983600bc")
            </script>
          </div>
          
      </Layout>
    );
  };

  export default GetInTouch;