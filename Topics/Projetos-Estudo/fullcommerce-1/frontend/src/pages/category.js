import React from 'react';
import CategoryPage, { getCategoryInfo, getProductsQtd } from '@reactPages/Category';
import Layout, { getCategoriesPreHead } from '@Layout';



const Category = ({ linksHeader, categoryInfo }) => {
    return (
        <Layout linksHeader={linksHeader}>
            <CategoryPage categoryInfo={categoryInfo} />
        </Layout>
    );
};


Category.getInitialProps = async ({ query }) => {
    return {
        linksHeader: await getCategoriesPreHead() || [],
        categoryInfo: {
            ...await getCategoryInfo(query.name),
            productsQtd: await getProductsQtd(query.name) || 0,
            slug: query.name
        }
    };
};



export default Category;