import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as styles from './style';
import Header from '../Header';
import Button from '../../components/Button';
import BackIcon from '../../components/Icons/Back';

const ScannerComponent = ({ cancelCameraAccess, history, onScan, activateCamera }) => {
  useEffect(() => {
    // console.log(cameraAccess);
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
    //se não tiver premissão para acessar a camera
    //pedir para digitar
  }, []);

  const onError = err => {
    cancelCameraAccess();
    console.log('cancelou');
    history.push('/typetab');
    //console.log(err);
  };

  return (
    <div>
      <styles.Container>
        <BackIcon
          onClick={() => history.goBack()}
          color="white"
          customStyles={styles.backButtonStyle}
        />
        <Header title="Posicione o QR code no centro" description="para pagar sua comanda" />
        <styles.Content>
          <styles.ScannerContainer>
            <styles.ScannerWrapper>
              <styles.ScanArea />
              <styles.BorderBottom />
            </styles.ScannerWrapper>
          </styles.ScannerContainer>
        </styles.Content>
        <styles.StyledQrReader
          delay={500}
          onScan={onScan}
          onError={onError}
          onLoad={() => activateCamera}
        />
        <Button onClick={() => history.push('/typetab')} rounded customStyles={styles.buttonStyle}>
          Digitar comanda
        </Button>
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
