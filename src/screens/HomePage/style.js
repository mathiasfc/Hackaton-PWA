import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 10px 30px 10px 30px;
`;

export const LogoApp = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Header = styled.header`
  text-align: left;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Infos = styled.div`
  text-align: left;
  line-height: 45px;
  p {
    font-size: 20px;
  }
`;
