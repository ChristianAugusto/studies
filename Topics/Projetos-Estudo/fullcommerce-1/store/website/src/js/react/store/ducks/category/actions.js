export function addProducts(products) {
    return {
        type: "ADD_PRODUCTS",
        products
    };
}


export function initCategory() {
    const pageInfo = document.createElement('div');
    pageInfo.innerHTML = document.querySelector('#pageInfo').innerHTML;


    const shelfItems = pageInfo.querySelectorAll('.shelf .shelf__item');


    const products = [];

    for (let i = 0; i < shelfItems.length; i++) {
        products.push({
            name: shelfItems[i].querySelector('.product__name').textContent,
            price: shelfItems[i].querySelector('.product__price').textContent
        });
    }


    return {
        type: "ADD_PRODUCTS",
        products
    };
}