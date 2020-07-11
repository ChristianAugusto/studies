import React from 'react';

import Logotype from '@Components/Logotype';
import * as S from './styled';



const Header = () => {



    return (
        <S.HeaderWrapper>
            <S.Art>
                <Logotype/>
            </S.Art>
        </S.HeaderWrapper>
    );
};



export default Header;