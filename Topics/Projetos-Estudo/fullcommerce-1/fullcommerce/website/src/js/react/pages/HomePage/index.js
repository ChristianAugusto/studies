import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initGlobal } from '@Store/ducks/global/actions';
import Layout from '@Containers/Layout';
import * as S from './styled';



const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initGlobal());
    }, []);


    return (
        <Layout>
            <S.HomeWrapper>
                
            </S.HomeWrapper>
        </Layout>
    );
};



export default HomePage;