import "isomorphic-fetch";
import React from 'react';
import Head from 'next/head';
import { storeTitle, storeDescription, storeKeywords } from '@storeDefaults';
import Header from './general/Header';
import PreHeader from './general/PreHeader';
// import Footer from './general/Footer'



const Layout = ({ headTitle, children, fonts=[], categories}) => (
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
            <PreHeader categories={categories} />
            <Header/>
            <main>
                { children }
            </main>
        </div>
    </div>
);


export const getCategories = async () => {
    const reponse = await fetch('http://localhost:5000/api/categories?fields=id,name,slug');
    const resJson = await reponse.json();

    return resJson.data;
};



export default Layout;