
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import getProducts from "./getProducts";

export default props => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const setLightbox = (_product) => {
    dispatch({ type: "SET_LIGHTBOX", product: _product });
  }

  const buildShelf = async () => {
    const newProducts = await getProducts();

      setProducts(
        newProducts.map(([key, product], index) => (
          <li key={index} onClick={() => setLightbox(product)}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))
      );
  };

  useEffect(() => {
    buildShelf();
  });

  return (
    <ul>
      {products}
    </ul>
  );
};
