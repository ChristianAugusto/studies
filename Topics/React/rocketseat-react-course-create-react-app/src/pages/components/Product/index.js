
import React, { Component } from "react";
import styled from "styled-components";
import productStyle from "./productStyle";

import apiProducts from "../../services/apiProducts";

const ProductWrapper = styled.div`${productStyle}`;

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  async loadProduct() {
    const { id } = this.props.match.params;

    const response = await apiProducts(`/${id}`);
    const { data } = await response.json();

    this.setState({ product: data });
  }

  componentDidMount() {
    this.loadProduct();
  }

  render() {
    const { product } = this.state;

    return(
      <ProductWrapper>
        <h1>{product.title}</h1>
        <p>FOO</p>
      </ProductWrapper>
    );
  }
}