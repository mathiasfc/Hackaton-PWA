import Order from '../../service/Order';

export const LOADING_TAB = 'LOADING_TAB';
export const loadingTab = () => ({
  type: LOADING_TAB,
});

export const RECEIVE_TAB = 'RECEIVE_TAB';
export const receiveTab = payload => ({
  type: RECEIVE_TAB,
  payload,
});

export const CANCEL_CAMERA_ACCESS = 'CANCEL_CAMERA_ACCESS';
export const cancelCameraAccess = () => {
  return { type: CANCEL_CAMERA_ACCESS };
}

export const ACTIVATE_CAMERA = 'ACTIVATE_CAMERA';
export const activateCamera = () => {
  return { type: ACTIVATE_CAMERA };
}

export const getTabDetails = id => {
  return async dispatch => {
    dispatch(loadingTab());
    const OrderService = new Order();
    try {
      const response = await OrderService.getOrderDetails(id);
      if (response && response.data) {
        console.log('Order Received With Success', response.data);

        dispatch(receiveTab(response.data));
      }
    } catch (err) {
      console.log(err);

      return {
        message:
          'Erro ao recuperar as informações da comanda, verifique os dados e tente novamente',
      };
    }
  };
};
