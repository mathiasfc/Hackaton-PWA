import React from 'react';
import * as styles from './style';
import Button from '../Button';

const ButtonGroup = () => (
  <styles.Container>
    <styles.ButtonContainer>
      <Button to="/" square="true" customStyles={styles.buttonStyle}>
        <span>Icon</span>
        Pagar Comanda
      </Button>
    </styles.ButtonContainer>

    <styles.ButtonContainer>
      <Button to="/" square="true" customStyles={styles.buttonStyle}>
        <span>Icon</span>
        Pagar Comanda
      </Button>
    </styles.ButtonContainer>

    <styles.ButtonContainer>
      <Button to="/" square="true" customStyles={styles.buttonStyle}>
        <span>Icon</span>
        Pagar Comanda
      </Button>
    </styles.ButtonContainer>

    <styles.ButtonContainer>
      <Button to="/" square="true" customStyles={styles.buttonStyle}>
        <span>Icon</span>
        Pagar Comanda
      </Button>
    </styles.ButtonContainer>

    <styles.ButtonContainer>
      <Button to="/" square="true" customStyles={styles.buttonStyle}>
        <span>Icon</span>
        Pagar Comanda
      </Button>
    </styles.ButtonContainer>
  </styles.Container>
);

export default ButtonGroup;
