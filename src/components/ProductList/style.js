import styled, { css } from 'styled-components';

const spaceBetweenAlignment = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductList = styled.div``;

export const Header = styled.div`
  ${spaceBetweenAlignment}
  padding: 10px 5px;
`;

export const Title = styled.div`
  color: #666;
  font-size: 12px;
  font-weight: 700;
`;

export const Item = styled.div`
  ${spaceBetweenAlignment}
  margin: 15px 5px;
`;

export const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQuantity = styled.div`
  font-weight: 700;
`;

export const ProductName = styled.div`
  margin-left: 10px;
`;

export const Price = styled.div``;

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const PartialPrice = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

export const TotalPrice = styled.div`
  text-decoration: line-through;
`;
