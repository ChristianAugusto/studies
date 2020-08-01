const {
    LIMIT_PRODUCTS_QUERY
} = process.env;



module.exports = (_apiResult, _indexStart, _indexEnd) => {
    if (!_indexStart) {
        _indexStart = 0;
    }

    if (!_indexEnd) {
        _indexEnd = +LIMIT_PRODUCTS_QUERY + _indexStart;
    }

    if (_indexEnd - _indexStart > +LIMIT_PRODUCTS_QUERY) {
        _indexEnd = +LIMIT_PRODUCTS_QUERY + _indexStart;
    }

    return _apiResult.slice(_indexStart, _indexEnd);
};