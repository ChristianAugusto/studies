import styled from 'styled-components';
import { displayRow } from '@mixins';


const Style = styled.header`
    width: 100%;
    height: auto;
    ${displayRow()}
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 100px;
    background: #ed7901;
`;



export default Style;