import React, { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import { defaultApi } from '@store';
import Main from '@components/Main';
import Shelf from '@Shelf';
import * as S from './styled';



const CategoryPage = ({ categoryInfo }) => {
    console.log(categoryInfo);
    const { slug:categorySlug, name:categoryName } = categoryInfo;


    const [products, handleProducts] = useState([]);

    async function getProducts(_oldProducts, _categorySlug, _startIndex) {
        const res = await fetch(`${defaultApi}/api/products/category?categorySlug=${_categorySlug}&startIndex=${_startIndex}`);
        const resJson = await res.json();

        handleProducts([..._oldProducts, ...resJson.data]);
    };

    useEffect(() => {
        getProducts([], categorySlug, 0);
    }, [categorySlug]);

    return (
        <Main>
            <S.CategoryIntro>
                <h1 className="category__name">{categoryName}</h1>
            </S.CategoryIntro>
            <S.CategoryContent>
                <S.FiltersWrapper>

                </S.FiltersWrapper>
                <S.ShelfWrapper>
                    <Shelf products={products} sizeRow={4} />
                </S.ShelfWrapper>
            </S.CategoryContent>
        </Main>
    );
};


export async function getCategoryInfo(categorySlug) {
    const res = await fetch(`${defaultApi}/api/categories/info?categorySlug=${categorySlug}`);
    const resJson = await res.json();

    return resJson.data;
}


export async function getProductsQtd(categorySlug) {
    const res = await fetch(`${defaultApi}/api/products/qtdcategory?categorySlug=${categorySlug}`);
    const resJson = await res.json();

    return resJson.data;
}



export default CategoryPage;