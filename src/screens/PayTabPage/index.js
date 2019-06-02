import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './style';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';
import CardList from '../../components/CardList';
import { listCards } from '../../store/paymentMethod/actions';

class PayTabPage extends Component {
  state = {
    cards: [],
    paytab: '',
  };

  async componentDidMount() {
    const { listCards } = this.props;

    listCards();
  }

  componentDidUpdate() {
    const { cards } = this.props;

    this.setState({
      cards: cards.map(card => ({
        ...card,
        selected: false,
      })),
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.cards.length !== this.state.cards.length ||
      nextProps.cards !== this.props.cards
    ) {
      return true;
    }

    return false;
  }

  // const payTab = () => {
  //   console.log('pagar comanda');
  // };

  onClick = id => {
    this.setState(prevProps => ({
      cards: prevProps.cards.map(cards => ({
        ...cards,
        selected: cards.id === id,
      })),
    }));
  };

  render() {
    const { cards } = this.state;

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
          <Button onClick={this.state.payTab} rounded customStyles={styles.buttonStyle}>
            Pagar Comanda
          </Button>
        </styles.Footer>
      </styles.Container>
    );
  }
}

const mapStateToProps = ({ paymentMethod }) => ({
  cards: paymentMethod.cards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ listCards }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayTabPage);
