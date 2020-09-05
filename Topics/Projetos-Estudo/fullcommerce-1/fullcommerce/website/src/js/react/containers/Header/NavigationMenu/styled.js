import styled from 'styled-components';

import { displayRow } from '@Styles/mixins';
import storeFont from '@Constants/storeFont';



export const NavigationMenuWrapper = styled.nav`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 30px 0;


    > ul {
        width: 100%;
        height: auto;
        ${displayRow()}
        justify-content: center;
        align-items: center;

        > li {
            &:not(:first-child) {
                margin-left: 30px;
            }

            > a {
                font-family: ${storeFont};
                font-size: 15px;
                font-weight: 400;
                color: #000;
                text-decoration: none;
            }
        }
    }
`;