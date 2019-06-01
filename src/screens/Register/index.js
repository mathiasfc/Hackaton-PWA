
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as styles from './style';
import { login } from '../../store/auth/actions';
import { createCard, listCards } from '../../store/paymentMethod/actions';

function App(props) {
  return (
    <styles.AppContainer>
        <styles.Header>A</styles.Header>
        <styles.Conteiner>
            <p>Crie sua conta para continuar.</p>
            <p>Se você já possuí, faça login.</p>
        </styles.Conteiner>
        <styles.Footer>
            <styles.BotaoCriarConta>
                Criar Conta
            </styles.BotaoCriarConta>
            <p>Já possui conta? Faça login</p>
        </styles.Footer>
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
