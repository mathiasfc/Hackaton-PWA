import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Scanner from '../../components/Scanner';
import logo from '../../images/logo.svg';
import * as styles from './style';
import { login } from '../../store/auth/actions';
import { createCard, listCards } from '../../store/paymentMethod/actions';

const ScanTab = props => {
  useEffect(() => {
    console.log('scan tab didmount');
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
  }, []);

   const onScan = id => {
     if (id) this.props.getVoucher(id);
   };

  return (
    <div>
      teste
      <Scanner
        title="Scan Voucher"
        subtitle="Escaneie o voucher para utilizá-lo."
        // onScan={this.onScan}
        // hasModalOpen={false}
        // cameraAccess={voucher.cameraAccess}
        // cancelCameraAccess={cancelCameraAccess}
        // activateCamera={false}
      />
    </div>
  );
};

export default ScanTab;
// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ login, createCard, listCards }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ScanTab);
