import Nav from '../components/nav'; 
import Footer from './footer';
import Head from 'next/head';

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <>
                <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Omijaia Homepage • Web & Software Development | Business solutions & Visual Identity </title>
                <meta name="description" content="I am an experienced web and software developer with expertise in providing business solutions and designing visual identities. I can contribute to the growth of your business." />
                </Head>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
};


