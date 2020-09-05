function INIT_GLOBAL(_oldState, _action) {
    return {
        ..._oldState,
        header: {
            navigationItems: _action.navigationItems
        }
    };
}


const actions = {
    "INIT_GLOBAL": INIT_GLOBAL,
};



export default actions;