import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	* {
    box-sizing: border-box;
  }
  body {
    height:100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
li {
  list-style: none;
}

a {
  color: initial;
  text-decoration: none;
}

button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

`;

export default GlobalStyle;
