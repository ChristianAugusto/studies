import React from 'react';
import * as S from './styled';
import formatPrice from '@utils/formatPrice';



const ShelfItem = ({ product }) => {
    return (
        <S.ShelfItem>
            <div className="product__image">
                <img src={product.image_path} />
            </div>
            <div className="product__content">
                <div className="product__info">
                    <h4 className="product__name">{product.name}</h4>
                    <p className="product__price">{formatPrice(product.price)}</p>
                </div>
                <div className="product__actions">
                    <button className="product__send-to-cart reset">Comprar</button>
                </div>
            </div>
        </S.ShelfItem>
    )
};



export default ShelfItem;