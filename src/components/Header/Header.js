import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav/Nav';
import PrevButton from '../PrevButton/PrevButton';
import IconButton from '../IconButton/IconButton';

function Header({ setOpen, open }) {
  const { pathname } = useLocation();
  const handleOpen = () => {
    setOpen(!open);
  };

  const isPrevButtonVisible = PREV_BUTTON_PATH.includes(pathname);
  const isHeaderInvisible = HEADER_EXCEPTION_PATH.includes(pathname);
  if (isHeaderInvisible) return null;
  return (
    <>
      <HeaderStyle>
        <PrevButtonBox>
          <PrevButton $isVisible={isPrevButtonVisible} />
        </PrevButtonBox>
        <Logo>OneMore</Logo>
        <IconButton size="small" icon="hamberger" onClick={handleOpen} />
      </HeaderStyle>

      {open && <Nav />}
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

const PrevButtonBox = styled.div`
  width: 26px;
  height: 26px;
`;

const Logo = styled.div`
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.3px;
  color: #fff;
`;

const PREV_BUTTON_PATH = ['/report', '/product-list', '/', '/feed', '/info'];
const HEADER_EXCEPTION_PATH = ['/login', '/signup', '/loginswiper'];
export default Header;
