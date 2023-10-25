import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  //console.log(!isToggle);

  return (
    <NavBox>
      <NavWrap>
        <NavList>장바구니</NavList>
        <NavList onClick={handleToggle}>
          마이페이지
          <MyPage style={{ display: isToggle ? 'flex' : 'none' }}>
            <MyPageList>내 정보 변경</MyPageList>
            <MyPageList>식단 체크리스트</MyPageList>
          </MyPage>
        </NavList>

        <NavList onClick={removeToken}>로그아웃</NavList>
      </NavWrap>
    </NavBox>
  );
}

const NavBox = styled.div`
  width: 35%;
  height: 200px;
  background-color: #fff;
  color: #333;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 100;
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  text-indent: 10%;
  font-size: 16px;

  cursor: pointer;
`;

const NavList = styled.span`
  margin-bottom: 20px;
`;

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-indent: 20%;
  margin-top: 15px;
  //color: #618264;
`;

const MyPageList = styled.span`
  margin-bottom: 15px;
  font-size: 14px;
`;

export default Nav;
