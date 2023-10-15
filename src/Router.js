import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import Main from './pages/Main/Main';
import Tab from './components/Tab/Tab';
import Report from './pages/Report/Report';

function Router(props) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
