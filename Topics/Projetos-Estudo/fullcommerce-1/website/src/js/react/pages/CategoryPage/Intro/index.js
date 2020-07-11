import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';



const Intro = () => {
    const { name:categoryName } = useSelector(state => state.category);

    return (
        <S.IntroWrapper>
            <h1>{categoryName}</h1>
        </S.IntroWrapper>
    );
};



export default Intro;