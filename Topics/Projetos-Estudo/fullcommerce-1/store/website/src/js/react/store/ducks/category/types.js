const actions = {
    "ADD_PRODUCTS": ADD_PRODUCTS
};



function ADD_PRODUCTS(_oldState, _action) {
    return {
        ..._oldState,
        products: [
            ..._oldState.products,
            ..._action.products
        ]
    };
}



export default actions;