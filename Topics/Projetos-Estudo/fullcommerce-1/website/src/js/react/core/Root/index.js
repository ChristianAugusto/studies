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
    name: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
};



export default Root;