import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as styles from './style';
import BackIcon from '../../components/Icons/Back';
import Storage from '../../helpers/storage';
import Button from '../../components/Button';
import { createCard } from '../../store/paymentMethod/actions';

const CardForm = ({ history, createCard }) => {
  const [form, setForm] = useState({
    type: 1,
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });

  useEffect(() => {
    const sessionToken = Storage.getLocalStorage('sessionToken');
    if (!sessionToken) {
      history.push('/');
    }
  }, []);

  const save = async () => {
    const response = await createCard(form);

    if (response) {
      history.push('/cards');
    }
  };

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <styles.Container>
      <styles.Header>
        <BackIcon onClick={() => history.goBack()} />

        <Button text as="button" onClick={save}>
          Salvar
        </Button>
      </styles.Header>

      <styles.Title>Cadastro de cartão</styles.Title>

      <styles.FormItem>
        <styles.Label>Número do cartão</styles.Label>
        <styles.Input
          name="cardNumber"
          onChange={e => onChange(e, form, setForm)}
          value={form.cardNumber}
        />
      </styles.FormItem>

      <styles.FormItem>
        <styles.Label>Nome</styles.Label>
        <styles.Input
          name="cardholderName"
          onChange={e => onChange(e, form, setForm)}
          value={form.cardholderName}
        />
      </styles.FormItem>

      <styles.Grid>
        <styles.FormItem>
          <styles.Label>Data de venc.</styles.Label>
          <styles.Input
            name="expirationDate"
            onChange={e => onChange(e, form, setForm)}
            value={form.expirationDate}
            placeholder="MM/AA"
          />
        </styles.FormItem>
        <styles.FormItem>
          <styles.Label>CVV</styles.Label>
          <styles.Input
            name="securityCode"
            onChange={e => onChange(e, form, setForm)}
            value={form.securityCode}
            placeholder="000"
          />
        </styles.FormItem>
      </styles.Grid>
    </styles.Container>
  );
};

const mapStateToProps = ({ paymentMethod }) => ({
  cards: paymentMethod.cards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ createCard }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardForm)
);
