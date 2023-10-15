import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100%;
  height: 50px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8bc34a;
`;

const PrevButton = styled.div`
  width: 26px;
  height: 26px;
  background-color: pink;
`;
const PrevButtonBox = styled.div`
  width: 26px;
  height: 26px;
  background-color: red;
`;
const Logo = styled.div`
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.3px;
  color: #fff;
`;
const HamburgerButton = styled.div`
  width: 26px;
  height: 26px;
  background-color: pink;
`;

function Header(props) {
  const isPrevButtonVisible = [
    '/report',
    '/product-list',
    '/',
    '/feed',
    '/info',
  ].includes(window.location.pathname);

  return (
    <HeaderStyle>
      {isPrevButtonVisible ? <PrevButtonBox /> : <PrevButton />}
      <Logo>OneMore</Logo>
      <HamburgerButton />
    </HeaderStyle>
  );
}

export default Header;
