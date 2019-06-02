import styled, { css } from 'styled-components';

export const fullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 10px 30px;
`;

export const innerText = styled.span`
  font-size: 18px;
  font-weight: bold;
  width: 80%;
  text-align: center;
`;

export const dots = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 20%;
  text-align: center;
`;

export const dot = styled.span`
  background: #dcdcdc;
  border-radius: 10px;
  width: 8px;
  height: 8px;
  margin: 10px;
  display: inline-table;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background: black !important;
    `}
`;

export const centeredButton = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 7%;
  display: flex;
  justify-content: center;
`;

export const buttonStyle = css`
  height: 50px;
  width: 200px;
  font-weight: bold;
`;
