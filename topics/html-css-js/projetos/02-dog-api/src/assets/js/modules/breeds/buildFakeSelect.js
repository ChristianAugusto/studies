
export default async () => {
  const _allBreeds = await getBreeds();

  const breedsSubBreeds = Object.entries(_allBreeds);

  document.querySelector(".js-dog-breed__select-options-list")
  .innerHTML = breedsSubBreeds.reduce( 
    ($acc, [$breed, $subBreed]) => $acc + `<li breed="${$breed}" sub-breed="${$subBreed.join(",")}">${$breed}</li>`
    , 
    ""
  );
};


function getBreeds() {
  return new Promise(async (resolve, reject) => {

    const url = "https://dog.ceo/api/breeds/list/all";
  
    const response = await fetch(url);
    const data = await response.json();
  
    resolve( data.message );
  });
}