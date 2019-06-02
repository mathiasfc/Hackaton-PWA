import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  align-items: center;
  border: none;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  padding: 15px 25px 15px;
  text-align: center;
  text-decoration: none;

  &:disabled {
    background-color: #CCC;
  }

  ${({ square }) =>
    square &&
    css`
      align-items: flex-start;
      border-radius: 6px;
      color: #333333;
      flex-direction: column;
      font-size: 15px;
      justify-content: space-between;
      line-height: 19px;
      text-align: left;
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      background-color: #4fa444;
      border-radius: 3px;
      color: #fff;
    `}

  ${({ customStyles }) => customStyles}
`;
