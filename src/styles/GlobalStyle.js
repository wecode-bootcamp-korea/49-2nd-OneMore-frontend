import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	* {
    box-sizing: border-box;
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
