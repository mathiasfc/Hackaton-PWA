import React, { useEffect } from 'react';
import * as styles from './style';
import { connect } from 'react-redux';
import Button from '../Button';
import QRCodeIcon from '../Icons/QRCode';
import { withRouter } from 'react-router-dom';
import ProfileIcon from '../Icons/Profile';
import CardIcon from '../Icons/Card';
import QuestionIcon from '../Icons/Question';
import Storage from '../../helpers/storage';

const ButtonGroup = ({ cameraAccess, read }) => {
  useEffect(() => {
    console.log(cameraAccess);
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
    //se não tiver premissão para acessar a camera
    //pedir para digitar
  }, []);
  return (
    <styles.Container>
      <styles.ButtonContainer>
        {read ? (
          <Button
            to={cameraAccess ? '/scan' : '/typetab'}
            square="true"
            customStyles={styles.buttonStyle}
          >
            <QRCodeIcon />
            Leia sua Comanda
          </Button>
        ) : (
          <Button to="/paytab" square="true" customStyles={styles.buttonStyle}>
            <QRCodeIcon />
            Pagar a Comanda
          </Button>
        )}
      </styles.ButtonContainer>

      <styles.ButtonContainer>
        <Button
          to={Storage.getLocalStorage('sessionToken') ? '/account' : '/login'}
          square="true"
          customStyles={styles.buttonStyle}
        >
          <ProfileIcon />
          Minha Conta
        </Button>
      </styles.ButtonContainer>

      <styles.ButtonContainer>
        <Button
          to={Storage.getLocalStorage('sessionToken') ? '/' : '/login'}
          square="true"
          customStyles={styles.buttonStyle}
        >
          <CardIcon />
          Meus Cartões
        </Button>
      </styles.ButtonContainer>

      <styles.ButtonContainer>
        <Button to="/" square="true" customStyles={styles.buttonStyle}>
          <QuestionIcon />
          FAQ
        </Button>
      </styles.ButtonContainer>
    </styles.Container>
  );
};

const mapStateToProps = ({ tab }) => ({
  tab: tab,
  cameraAccess: tab.cameraAccess,
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ButtonGroup)
);
