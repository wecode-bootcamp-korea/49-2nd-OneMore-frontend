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

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const isEmailValid = emailRegex.test(userInfo.email);
  const isPwValid = pwRegex.test(userInfo.password);
  const isValidCheck = isEmailValid && isPwValid;

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
        } else if (response.status === 400) {
          alert('아이디, 비밀번호를 확인해주세요');
        } else {
          alert('로그인 실패');
        }
      })
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
        if (result.nickname) {
          localStorage.setItem('nickname', result.nickname);
        }
        if (result.message === 'LOGIN_SUCCESS') {
          navigate('/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <LoginWrap>
      <LoginInputWrap onChange={handleUserInfo}>
        <Input name="email" size="high" placeholder="이메일을 입력해주세요" />
        <Input
          name="password"
          size="high"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </LoginInputWrap>
      <Button
        type="submit"
        children="로그인"
        onClick={handleLogin}
        disabled={!isValidCheck}
      />
    </LoginWrap>
  );
};

const LoginWrap = styled.form`
  padding: 15px;
`;
const LoginInputWrap = styled.div`
  gap: 8px;
`;

export default Login;
