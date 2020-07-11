import styled from 'styled-components';

import { displayRow } from '@Styles/mixins';



export const CategoryWrapper = styled.div`
    width: 100%;
    height: auto;
`;


export const CategoryActions = styled.section`
    width: 90%;
    max-width: 1800px;
    height: auto;
    margin: 20px auto 0;
    ${displayRow()}
    justify-content: space-between;
    align-items: flex-start;
`;