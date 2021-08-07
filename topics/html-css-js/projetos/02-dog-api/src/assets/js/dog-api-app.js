
import "regenerator-runtime";
import "js-polyfills";
import "../scss/dog-api-app.scss";

/* GLOBAL METHODS */
import global from "./global/index";

/* APP METHODS */
import carousel from "./modules/app/carousel";
import setSavedData from "./modules/app/setSavedData";

/* PAGE METHODS */
import breeds from "./modules/breeds/index";
import personalize from "./modules/personalize/index";

document.addEventListener("DOMContentLoaded", async (event) => {
  global.promisePolyfill();
  global.nodelistMap();

  /* BUILD APP */
  carousel();
  personalize.build();
  await breeds.build();
  setSavedData();

  /* SETTING UP ACTIONS*/
  breeds.init();
  personalize.init();
});