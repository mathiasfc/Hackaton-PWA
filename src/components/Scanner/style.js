import styled, { css } from 'styled-components';
import { container } from '../../styles/mixins';
import QrReader from 'react-qr-reader';

export const Container = styled.div``;

export const ScannerWrapper = styled.div`
  position: relative;
  video {
    width: 100%;
    max-width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 8px;
    &.active {
      width: 100%;
      max-width: 300px;
      height: 300px;
      background: transparent;
      border-radius: 8px;
    }
  }
  &::before {
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    top: -15px;
    left: -15px;
  }
  &::after {
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    top: -15px;
    right: -15px;
  }
`;

export const ScannerContainer = styled.div`
  flex: 2;
  width: 85%;
  max-width: 250px;
  margin: 30px auto;
`;

export const BorderBottom = styled.span`
  &::before {
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -15px;
    left: -15px;
  }

  &::after {
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -15px;
    right: -15px;
  }
`;

export const StyledQrReader = styled(QrReader)`
  section {
    top: 0;
    position: absolute !important;
    left: 0;
    right: 0;
    width: 100% !important;
    padding-top: 0 !important;
    /* height: calc(100vh - 60px); */
    height: 100vh;
    > div {
      border: none !important;
      box-shadow: unset !important;
    }
  }
`;

export const Content = styled.div`
  z-index: 10;
  max-width: 800px;
  padding: 0px 5px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 18em;
  margin-top: -9em;
  margin-left: -40%;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  clip-path: polygon(
    0% 0%,
    0 100%,
    17% 100%,
    16% 34%,
    84% 34%,
    84% 76%,
    16% 76%,
    13% 100%,
    100% 100%,
    100% 0%
  );
`;

export const ScanArea = styled.div`
  width: 100%;
  height: 200px;


  @keyframes MoveUpDown {
    0%,
    100% {
      top: 0%;
    }
    50% {
      top: 100%;
    }
  }
`;

export const buttonStyle = css`
  background: transparent;
  color: black;
  border: 1px solid #bbbbbb;
  color: white;
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 67%;
  cursor: pointer;
`;

export const backButtonStyle = css`
  margin-top: 20px;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  margin-left: 10%;
`;
