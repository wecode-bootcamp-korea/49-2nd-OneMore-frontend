import React from 'react';
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
  width: 30%;
  height: 50%;
  background-color: #fff;
  color: #333;
  position: fixed;
  top: 50px;
  right: 0;
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  text-indent: 10%;
  font-size: 18px;
`;

const NavList = styled.span`
  margin-bottom: 10px;
`;

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-indent: 20%;
`;

const MyPageList = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
`;

export default Nav;
