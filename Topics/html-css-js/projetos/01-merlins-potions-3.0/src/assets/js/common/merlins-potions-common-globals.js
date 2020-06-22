
import lazyload from "./modules/lazyload/index";
import shelf from "./modules/shelf/index.js";

document.addEventListener("DOMContentLoaded", () => {
    lazyload();
    shelf.init();
});