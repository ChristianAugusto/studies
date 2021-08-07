import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styled';
import { initGlobal } from '@Store/ducks/global/actions';
import Layout from '@Containers/Layout';
import Intro from './Intro';
import Filters from './Filters';
import Shelves from './Shelves';



const CategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initGlobal());
    }, []);


    return (
        <Layout>
            <S.CategoryWrapper>
                <Intro/>
                <S.CategoryActions>
                    <Filters/>
                    <Shelves/>
                </S.CategoryActions>
            </S.CategoryWrapper>
        </Layout>
    );
};



export default CategoryPage;