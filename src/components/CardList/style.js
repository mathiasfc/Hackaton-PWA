import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const CardItem = styled.div`
  align-items: center;
  border-bottom: 1px solid #ececec;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 15px 2px;

  &:last-child {
    border-bottom: 0;
  }
`;

export const CardInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CardBrand = styled.div`
  align-items: center;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  display: flex;
  height: 28px;
  justify-content: center;
  margin-right: 10px;
  width: 40px;
`;

export const CardNumber = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;

export const Circle = styled.div`
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  display: block;
  height: 17px;
  width: 17px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #4ea547;
      border-color: #4ea547;
    `}
`;

export const ButtonText = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;
