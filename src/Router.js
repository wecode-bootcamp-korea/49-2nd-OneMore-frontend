import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import ExerciseStart from './pages/ExerciseStart';
import NotHaveRoutine from './pages/NotHaveRoutine';
import MyCustomRoutine from './pages/MyCustomRoutine';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exercise-start/:id" element={<ExerciseStart />} />
            <Route path="/notHaveRoutine" element={<NotHaveRoutine />} />
            <Route path="/my-custom-routine" element={<MyCustomRoutine />} />
          </Routes>
        </MainContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
