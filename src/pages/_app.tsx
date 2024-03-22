import Layout from '../app/layout'
import Nav from '../app/components/nav'; 
import Footer from '../app/components/footer';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <Layout>
            <Nav/>
            <Component {...pageProps} />
            <Footer/>
        </Layout>
    )
}