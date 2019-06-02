import React from 'react';
import * as styles from './style';
import { formatReal } from '../../helpers/index';

const ProductList = ({ data }) => (
  <styles.ProductList>
    <styles.Container>
      <styles.Title>Itens</styles.Title>

      {data.orderItems &&
        data.orderItems.map(item => (
          <styles.Item key={item.id}>
            <styles.ProductNameContainer>
              <styles.ProductQuantity>{item.quantity}x</styles.ProductQuantity>
              <styles.ProductName>{item.title}</styles.ProductName>
            </styles.ProductNameContainer>
            <styles.Price>{formatReal(item.total)}</styles.Price>
          </styles.Item>
        ))}
    </styles.Container>
  </styles.ProductList>
);

export default ProductList;
