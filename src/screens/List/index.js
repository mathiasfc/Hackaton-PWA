import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTabDetails } from '../../store/tab/actions';
import ProductList from '../../components/ProductList';
import ButtonGroup from '../../components/ButtonGroup';
import * as styles from './style';

const List = ({ tab, getTabDetails }) => {
  useEffect(() => {
    getTabDetails(51);
  }, []);

  return (
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
};

const mapStateToProps = state => {
  const { tab } = state;
  console.log(state);

  return {
    tab: tab.tab,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getTabDetails }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
