
export default () => {
  const images = document.querySelectorAll("img.has-lazyload");

  for (let i = 0, len = images.length; i < len; i++) {
    images[i].classList.remove("has-lazyload");
    images[i].classList.add("is-loading");

    images[i].classList.add("js-lazyload");

    images[i].onload = () => {
      images[i].classList.remove("is-loading");
      images[i].classList.add("is-loaded");
    };

    const imageUrl = images[i].getAttribute("lazy-url");
    images[i].setAttribute("src", imageUrl);
  }
};