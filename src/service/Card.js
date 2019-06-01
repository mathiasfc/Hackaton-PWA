import axiosInstance from '.';
import Storage from '../helpers/storage';
/* eslint-disable */
export default class {
  constructor() {
    this.instance = axiosInstance(process.env.REACT_APP_API_CONTA);
    this.instanceVault = axiosInstance(process.env.REACT_APP_API_VAULT);
  }

  cardRequestVaultKey() {
    return this.instance({
      method: 'POST',
      url: '/customer/requestVaultKey',
      data: {
        sessionToken: Storage.getLocalStorage('sessionToken'),
      },
    });
  }

  prepareCard(data, accessKey) {
    return this.instanceVault({
      method: 'POST',
      url: '/prepareCard',
      data: {
        cardData: data,
        accessKey,
      },
    });
  }

  addCard(cardNonce) {
    return this.instance({
      method: 'POST',
      url: '/customer/addCard',
      data: {
        sessionToken: Storage.getLocalStorage('sessionToken'),
        cardNonce,
        makeDefault: true,
      },
    });
  }

  listCards() {
    return this.instance({
      method: 'POST',
      url: '/customer/listCards',
      data: {
        sessionToken: Storage.getLocalStorage('sessionToken'),
        itemIndex: 0,
        itemCount: 10,
      },
    });
  }
}
/* eslint-enable */
