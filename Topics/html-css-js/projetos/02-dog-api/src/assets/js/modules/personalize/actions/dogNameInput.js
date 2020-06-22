
import personalizeData from "../../app/personalizeDataObject";

export default () => {
  document.querySelector(".ch-personalize__form-dog-name-input").addEventListener("keyup", function(event) {

    document.querySelector(".js-personalize__response-dog-name-text").textContent = this.value;

    personalizeData.dogName = this.value;
  });
};