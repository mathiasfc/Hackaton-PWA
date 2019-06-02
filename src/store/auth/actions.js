import Auth from '../../service/Auth';
import PaylyAuth from '../../service/PaylyAuth';
import { afterLogin } from '../../helpers';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const LOADING_LOGIN = 'LOADING_LOGIN';
export const loadingLogin = () => ({
  type: LOADING_LOGIN,
});

export function login(data) {
  return async dispatch => {
    dispatch(loadingLogin());
    const AuthService = new Auth();

    try {
      const responseStart = await AuthService.loginStart(data.identifier);
      dispatch(loginSuccess());

      console.log('login_start_OK', responseStart);
      if (responseStart && responseStart.data) {
        const responseComplete = await AuthService.loginComplete({
          loginToken: responseStart.data.loginToken,
          password: data.password,
        });

        console.log('login_complete_OK', responseComplete);
        if (responseComplete.data && responseComplete.data.sessionToken) {
          afterLogin(responseComplete.data.sessionToken);
        }
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
      return {
        message: 'Erro ao realizar o login, verifique os dados e tente novamente',
      };
    }
  };
}

export function paylyLogin(data) {
  return async dispatch => {
    dispatch(loadingLogin());
    const AuthService = new PaylyAuth();

    try {
      const responseStart = await AuthService.loginStart(data.identifier);
      dispatch(loginSuccess());

      console.log('login_payly_start_OK', responseStart);
      if (responseStart && responseStart.data) {
        const responseComplete = await AuthService.loginComplete({
          loginToken: responseStart.data.loginToken,
          password: data.password,
        });

        console.log('login_payly_start_OK', responseComplete);
        if (responseComplete.data && responseComplete.data.sessionToken) {
          afterLogin(responseComplete.data.sessionToken, 'payly');
        }
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
      return {
        message: 'Erro ao realizar o login, verifique os dados e tente novamente',
      };
    }
  };
}
