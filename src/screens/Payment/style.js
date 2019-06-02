import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 25px;
`;
export const Header = styled.div``;
export const HeaderTitle = styled.h2`
  color: #333;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  margin-top: 20px;
`;

export const Content = styled.div``;
export const PaymentData = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #ececec;
`;
export const PaymentTitle = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;
export const PaymentValue = styled.div`
  color: #4ea547;
  font-size: 30px;
  font-weight: 700;
`;

export const CommentContainer = styled.div`
  margin-top: 70px;
`;
export const CommentTitle = styled.h3`
  color: #333;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 15px;
`;
export const CommentBox = styled.textarea`
  border: solid 1px #e4e4e4;
  border-radius: 5px;
  color: #333;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  height: 100px;
  line-height: 18px;
  padding: 15px;
  width: 100%;
`;
