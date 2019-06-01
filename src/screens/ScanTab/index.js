import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Scanner from '../../components/Scanner';
import * as styles from './style';
import {
  loadingTab,
  receiveTab,
  getTabDetails,
  cancelCameraAccess,
  activateCamera,
} from '../../store/tab/actions';

const ScanTab = ({ tab, getTabDetails, cancelCameraAccess, activateCamera }) => {
  useEffect(() => {
    console.log('scan tab didmount');
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
    //se não tiver premissão para acessar a camera
    //pedir para digitar
  }, []);

  const onScan = id => {
    if (id) alert(id);
  };

  return (
    <div>
      <Scanner
        title="Scan Voucher"
        subtitle="Escaneie o voucher para utilizá-lo."
        onScan={onScan}
        cameraAccess={tab.cameraAccess}
        cancelCameraAccess={cancelCameraAccess}
        activateCamera={activateCamera}
      />
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScanTab);
