const fields = {
    priceASC: priceASC,
    priceDESC: priceDESC
};

module.exports = (_combination, _apiResult) => {
    if (!fields[_combination]) {
        return;
    }

    fields[_combination](_apiResult);
};



function priceASC(_products) {
    _products.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        else if (a.price > b.price) {
            return 1;
        }

        return 0;
    });
}


function priceDESC(_products) {
    _products.sort((a, b) => {
        if (a.price > b.price) {
            return -1;
        }
        else if (a.price < b.price) {
            return 1;
        }

        return 0;
    });
}