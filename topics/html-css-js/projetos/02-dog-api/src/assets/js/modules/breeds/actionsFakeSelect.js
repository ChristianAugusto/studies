
import personalizeData from "../app/personalizeDataObject";

export default () => {

  document.querySelectorAll(".js-dog-breed__select-options-list li").map($option => {
    $option.onclick = function(event) {
      event.preventDefault();

      document.querySelector(".js-dog-breed__select-active-text").textContent = this.getAttribute("breed");

      document.querySelectorAll(".js-dog-breed__select-options-list li.is--active").map($item => $item.classList.remove("is--active"));
      this.classList.add("is--active");


      document.querySelector(".ch-dog-breed__select").classList.remove("is--open");

      const breedBefore = personalizeData.imageProcessed;
      const newBreed = this.getAttribute("breed");

      if (breedBefore != newBreed) {
        personalizeData.breed = newBreed;
        personalizeData.subBreed = this.getAttribute("sub-breed");
        personalizeData.imageProcessed = false;
      }


      document.querySelector(".js-dog-breed__choosen-text").textContent = `Great choice, ${this.getAttribute("breed")}! Let's proceed?`;
      document.querySelector(".js-dog-breed__choosen-text").classList.remove("is--hidden");

      document.querySelector(".js-personalize__response-dog-breed-text").textContent = this.getAttribute("breed");
    };
  });

  document.querySelector(".ch-dog-breed__select-arrow").onclick = event => {
    event.preventDefault();

    document.querySelector(".ch-dog-breed__select").classList.toggle("is--open");
  };

};