import React from 'react';
import Home from '@components/pages/Home';
import Layout, { getCategoriesPreHead } from '@Layout';



const Page = ({ categories }) => (
    <Layout categories={categories}>
        <Home />
    </Layout>
);


export const getStaticProps = async () => {
    return {
        props: {
            categories: await getCategoriesPreHead() || []
        }
    };
}


export default Page;