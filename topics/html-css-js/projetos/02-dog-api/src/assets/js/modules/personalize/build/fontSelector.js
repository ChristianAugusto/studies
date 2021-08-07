
import fontsOptions from "../../app/fontsOptions";
import slugify from "../../../global/slugify";

export default () => {

  document.querySelector(".js-personalize__form-fonts-select-list").innerHTML = fontsOptions.reduce(
    ($fontItems, $font, $index) => $fontItems + `
      <li data-class="${$font.class}" data-index="${$index}" data-content="${slugify($font.name)}">${$font.name}</li>
    `,
    ""
  );

};