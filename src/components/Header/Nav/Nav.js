import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  return (
    <NavBox>
      <NavWrap>
        <NavList>장바구니</NavList>
        <NavList>마이페이지</NavList>
        <MyPage>
          <MyPageList>내 정보 변경</MyPageList>
          <MyPageList>식단 체크리스트</MyPageList>
        </MyPage>
        <NavList>로그아웃</NavList>
      </NavWrap>
    </NavBox>
  );
}

const NavBox = styled.div`
  width: 35%;
  background-color: #fff;
  color: #333;
  outline: 2px solid red;
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  text-indent: 10%;
  font-size: 16px;
`;

const NavList = styled.span`
  margin-bottom: 20px;

  &:last-child {
    margin-top: 30px;
  }
`;

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-indent: 20%;
`;

const MyPageList = styled.span`
  margin-bottom: 12px;
  font-size: 14px;
`;

export default Nav;
