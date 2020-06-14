import styled from 'styled-components';
import { displayRow, displayColumn } from '@mixins';



export const Shelf = styled.div`
    width: 100%;
    height: auto;
    ${displayColumn}
    justify-content: flex-start;
    align-items: flex-start;
`;


export const ShelfLine = styled.ul`
    width: 100%;
    height: auto;
    ${displayRow}
    justify-content: space-between;
    align-items: flex-start;
`;