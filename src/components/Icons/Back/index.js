import React from 'react';
import PropTypes from 'prop-types';

const BackIcon = ({ color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="18"
    viewBox="0 0 10 18"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M7.803 17.634L.24 9.61a.9.9 0 0 1 0-1.222L7.803.366a1.134 1.134 0 0 1 1.67 0c.46.489.46 1.282 0 1.77L3.003 9l6.47 6.863c.46.489.46 1.282 0 1.77-.46.49-1.21.49-1.67 0"
    />
  </svg>
);

BackIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

BackIcon.defaultProps = {
  color: '#333',
  className: '',
};

export default BackIcon;
