import React from 'react';
import PropTypes from 'prop-types';

const QuestionIcon = ({ size, color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 26 26"
  >
    <g fill="none" fillRule="evenodd" stroke={color}>
      <circle cx="13" cy="13" r="12.25" strokeWidth="1.5" />
      <path
        fill={color}
        fillRule="nonzero"
        strokeWidth=".2"
        d="M11.843 16.559v-1.892c0-1.365.722-1.891 1.97-2.944.858-.702 1.267-1.443 1.267-2.554 0-1.443-.916-2.184-2.437-2.184-1.131 0-1.95.253-2.808.565l-.156-1.209c.877-.39 2.125-.643 3.315-.643 2.067 0 3.685 1.17 3.685 3.412 0 1.58-.585 2.36-1.95 3.51-.916.76-1.482 1.17-1.482 2.125v1.814h-1.404zm-.117 3.139v-1.755h1.677v1.755h-1.677z"
      />
    </g>
  </svg>
);

QuestionIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

QuestionIcon.defaultProps = {
  size: '26px',
  color: '#4EA547',
  className: '',
};

export default QuestionIcon;
