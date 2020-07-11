import React from 'react';
import { render } from 'react-dom';

import HomePage from '@Pages/HomePage';



const homePage = () => {
    render(
        <HomePage/>,
        document.getElementById('homePage')
    );
};



export default homePage;