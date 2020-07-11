const formatPrice = require('../../utils/formatPrice');



module.exports = function(_resultMatch, _shelfLayout, _products) {
    const productsQtd = +_resultMatch[0].replace(/\D/gmi, '');

    let shelfItemsHTML = '';

    for (let i = 0; i < productsQtd && i < _products.length; i++) {
        const shelfItem = (
            _shelfLayout.replace(/<store:productName ?\/?>/gmi, _products[i].name)
            .replace(/<store:productId ?\/?>/gmi, _products[i].id)
            .replace(/<store:productImages ?\/?>/gmi, _products[i].imagesPath)
            .replace(/<store:productPrice ?\/?>/gmi, formatPrice(_products[i].price))
        );

        shelfItemsHTML += shelfItem;
    }

    return `<ul class="shelf">${shelfItemsHTML}</ul>`;
};