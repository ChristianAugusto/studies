import React from 'react';
import * as Styled from './styled';
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
                <Styled.ShelfLine key={i}>
                    {items}
                </Styled.ShelfLine>
            );
        }

        return shelfRows;
    }

    return (
        <Styled.Shelf>
            {build(sizeRow, products)}
        </Styled.Shelf>
    )
};



export default Shelf;