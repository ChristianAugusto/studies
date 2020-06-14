import styled from 'styled-components';
import { displayRow, displayColumn } from '@mixins';



export const Shelf = styled.div`
    width: auto;
    height: auto;
    ${displayColumn}
    justify-content: flex-start;
    align-items: flex-start;
`;


export const ShelfLine = styled.ul`
    width: 100%;
    height: auto;
    ${displayRow}
    justify-content: flex-start;
    align-items: stretch;
`;