
import personalizeData from "../../app/personalizeDataObject";

export default () => {
  mapSlides();
  blockForm();

  window.swiperInstance.on("slideNextTransitionEnd", () => {
    if (document.querySelector(".ch-personalize").classList.contains("swiper-slide-active") && personalizeData.imageProcessed == false) {
      processData();
    }
  });
};


async function processData() {

  personalizeData.imageProcessed = true;

  const breed = personalizeData.breed;
  const subBreed = personalizeData.subBreed;

  const allImages = await getImagesByBreed(breed);

  document.querySelector(".js-personalize-dog-image").setAttribute("src", allImages);

  personalizeData.dogImage = allImages;

}

function getImagesByBreed(_breed) {
  return new Promise(async (resolve, reject) => {

    const url = `https://dog.ceo/api/breed/${_breed}/images/random`;
    const response = await fetch(url);
    const data = await response.json();

    resolve( data.message );

  });
}

function blockForm() {
  document.querySelector(".ch-personalize__form").onsubmit = event => {
    event.preventDefault();
  };
}


function mapSlides() {
  document.querySelectorAll(".swiper-slide").map(($slide, $index) => $slide.setAttribute("data-index", $index));
}