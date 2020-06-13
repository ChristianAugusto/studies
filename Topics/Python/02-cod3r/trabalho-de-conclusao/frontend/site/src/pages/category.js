import React from 'react';
import { useRouter } from 'next/router';
import CategoryPage from '@reactPages/Category';
import Layout, { getCategoriesPreHead } from '@Layout';



export const getStaticProps = async () => {
    return {
        props: {
            linksHeader: await getCategoriesPreHead() || []
        }
    };
};


const Category = ({ linksHeader }) => {
    const { name } = useRouter().query;


    return (
        <Layout linksHeader={linksHeader}>
            <CategoryPage categoryName={name} />
        </Layout>
    );
};



export default Category;