import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

const OrderDone = () => {
  return (
    <Wrap>
      <DescWrap>
        <Img />
        <ProductFilter>박인국님, 구독이 완료되었습니다.</ProductFilter>
        <Button>메인 페이지로</Button>
      </DescWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  background-color: white;
  border-radius: 8px;
  /* padding: 15px; */
`;

const DescWrap = styled.div`
  padding: 20px;
`;
const Img = styled.div`
  width: 150px;
  height: 150px;
  margin: 60px;
  background-image: url('/images/icon_order.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ProductFilter = styled.div`
  width: 100%;
`;

// const ProductBox = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 20px 10px;
//   width: 100%;
//   border-bottom: 1px solid #e6e6e6;
//   background-color: white;
// `;

export default OrderDone;
