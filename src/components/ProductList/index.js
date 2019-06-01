import React from 'react';
import * as styles from './style';

const ProductList = ({ data }) => (
  <styles.ProductList>
    <styles.Container>
      <styles.Title>Itens</styles.Title>

      {data.orderItems &&
        data.orderItems.map(item => (
          <styles.Item>
            <styles.ProductNameContainer>
              <styles.ProductQuantity>{item.quantity}x</styles.ProductQuantity>
              <styles.ProductName>{item.title}</styles.ProductName>
            </styles.ProductNameContainer>
            <styles.Price>{item.total}</styles.Price>
          </styles.Item>
        ))}
    </styles.Container>
  </styles.ProductList>
);

export default ProductList;
