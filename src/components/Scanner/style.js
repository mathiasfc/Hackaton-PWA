import styled from 'styled-components';
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
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    border-radius: 8px 0px;
  }
  &::after {
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    top: -15px;
    right: -15px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    border-radius: 0px 8px;
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
    border-bottom: 3px solid #fff;
    border-left: 3px solid #fff;
    border-radius: 0px 8px;
  }

  &::after {
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -15px;
    right: -15px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    border-radius: 8px 0px;
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
    height: calc(100vh - 60px);
    > div {
      border: none !important;
      box-shadow: unset !important;
    }
  }
`;

export const Content = styled.div`
  margin-top: 25%;
  position: absolute;
  z-index: 10;
  width: 100%;
  max-width: 800px;
  padding: 0px 5px;
  box-sizing: border-box;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ScanArea = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  width: 100%;
  height: 200px;
  &:before {
    content: '';
    border: 0.5px solid #d34848;
    position: absolute;
    left: -2%;
    right: -2%;
    -webkit-animation: MoveUpDown 1s linear infinite;
    box-sizing: border-box;
    animation: MoveUpDown 4s linear infinite;
  }

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
