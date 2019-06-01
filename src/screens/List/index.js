import React from 'react';
import * as styles from './style';
import ProductList from '../../components/ProductList';
import Button from '../../components/Button';

const List = () => (
  <styles.Container>
    <styles.Header>
      <styles.TabNumberTitle>Comanda</styles.TabNumberTitle>
      <styles.TabNumber>190989</styles.TabNumber>
    </styles.Header>

    <styles.Content>
      <ProductList />
    </styles.Content>

    <styles.Footer>
      <Button rounded customStyles={styles.buttonStyle}>
        <span>Icon</span>
        Pagar Comanda
      </Button>
    </styles.Footer>
  </styles.Container>
);

export default List;
