import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding-top: 10px;
`;

export const ButtonContainer = styled.div`
  flex-wrap: nowrap;
  padding: 0 30px 25px;

  & + & {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }

  &:first-child {
    padding-right: 7.5px;
  }

  &:last-child {
    padding-right: 30px;
  }
`;

export const buttonStyle = css`
  height: 125px;
  width: 125px;
`;
