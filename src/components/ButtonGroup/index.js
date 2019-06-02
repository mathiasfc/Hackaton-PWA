import React from 'react';
import * as styles from './style';
import Button from '../Button';
import QRCodeIcon from '../Icons/QRCode';
import ProfileIcon from '../Icons/Profile';
import CardIcon from '../Icons/Card';
import QuestionIcon from '../Icons/Question';
import Storage from '../../helpers/storage';

const ButtonGroup = ({ read }) => (
  <styles.Container>
    <styles.ButtonContainer>
      {read ? (
        <Button to="/scan" square="true" customStyles={styles.buttonStyle}>
          <QRCodeIcon />
          Leia sua Comanda
        </Button>
      ) : (
        <Button to="/" square="true" customStyles={styles.buttonStyle}>
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

export default ButtonGroup;
