import styled, { css } from 'styled-components';

const spaceBetweenAlignment = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductList = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    left: 0;
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
  }
`;

export const Title = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Item = styled.div`
  ${spaceBetweenAlignment}
  margin: 0 0 25px;
`;

export const ProductNameContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const ProductQuantity = styled.div`
  color: #333333;
  font-size: 14px;
  line-height: 19px;
`;

export const ProductName = styled.div`
  color: #5c5c5c;
  font-size: 14px;
  line-height: 18px;
  margin-left: 10px;
`;

export const Price = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;

export const Container = styled.div`
  height: calc(100vh - 317px);
  overflow-y: auto;
  padding: 0 20px;
`;
