import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './style';
import Button from '../../components/Button';
import backLogo from '../../images/back-icon.svg';
import { login } from '../../store/auth/actions';
import { getTabDetails } from '../../store/tab/actions';
import Storage from '../../helpers/storage';

const TabNotFound = props => {
  useEffect(() => {
    console.log('mount tab not found');
  }, []);

  return (
    <styles.Container>
      <styles.BackLogo src={backLogo} onClick={() => props.history.push('/home')} alt="backLogo" />
      <styles.FlexColumn>
        <styles.Header>
          O pagamento não
          <br />
          pôde ser realizado
          <styles.SubHeader>Comanda inválida</styles.SubHeader>
        </styles.Header>

        <Button onClick={() => props.history.goBack()} rounded customStyles={styles.buttonStyle}>
          Voltar
        </Button>
      </styles.FlexColumn>
    </styles.Container>
  );
};

export default TabNotFound;
