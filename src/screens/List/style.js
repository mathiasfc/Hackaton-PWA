import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Header = styled.div`
  align-items: flex-end;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: 20px 20px 15px;
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

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
`;

export const Logo = styled.div`
  background-color: #ccc;
  height: 50px;
  width: 117px;
`;

export const TabContainer = styled.div`
  text-align: right;
`;

export const PriceContainer = styled.div`
  width: 100%;
`;

export const PriceItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 1px;
  }
`;

export const PriceItemTitle = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

<<<<<<< HEAD
export const buttonStyle = css`
  height: 100px;
  width: 50px;
=======
export const PriceItemValue = styled.div`
  ${({ big }) => css`
    color: ${big ? '#4ea547' : '#b7b7b7'};
    font-size: ${big ? '26' : '18'}px;
    font-weight: ${big ? '700' : '600'};
    line-height: ${big ? '36' : '22'}px;
  `}
>>>>>>> master
`;
