import React from 'react';
import { withRouter } from 'react-router-dom';
import * as styles from './style';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';
import { formatReal } from '../../helpers/index';

const Payment = ({ history, location }) => (
  <styles.Container>
    <styles.Header>
      <BackIcon onClick={() => history.push('/')} />
      <styles.HeaderTitle>Pagamento realizado com sucesso!</styles.HeaderTitle>
    </styles.Header>

    <styles.Content>
      <styles.PaymentData>
        <styles.PaymentTitle>Valor Pago</styles.PaymentTitle>
        <styles.PaymentValue>
          {location.state && formatReal(location.state.total)}
        </styles.PaymentValue>
      </styles.PaymentData>

      <styles.CommentContainer>
        <styles.CommentTitle>Gostaríamos de ouvir sua opinião</styles.CommentTitle>

        <styles.CommentBox placeholder="Deixe aqui seu comentário, ele será enviado para o estabelecimento" />
      </styles.CommentContainer>
    </styles.Content>

    <Button rounded as="button" onClick={() => history.push('/')}>
      Fechar
    </Button>
  </styles.Container>
);

export default withRouter(Payment);
