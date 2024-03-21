import Nav from '../components/nav'; 
import Footer from './footer';
import Head from 'next/head';

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <>
                <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8"/>                
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="profile" href="https://gmpg.org/xfn/11"></link>
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="alternate" hrefLang="en" href="https://www.omijaia.com"></link>
                <link rel="alternate" hrefLang="es" href="https://omijaia.com/es/"></link>
                <link rel="alternate" hrefLang="es" href="https://omijaia.com/br/"></link>
                <link rel="alternate" hrefLang="x-default" href="https://www.omijaia.com"></link>
                <title>Web & Software Development | Business solutions & Visual Identity </title>
                <meta name="description" content="I will develop your website or application. You will learn along the way, SEO will be optimised and I will provide you with the necessary documentation. | WEB | APP | SEO | E-COMMERCE | LANDING PAGE | E-LEARNING." />
                <link rel="canonical" href="https://www.omijaia.com/"></link>
                <meta property="og:locale" content="en_EN"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Web & Software Development | Business solutions & Visual Identity"></meta>
                <meta property="og:description" content="I will develop your website or application. You will learn along the way, SEO will be optimised and I will provide you with the necessary documentation. | WEB | APP | SEO | E-COMMERCE | LANDING PAGE | E-LEARNING."></meta>
                <meta property="og:url" content="https://www.omijaia.com/"></meta>
                <meta property="og:site_name" content="Business solutions & Visual Identity | Web & Software Development"></meta>
                <meta property="article:modified_time" content="2024-21-28T14:15:13+00:00"></meta>
                <meta property="og:image" content=""></meta>
                <meta property="og:image:width" content="512"></meta>
                <meta property="og:image:height" content="512"></meta>
                <meta property="og:image:type" content="image/png"></meta>
                
                
                </Head>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
};


