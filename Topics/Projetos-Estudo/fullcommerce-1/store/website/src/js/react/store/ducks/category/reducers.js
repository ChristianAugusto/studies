import types from './types';



const INITIAL_STATE = {
    name: null,
    products: null,
    filters: null,
    filterQuery: null,
    orderby: null,
    totalItems: null,
    headingTags: null
};


function course(oldState=INITIAL_STATE, action) {
    if (!types[action.type]) {
        return oldState;
    }

    return types[action.type](oldState, action);
}



export default course;