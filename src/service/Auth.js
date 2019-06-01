import axiosInstance from '.';
import { getBrowser } from '../helpers';
/* eslint-disable */
export default class {
  constructor() {
    this.endpointUrl = process.env.REACT_APP_API_CONTA;
    this.instance = axiosInstance(this.endpointUrl);
  }

  loginStart(identifier) {
    const browser = getBrowser();
    const payload = {
      applicationId: `portal_4ALL_core`,
      identifier,
      device: {
        deviceType: 4,
        deviceModel: browser.name,
        osVersion: browser.version,
      },
    };
    const request = {
      method: 'POST',
      url: '/customer/startLogin',
      data: payload,
    };

    return this.instance(request);
  }

  loginComplete({ password, loginToken }) {
    const payload = {
      loginToken,
      password,
    };
    const request = {
      method: 'POST',
      url: '/customer/completeLogin',
      data: payload,
    };

    return this.instance(request);
  }
}
/* eslint-enable */
