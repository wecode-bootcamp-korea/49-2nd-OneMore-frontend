import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import ExerciseStart from './pages/Main/ExerciseStart';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exercise-start" element={<ExerciseStart />} />
          </Routes>
        </MainContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
