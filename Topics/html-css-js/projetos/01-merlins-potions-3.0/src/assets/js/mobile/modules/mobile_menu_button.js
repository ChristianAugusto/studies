
import body from "../../common/modules/body/index";

export default () => {
  document.getElementById("ch-header-button_menu_mobile").onclick = (event) => {
    event.preventDefault();

    document.querySelector(".ch-header").classList.add("ch-mobile-menu-open");
    body.fn_lockBody();
  };

  document.getElementById("ch-header-button_close_menu_mobile").onclick = (event) => {
    event.preventDefault();

    document.querySelector(".ch-header").classList.remove("ch-mobile-menu-open");
    body.fn_unlockBody();
  };
};