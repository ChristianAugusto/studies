import React from 'react';
import Layout, { getCategories } from '@Layout';



const Home = ({ categories }) => (
    <Layout categories={categories}>
        Home
    </Layout>
);


export const getStaticProps = async () => {
    return {
        props: {
            categories: (await getCategories()) || []
        }
    };
}


export default Home;