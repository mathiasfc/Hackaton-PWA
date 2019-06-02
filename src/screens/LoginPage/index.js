import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './style';
import Button from '../../components/Button';
import backLogo from '../../images/back-icon.svg';
import { login, paylyLogin } from '../../store/auth/actions';
import { getTabDetails } from '../../store/tab/actions';
import Storage from '../../helpers/storage';

const LoginPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const { location } = props;
    console.log(location);
    const origin = location.state ? location.state.origin : '';
    console.log(origin);
    const sessionToken = Storage.getLocalStorage('sessionToken');
    if (sessionToken && !origin) {
      props.history.push('/paytab');
    }
  });

  const login = async () => {
    const { location } = props;
    const origin = location.state ? location.state.origin : '';

    if (origin) {
      await props.paylyLogin({ identifier: username, password });
    } else {
      await props.login({ identifier: username, password });
    }

    const sessionToken = Storage.getLocalStorage(`${origin}sessionToken`);

    if (sessionToken) {
      if (Storage.getLocalStorage('backToHome') == 'true') {
        props.history.push('/home');
      } else {
        Storage.setLocalStorage('backToHome', 'false');
        props.history.push('/paytab');
      }
    }
  };

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handlePass = e => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <styles.Container>
        <styles.BackLogo src={backLogo} onClick={() => props.history.goBack()} alt="backLogo" />
        <styles.FlexColumn>
          <div>
            <styles.Header>Login</styles.Header>
            {props.auth.loginFailure && (
              <styles.ErrorMsg>Usuário ou senha incorretos</styles.ErrorMsg>
            )}

            <styles.InputText removeMargin={props.auth.loginFailure}>Usuário</styles.InputText>
            <styles.InputName
              type="text"
              onChange={handleUsername}
              disabled={props.auth.isLoading}
            />

            <styles.InputText>Senha</styles.InputText>
            <styles.InputPass
              type="password"
              onChange={handlePass}
              disabled={props.auth.isLoading}
            />
          </div>
          <Button
            onClick={login}
            rounded
            customStyles={styles.buttonStyle}
            disabled={props.auth.isLoading}
          >
            Login
          </Button>
        </styles.FlexColumn>
      </styles.Container>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, paylyLogin, getTabDetails }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
