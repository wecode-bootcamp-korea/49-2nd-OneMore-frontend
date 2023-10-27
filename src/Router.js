import React, { useState } from 'react';
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
import KakaoLogin from './pages/Login/Oauth/KakaoLogin';
import GoogleLogin from './pages/Login/Oauth/GoogleLogin';
import ExerciseList from './pages/ExerciseList/ExerciseList';
import SignupTerms from './pages/Signup/SignupTerms';
import Completed from './pages/Completed/Completed';
import Feed from './pages/Feed/Feed';
import Product from './Product/Product';
import Order from './pages/Order/Order';
import SubscriptionOrders from './pages/SubscriptionOrders/SubscriptionOrders';
import OrderDone from './pages/OrderDone/OrderDone';
import LoginSwiper from './pages/LoginSwiper/LoginSwiper';

function Router() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <Layout>
        <Header setOpen={setOpen} open={open} />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exercise-start" element={<ExerciseStart />} />
            <Route path="/not-have-routine" element={<NotHaveRoutine />} />
            <Route path="/my-routine" element={<MyCustomRoutine />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exercise-list" element={<ExerciseList />} />
            <Route path="/oauth/kakao" element={<KakaoLogin />} />
            <Route
              path="/users/oauth/google/callback"
              element={<GoogleLogin />}
            />
            <Route path="/signup" element={<SignupTerms />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/product" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderdone" element={<OrderDone />} />
            <Route
              path="/subscriptionorders"
              element={<SubscriptionOrders />}
            />
            <Route path="/loginswiper" element={<LoginSwiper />} />
          </Routes>
        </MainContainer>
        <Tab setOpen={setOpen} />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
