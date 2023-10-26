import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

function SubscriptionOrders() {
  const navigate = useNavigate();

  const goToOrders = () => {
    navigate('/orders');
  };
  return (
    <SubscriptionBox>
      <Title>구독을 하면 혜택이 빵빵!</Title>
      {BENEFIT_LIST.map(content => (
        <Content key={content.id}>
          <ContentImage src={content.path} alt={content.alt} />
          <TextBox>
            <SubTitle>{content.title}</SubTitle>
            <Description>{content.description}</Description>
          </TextBox>
        </Content>
      ))}
      <ButtonBox>
        <Button size="small" onClick={goToOrders}>
          구독하러가기
        </Button>
      </ButtonBox>
    </SubscriptionBox>
  );
}

const SubscriptionBox = styled.article`
  width: 90%;
  height: 90%;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    width: 360px;
    height: 634px;
  }
`;
const Content = styled.div`
  width: 90%;
  height: 150px;
  padding: 30px 20px;
  background-color: #eaf3de;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #388052;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const SubTitle = styled.h3`
  color: #388052;
  font-size: 18px;
  font-weight: 600;
`;
const Description = styled.span`
  color: #333;
  font-size: 15px;
  line-height: 1.3;
  word-break: keep-all;
`;
const ContentImage = styled.img`
  height: 90px;
  display: block;
`;
const ButtonBox = styled.div`
  width: 50%;
`;

const BENEFIT_LIST = [
  {
    id: 1,
    title: '혜택 1',
    description: '더 친절하고 자세한 유료 운동 교육 프로그램을 제공해드립니다.',
    path: '/images/video.png',
    alt: '비디오이미지',
  },
  {
    id: 2,
    title: '혜택 2',
    description: 'OneMore 영양사가 제공하는 식단을 꾸준히 받을 수 있습니다.',
    path: '/images/diet.png',
    alt: '식단이미지',
  },
  {
    id: 3,
    title: '혜택 3',
    description:
      '매 달 새로운 챌린지를 통해 건강한 운동 습관을 길들일 수 있도록 도와드립니다.',
    path: '/images/goal.png',
    alt: '챌린지이미지',
  },
];
export default SubscriptionOrders;
