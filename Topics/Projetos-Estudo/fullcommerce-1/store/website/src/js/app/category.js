import React from 'react';
import { render } from 'react-dom';

import Root from '@Core/Root';
import CategoryPage from '@Pages/CategoryPage';



const categoryPage = () => {
    render(
        <Root>
            <CategoryPage/>
        </Root>,
        document.getElementById('categoryPage')
    );
};



export default categoryPage;