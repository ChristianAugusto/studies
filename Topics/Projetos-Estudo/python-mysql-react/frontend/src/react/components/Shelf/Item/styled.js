import styled from 'styled-components';
import { storeFont } from '@store';
import { displayColumn, transition } from '@mixins';


export const ShelfItem = styled.li`
    width: auto;
    height: auto;
    ${displayColumn}
    justify-content: space-between;
    align-items: center;

    &:not(:first-child) {
        margin-left: 20px;
    }


    .product__image {

    }


    .product__content {
        width: 100%;
        height: auto;
        ${displayColumn}
        justify-content: flex-start;
        align-items: center;
    }

    .product__info {
        margin-top: 10px;
        text-align: center;
    }

    .product__name {
        font-family: ${storeFont};
        color: #000;
        font-weight: 700;
        font-size: 16px;
    }

    .product__price {
        margin-top: 10px;
        font-family: ${storeFont};
        color: #000;
        font-weight: 400;
        font-size: 14px;
    }

    .product__actions {
        width: 100%;
        height: auto;
        margin-top: 15px;
    }

    .product__send-to-cart {
        width: 100%;
        height: auto;
        background: #0066b3;
        color: #ffffff;
        border: none;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 7px 0;
        margin: 0;
        cursor: pointer;

        &:focus {
            outline-color: #000;
            outline-width: 1px;
        }
    }
`;