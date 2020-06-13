import React from 'react';
import HomePage from '@reactPages/Home';
import Layout, { getCategoriesPreHead } from '@Layout';



const Page = ({ linksHeader }) => (
    <Layout linksHeader={linksHeader}>
        <HomePage/>
    </Layout>
);


export const getStaticProps = async () => {
    return {
        props: {
            linksHeader: await getCategoriesPreHead() || []
        }
    };
}


export default Page;