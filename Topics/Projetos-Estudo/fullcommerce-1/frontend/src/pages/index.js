import React from 'react';
import HomePage from '@reactPages/Home';
import Layout, { getCategoriesPreHead } from '@Layout';



const Home = ({ linksHeader }) => (
    <Layout linksHeader={linksHeader}>
        <HomePage/>
    </Layout>
);


Home.getInitialProps = async () => {
    return {
        linksHeader: await getCategoriesPreHead() || []
    };
};


export default Home;