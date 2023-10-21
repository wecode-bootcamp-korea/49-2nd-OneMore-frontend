import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const isEmailValid = emailRegex.test(userInfo.email);
  const isPwValid = pwRegex.test(userInfo.password);
  const isValidCheck = isEmailValid && isPwValid;

  // const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  // const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;

  // const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const handleKakaoLogin = () => {
  //   window.location.href = kakaoUrl;
  // };

  const handleLogin = e => {
    e.preventDefault();

    fetch('http://10.58.52.243:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('communication failure');
      })
      .then(result => {
        if (result.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('token', result.token);
          localStorage.setItem('nickname', result.nickname);
          navigate('/');
        } else if (result.status === 400) {
          alert('아이디, 비밀번호를 확인해주세요');
        } else {
          alert('로그인 실패');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <LoginWrap>
      <LogoBox>{/* <img /> */}</LogoBox>
      <LoginInputWrap onChange={handleUserInfo}>
        <Input
          name="email"
          size="high"
          backgroundColor="#F5F6F8"
          placeholder="이메일을 입력해주세요"
        />
        <Input
          name="password"
          size="high"
          type="password"
          backgroundColor="#F5F6F8"
          placeholder="비밀번호를 입력해주세요"
        />
      </LoginInputWrap>
      <LoginButtonWrap>
        <Button type="submit" onClick={handleLogin} disabled={!isValidCheck}>
          로그인
        </Button>
        <Button
          type="submit"
          backgroundColor="white"
          color="green"
          onClick={handleSignUp}
        >
          회원가입
        </Button>
        <Button
          type="submit"
          // onClick={handleKakaoLogin}
        >
          카카오로그인
        </Button>
      </LoginButtonWrap>
    </LoginWrap>
  );
};

const FLEX_COLUMN = `
display: flex;
align-items: center;
flex-direction: column;
gap: 5px;
`;

const LoginWrap = styled.form`
  height: 100%;
  border: 1px solid green;
  background-color: white;
  padding: 15px;
`;

const LogoBox = styled.div`
  height: 250px;
  margin: 0 50px;
  border: 1px solid gray;
`;
const LoginInputWrap = styled.div`
  ${FLEX_COLUMN}
  margin: 20px 0;
`;

const LoginButtonWrap = styled.div`
  ${FLEX_COLUMN}
  margin: 10px 0;
`;

export default Login;
