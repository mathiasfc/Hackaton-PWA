import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList';
import ButtonGroup from '../../components/ButtonGroup';
import * as styles from './style';
import logo from '../../images/comanda-logo.png';
import { withRouter } from 'react-router-dom';
import { formatReal } from '../../helpers/index';

const List = ({ tab, history }) => {
  useEffect(() => {
    if (Object.entries(tab).length === 0) {
      history.push('/');
    }
  }, []);

  return (
    <styles.Container>
      <styles.Header>
        <styles.LogoContainer>
          <styles.Logo src={logo} onClick={() => history.push('/')} />

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
            <styles.PriceItemValue big>{formatReal(tab.total)}</styles.PriceItemValue>
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

  return {
    tab: tab.tab,
  };
};

export default withRouter(connect(mapStateToProps)(List));
