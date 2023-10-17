import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </MainContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
