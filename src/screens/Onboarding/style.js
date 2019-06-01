import styled from 'styled-components';

export const fullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 10px 30px;
`;

export const innerText = styled.span`
  font-size: 25px;
  font-weight: bold;
  width: 80%;
  text-align: center;
`;

export const dots = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 15%;
  text-align: center;
  span {
    background: grey;
    border-radius: 10px;
    width: 15px;
    height: 15px;
    margin: 10px;
    display: inline-table;
  }
`;

export const dot = styled.span`
  background: grey;
  border-radius: 10px;
  width: 15px;
  height: 15px;
  margin: 10px;
  display: inline-table;
`;
