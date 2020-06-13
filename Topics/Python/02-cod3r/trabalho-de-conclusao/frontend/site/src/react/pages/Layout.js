import "isomorphic-fetch";
import React from 'react';
import Head from 'next/head';
import { storeTitle, storeDescription, storeKeywords, defaultApi } from '@store';
import Header from '@components/Header';
import PreHeader from '@components/PreHeader';
import Footer from '@components/Footer'



const Layout = ({ headTitle, children, fonts=[], linksHeader}) => (
    <div className="app">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="author" content="Christian Augusto Martins dos Santos Barros" />
            <meta name="description" content={storeDescription} />
            <meta name="keywords" content={storeKeywords} />
            <title>{headTitle || storeTitle}</title>

            {/* styles */}
            <link rel="stylesheet" href="/css/reset.css" />

            {/* fonts */}
            <link rel="stylesheet" href="/css/lato.css" />
            { fonts }
        </Head>
        <div className="app__general">
            <PreHeader linksHeader={linksHeader} />
            <Header/>
            { children }
            <Footer/>
        </div>
    </div>
);


export const getCategoriesPreHead = async () => {
    const reponse = await fetch(`${defaultApi}/api/header_links`);
    const resJson = await reponse.json();

    return resJson.data;
};



export default Layout;