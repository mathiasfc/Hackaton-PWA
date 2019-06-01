import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Scanner from '../../components/Scanner';
import {
  loadingTab,
  receiveTab,
  getTabDetails,
  cancelCameraAccess,
  activateCamera,
} from '../../store/tab/actions';

const onScan = async (id, history, getTabDetails) => {
  if (id) {
    await getTabDetails(id);
    history.push('/list');
  }
};

const ScanTab = ({ tab, cancelCameraAccess, activateCamera, history, getTabDetails }) => {
  useEffect(() => {
    console.log('scan tab didmount');
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
    //se não tiver premissão para acessar a camera
    //pedir para digitar
  }, []);

  return (
    <Scanner
      title="Scan Voucher"
      subtitle="Escaneie o voucher para utilizá-lo."
      onScan={id => onScan(id, history, getTabDetails)}
      cameraAccess={tab.cameraAccess}
      cancelCameraAccess={cancelCameraAccess}
      activateCamera={activateCamera}
    />
  );
};

const mapStateToProps = state => ({
  tab: state.tab,
});

const mapDispatchToProps = dispatch => ({
  loadingTab: () => dispatch(loadingTab()),
  receiveTab: () => dispatch(receiveTab()),
  getTabDetails: id => dispatch(getTabDetails(id)),
  cancelCameraAccess: () => dispatch(cancelCameraAccess()),
  activateCamera: () => dispatch(activateCamera()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ScanTab)
);
