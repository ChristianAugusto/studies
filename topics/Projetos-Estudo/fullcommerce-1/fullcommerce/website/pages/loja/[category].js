import React from 'react';

import Root from '@Core/Root';
import CategoryPage from '@Pages/CategoryPage';



function Category({ test }) {
    console.log('test', test);

    return(
        <Root>
            <CategoryPage/>
        </Root>
    );
};


Category.getInitialProps = function({ query }) {
    console.log('query', query);

    return {
        test: 'test'
    }
}



export default Category;