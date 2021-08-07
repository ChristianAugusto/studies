import React from 'react';
import Head from 'next/head';

import Header from '@Containers/Header';
import Footer from '@Containers/Footer';



function Layout({
    children, headStyles, headScripts 
}) {
    return (
        <div className="app">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Burger King - Sua loja online</title>

                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="author" content="Christian Augusto Martins dos Santos Barros"/>
                <meta name="description" content="Burger King - Sua loja online"/>
                <meta name="keywords" content="Burger King, Hambúrguers, Fast-Food, Loja"/>

                {/* styles */}
                { headStyles || null }

                {/* headScripts */}
                { headScripts || null  }

                <link rel="stylesheet" href="/css/reset.css"/>
            </Head>
            <div className="app__general">
                <Header/>
                <main className="app__main">
                    { children }
                </main>
                <Footer/>
            </div>
        </div>
    );
}



export default Layout;