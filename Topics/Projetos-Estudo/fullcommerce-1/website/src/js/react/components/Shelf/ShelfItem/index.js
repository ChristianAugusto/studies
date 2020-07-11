import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';



const ShelfItem = ({ product }) => {
    console.log('product', product);


    return (
        <S.ShelfItemWrapper className="shelf__item">
            <article className="product">
                <div className="product__image">
                    <img src={product.images[0] || ''} alt={product.name}  />
                </div>
                <div className="product__content">
                    <h2 className="product__name">{product.name}</h2>
                </div>
                <div className="product__actions">
                    <button className="product__buy-button">Adicionar na sacola</button>
                </div>
            </article>
        </S.ShelfItemWrapper>
    );
};

ShelfItem.propTypes = {
    product: PropTypes.object
};



export default ShelfItem;