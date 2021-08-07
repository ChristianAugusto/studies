
import colorsOptions from "./colorsOptions";
import fontsOptions from "./fontsOptions";
import slugify from "../../global/slugify";
import personalizeData from "./personalizeDataObject";

export default () => {
  personalizeData.imageProcessed = true;

  const savedBreed = window.localStorage.getItem("breed") || getBreedFirstOption();
  const savedDogName = window.localStorage.getItem("dog-name") || "";
  const savedColor = window.localStorage.getItem("color") || slugify( firstColorOption() );
  const savedFont  = window.localStorage.getItem("font") || slugify( firstFontOption() );
  const savedImage = window.localStorage.getItem("dog-image") || "";
  const slideIndex = Number( window.localStorage.getItem("step") ); // If null returns 0


  document.querySelector(".js-dog-breed__select-active-text").textContent = savedBreed;
  document.querySelector(".js-personalize__response-dog-breed-text").textContent = savedBreed;
  document.querySelector(".ch-personalize__form-dog-name-input").value = savedDogName;
  document.querySelector(".js-personalize__response-dog-name-text").textContent = savedDogName;
  document.querySelector(".js-personalize__form-colors-select-choosen-text").textContent = savedColor;
  document.querySelector(".js-personalize__form-fonts-select-choosen-text").textContent = savedFont;
  document.querySelector(".js-personalize-dog-image").setAttribute("src", savedImage);

  personalizeData.breed = savedBreed;
  personalizeData.dogName = savedDogName;
  personalizeData.color = savedColor;
  personalizeData.font = savedFont;
  personalizeData.dogImage = savedImage;


  activeOptionSaved(savedBreed, "breed", ".js-dog-breed__select-options-list li", "is--active");
  activeOptionSaved(savedColor, "data-content", ".js-personalize__form-colors-select-list li", "is--active", ".ch-personalize-dog-name-color-wrapper");
  activeOptionSaved(savedFont, "data-content", ".js-personalize__form-fonts-select-list li", "is--active", ".ch-personalize-dog-name-font-wrapper");

  window.swiperInstance.slideTo(slideIndex);
};


function activeOptionSaved(_saved, _attr, _selector, _class, _selector2) {
  let dataClass = "";

  document.querySelectorAll(_selector).map($option => {

    if ($option.getAttribute(_attr) == _saved) {
      $option.classList.add(_class);

      dataClass = $option.getAttribute("data-class") || "";
    }

  });

  if (_selector2) {
    document.querySelector(_selector2).classList.add(dataClass);
  }
}



function getBreedFirstOption() {
  personalizeData.imageProcessed = false;

  document.querySelectorAll(".js-dog-breed__select-options-list li")[0].classList.add("is--active");
  return document.querySelectorAll(".js-dog-breed__select-options-list li")[0].textContent;
}

function firstColorOption() {
  document.querySelector(".ch-personalize-dog-name-color-wrapper").classList.add(colorsOptions[0].class);
  return colorsOptions[0].name;
}

function firstFontOption() {
  document.querySelector(".ch-personalize-dog-name-font-wrapper").classList.add(fontsOptions[0].class);
  return fontsOptions[0].name;
}