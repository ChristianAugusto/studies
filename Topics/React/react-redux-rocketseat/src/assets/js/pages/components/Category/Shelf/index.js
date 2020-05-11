
import React, { Component } from "react";
import apiProducts from "../../../services/apiProducts";

import styled from "styled-components";
import shelfStyle from "./shelfStyle";

const ShelfWrapper = styled.div`${shelfStyle}`;


export default class Shelf extends Component {
   constructor(props) {
      super(props);

      this.state = {
         products: [],
         page: 1,
         pages: 1,
         total: 0
      };
   }

   async loadProducts(_page = 1) {
      const response = await apiProducts(`?page=${_page}`);
      const { docs, total, pages } = await response.json();
      this.setState({
         products: docs,
         pages: pages,
         total: total
      });
   };

   prevPage() {
      const { page } = this.state;

      if (page === 1) return;

      const prevPage = page - 1;

      this.setState({
         page: prevPage
      });

      this.loadProducts(prevPage);
   }

   nextPage() {
      const { page } = this.state;

      if (page === this.state.pages) return;

      const nextPage = page + 1;

      this.setState({
         page: nextPage
      });

      this.loadProducts(nextPage);
   }


   componentDidMount() {
      this.loadProducts();
   }

   render() {
      const { products, page, pages } = this.state;

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
               <button onClick={this.prevPage.bind(this)} disabled={page === 1} className="pagination-prev pagination-button">Prev</button>
               <button onClick={this.nextPage.bind(this)} disabled={page === pages} className="pagination-next pagination-button">Next</button>
            </div>
         </ShelfWrapper>
      );
   }
}