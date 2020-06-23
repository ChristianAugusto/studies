import React from 'react';
import * as S from './styled';
import Item from './Item';



const Shelf = ({ sizeRow, products }) => {
    function build(_sizeRow, _products) {
        const shelfRows = [];

        for (let i = 0; i < _products.length;) {
            const items = [];

            for (let j = 0; j < _sizeRow && i < _products.length; j++, i++) {
                items.push(<Item product={_products[i]} key={_products[i].id} />)
            }

            shelfRows.push(
                <S.ShelfLine key={i}>
                    {items}
                </S.ShelfLine>
            );
        }

        return shelfRows;
    }

    return (
        <S.Shelf>
            {build(sizeRow, products)}
        </S.Shelf>
    )
};



export default Shelf;