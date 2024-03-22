
import Head from 'next/head';

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Head>
                <meta charSet="UTF-8"/>             
                <link rel="icon" href="./favicon.ico" />   
                <meta http-equiv="Cache-control" content="public"></meta>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="profile" href="https://gmpg.org/xfn/11"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="omijaia"></meta>
                <meta name="keywords" content="web, app, seo, e-commerce, landing page, e-learning, websites, e-commerce"></meta>
                <meta name="google-site-verification" content="bQ9eZg2X1n5gY0h3zZ3BQ3Zz8fQ"></meta>
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="alternate" hrefLang="en" href="https://www.omijaia.com"></link>
                <link rel="alternate" hrefLang="es" href="https://omijaia.com/es/"></link>
                <link rel="alternate" hrefLang="es" href="https://omijaia.com/br/"></link>
                <link rel="alternate" hrefLang="x-default" href="https://www.omijaia.com"></link>
                <title>I'll Create Your Website | Business Solutions </title>
                <meta name="description" content="Bring me your idea, and I will develop it while you learn along the way. SEO will be optimised and I provide you with the necessary documentation. | WEB | APP | SEO | E-COMMERCE | LANDING PAGE | E-LEARNING." />
                <link rel="canonical" href="https://www.omijaia.com/"></link>
                <meta property="og:locale" content="en_EN"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="I'll Create Your Website | Business Solutions"></meta>
                <meta property="og:description" content="Bring me your idea, and I will develop it while you learn along the way. SEO will be optimised and I provide you with the necessary documentation. | WEB | APP | SEO | E-COMMERCE | LANDING PAGE | E-LEARNING."></meta>
                <meta property="og:url" content="https://www.omijaia.com/"></meta>
                <meta property="og:site_name" content="Business Solutions | I'll Create Your Website"></meta>
                <meta property="article:modified_time" content="2024-21-28T14:15:13+00:00"></meta>
                <meta property="og:image" content="../app/favicon.ico"></meta>
                <meta property="og:image:width" content="512"></meta>
                <meta property="og:image:height" content="512"></meta>
                <meta property="og:image:type" content="image/png"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content="I'll Create Your Website | Business Solutions"></meta>
                <meta name="twitter:description" content="Bring me your idea, and I will develop it while you learn along the way. SEO will be optimised and I provide you with the necessary documentation. | WEB | APP | SEO | E-COMMERCE | LANDING PAGE | E-LEARNING."></meta>
                <meta name="twitter:image" content=""></meta>
                <meta name="twitter:image:width" content="512"></meta>
                <meta name="twitter:image:height" content="512"></meta>
                <meta name="twitter:creator" content="@omijaia"></meta>
                <meta name="twitter:label1" content="Est. reading time"></meta>
                <meta name="twitter:data1" content="1 minute"></meta>
                <meta name="twitter:label2" content="Written by"></meta>
                <meta name="twitter:data2" content="omijaia"></meta>
        </Head>
            <main>{children}</main>
        </>
    );
};


