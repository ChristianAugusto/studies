const actions = {
    "ADD_PRODUCTS": ADD_PRODUCTS,
    "INIT_CATEGORY": INIT_CATEGORY,
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

function INIT_CATEGORY(_oldState, _action) {
    return {
        ..._oldState,
        name: _action.name,
        products: [..._action.products],
        filters: [..._action.filters],
        filterQuery: '',
        orderby: '',
        totalItems: 0
    };
}



export default actions;