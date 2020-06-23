export default (value) => {
    return (+value / 100).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
};