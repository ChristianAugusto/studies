import styled from 'styled-components';
import { displayRow } from '@mixins';


export const ShelfWrapper = styled.div`
    width: 65%;
    height: auto;
`;


export const FiltersWrapper = styled.div`
    width: 25%;
    height: auto;
`;


export const CategoryContent = styled.div`
    width: 100%;
    height: auto;
    ${displayRow}
    justify-content: space-between;
    align-items: flex-start;
`;


export const CategoryIntro = styled.div`
    width: 100%;
    height: auto;
`;