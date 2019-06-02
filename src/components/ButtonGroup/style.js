import styled from 'styled-components';
import { Button } from '../Button/style';

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding-top: 10px;
`;

export const ButtonContainer = styled.div`
  flex-wrap: nowrap;
  padding: 0 25px 25px;

  & + & {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }

  &:first-child {
    padding-right: 7.5px;

    ${Button} {
      width: 164px;
    }
  }

  &:last-child {
    padding-right: 25px;
  }
`;

export const buttonStyle = {
  height: 120,
  width: 112,
};
