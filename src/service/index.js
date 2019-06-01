import axios from 'axios';

const API_ORDERS_TOKEN =
  'HGQXxOYfEq6IpUgpVTbQO9FkKzOl3BS50V8l6qrcjLIDm9Xy3N8mtprY5FUoUgjMpdQ/NPVvdM5K/3SZZjDU+1BmoeB6l6ZrSSzu+P9AmYtCeNyhLKVhoH42fTVSz1WOAzQ7gO5Wb1EU8Cc+mcRtShsYoebigeWTCPxSXuS7buXw7N3efDcIMNazIeX1XcfTlMjgPytcGimyJRRHbpK7e8/pBjI1RLmkuANvdbnmSC6GDAH9Tiydlim0NM44GQ1zdm15kHzYtPWdtHq4zA9JG1uYKsJM67eAXItzCi9gKgesCKpaBEKlDfywFvBzer8y';

export default (endpoint = process.env.REACT_APP_API_ORDERS) => {
  const instance = axios.create({
    baseURL: endpoint,
    timeout: 30000,
    maxRedirects: 0,
    headers: {
      Authorization: `Bearer ${API_ORDERS_TOKEN}`,
    },
  });

  return instance;
};
