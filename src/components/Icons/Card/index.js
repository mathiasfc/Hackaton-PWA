import React from 'react';
import PropTypes from 'prop-types';

const CardIcon = ({ color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="22"
    viewBox="0 0 33 22"
  >
    <path
      fill={color}
      fillRule="nonzero"
      d="M31.518 5.284H1.482V7.57h30.036V5.284zm0-1.5V2c0-.276-.222-.5-.495-.5H1.977a.497.497 0 0 0-.495.5v1.784h30.036zm0 5.286H1.482V20c0 .276.222.5.495.5h29.046a.497.497 0 0 0 .495-.5V9.07zM1.977 0h29.046C32.115 0 33 .895 33 2v18c0 1.105-.885 2-1.977 2H1.977A1.988 1.988 0 0 1 0 20V2C0 .895.885 0 1.977 0zm23.487 12.435h2.317a2 2 0 0 1 2 2v1.739a2 2 0 0 1-2 2h-2.317a2 2 0 0 1-2-2v-1.74a2 2 0 0 1 2-2zm0 1.5a.5.5 0 0 0-.5.5v1.739a.5.5 0 0 0 .5.5h2.317a.5.5 0 0 0 .5-.5v-1.74a.5.5 0 0 0-.5-.5h-2.317z"
    />
  </svg>
);

CardIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

CardIcon.defaultProps = {
  color: '#4EA547',
  className: '',
};

export default CardIcon;
