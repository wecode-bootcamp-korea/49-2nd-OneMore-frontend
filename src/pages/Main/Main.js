import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodayRoutine from '../../components/TodayRoutine/TodayRoutine';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/Button/Button';
import BASE_API from '../../config';


function Main(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, []);
  // if (!token) return null;
  return (
    <MainStyle>
      <TodayRoutineTitle>오늘의 루틴</TodayRoutineTitle>
      <TodayRoutine />
      <BannerBox>
        <Banner></Banner>
      </BannerBox>
      <ButtonBox>
        <Button
          onClick={() => {
            navigate('/routine');
          }}
          size="large"
        >
          루틴
        </Button>
        <Button
          onClick={() => {
            navigate('/food');
          }}
          size="large"
        >
          식단
        </Button>
        <Button
          onClick={() => {
            navigate('/challenge');
          }}
          size="large"
        >
          챌린지
        </Button>
      </ButtonBox>
    </MainStyle>
  );
}
export default Main;

const MainStyle = styled.div``;

const TodayRoutineTitle = styled.div`
  margin-left: 15px;
  margin-top: 18px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
`;

const BannerBox = styled.div`
  margin-top: 20px;
`;

const ButtonBox = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  margin: 36px 0 36px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
