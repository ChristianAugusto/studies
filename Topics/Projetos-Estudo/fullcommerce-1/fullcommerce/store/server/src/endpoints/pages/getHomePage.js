const path = require('path');
const fs = require('fs');

const replaceHeader = require('../../modules/placeholders/replaceHeader');



module.exports = async () => {
    try {
        const homeLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/burgerking-home.html'), 'utf8');
        const headerLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/layouts/header.html'), 'utf8');


        return {
            status: 200,
            headers: {
                'Content-Type': 'text/html'
            },
            body: replacePlaceholders(homeLayout, headerLayout)
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



function replacePlaceholders(_pageLayout, _headerLayout) {
    let resultMatch;


    while (resultMatch = _pageLayout.match(/<store:header ?\/?>/mi)) {
        _pageLayout = _pageLayout.replace(/<store:header ?\/?>/mi, replaceHeader(_headerLayout));
    }


    return _pageLayout;
}