import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as styles from './style';
import { login } from '../../store/auth/actions';
import { createCard, listCards } from '../../store/paymentMethod/actions';

function App(props) {
  useEffect(() => {
    /* props.login({ identifier: 'EmailOuTelefone', password: 'Senha' }); */
    /* props.createCard({
      type: 1,
      cardholderName: 'William King',
      cardNumber: '4629582174261206',
      expirationDate: '0627',
      securityCode: '817',
    }); */
    /* props.listCards(); */
  }, []);
  return (
    <styles.AppContainer>
      <styles.Header className="App-header">
        <styles.LogoApp src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to="/list">
          Ir Para Lista
        </Link>
      </styles.Header>
    </styles.AppContainer>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, createCard, listCards }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
