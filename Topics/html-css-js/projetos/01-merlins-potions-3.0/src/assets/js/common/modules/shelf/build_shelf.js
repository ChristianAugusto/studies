
import fn_buildLightbox from "../product/lightbox.js";
import lazyload from "../lazyload/index";

export default (data) => {

   class ProductShelfItem {
      constructor(_product) {
         this.id = _product.id;
         this.name = _product.name;
         this.imageUrl = _product.image;
         this.price = _product.price;
         this.effect = _product.effect;
         this.ingredients = _product.ingredients;
      }

      fn_buildShelfItem(_productList) {
         const itemContent = 
         `
            <div class="ch-category__shelf-product__image">
               <img lazy-url="/storage/${this.imageUrl}" alt="${this.name}" class="has-lazyload">
            </div>
            <div class="ch-category__shelf-product__content">
               <h6 class="ch-category__shelf-product__name">${this.name}</h6>
               <p class="ch-category__shelf-product__space">-</p>
               <span class="ch-category__shelf-product__price">$${this.price}</span>
            </div>
         `;

         const item = document.createElement("li");
         item.classList.add("ch-category__shelf-product");

         _productList.appendChild(item);

         item.innerHTML = itemContent;

         return item;
      }
   };

   function fn_buildShelfLine() {
      const shelfLine = document.createElement("ul");
      shelfLine.classList.add("ch-category__shelf-line");

      const shelfContainer = document.querySelector(".ch-category .ch-category__shelf-products");
      shelfContainer.appendChild(shelfLine);

      return shelfLine;
   };


   const size = window.innerWidth;
   //Number of colums, mobile = 2 colums
   let colums = 2;
   //Desktop
   if (size >= 1042) {
      colums = 3;
   }


   const potions = data.potions;
   for (let i = 1, len = Object.keys(potions).length; i <= len;) {
      const productList = fn_buildShelfLine();

      for (let j = 0; j < colums; j++) {
         const product = new ProductShelfItem(potions[i]);
         const productShelf = product.fn_buildShelfItem(productList);

         fn_buildLightbox(productShelf, potions[i]);

         i++;
      }
   }

   lazyload();
};