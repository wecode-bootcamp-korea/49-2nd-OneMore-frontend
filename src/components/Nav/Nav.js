import React from 'react';
import styled from 'styled-components';

const NavBox = styled.div`
  width: 30%;
  height: 50%;
  background-color: blue;

  position: fixed;
  top: 50px;
  right: 0;
`;

const NavWrap = styled.ul``;
const NavList = styled.li``;
const MyPage = styled.ul``;
const MyPageList = styled.li``;

function Nav(props) {
  return (
    <NavBox>
      <NavWrap>
        <NavList>장바구니</NavList>
        <NavList>마이페이지</NavList>
        <NavList>로그아웃</NavList>
      </NavWrap>
    </NavBox>
  );
}

export default Nav;
