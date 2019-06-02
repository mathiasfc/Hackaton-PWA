import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as styles from './style';
import BackIcon from '../../components/Icons/Back';
import Storage from '../../helpers/storage';
import CardList from '../../components/CardList';
import Button from '../../components/Button';
import { listCards } from '../../store/paymentMethod/actions';

const onClick = id => {};

const Cards = ({ history, listCards, cards }) => {
  useEffect(() => {
    const sessionToken = Storage.getLocalStorage('sessionToken');
    if (!sessionToken) {
      history.push('/');
    }

    listCards();
  }, []);

  return (
    <styles.Container>
      <styles.Header>
        <BackIcon onClick={() => history.goBack()} />

        <Button text to="/card">
          Adicionar
        </Button>
      </styles.Header>

      <styles.Title>Meus Cartões</styles.Title>
      <CardList
        selectable={false}
        add={false}
        cards={cards}
        // asideContent={<styles.AsideText>Excluir</styles.AsideText>}
        onClick={onClick}
      />
    </styles.Container>
  );
};

const mapStateToProps = ({ paymentMethod }) => ({
  cards: paymentMethod.cards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ listCards }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cards)
);
