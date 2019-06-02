import styled, { css } from 'styled-components';

export const fullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 10px 30px;
`;

export const innerText = styled.span`
  font-size: 20px;
  font-weight: bold;
  width: 80%;
  text-align: center;
  margin-top: 30%;
`;

export const dots = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 15%;
  text-align: center;
`;

export const dot = styled.span`
  background: #ececec;
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
  bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const buttonStyle = css`
  height: 50px;
  width: 85%;
  font-weight: bold;
`;

export const onboardingImage = styled.img`
  position: absolute;
  width: 200px;
  margin-top: -30%;
  ${({ customSize }) =>
    customSize &&
    css`
      width: 140px;
    `}
`;
