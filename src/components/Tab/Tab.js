import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  BsFillFileBarGraphFill,
  BsFillCartFill,
  BsFillChatHeartFill,
  BsFillBookFill,
} from 'react-icons/bs';

import { FaDumbbell } from 'react-icons/fa6';

function Tab() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <TabStyle>
      <TabList
        onClick={() => {
          handleTabClick(0);
          navigate('/report');
        }}
        active={activeTab === 0}
      >
        <IconBox>
          <BsFillFileBarGraphFill size="100%" />
        </IconBox>
        <IconName>분석</IconName>
      </TabList>
      <TabList
        onClick={() => {
          handleTabClick(1);
          navigate('/product-list');
        }}
        active={activeTab === 1}
      >
        <IconBox>
          <BsFillCartFill size="100%" />
        </IconBox>
        <IconName>상품</IconName>
      </TabList>
      <TabList
        onClick={() => {
          handleTabClick(2);
          navigate('/');
        }}
        active={activeTab === 2}
      >
        <IconBox>
          <FaDumbbell size="100%" />
        </IconBox>
        <IconName>메인</IconName>
      </TabList>
      <TabList
        onClick={() => {
          handleTabClick(3);
          navigate('/feed');
        }}
        active={activeTab === 3}
      >
        <IconBox>
          <BsFillChatHeartFill size="100%" />
        </IconBox>
        <IconName>피드</IconName>
      </TabList>
      <TabList
        onClick={() => {
          handleTabClick(4);
          navigate('/info');
        }}
        active={activeTab === 4}
      >
        <IconBox>
          <BsFillBookFill size="100%" />
        </IconBox>
        <IconName>정보</IconName>
      </TabList>
    </TabStyle>
  );
}

export default Tab;

const TabStyle = styled.div`
  width: 100%;
  background-color: #fff;
  height: 60px;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const TabList = styled.div`
  padding: 8px 0 8px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active ? '#8bc34a' : '#999999')};

  &:hover {
    color: #8bc34a;
  }
`;

const IconBox = styled.div`
  margin-bottom: 3px;
  width: 24px;
  height: 24px;
`;

const IconName = styled.div`
  font-size: 16px;
  font-weight: 800;
`;
