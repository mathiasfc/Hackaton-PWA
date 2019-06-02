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
  margin-top: 40px;
  display: block;
`;

export const buttonStyle = css`
  display: block;
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    css`
      background: #dadada;
    `}
`;

export const InputText = styled.span`
  margin-top: 30px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  ${({ removeMargin }) =>
    removeMargin &&
    css`
      margin-top: 10px;
    `}
`;

export const ErrorMsg = styled.span`
  color: red;
  font-weight: bold;
  font-size: 14px;
`;

export const InputTab = styled.input`
  display: block;
  height: 60px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  border: 1px solid #dadada;
  padding-left: 15px;
  margin-top: -35%;
  font-size: 30px;
  text-align: center;
`;
