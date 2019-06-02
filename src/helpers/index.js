import Storage from './storage';

export const getBrowser = () => {
  var ua = navigator.userAgent,
    tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: tem[1] || '',
    };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null)
      return {
        name: tem[0].replace('OPR', 'Opera'),
        version: tem[1],
      };
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return {
    name: M[0],
    version: M[1],
  };
};

export const afterLogin = (sessionToken, origin = '') => {
  Storage.setLocalStorage(`${origin}sessionToken`, sessionToken);
  Storage.setLocalStorage(`${origin}sessionType`, 'ACCOUNT');
  /* window.location.href = window.Core.basename + 'select_merchant'; */
};

export const formatReal = int => {
  var tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

  if (!tmp) tmp = '0';
  return 'R$ ' + tmp;
};
