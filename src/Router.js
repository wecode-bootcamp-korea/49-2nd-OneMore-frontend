import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
