import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as styles from './style';
import Button from '../Button';
import QRCodeIcon from '../Icons/QRCode';
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
    //se não tiver permissão para acessar a camera
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
          <Button
            to={Storage.getLocalStorage('sessionToken') ? '/paytab' : '/login'}
            square="true"
            customStyles={styles.buttonStyle}
          >
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
          to={Storage.getLocalStorage('sessionToken') ? '/cards' : '/login'}
          square="true"
          customStyles={styles.buttonStyle}
        >
          <CardIcon />
          Meus Cartões
        </Button>
      </styles.ButtonContainer>

      {/* <styles.ButtonContainer>
        <Button to="/" square="true" customStyles={styles.buttonStyle}>
          <QuestionIcon />
          FAQ
        </Button>
      </styles.ButtonContainer> */}
    </styles.Container>
  );
};

const mapStateToProps = ({ tab }) => ({
  tab,
  cameraAccess: tab.cameraAccess,
});

export default withRouter(connect(mapStateToProps)(ButtonGroup));
