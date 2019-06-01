import React from 'react';
import * as styles from './style';

const ProductList = () => (
  <styles.ProductList>
    <styles.Header>
      <styles.Title>Total</styles.Title>
      <styles.PriceContainer>
        <styles.TotalPrice>R$ 68,90</styles.TotalPrice>
        <styles.PartialPrice>R$ 30,90</styles.PartialPrice>
      </styles.PriceContainer>
    </styles.Header>

    <styles.Item>
      <styles.ProductNameContainer>
        <styles.ProductQuantity>4x</styles.ProductQuantity>
        <styles.ProductName>Heineken</styles.ProductName>
      </styles.ProductNameContainer>
      <styles.Price>R$ 32,00</styles.Price>
    </styles.Item>
  </styles.ProductList>
);

export default ProductList;
