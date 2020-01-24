
import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const lightboxProduct = useSelector(state => state.lightboxProduct);

  return (
    <div>
      <h4>{lightboxProduct.name}</h4>
      <p>{lightboxProduct.image}</p>
      <p>{lightboxProduct.price}</p>
    </div>
  );
};