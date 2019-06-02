import React from 'react';
import PropTypes from 'prop-types';

const ProfileIcon = ({ color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="28"
    viewBox="0 0 24 28"
  >
    <path
      fill={color}
      fillRule="nonzero"
      stroke={color}
      strokeWidth=".1"
      d="M11.943 15.182c-1.55-.027-2.803-.589-3.724-1.663-2.036-2.365-1.698-6.42-1.66-6.807.132-2.927 1.486-4.317 2.597-4.965C10.26 1.098 11.414 1 12 1h.09c1.069.022 2.026.283 2.846.768 1.1.65 2.433 2.039 2.565 4.944.037.387.376 4.442-1.66 6.807-.926 1.074-2.18 1.636-3.73 1.663H11.943zM7.971 6.848c-.006.033-.365 3.756 1.311 5.696.662.774 1.556 1.155 2.72 1.166h.052c1.17-.01 2.058-.392 2.724-1.166 1.682-1.951 1.312-5.658 1.307-5.696-.006-.01-.006-.027-.006-.043-.164-3.696-2.591-4.295-4.02-4.328h-.063c-1.153 0-3.845.42-4.02 4.328 0 .01-.005.027-.005.043zm15.088 14.905c.005.275.01 1.686-.258 2.388a.71.71 0 0 1-.279.333c-.161.1-4.023 2.526-10.484 2.526-6.46 0-10.322-2.42-10.483-2.526a.68.68 0 0 1-.28-.333c-.284-.708-.279-2.119-.274-2.393v-.016c.006-.043.006-.085.006-.132.032-1.041.102-3.488 2.433-4.275a.685.685 0 0 1 .053-.016c2.433-.608 4.437-1.982 4.458-1.997a.732.732 0 0 1 1.01.174c.23.322.15.766-.177.993-.092.058-2.23 1.527-4.904 2.204-1.251.438-1.39 1.754-1.428 2.959 0 .047-.006.09-.006.132-.01.476.027 1.21.113 1.633.875.486 4.307 2.172 9.474 2.172 5.188 0 8.599-1.68 9.469-2.167.086-.423.118-1.157.112-1.633-.005-.042-.005-.084-.005-.132-.038-1.205-.177-2.52-1.429-2.959-2.674-.676-4.812-2.14-4.903-2.203a.705.705 0 0 1-.177-.994.732.732 0 0 1 1.01-.174c.02.016 2.035 1.39 4.457 1.997.016.006.038.01.054.016 2.33.782 2.4 3.229 2.433 4.275 0 .047.005.09.005.132v.016z"
    />
  </svg>
);

ProfileIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

ProfileIcon.defaultProps = {
  color: '#4EA547',
  className: '',
};

export default ProfileIcon;