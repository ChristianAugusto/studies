import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';



function NavigationMenu() {
    const { navigationItems } = useSelector(state => state.global.header);

    return (
        <S.NavigationMenuWrapper>
            <ul>
                {navigationItems ? navigationItems.map((navItem, index) => (
                    <li key={index}>
                        <a href={navItem.href}>{navItem.text}</a>
                    </li>
                )) : []}
            </ul>
        </S.NavigationMenuWrapper>
    );
};



export default NavigationMenu;