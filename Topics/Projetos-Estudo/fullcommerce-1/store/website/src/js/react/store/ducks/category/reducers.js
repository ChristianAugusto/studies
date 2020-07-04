import types from './types';



const INITIAL_STATE = {
    filter: null,
    totalItems: null,
    products: []
};


function course(oldState=INITIAL_STATE, action) {
    if (!types[action.type]) {
        return oldState;
    }

    return types[action.type](oldState, action);
}



export default course;