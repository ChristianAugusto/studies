import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initGlobal } from '@Store/ducks/global/actions';
import * as S from './styled';

import Header from '@Containers/Header';



const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initGlobal());
    }, []);


    return (
        <>
            <Header/>
            <S.HomeWrapper>
                
            </S.HomeWrapper>
        </>
    );
};



export default HomePage;