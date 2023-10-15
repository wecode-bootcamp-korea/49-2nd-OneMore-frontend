import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import theme from './styles/theme';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    <Router />
  </ThemeProvider>,
);
