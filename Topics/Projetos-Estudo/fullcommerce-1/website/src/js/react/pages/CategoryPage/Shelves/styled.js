import styled from 'styled-components';

import { displayRow } from '@Styles/mixins';



export const ShelvesWrapper = styled.div`
    width: 75%;
    height: auto;

    .shelf {
        width: 100%;
        height: auto;

        &__products {
            width: auto;
            height: auto;
            ${displayRow()}
            justify-content: center;
            align-items: center;
        }

        &__item:not(:first-child) {
            margin-left: 50px;
        }
    }
`;