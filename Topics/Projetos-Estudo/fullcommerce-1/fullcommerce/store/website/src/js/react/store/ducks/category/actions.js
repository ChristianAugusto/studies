export function addProducts(products) {
    return {
        type: "ADD_PRODUCTS",
        products
    };
}


export function initCategory() {
    const pageInfo = document.createElement('div');
    pageInfo.innerHTML = document.querySelector('#pageInfo').innerHTML.trim();


    const shelfItems = pageInfo.querySelectorAll('.shelf > li');
    const products = [];
    for (let i = 0; i < shelfItems.length; i++) {
        products.push({
            id: shelfItems[i].querySelector('.product__id').textContent.trim(),
            images: shelfItems[i].querySelector('.product__images').textContent.trim().split('|'),
            name: shelfItems[i].querySelector('.product__name').textContent.trim(),
            price: shelfItems[i].querySelector('.product__price').textContent.trim()
        });
    }

    const filterItems = pageInfo.querySelectorAll('.category__filters > li h6');
    const filters = [];
    for (let i = 0; i < filterItems.length; i++) {
        filters.push(filterItems[i].textContent.trim());
    }


    const name = pageInfo.querySelector('#categoryName').textContent.trim();


    return {
        type: "INIT_CATEGORY",
        name,
        products,
        filters
    };
}