import axiosInstance from '.';
import { ID_UNITY } from '../helpers/constants';

export default class {
  constructor() {
    this.instance = axiosInstance(process.env.REACT_APP_API_ORDERS);
  }

  getOrderDetails(id) {
    const request = {
      method: 'GET',
      url: '/',
      params: {
        placeLabel: id,
        idUnity: ID_UNITY,
      },
    };

    return this.instance(request);
  }

  payTab(id, data) {
    const request = {
      method: 'POST',
      url: `/${id}/payments`,
      data: {
        customerInfo: data,
      },
    };

    return this.instance(request);
  }
}
