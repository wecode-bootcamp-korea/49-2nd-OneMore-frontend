import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import BASE_API from '../../config';
import IconButton from '../../components/IconButton/IconButton';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{4,16}$/;
  const isEmailValid = emailRegex.test(userInfo.email);
  const isPwValid = pwRegex.test(userInfo.password);
  const isValidCheck = isEmailValid && isPwValid;
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_CALLBACK;
  const GOOGLE_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`;

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleKakaoLogin = e => {
    window.location.href = KAKAO_URL;
  };

  const handleGoogleLogin = e => {
    window.location.href = GOOGLE_URL;
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = e => {
    e.preventDefault();

    fetch(`${BASE_API}/users/login`, {
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
      <fieldset>
        <LoginLegend>login</LoginLegend>
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
        </LoginButtonWrap>
        <SocialButtonWrap>
          <IconButton size="large" icon="kakao" onClick={handleKakaoLogin} />
          <IconButton size="large" icon="google" onClick={handleGoogleLogin} />
          <IconButton size="large" icon="naver" onClick={handleSignUp} />
        </SocialButtonWrap>
      </fieldset>
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
  padding: 30px;
`;

const LoginLegend = styled.legend`
  visibility: hidden;
`;

const LogoBox = styled.div`
  height: 300px;
  margin: 0 30px;
  border: 1px solid gray;
  /* background-image: url(); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const LoginInputWrap = styled.div`
  ${FLEX_COLUMN}
  margin: 50px 0;
`;

const LoginButtonWrap = styled.div`
  ${FLEX_COLUMN}
  margin: 40px 0;
`;

const SocialButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 50px 0;
`;

export default Login;
