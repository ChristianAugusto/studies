
import setLocalStorage from "../../../global/setLocalStorage";
import personalizeData from "../../app/personalizeDataObject";

export default () => {
  document.querySelector(".ch-personalize__save-button").onclick = event => {
    event.preventDefault();

    setLocalStorage( "breed", personalizeData.breed || "");
    setLocalStorage( "sub-breed", personalizeData.subBreed || ""); 
    setLocalStorage( "dog-name", personalizeData.dogName || "");
    setLocalStorage( "color", personalizeData.color || "");
    setLocalStorage( "font", personalizeData.font || "");
    setLocalStorage( "dog-image", personalizeData.dogImage || "");
    setLocalStorage( "step", 2 );


    const dateObj = new Date();

    let month = dateObj.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    const date = `${dateObj.getDate()}/${month}/${dateObj.getFullYear()}`;
    const hour = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    setLocalStorage("date-hour", `${date},${hour}`);

    alert("Saved!!");
  };
};