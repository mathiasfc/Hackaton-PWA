import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './style';
import Button from '../../components/Button';
import backLogo from '../../images/back-icon.svg';
import { login } from '../../store/auth/actions';
import { getTabDetails } from '../../store/tab/actions';
import Storage from '../../helpers/storage';

const TypeTab = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('mount');
  }, []);

  const login = async () => {
    await props.login({ identifier: username, password: password });
    const sessionToken = Storage.getLocalStorage('sessionToken');
    if (sessionToken) {
      props.history.push('/paytab');
    }
  };

  const handleTabNumber = e => {
    setUsername(e.target.value);
  };

  return (
    <styles.Container>
      <styles.BackLogo src={backLogo} onClick={() => props.history.goBack()} alt="backLogo" />
      <styles.FlexColumn>
        <styles.Header>
          Digite o número <br />
          da comanda
        </styles.Header>

        <styles.InputTab type="text" onChange={handleTabNumber} maxLength="20" />

        <Button
          onClick={login}
          rounded
          customStyles={styles.buttonStyle}
          disabled={props.auth.isLoading}
        >
          Próximo
        </Button>
      </styles.FlexColumn>
    </styles.Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({ login, getTabDetails }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeTab);
