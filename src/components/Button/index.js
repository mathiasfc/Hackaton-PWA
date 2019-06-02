import React from 'react';
import * as styles from './style';

const Button = ({ as, children, onClick, customStyles, square, rounded, to, disabled, text }) => (
  <styles.Button
    as={as}
    to={to}
    square={square}
    rounded={rounded}
    customStyles={customStyles}
    onClick={onClick}
    disabled={disabled}
    type="button"
    text={text}
  >
    {children}
  </styles.Button>
);

export default Button;
