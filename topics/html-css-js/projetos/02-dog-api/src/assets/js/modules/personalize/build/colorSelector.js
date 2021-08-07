
import colorsOptions from "../../app/colorsOptions";
import slugify from "../../../global/slugify";

export default () => {

  document.querySelector(".js-personalize__form-colors-select-list").innerHTML = colorsOptions.reduce(
    ($colorItems, $color, $index) => $colorItems + `
      <li data-class="${$color.class}" data-index="${$index}" data-content="${slugify($color.name)}">${$color.name}</li>
    `,
    ""
  );

};