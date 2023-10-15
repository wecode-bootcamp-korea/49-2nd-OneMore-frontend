import React from 'react';
import styled from 'styled-components';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import {
  BsFillFileBarGraphFill,
  BsFillCartFill,
  BsFillBookFill,
  BsFillChatHeartFill,
} from 'react-icons/bs';

import { FaDumbbell } from 'react-icons/fa6';

function Tab() {
  const navigate = useNavigate();

  console.log(window.location.pathname);
  return (
    <TabStyle>
      <div
        onClick={() => {
          navigate('/report');
        }}
        className={`tabList ${
          window.location.pathname === '/report' ? 'clicked' : 'unclicked'
        }`}
      >
        <div className="iconBox">
          <BsFillFileBarGraphFill />
        </div>
        <p>분석</p>
      </div>
      <div
        onClick={() => {
          navigate('/product-list');
        }}
        className={`tabList ${
          window.location.pathname === '/product-list' ? 'clicked' : 'unclicked'
        }`}
      >
        <div className="iconBox">
          <BsFillCartFill />
        </div>
        <p>상품</p>
      </div>
      <div
        onClick={() => {
          navigate('/');
        }}
        className={`tabList ${
          window.location.pathname === '/' ? 'clicked' : 'unclicked'
        }`}
      >
        <div className="iconBox">
          <FaDumbbell />
        </div>
        <p>메인</p>
      </div>
      <div
        onClick={() => {
          navigate('/feed');
        }}
        className={`tabList ${
          window.location.pathname === '/feed' ? 'clicked' : 'unclicked'
        }`}
      >
        <div className="iconBox">
          <BsFillChatHeartFill />
        </div>
        <p>피드</p>
      </div>
      <div
        onClick={() => {
          navigate('/info');
        }}
        className={`tabList ${
          window.location.pathname === '/info' ? 'clicked' : 'unclicked'
        }`}
      >
        <div className="iconBox">
          <BsFillBookFill />
        </div>
        <p>정보</p>
      </div>
    </TabStyle>
  );
}

export default Tab;

const TabStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 60px;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  & .tabList {
    padding: 8px 0 8px 0;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #999999;
    &:hover {
      color: #8bc34a;
    }
  }

  & .clicked {
    color: #8bc34a;
  }

  & .iconBox {
    margin-bottom: 3px;
    width: 24px;
    height: 24px;
  }

  & svg {
    width: 100%;
    height: 100%;
  }

  & p {
    font-size: 16px;
    font-weight: 800;
  }
`;
