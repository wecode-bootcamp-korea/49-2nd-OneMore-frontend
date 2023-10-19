import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import Header from './components/Header/Header';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import ExerciseStart from './pages/Main/ExerciseStart';
import Tab from './components/Tab/Tab';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exercise-start" element={<ExerciseStart />} />
          </Routes>
        </MainContainer>
        <Tab />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
