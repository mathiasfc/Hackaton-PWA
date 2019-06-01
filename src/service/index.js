import axios from 'axios';

export default (endpoint = process.env.REACT_APP_API_ENDPOINT) => {
  const instance = axios.create({
    baseURL: endpoint,
    timeout: 30000,
    maxRedirects: 0,
  });

  return instance;
};
