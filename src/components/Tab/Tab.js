import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BsFillFileBarGraphFill,
  BsFillCartFill,
  BsFillChatHeartFill,
  BsFillBookFill,
} from 'react-icons/bs';
import { FaDumbbell } from 'react-icons/fa6';

function Tab({ setOpen }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const DEFAULT_TAB_ID = 2;

  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_ID);
  const handleTabClick = index => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (pathname === '/') {
      setActiveTab(2);
    }
  }, [pathname]);

  // 로그인, 회원가입, 로그인 슬라이드시, Tab이 안 보이게함
  const isTabInvisible = TAB_EXCEPTION_PATH.includes(pathname);
  if (isTabInvisible) return null;

  // Tab 아이콘 모음
  const tabItems = [
    {
      icon: <BsFillFileBarGraphFill size="100%" />,
      route: '/report',
      label: '분석',
      number: 0,
    },
    {
      icon: <BsFillCartFill size="100%" />,
      route: '/product',
      label: '상품',
      number: 1,
    },
    { icon: <FaDumbbell size="100%" />, route: '/', label: '메인', number: 2 },
    {
      icon: <BsFillChatHeartFill size="100%" />,
      route: '/feed',
      label: '피드',
      number: 3,
    },
    {
      icon: <BsFillBookFill size="100%" />,
      route: '/info',
      label: '정보',
      number: 4,
    },
  ];

  return (
    <TabStyle>
      {tabItems.map(item => (
        <TabList
          key={item.number}
          onClick={() => {
            handleTabClick(item.number);
            navigate(item.route);
            setOpen(false);
          }}
          $active={activeTab === item.number}
        >
          <IconBox>{item.icon}</IconBox>
          <IconName>{item.label}</IconName>
        </TabList>
      ))}
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
  color: ${props => (props.$active ? '#8bc34a' : '#999999')};

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

const TAB_EXCEPTION_PATH = ['/login', '/signup', '/loginswiper'];
