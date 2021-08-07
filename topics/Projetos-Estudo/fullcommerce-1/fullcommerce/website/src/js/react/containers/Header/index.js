import React from 'react';

import Logotype from '@Components/Logotype';
import NavigationMenu from './NavigationMenu';

import * as S from './styled';



function Header() {



    return (
        <S.HeaderWrapper>
            <NavigationMenu/>
            <S.Art>
                <Logotype/>
            </S.Art>
        </S.HeaderWrapper>
    );
};



export default Header;