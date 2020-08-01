import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';



const ShelfItem = ({ product, addCart }) => {



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
                    {
                        addCart ? 
                        '' :
                        <a className="product__buy-button reset" href={`/loja/product/${product.id}`}>Ver detalhes</a>
                    }
                </div>
            </article>
        </S.ShelfItemWrapper>
    );
};

ShelfItem.propTypes = {
    product: PropTypes.object,
    addCart: PropTypes.bool
};



export default ShelfItem;