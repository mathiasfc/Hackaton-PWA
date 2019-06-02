import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 20px;
`;

export const Infos = styled.div`
  padding: 25px;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: 30px;
`;

export const InfoItem = styled.p`
  color: #b7b7b7;
  font-size: 16px;
  font-weight: 700;
  line-heigth: 25px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;
