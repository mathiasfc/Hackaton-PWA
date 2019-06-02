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
  const [tabNumber, setTabNumber] = useState('');

  useEffect(() => {
  });

  const checkTab = async getTabDetails => {
    if (tabNumber) {
      let returned = await getTabDetails(tabNumber);
      if (returned) {
        if (returned.message) {
          props.history.push('/tabnotfound');
        } else if (returned.id) {
          props.history.push('/list');
        }
      }
    }
  };

  const handleTabNumber = e => {
    setTabNumber(e.target.value);
  };

  return (
    <styles.Container>
      <styles.BackLogo src={backLogo} onClick={() => props.history.push('/home')} alt="backLogo" />
      <styles.FlexColumn>
        <styles.Header>
          Digite o número <br />
          da comanda
        </styles.Header>

        <styles.InputTab type="text" onChange={handleTabNumber} maxLength="20" />

        <Button
          onClick={() => checkTab(props.getTabDetails)}
          rounded
          customStyles={styles.buttonStyle}
          disabled={props.tab.isLoading}
        >
          Próximo
        </Button>
      </styles.FlexColumn>
    </styles.Container>
  );
};

const mapStateToProps = ({ tab }) => ({
  isLoading: tab.isLoading,
  tab: tab.tab,
});

const mapDispatchToProps = dispatch => bindActionCreators({ login, getTabDetails }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeTab);
