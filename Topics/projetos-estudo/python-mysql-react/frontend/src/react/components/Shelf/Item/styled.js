import styled from 'styled-components';
import { displayColumn } from '@mixins';


export const ShelfItem = styled.li`
    width: auto;
    height: auto;
    ${displayColumn}
    justify-content: flex-start;
    align-items: center;
`;