import types from './types';



const INITIAL_STATE = {
    header: {
        navigationItems: null
    }
};


function course(oldState=INITIAL_STATE, action) {
    if (!types[action.type]) {
        return oldState;
    }

    return types[action.type](oldState, action);
}



export default course;