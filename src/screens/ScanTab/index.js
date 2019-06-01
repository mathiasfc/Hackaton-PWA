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
  // useEffect(() => {
  //   console.log('scan tab didmount');
  // }, []);

  // const onScan = id => {
  //   if (id) this.props.getVoucher(id);
  // };

  return (
    <div>
      A
      {/* <Scanner /> */}
    </div>
  );
};

export const ScanTab;
// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ login, createCard, listCards }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ScanTab);
