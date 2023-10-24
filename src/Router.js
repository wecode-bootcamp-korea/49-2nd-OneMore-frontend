import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './styles/Layout';
import Header from './components/Header/Header';
import MainContainer from './styles/MainContainer';
import Main from './pages/Main/Main';
import ExerciseStart from './pages/ExerciseStart/ExerciseStart';
import NotHaveRoutine from './pages/NotHaveRoutine/NotHaveRoutine';
import MyCustomRoutine from './pages/MyRoutine/MyRoutine';
import Tab from './components/Tab/Tab';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import KakaoLogin from './pages/Login/Oauth/KakaoLogin';
import GoogleLogin from './pages/Login/Oauth/GoogleLogin';
import ExerciseList from './pages/ExerciseList/ExerciseList';
import Completed from './pages/Completed/Completed';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exercise-start/:id" element={<ExerciseStart />} />
            <Route path="/not-have-routine" element={<NotHaveRoutine />} />
            <Route path="/my-routine" element={<MyCustomRoutine />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exercise-list" element={<ExerciseList />} />
            <Route path="/oauth/kakao" element={<KakaoLogin />} />
            <Route path="/oauth/google" element={<GoogleLogin />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
        </MainContainer>
        <Tab />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
