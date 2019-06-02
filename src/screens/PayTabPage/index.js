import React, { useState, useEffect } from 'react';
import * as styles from './style';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';

const PayTabPage = () => {
  // const [selected, setSelected] = useState(0);

  useEffect(() => {
    console.log('mounted');
    //set token entered
  }, []);

  const payTab = () => {
    console.log('pagar comanda');
  };
  return (
    <styles.Container>
      <BackIcon />

      <styles.FlexColumn>
        <div>
          <styles.Header>Pagamento</styles.Header>
          <styles.SubHeaderDate>1 jun 2019</styles.SubHeaderDate>

          <styles.TabInfo>
            <styles.TabInfoNumber>
              <styles.TabInfoHeader>Comanda</styles.TabInfoHeader>
              <styles.TabNumber>#271823</styles.TabNumber>
            </styles.TabInfoNumber>

            <styles.TabInfoPrice>
              <styles.TabInfoHeader>Total</styles.TabInfoHeader>
              <styles.TabPrice>R$ 55,00</styles.TabPrice>
            </styles.TabInfoPrice>
          </styles.TabInfo>
        </div>

        <div>
          <styles.ChoicePayType>Escolha a forma de pagamento</styles.ChoicePayType>
        </div>

        {/* Cartoes de créditos */}

        <Button onClick={payTab} rounded customStyles={styles.buttonStyle}>
          Pagar Comanda
        </Button>
      </styles.FlexColumn>
    </styles.Container>
  );
};

export default PayTabPage;
