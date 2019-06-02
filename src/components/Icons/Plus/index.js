import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ size, color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 13 13"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M13 7.429H7.429V13H5.57V7.429H0V5.57h5.571V0H7.43v5.571H13z"
    />
  </svg>
);

PlusIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

PlusIcon.defaultProps = {
  size: '13px',
  color: '#000',
  className: '',
};

export default PlusIcon;
