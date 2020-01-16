
import React, { Component } from "react";
import apiProducts from "../../services/apiProducts";

import styled from "styled-components";
import shelfStyle from "./shelfStyle";

const ShelfWrapper = styled.div`${shelfStyle}`;


export default class Shelf extends Component {
   constructor(props) {
      super(props);

      this.state = {
         products: []
      };
   }

   async loadProducts() {
      const response = await apiProducts();
      const data =  await response.json();
      console.log(data);
      this.setState({
         products: data.docs
      });
   };

   componentDidMount() {
      this.loadProducts();
   }

   render() {
      const products = this.state.products;

      return (
         <ShelfWrapper>
            <ul className="product-list">
               {products.map(product => (
                  <li key={product._id} className="product-item">
                     <h4>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                     </h4>
                  </li>
               ))}
            </ul>
            <div className="pagination">
               <button className="pagination-prev">Prev</button>
               <button className="pagination-next">Next</button>
            </div>
         </ShelfWrapper>
      );
   }
}