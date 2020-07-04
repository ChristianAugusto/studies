module.exports = (_start=0, _end) => {
    if (!_end) {
        _end = +process.env.LIMIT_PRODUCTS_QUERY + _start;
    }

    if (_end - _start > +process.env.LIMIT_PRODUCTS_QUERY) {
        _end = +process.env.LIMIT_PRODUCTS_QUERY + _start;
    }

    return `LIMIT ${_start},${_end}`;
};