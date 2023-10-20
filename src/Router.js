import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import Header from './components/Header/Header';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import Tab from './components/Tab/Tab';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContainer>
        <Tab />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
