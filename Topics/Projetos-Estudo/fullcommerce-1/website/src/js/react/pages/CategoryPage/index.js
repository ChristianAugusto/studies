import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initCategory } from '@Store/ducks/category/actions';
import { initGlobal } from '@Store/ducks/global/actions';
import * as S from './styled';

import Header from '@Containers/Header';
import Intro from './Intro';
import Filters from './Filters';
import Shelves from './Shelves';



const CategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initGlobal());
        dispatch(initCategory());
    }, []);


    return (
        <>
            <Header/>
            <S.CategoryWrapper>
                <Intro/>
                <S.CategoryActions>
                    <Filters/>
                    <Shelves/>
                </S.CategoryActions>
            </S.CategoryWrapper>
        </>
    );
};



export default CategoryPage;