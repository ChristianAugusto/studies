const actions = {
    "INIT_GLOBAL": INIT_GLOBAL,
};


function INIT_GLOBAL(_oldState, _action) {
    return {
        ..._oldState,
        header: {
            navigationItems: _action.navigationItems
        }
    };
}



export default actions;