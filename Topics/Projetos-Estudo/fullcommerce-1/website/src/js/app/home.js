import React from 'react';
import { render } from 'react-dom';

import Root from '@Core/Root';
import HomePage from '@Pages/HomePage';



const homePage = () => {
    render(
        <Root>
            <HomePage/>
        </Root>,
        document.getElementById('homePage')
    );
};



export default homePage;