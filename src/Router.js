import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import Tab from './components/Tab/Tab';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </MainContainer>
        <Tab />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
