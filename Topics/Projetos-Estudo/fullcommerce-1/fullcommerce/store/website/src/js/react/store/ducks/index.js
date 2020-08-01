import { combineReducers } from 'redux';

import global from './global/reducers';
import category from './category/reducers';



export default combineReducers({
    global,
    category
});