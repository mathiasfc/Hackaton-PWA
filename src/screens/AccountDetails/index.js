import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as styles from './style';
import Button from '../../components/Button';
import backLogo from '../../images/back-icon.svg';
import { login } from '../../store/auth/actions';
import { getTabDetails } from '../../store/tab/actions';
import Storage from '../../helpers/storage';

const AccountDetails = props => {
  useEffect(() => {
    const sessionToken = Storage.getLocalStorage('sessionToken');
    if (!sessionToken) {
      props.history.push('/');
    }
  }, []);

  const logout = () => {
    Storage.clear();
    Storage.setLocalStorage('viewOnboarding', 'true');
    props.history.push('/');
  };

  return (
    <div>
      <styles.Container>
        <styles.BackLogo src={backLogo} onClick={() => props.history.goBack()} alt="backLogo" />
        <styles.FlexColumn>
          <div>
            <styles.Header>Minha Conta</styles.Header>

            <styles.InputText>Nome</styles.InputText>
            <styles.InputValue>xxxx</styles.InputValue>

            <styles.InputText>Telefone</styles.InputText>
            <styles.InputValue>(51) 9999.9999</styles.InputValue>

            <styles.InputText>E-mail</styles.InputText>
            <styles.InputValue>ana.jahn@4all.com</styles.InputValue>

            <styles.InputText>CPF</styles.InputText>
            <styles.InputValueDisabled>022.721.420-01</styles.InputValueDisabled>

            <styles.InputText>Data de nascimento</styles.InputText>
            <styles.InputValueDisabled>21/09/1987</styles.InputValueDisabled>
          </div>

          {/* TODO LOGIN FOR ALL GIF */}

          <Button onClick={logout} rounded customStyles={styles.buttonStyle}>
            Sair da conta
          </Button>
        </styles.FlexColumn>
      </styles.Container>
    </div>
  );
};

export default withRouter(AccountDetails);
