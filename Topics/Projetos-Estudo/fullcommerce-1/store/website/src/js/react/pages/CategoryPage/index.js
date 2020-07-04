import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initCategory } from '@Store/ducks/category/actions';
import * as S from './styled';



const CategoryPage = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initCategory());
    }, []);

    return (
        <S.CategoryWrapper>
            
        </S.CategoryWrapper>
    );
};



export default CategoryPage;