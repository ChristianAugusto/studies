import styled from 'styled-components';

import storeFont from '@Constants/storeFont';
import { displayRow } from '@Styles/mixins';



export const FiltersWrapper = styled.div`
    width: 25%;
    height: auto;

    h6 {
        font-family: ${storeFont};
        font-size: 16px;
        font-weight: 700;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        text-align: left;
        margin: 0 0 10px 15px;
    }


    .category {
        &__filters {
            width: 100%;
            border-top: 1px solid #c8c8c8;
            border-bottom: 1px solid #c8c8c8;
            box-sizing: border-box;
            padding: 0;
            margin: 0;

            > li {
                width: 100%;
                margin: 10px 0 0 15px;

                &:last-child {
                    margin-bottom: 10px;
                }
            }
        }

        &__filter {
            width: 100%;
            ${displayRow()}
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            font-family: ${storeFont};
            font-size: 12px;
            font-weight: 700;
            color: #474646;
            text-decoration: none;
            text-transform: uppercase;
            text-align: left;

            input[type="checkbox"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                -ms-appearance: none;
                -o-appearance: none;
                appearance: none;

                width: 15px;
                height: 15px;
                background: transparent;
                margin: 0 10px 0 0;
                padding: 0;
                border: 1px solid #000;
                border-radius: 2px;

                &:focus {
                    outline-width: 1px;
                }

                &:checked {
                    background: #0066b3;
                }
            }
        }
    }
`;