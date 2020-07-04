const path = require('path');
const fs = require('fs');

// const replaceShelfs = require('../../modules/placeholders/replaceShelfs');



module.exports = async () => {
    try {
        const homeLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/burgerking-home.html'), 'utf8');
        // const shelfLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/layouts/shelf.html'), 'utf8');


        return {
            status: 200,
            headers: {
                'Content-Type': 'text/html'
            },
            // body: replacePlaceholders(initialProducts, homeLayout, shelfLayout)
            body: homeLayout
        };
    }
    catch (error) {
        console.log('[ERROR] - Error in getCategoryPage');
        console.log(error);
        return {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: null,
                message: "Internal server error"
            })
        };
    }
};



function replacePlaceholders(_initialProducts, _pageLayout, _shelfLayout) {
    // let resultMatch;


    // while (resultMatch = _pageLayout.match(/<store:shelf .*\/>/mi)) {
    //     _pageLayout = _pageLayout.replace(/<store:shelf .*\/>/mi, replaceShelfs(resultMatch, _shelfLayout, _initialProducts))
    // }


    // return _pageLayout;
}