import styled from 'styled-components';

import storeFont from '@Constants/storeFont';
import { displayColumn } from '@Styles/mixins';



export const ShelfItemWrapper = styled.li`
    width: auto;
    height: auto;


    .product {
        ${displayColumn()}
        justify-content: flex-start;
        align-content: center;
        cursor: pointer;

        &__content {
            width: 100%;
            height: auto;
            margin: 0;
        }
        &__name {
            font-family: ${storeFont};
            font-size: 16px;
            font-weight: 400;
            color: #000;
            text-decoration: none;
            text-align: center;
        }

        &__actions {
            width: 100%;
            height: auto;
            margin: 15px 0 0;
        }
        &__buy-button {
            display: block;
            width: 100%;
            height: auto;
            box-sizing: border-box;
            margin: 0;
            padding: 6px 0;
            font-family: ${storeFont};
            font-size: 12px;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            background: #0066b3;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
    }
`;