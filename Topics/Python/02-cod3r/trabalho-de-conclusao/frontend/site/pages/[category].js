import React from 'react';
import { useRouter } from 'next/router';
import Category, { getCategoriesToParams } from '@components/pages/Category';
import Layout, { getCategoriesPreHead } from '@Layout';



export const getStaticPaths = async () => {
    const categories = await getCategoriesToParams();

    return {
        paths: categories ? categories.map(({slug}) => ( {params: { category: slug }} )) : [],
        fallback: false
    };
};

export const getStaticProps = async (...params) => {
    console.log(params);

    return {
        props: {
            categories: await getCategoriesPreHead() || []
        }
    };
};



const Page = ({ categories }) => {
    console.log(useRouter());
    const { category:categoryName } = useRouter().query;

    const categoryData = categories.filter(({ slug }) => slug === categoryName)[0];

    return (
        <Layout categories={categories}>
            <Category category={categoryData} />
        </Layout>
    );
};



export default Page;