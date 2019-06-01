import { mediaTablet } from "./variables";

export const container = () => `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px 15px 0px;

  @media ${mediaTablet} {
    justify-content: center;
    padding: 0px 5px;
  }
`;

export const columnFlex = () => `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const flexPosition = ({ align = '', justify = '', direction = '' }) => `
  display: flex;
  ${align ? `align-items: ${align};` : ''}
  ${justify ? `justify-content: ${justify};` : ''}
  ${direction ? `flex-direction: ${direction};` : ''}
`;