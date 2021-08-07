
import body from "../body/index";
import lazyload from "../lazyload/index";

export default (_shelfItem, _potion) => {
  _shelfItem.onclick = (event) => {
    event.preventDefault();

    const productLightbox = document.querySelector(".ch-product-lightbox");

    productLightbox.querySelector(".ch-prod-lb-image").setAttribute("src", "");
    productLightbox.querySelector(".ch-prod-lb-image").setAttribute("alt", _potion.name);
    productLightbox.querySelector(".ch-prod-lb-image").setAttribute("class", "ch-prod-lb-image has-lazyload");
    productLightbox.querySelector(".ch-prod-lb-image").setAttribute("lazy-url", `/storage/${_potion.image}`);

    productLightbox.querySelector(".ch-prod-lb-name").textContent = _potion.name;

    productLightbox.querySelector(".ch-prod-lb-effect__value").textContent = _potion.effect;


    const ingredientsList = productLightbox.querySelector(".ch-prod-lb-ingredients__list");
    ingredientsList.innerHTML = "";
    for (let i = 0, len = _potion.ingredients.length; i < len; i++) {
      const ingredientItem = `<li>${_potion.ingredients[i]}</li>`;

      productLightbox.querySelector(".ch-prod-lb-ingredients__list").innerHTML += ingredientItem;
    }

    productLightbox.querySelector(".ch-prod-lb-price__value").textContent = `$${_potion.price}`;

    body.fn_lockBody();
    productLightbox.classList.remove("ch-is-hide");

    lazyload();
  };

  document.querySelector(".ch-product-lightbox .ch-prod-lb-close-button").onclick = (event) => {
    event.preventDefault();

    body.fn_unlockBody();
    document.querySelector(".ch-product-lightbox").classList.add("ch-is-hide");
  }
};