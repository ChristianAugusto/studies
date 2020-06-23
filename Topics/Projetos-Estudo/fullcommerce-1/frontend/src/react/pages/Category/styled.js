import styled from 'styled-components';
import { storeFont } from '@store';
import { displayRow, displayColumn, mqmin } from '@mixins';



export const CategoryIntro = styled.div`
    width: 100%;
    height: auto;
    ${displayColumn}
    justify-content: flex-start;
    align-items: center;

    .category__name {
        font-family: ${storeFont};
        color: #000;
        font-weight: 700;
        font-size: 30px;
        text-align: center;
    }
`;


export const CategoryContent = styled.div`
    width: 95%;
    height: auto;
    ${displayRow}
    justify-content: space-between;
    align-items: flex-start;
    margin: 25px auto 0;
    ${mqmin('1400px')} {
        width: 90%;
    }
`;


export const ShelfWrapper = styled.div`
    width: 65%;
    height: auto;
    ${displayColumn}
    justify-content: flex-start;
    align-items: flex-end;
`;


export const FiltersWrapper = styled.div`
    width: 25%;
    height: auto;
`;