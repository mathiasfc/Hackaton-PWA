import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './style';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';
import CardList from '../../components/CardList';
import { listCards } from '../../store/paymentMethod/actions';
import Order from '../../service/Order';

class PayTabPage extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { listCards } = this.props;

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
      this.setState({
        cards: cards.map(card => ({
          ...card,
          selected: card.selected || false,
        })),
      });
    }
  }

  onClick = id => {
    this.setState(prevProps => ({
      cards: prevProps.cards.map(cards => ({
        ...cards,
        selected: cards.cardId === id,
      })),
    }));
  };

  pay = paymentMode => {
    const { tabId } = this.props;
    const { cards } = this.state;
    const selectedCard = cards.find(card => card.selected);
    const OrderService = new Order();

    OrderService.payTab(tabId, {
      cardId: selectedCard.cardId,
      paymentMode,
    });
  };

  render() {
    const { cards } = this.state;
    const hasSelected = cards.filter(card => card.selected).length > 0;

    return (
      <styles.Container>
        <styles.Header>
          <BackIcon />

          <styles.HeaderTitle>Pagamento</styles.HeaderTitle>
          <styles.SubHeaderDate>1 jun 2019</styles.SubHeaderDate>

          <styles.TabInfo>
            <styles.TabInfoNumber>
              <styles.TabInfoHeader>Comanda</styles.TabInfoHeader>
              <styles.TabNumber>#271823</styles.TabNumber>
            </styles.TabInfoNumber>

            <styles.TabInfoPrice>
              <styles.TabInfoHeader>Total</styles.TabInfoHeader>
              <styles.TabPrice>R$ 55,00</styles.TabPrice>
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
  tabId: tab.tab.id,
});

const mapDispatchToProps = dispatch => bindActionCreators({ listCards }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayTabPage);
