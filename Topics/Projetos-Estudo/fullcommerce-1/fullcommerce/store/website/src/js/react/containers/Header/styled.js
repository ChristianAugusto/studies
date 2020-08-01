import styled from 'styled-components';

import { transform, displayColumn } from '@Styles/mixins';



export const HeaderWrapper = styled.header`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding-bottom: 27px;
`;



export const Art = styled.div`
    width: 100%;
    height: auto;
    ${displayColumn()}
    justify-content: flex-start;
    align-items: center;
    background: #ed7901;

    .logotype {
        width: 65px;
        height: 65px;
        ${transform('scale(1.8)')}
    }
`;