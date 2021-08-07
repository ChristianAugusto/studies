import React from 'react';
// import { useSelector } from 'react-redux';

import Shelf from '@Components/Shelf';
import * as S from './styled';



const Shelves = () => {
    return (
        <S.ShelvesWrapper>
            <Shelf products={[]} columns={3} addCart={false} />
        </S.ShelvesWrapper>
    );
};



export default Shelves;