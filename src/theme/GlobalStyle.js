import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  html,
  body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    color: rgb(136,146,176);
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export default GlobalStyle;
