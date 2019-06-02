import React, { useState, useEffect } from 'react';
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

const ScanTab = ({ tab, cancelCameraAccess, activateCamera, history, getTabDetails }) => {
  const [hasReadQR, setHasReadQR] = useState(false);

  useEffect(() => {
    console.log('scan tab didmount');
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
    //se não tiver premissão para acessar a camera
    //pedir para digitar
  }, []);

  const onScan = async (id, history, getTabDetails) => {
    if (id && !hasReadQR) {
      setHasReadQR(true);
      let returned = await getTabDetails(id);
      if (returned) {
        if (returned.message) {
          history.push('/tabnotfound');
        } else if (returned.id) {
          history.push('/list');
        }
      }
    }
  };

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
