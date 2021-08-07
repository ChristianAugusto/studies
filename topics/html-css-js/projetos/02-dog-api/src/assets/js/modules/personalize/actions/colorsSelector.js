
import personalizeData from "../../app/personalizeDataObject";

export default () => {

  document.querySelectorAll(".js-personalize__form-colors-select-list li").map($option => {
    $option.onclick = function(event) {
      event.preventDefault();

      document.querySelector(".js-personalize__form-colors-select-choosen-text").textContent = this.textContent;

      document.querySelectorAll(".js-personalize__form-colors-select-list li.is--active").map($item => $item.classList.remove("is--active"));
      this.classList.add("is--active");


      document.querySelector(".ch-personalize__form-colors-select").classList.remove("is--open");

      document.querySelector(".ch-personalize-dog-name-color-wrapper").setAttribute(
        "class", `ch-personalize-dog-name-color-wrapper ${this.getAttribute("data-class")}`
      );

      personalizeData.color = this.getAttribute("data-content");
    };
  });

  document.querySelector(".ch-personalize__form-colors-select-arrow").onclick = event => {
    event.preventDefault();

    document.querySelector(".ch-personalize__form-colors-select").classList.toggle("is--open");
  };

};