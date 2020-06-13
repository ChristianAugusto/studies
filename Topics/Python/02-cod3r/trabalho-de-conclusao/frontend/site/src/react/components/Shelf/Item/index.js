import React from 'react';
import * as Styled from './styled';
import formatPrice from '@utils/formatPrice';



const ShelfItem = ({ product }) => {
    return (
        <Styled.ShelfItem>
            <div className="product__image">
                <img src={product.image_path} />
            </div>
            <div className="product__info">
                <h4>{product.name}</h4>
                <p>{formatPrice(product.price)}</p>
            </div>
            <div className="product__actions">
                <button className="send-to-cart">Comprar</button>
            </div>
        </Styled.ShelfItem>
    )
};



export default ShelfItem;