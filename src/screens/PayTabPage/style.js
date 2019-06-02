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
`;

export const SubHeaderDate = styled.span`
  margin-top: 5px;
  color: #333333;
  display: block;
`;

export const TabInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  display: flex;
`;

export const TabInfoHeader = styled.span`
  display: block;
  text-align: right;
  color: #333333;
  font-size: 13px;
`;

export const TabInfoNumber = styled.div`
  font-size: 26px;

  &:first-of-type {
    span:first-child {
      text-align: left;
    }
  }
`;

export const TabInfoPrice = styled.div``;

export const TabNumber = styled.span``;

export const TabPrice = styled.div`
  font-size: 26px;
  color: #4ea547;
  font-weight: bold;
`;

export const ChoicePayType = styled.span`
  display: block;
  font-weight: bold;
  margin-top: -50px;
  margin-bottom: 40px;
`;

export const buttonStyle = css`
  display: block;
  width: 100%;
`;
