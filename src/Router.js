import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import Main from './pages/Main/Main';

function Router(props) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
