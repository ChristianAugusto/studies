
export default async (persoBreed, dispatch) => {
   const url = "https://dog.ceo/api/breeds/list/all";

   const response = await fetch(url);
   const json = await response.json();

   const breeds = Object.keys( json.message ).map(breed => ( { name: breed, isCurrent: false } ));

   if (persoBreed) {
      breeds.forEach(breed => breed.name === persoBreed ? breed.isCurrent = true : breed.isCurrent = false);
   } else {
      breeds[0].isCurrent = true;
      dispatch({ type: "SET_DOG_BREED", newBreed: breeds[0].name });
   }

   dispatch({ type: "SET_ALL_DOG_BREEDS", dogBreeds: breeds });

   return breeds;
};