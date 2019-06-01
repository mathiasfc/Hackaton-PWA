import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import IconScan from '../Icons/Scan';
import * as styles from './style';
// import Navbar from '../Navbar';
// import Header from '../Header';

const ScannerComponent = (props) => {
  const onError = (err) => {
    if(props.cameraAccess) {
      props.history.push('/digit_code');
      props.cancelCameraAccess();
    }
  }
  const { onScan, activateCamera } = props;
  return (
    <div>
      <styles.Container>
        <styles.Content>
          {/* <Header
            title="Scan Voucher"
            description="Escaneie o voucher para utilizá-lo."
            IconScreen={IconScan}
          />
          <Navbar /> */}
          <styles.ScannerContainer>
            <styles.ScannerWrapper>
              <styles.ScanArea />
              <styles.BorderBottom />
            </styles.ScannerWrapper>
          </styles.ScannerContainer>
        </styles.Content>
        {/* {!props.hasModalOpen && (
          <StyledQrReader
            delay={500}
            onScan={onScan}
            onError={(err) => onError(err)}
            onLoad={activateCamera}
          />
        )} */}
      </styles.Container>
      <styles.Overlay />
    </div>
  );
};

ScannerComponent.propTypes = {
  onScan: PropTypes.func,
  cameraAccess: PropTypes.bool,
  cancelCameraAccess: PropTypes.func,
};

export default withRouter(ScannerComponent);