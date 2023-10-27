import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

const OrderDone = () => {
  return (
    <Container>
      <DescWrap>
        <Img />
        <TextWrap>
          <SubComplete>구독이 완료되었습니다.</SubComplete>
          <TextBox>
            원모어의 다양한 서비스를 <br />
            이용해보세요.
          </TextBox>
        </TextWrap>
      </DescWrap>
      <ButtonBox>
        <Button>메인 페이지로</Button>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Img = styled.div`
  width: 230px;
  height: 230px;
  margin-top: 50px;
  background-image: url('/images/icon_order.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 40px 0 60px;
  gap: 15px;
`;

const SubComplete = styled.p`
  width: 100%;
  font-size: 23px;
  color: ${({ theme }) => theme.green};
`;

const TextBox = styled.p`
  width: 100%;
  font-size: 20px;
`;

const ButtonBox = styled.div`
  width: 100%;
  margin: 20px;
`;

export default OrderDone;
