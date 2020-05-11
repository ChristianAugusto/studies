
import React, { useState, useEffect  } from 'react';
import getProducts from "./getProducts";



export default props => {
   const [products, setProducts] = useState([]);

   const buildShelf = async () => {
      const products = await getProducts();

      setProducts(
         products.map(([key, product], index) => (
            <li key={index}>
               {product.name}
            </li>
         ))
      );
   }

   useEffect(() => {
      buildShelf();
   }, []);

   return (
      <div>
         <ul>
            {products}
         </ul>
      </div>
   );
}