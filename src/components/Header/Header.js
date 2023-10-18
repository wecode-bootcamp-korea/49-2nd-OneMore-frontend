import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isPrevButtonVisible = [
    '/report',
    '/product-list',
    '/',
    '/feed',
    '/info',
  ].includes(window.location.pathname);

  return (
    <>
      <HeaderStyle>
        <PrevButtonBox>
          <PrevButton isVisible={isPrevButtonVisible} />
        </PrevButtonBox>
        <Logo>OneMore</Logo>
        <HamburgerButton onClick={handleOpen} />
      </HeaderStyle>

      {isOpen && <Nav />}
    </>
  );
}

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
  width: 20px;
  height: 20px;
  background-color: pink;
  display: ${props => (props.isVisible ? 'none' : 'block')};
`;

const PrevButtonBox = styled.div`
  width: 26px;
  height: 26px;
  background-color: yellow;
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
  cursor: pointer;
`;

export default Header;
