import styled from 'styled-components';
import { displayRow, transition } from '@mixins';
import { storeFont } from '@storeDefaults';



const Style = styled.div`
    width: 100%;
    height: auto;
    ${displayRow()}
    justify-content: center;
    align-items: center;
    background: #ffffff;
    min-height: 70px;

    a {
        font-family: ${storeFont};
        color: #000;
        font-weight: 400;
        font-size: 18px;
        text-decoration: none;
        ${transition('all 0.4s')}
    }

    a:not(:first-child) {
        margin-left: 20px;
    }

    a:hover {
        color: #b50000;
    }
`;



export default Style;