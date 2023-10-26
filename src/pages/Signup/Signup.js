import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BASE_API from '../../config';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    phoneNumber: '',
  });

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const navigate = useNavigate();

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{4,16}$/;

  const isEmailValid = emailRegex.test(userInfo.email);
  const isPwValid = pwRegex.test(userInfo.password);
  const isPwChkValid = userInfo.password === userInfo.passwordCheck;
  const isNicknameValid = userInfo.nickname.length >= 1;

  const isValidCheck =
    isEmailValid && isPwValid && isPwChkValid && isNicknameValid;

  const handleSignUp = e => {
    e.preventDefault();

    fetch(`${BASE_API}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
        nickname: userInfo.nickname,
        phoneNumber: userInfo.phoneNumber,
      }),
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error('communication failure');
      })
      .then(result => {
        console.log(result);
        if (result.message === 'USER_CREATED') {
          alert('회원가입 완료');
          navigate('/login');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SignupWrap>
      <TextBox>회원가입</TextBox>
      <SignupInputWrap onChange={handleUserInfo}>
        {FIELD_DATA.map(({ name, type, placeholder, label, src, alt }) => (
          <InputBox key={name}>
            <InputLabel>
              {label}
              <Mandatory src={src} alt={alt} />
            </InputLabel>
            <Input
              name={name}
              type={type}
              size="high"
              placeholder={placeholder}
              onChange={handleUserInfo}
            />
          </InputBox>
        ))}
      </SignupInputWrap>
      <Button onClick={handleSignUp} disabled={!isValidCheck}>
        회원가입
      </Button>
    </SignupWrap>
  );
};

const SignupWrap = styled.form`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
`;

const TextBox = styled.p`
  padding: 40px 0;
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.darkgray};
  line-height: 140%;
`;

const SignupInputWrap = styled.div`
  margin: 20px 0 90px;
`;

const InputBox = styled.div`
  margin: 10px 0;
`;

const InputLabel = styled.p`
  margin: 20px 5px 5px;
  font-size: 14px;
`;

const Mandatory = styled.img`
  width: 10px;
  margin: 0 12px 0 2px;
`;

export default Signup;

const FIELD_DATA = [
  {
    label: '이메일',
    type: 'email',
    name: 'email',
    placeholder: '이메일을 입력해주세요',
    description: '로그인 아이디로 사용할 이메일을 입력해 주세요',
    src: 'https://wisely.store/custom/img/icon_require.png?1696239194034',
    alt: '필수입력사항',
  },
  {
    label: '비밀번호',
    type: 'password',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요',
    description: '(영문 대문자/소문자/숫자/특수문자 조합, 8자~20자)',
    src: 'https://wisely.store/custom/img/icon_require.png?1696239194034',
    alt: '필수입력사항',
  },
  {
    label: '비밀번호 확인',
    type: 'password',
    name: 'passwordCheck',
    placeholder: '비밀번호를 한번 더 입력해주세요',
    src: 'https://wisely.store/custom/img/icon_require.png?1696239194034',
    alt: '필수입력사항',
  },
  {
    label: '닉네임',
    type: 'text',
    name: 'nickname',
    placeholder: '닉네임을 입력해주세요',
    src: 'https://wisely.store/custom/img/icon_require.png?1696239194034',
    alt: '필수입력사항',
  },
  {
    label: '전화번호',
    type: 'text',
    name: 'name',
    placeholder: " '-' 없이 입력해주세요",
    src: '',
    alt: '',
  },
];
