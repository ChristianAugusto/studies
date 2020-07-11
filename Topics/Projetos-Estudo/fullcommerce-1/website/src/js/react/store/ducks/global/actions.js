export function header(_pageInfo) {
    const navigationItems = [];
    const navigationLinks = _pageInfo.querySelectorAll('header .navigation > ul > li > a');

    for (let i = 0; i < navigationLinks.length; i++) {
        navigationItems.push({
            href: navigationLinks[i].getAttribute('href'),
            text: navigationLinks[i].textContent
        });
    }

    return navigationItems;
}


export function initGlobal() {
    const pageInfo = document.createElement('div');
    pageInfo.innerHTML = document.querySelector('#pageInfo').innerHTML.trim();

    return {
        type: "INIT_GLOBAL",
        navigationItems: header(pageInfo)
    };
}