import React from 'react';
import { render } from 'react-dom';

import CategoryPage from '@Pages/CategoryPage';



const categoryPage = () => {
    render(
        <CategoryPage/>,
        document.getElementById('categoryPage')
    );
};



export default categoryPage;