import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from '@Store';



const Root = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

Root.propTypes = {
    children: PropTypes.element
};



export default Root;