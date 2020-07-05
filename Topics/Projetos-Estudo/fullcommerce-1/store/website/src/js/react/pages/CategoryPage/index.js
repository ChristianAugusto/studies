import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initCategory } from '@Store/ducks/category/actions';
import * as S from './styled';

import Header from '@Containers/Header';
import Intro from './Intro';



const CategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initCategory());
    }, []);


    return (
        <>
            <Header/>
            <S.CategoryWrapper>
                <Intro/>
            </S.CategoryWrapper>
        </>
    );
};



export default CategoryPage;