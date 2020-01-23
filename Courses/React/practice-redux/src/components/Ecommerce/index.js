
import React, { Component } from "react";
import getProducts from "./getProducts";


export default class ShelfClass extends Component {

   state = {
      products: []
   }

   async componentDidMount() {
      this.setState({
         products: await getProducts()
      });
   }

   buildShelf = () => {
      const { products } = this.state;

      return products.map(([key, product], index) => (
         <li key={index}>
            {product.name}
         </li>
      ));
   }

   render() {
      return (
         <div>{this.buildShelf()}</div>
      );
   }
}