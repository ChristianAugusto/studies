
const fn_ajax = (_fn_buildShelf) => {
   const ajax = new XMLHttpRequest();

   const url = "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json";

   ajax.open("GET", url);
   ajax.onreadystatechange = function(){
      if (ajax.status === 200 && ajax.readyState === 4){
         const data = JSON.parse(ajax.response);
         
         _fn_buildShelf(data);
      }
   }

   ajax.send();
};

export default fn_ajax;