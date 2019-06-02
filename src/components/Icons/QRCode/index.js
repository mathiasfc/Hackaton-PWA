import React from 'react';
import PropTypes from 'prop-types';

const QRCodeIcon = ({ size, color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 26 26"
  >
    <path
      fill={color}
      fillRule="nonzero"
      d="M18 10h-2V8h-4V4h2v2h2V0h10v10h-6v2h-2v-2zm-8 12v4H0V16h10v4h2v2h-2zm-2 0v-4H2v6h6v-2zm17.985-6H26v2h-.015v-2H20v-2h-2v4h5.985zm0 2v6H26v2h-8v-2h5.985zM10 10h2v2H7v-2H0V0h10v10zM2 2v6h6V2H2zm3 12v-2h2v2H5zm-5 0v-2h3v2H0zm22 0v-2h4v2h-4zM12 0h2v2h-2V0zm2 10h2v2h-2v-2zm-1 12v-2h4v4h-2v-2h-2zm1-4h-2v-4h4v2h-2v2zM4 6V4h2v2H4zm0 16v-2h2v2H4zM20 6V4h2v2h-2zm0 16v-2h1.97v2H20zm-8 4v-2h2v2h-2zm6-24v6h6V2h-6z"
    />
  </svg>
);

QRCodeIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

QRCodeIcon.defaultProps = {
  size: '26px',
  color: '#4EA547',
  className: '',
};

export default QRCodeIcon;
