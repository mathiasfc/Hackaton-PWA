import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as styles from './style';
import { login } from '../../store/auth/actions';
import { createCard, listCards } from '../../store/paymentMethod/actions';
import { getTabDetails } from '../../store/tab/actions';

function App(props) {
  useEffect(() => {
    props.login({ identifier: 'vinicius.flores@4all.com', password: '$enh@4all' });
    /* props.login({ identifier: 'EmailOuTelefone', password: 'Senha' }); */
    /* props.createCard({
      type: 1,
      cardholderName: 'William King',
      cardNumber: '4629582174261206',
      expirationDate: '0627',
      securityCode: '817',
    }); */
    /* props.listCards(); */
    props.getTabDetails(51);
  }, []);
  return (
    <styles.Container>
      <styles.LogoApp src={logo} className="App-logo" alt="logo" />
      <styles.Header>
      Comanda
      </styles.Header>
      <styles.Infos>
      <p>Evite filas</p>
      <p>Pague com facilidade</p>
      <p>Ganhe mais tempo para aproveitar</p>
      <p>Promoções exclusivas</p>
      </styles.Infos>
    </styles.Container>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({ login, getTabDetails }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
