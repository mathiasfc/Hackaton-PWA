import React from 'react';
import * as styles from './style';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';

const Payment = () => (
  <styles.Container>
    <styles.Header>
      <BackIcon />
      <styles.HeaderTitle>Pagamento realizado com sucesso!</styles.HeaderTitle>
    </styles.Header>

    <styles.Content>
      <styles.PaymentData>
        <styles.PaymentTitle>Valor Pago</styles.PaymentTitle>
        <styles.PaymentValue>R$ 25,00</styles.PaymentValue>
      </styles.PaymentData>

      <styles.CommentContainer>
        <styles.CommentTitle>Gostaríamos de ouvir sua opinião</styles.CommentTitle>

        <styles.CommentBox placeholder="Deixe aqui seu comentário, ele será enviado para o estabelecimento" />
      </styles.CommentContainer>
    </styles.Content>

    <Button rounded>Fechar</Button>
  </styles.Container>
);

export default Payment;
