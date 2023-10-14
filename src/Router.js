import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main/Main';

const Layout = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 390px;
    height: 844px;
    background-color: #fff;
  }
`;
function Router(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
