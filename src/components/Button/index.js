import React from 'react';
import * as styles from './style';

const Button = ({ children, onClick, customStyles, square, rounded, to }) => (
  <styles.Button
    to={to}
    square={square}
    rounded={rounded}
    customStyles={customStyles}
    onClick={onClick}
  >
    {children}
  </styles.Button>
);

export default Button;
