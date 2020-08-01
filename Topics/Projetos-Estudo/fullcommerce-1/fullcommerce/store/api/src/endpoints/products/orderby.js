const fields = {
    priceASC: priceASC,
    priceDESC: priceDESC,
    releaseDateASC: releaseDateASC,
    releaseDateDESC: releaseDateDESC
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


function releaseDateASC(_products) {
    _products.sort((a, b) => {
        const aDate = new Date(a.releaseDate);
        const bDate = new Date(b.releaseDate);

        if (aDate.getTime() < bDate.getTime()) {
            return -1;
        }
        else if (aDate.getTime() > bDate.getTime()) {
            return 1;
        }

        return 0;
    });
}


function releaseDateDESC(_products) {
    _products.sort((a, b) => {
        const aDate = new Date(a.releaseDate);
        const bDate = new Date(b.releaseDate);

        if (aDate.getTime() > bDate.getTime()) {
            return -1;
        }
        else if (aDate.getTime() < bDate.getTime()) {
            return 1;
        }

        return 0;
    });
}