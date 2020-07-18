import styled from 'styled-components';

import storeFont from '@Constants/storeFont';



export const IntroWrapper = styled.section`
    width: 100%;
    height: auto;
    margin: 20px 0 0;

    .category__intro {
        &__name {
            font-family: ${storeFont};
            font-size: 20px;
            font-weight: 600;
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
        }
    }
`;