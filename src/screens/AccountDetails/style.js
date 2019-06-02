import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 0 22px;
`;

export const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;
`;

export const BackLogo = styled.img`
  margin-top: 20px;
  cursor: pointer;
`;

export const Header = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  display: block;
  margin-bottom: 20px;
`;

export const buttonStyle = css`
  background: transparent;
  color: black;
  border: none;
  box-shadow: none;
`;

export const InputText = styled.span`
  margin-top: 30px;
  color: #b7b7b7;
  display: block;
  font-size: 14px;
  font-weight: bold;
`;

export const InputValue = styled.span`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  display: block;
  padding-bottom: 10px;
  padding-top: 5px;
`;

export const InputValueDisabled = styled.span`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  display: block;
  padding-bottom: 10px;
  padding-top: 5px;
  color: #b7b7b7;
`;

export const InputPass = styled.input`
  display: block;
  height: 40px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  border: 1px solid #dadada;
  margin-top: 10px;
  padding-left: 15px;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #efefef !important;
    `}
`;
