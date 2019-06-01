import Card from '../../service/Card';

export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const addCardSuccess = () => ({
  type: ADD_CARD_SUCCESS,
});

export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';
export const addCardFailure = () => ({
  type: ADD_CARD_FAILURE,
});

export const LOADING_ADD_CARD = 'LOADING_ADD_CARD';
export const loadingAddCard = () => ({
  type: LOADING_ADD_CARD,
});

export const LOADING_CARDS = 'LOADING_CARDS';
export const loadingCards = cards => ({
  type: LOADING_CARDS,
  cards,
});

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards,
});

export function listCards() {
  return async dispatch => {
    dispatch(loadingCards());
    const CardService = new Card();
    try {
      const response = await CardService.listCards();
      if (response && response.data) {
        console.log('Cards Received With Success', response.data);

        dispatch(receiveCards(response.data.cardList));
      }
    } catch (err) {
      console.log(err);
      return {
        message: 'Erro ao cadastrar cartao, verifique os dados e tente novamente',
      };
    }
  };
}

export function createCard(data) {
  return async dispatch => {
    dispatch(loadingAddCard());
    const CardService = new Card();
    try {
      const respCreateVaultKey = await CardService.cardRequestVaultKey();
      if (respCreateVaultKey && respCreateVaultKey.data) {
        const respPrepareCard = await CardService.prepareCard(
          data,
          respCreateVaultKey.data.accessKey
        );
        if (respPrepareCard && respPrepareCard.data) {
          const respComplete = await CardService.addCard(respPrepareCard.data.cardNonce);
          if (respComplete && respComplete.data) {
            console.log('Card Added With Success', respComplete);
          }
        }
      }
    } catch (err) {
      console.log(err);
      return {
        message: 'Erro ao cadastrar cartao, verifique os dados e tente novamente',
      };
    }
  };
}
