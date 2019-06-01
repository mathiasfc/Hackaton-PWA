import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList';
import ButtonGroup from '../../components/ButtonGroup';
import * as styles from './style';

const List = ({ tab }) => (
  <styles.Container>
    <styles.Header>
      <styles.LogoContainer>
        <styles.Logo />

        <styles.TabContainer>
          <styles.TabNumberTitle>Comanda</styles.TabNumberTitle>
          <styles.TabNumber>#{tab.id}</styles.TabNumber>
        </styles.TabContainer>
      </styles.LogoContainer>

      <styles.PriceContainer>
        {/* <styles.PriceItem>
            <styles.PriceItemTitle>Pago</styles.PriceItemTitle>
            <styles.PriceItemValue>R$ 55,00</styles.PriceItemValue>
          </styles.PriceItem> */}
        <styles.PriceItem>
          <styles.PriceItemTitle>Valor Restante</styles.PriceItemTitle>
          <styles.PriceItemValue big>{tab.total}</styles.PriceItemValue>
        </styles.PriceItem>
      </styles.PriceContainer>
    </styles.Header>

    <styles.Content>
      <ProductList data={tab} />
    </styles.Content>

    <ButtonGroup />
  </styles.Container>
);

const mapStateToProps = state => {
  const { tab } = state;

  return {
    tab: tab.tab,
  };
};

export default connect(mapStateToProps)(List);
