import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as styles from './style';
import { login } from '../../store/auth/actions';
import { getTabDetails } from '../../store/tab/actions';
import ButtonGroup from '../../components/ButtonGroup';
import logo from '../../images/comanda-logo.png';
import Storage from '../../helpers/storage';

const HomePage = ({ history }) => {
  useEffect(() => {
    const viewOnboarding = Storage.getLocalStorage('viewOnboarding');
    if (!viewOnboarding) {
      history.push('/onboarding');
    }
  });

  return (
    <styles.Container>
      <styles.Header>
        <img src={logo} alt="Comanda Easy" />
      </styles.Header>

      <styles.Infos>
        <styles.Title>Comanda Easy</styles.Title>

        <styles.InfoItem>Evite filas</styles.InfoItem>
        <styles.InfoItem>Pague com facilidade</styles.InfoItem>
        <styles.InfoItem>Ganhe mais tempo para aproveitar</styles.InfoItem>
        <styles.InfoItem>Promoções exclusivas</styles.InfoItem>
      </styles.Infos>

      <ButtonGroup read />
    </styles.Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({ login, getTabDetails }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
