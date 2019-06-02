import React from 'react';
import * as styles from './style';

const Button = ({ children, onClick, customStyles, square, rounded, to, disabled }) => (
  <styles.Button
    to={to}
    square={square}
    rounded={rounded}
    customStyles={customStyles}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </styles.Button>
);

export default Button;
