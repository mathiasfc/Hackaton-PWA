import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
`;

export const Header = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div``;

export const TabNumberTitle = styled.div`
  color: #b7b7b7;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
`;

export const TabNumber = styled.h3`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`;

export const Footer = styled.div`
  display: flex;
`;

export const buttonStyle = css`
  height: 125px;
  width: 125px;
`;
