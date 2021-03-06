import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as styles from './style';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';
import CardList from '../../components/CardList';
import { listCards } from '../../store/paymentMethod/actions';
import Order from '../../service/Order';
import Storage from '../../helpers/storage';
import { formatReal } from '../../helpers/index';

class PayTabPage extends Component {
  state = {
    cards: [],
  };

  goToPaylyLogin = () => {
    this.props.history.push({
      pathname: '/login',
      state: { origin: 'payly' },
    });
  };

  async componentDidMount() {
    const { tab, history, listCards } = this.props;
    if (Object.entries(tab).length === 0) {
      history.push('/');
    }

    listCards();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      JSON.stringify(nextState.cards) !== JSON.stringify(this.state.cards) ||
      nextProps.cards !== this.props.cards
    ) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    const { cards } = this.props;

    if (!this.state.cards.length) {
      cards.push({
        cardId: 'payly',
        selected: false,
      });

      this.setState({
        cards: cards.map(card => ({
          ...card,
          selected: card.selected || false,
        })),
      });
    }
  }

  onClick = id => {
    if (id === 'payly') {
      if (!Storage.getLocalStorage('paylysessionToken')) {
        this.goToPaylyLogin();
        return;
      }
    }

    this.setState(prevProps => ({
      cards: prevProps.cards.map(cards => ({
        ...cards,
        selected: cards.cardId === id,
      })),
    }));
  };

  pay = async () => {
    const { tab, history } = this.props;
    const { cards } = this.state;
    const selectedCard = cards.find(card => card.selected);
    const isPayly = selectedCard.cardId === 'payly';
    const OrderService = new Order(
      isPayly ? process.env.REACT_APP_API_PAYLY : process.env.REACT_APP_API_ORDERS
    );

    let response;

    console.log(selectedCard);

    if (isPayly) {
      const sessionToken = Storage.getLocalStorage('paylysessionToken');

      response = await OrderService.payTab(tab.id, {
        sessionToken,
        paymentMode: 5,
      });
    } else {
      const sessionToken = Storage.getLocalStorage('sessionToken');

      response = await OrderService.payTab(tab.id, {
        sessionToken,
        cardId: selectedCard.cardId,
        paymentMode: 1,
      });
    }

    console.log(response);

    history.push({
      pathname: '/payment',
      state: { total: tab.total },
    });
  };

  render() {
    const { history, tab } = this.props;
    const { cards } = this.state;
    const hasSelected = cards.filter(card => card.selected).length > 0;

    return (
      <styles.Container>
        <styles.Header>
          <BackIcon onClick={() => history.push('/list')} />

          <styles.HeaderTitle>Pagamento</styles.HeaderTitle>
          <styles.SubHeaderDate>2 jun 2019</styles.SubHeaderDate>

          <styles.TabInfo>
            <styles.TabInfoNumber>
              <styles.TabInfoHeader>Comanda</styles.TabInfoHeader>
              <styles.TabNumber>#{tab.id}</styles.TabNumber>
            </styles.TabInfoNumber>

            <styles.TabInfoPrice>
              <styles.TabInfoHeader>Total</styles.TabInfoHeader>
              <styles.TabPrice>{formatReal(tab.total)}</styles.TabPrice>
            </styles.TabInfoPrice>
          </styles.TabInfo>
        </styles.Header>

        <styles.Content>
          <styles.ChoicePayType>Escolha a forma de pagamento</styles.ChoicePayType>

          <CardList cards={cards} onClick={this.onClick} />
        </styles.Content>

        <styles.Footer>
          <Button
            as="button"
            disabled={!hasSelected}
            rounded
            customStyles={styles.buttonStyle}
            onClick={this.pay}
          >
            Pagar Comanda
          </Button>
        </styles.Footer>
      </styles.Container>
    );
  }
}

const mapStateToProps = ({ paymentMethod, tab }) => ({
  cards: paymentMethod.cards,
  tab: tab.tab,
});

const mapDispatchToProps = dispatch => bindActionCreators({ listCards }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PayTabPage)
);
