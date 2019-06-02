import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: #333333;
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 0;
`;

export const FormItem = styled.div`
  margin-top: 25px;
`;

export const Label = styled.label`
  color: #333;
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  color: #333;
  height: 50px;
  padding: 15px;
  width: 100%;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;

  ${FormItem} {
    margin-left: 10px;

    &:first-of-type {
      margin-left: 0;
      margin-right: 10px;
    }
  }
`;
