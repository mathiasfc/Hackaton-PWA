import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Content = styled.div`
  height: calc(100vh - 281px);
  overflow-y: auto;
`;

export const BackLogo = styled.img`
  margin-top: 20px;
  cursor: pointer;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.h2`
  color: #000000;
  line-height: 38px;
  font-size: 28px;
  font-weight: 700;
  margin-top: 25px;
`;

export const SubHeaderDate = styled.span`
  color: #333333;
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-top: 5px;
`;

export const TabInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TabInfoHeader = styled.div`
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  line-hieght: 18px;
`;

export const TabInfoNumber = styled.div``;

export const TabInfoPrice = styled.div`
  text-align: right;
`;

export const TabNumber = styled.span`
  color: #000;
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
`;

export const TabPrice = styled.div`
  color: #4ea547;
  font-size: 30px;
  font-weight: bold;
  line-height: 36px;
`;

export const ChoicePayType = styled.div`
  border-bottom: 1px solid #ececec;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 15px;
`;

export const buttonStyle = css`
  display: block;
  width: 100%;
`;

export const Footer = styled.div`
  margin-top: 20px;
`;
