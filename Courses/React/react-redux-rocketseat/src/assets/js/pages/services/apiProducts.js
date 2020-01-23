
export default (param = "") => fetch(`https://rocketseat-node.herokuapp.com/api/products${param}`);