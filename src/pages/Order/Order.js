import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';

const Order = () => {
  const [isProductExpanded, setProductExpanded] = useState(false);
  // const [paymentAmount, setPaymentAmount] = useState(3900);

  const toggleProduct = () => {
    setProductExpanded(!isProductExpanded);
  };

  const IMP = window.IMP;

  const handlePayment = () => {
    IMP.init('imp52282180');
    IMP.request_pay(
      {
        pg: 'kakaopay',
        name: '구독 1개월권',
        amount: 3900,
      },
      function (rsp) {
        const { status, imp_uid } = rsp;
        if (status === 'failed') {
          alert('결제에 실패했습니다.');
        }
        if (status === 'paid') {
          fetch(`http://10.58.52.163:8000/payments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify({ imp_uid }),
          })
            .then(response => {
              if (response.status === 201) {
                return response.json();
              }
              throw new Error('communication failure');
            })
            .then(result => {
              if (result.message === 'SUCESS_SUBSCRIPTION_AND_PAYMENT') {
                alert('결제완료');
              } else {
                alert('실패');
              }
            })
            .catch(error => {
              console.error('오류 발생:', error);
            });
        }
      },
    );
  };

  return (
    <OrderWrap>
      <SectionWrap>
        <SectionText onClick={toggleProduct}>
          <ProductInfo>
            <p>상품정보</p>
            <p>{isProductExpanded ? '' : '1개 / 3,900원'}</p>
          </ProductInfo>
        </SectionText>
        <ProductBox className={isProductExpanded ? 'expanded' : ''}>
          <ProductDesc>
            <p>구독 1개월</p>
            <p>3,900원</p>
          </ProductDesc>
        </ProductBox>
      </SectionWrap>
      <SectionWrap>
        <SectionText>쿠폰/포인트</SectionText>
        <ProductDesc>
          <p>포인트</p>
          <p>0원</p>
        </ProductDesc>
      </SectionWrap>
      <SectionWrap>
        <SectionText>
          <ProductInfo>
            <p>결제금액</p>
            <p>3,900</p>
          </ProductInfo>
        </SectionText>
        <ProductBox>
          <div />
        </ProductBox>
      </SectionWrap>
      <SectionWrap>
        <SectionText>결제수단 선택</SectionText>
        <PaymentBoxes>
          {PAYMENT_METHOD.map(data => (
            <PaymentBox key={data.id}>{data.name}</PaymentBox>
          ))}
        </PaymentBoxes>
      </SectionWrap>
      <SectionWrap>
        <SectionText>약관동의</SectionText>
        <CheckWrap>
          {PAYMENT_AGREEMENT.map(data => (
            <CheckboxWrap key={data.id}>
              <CheckBox shape="round" size="small" label={data.label} />
            </CheckboxWrap>
          ))}
        </CheckWrap>
      </SectionWrap>
      <ButtonWrap expanded={isProductExpanded}>
        <Button onClick={handlePayment}>
          {/* 총 {paymentAmount}원 결제하기 */}총 3,900원 결제하기
        </Button>
      </ButtonWrap>
    </OrderWrap>
  );
};

const OrderWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const SectionWrap = styled.div`
  margin: 8px 0;
  padding: 10px;
  background-color: white;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductBox = styled.div`
  display: none; // Initially hide the section

  &.expanded {
    display: block; // Show the section when expanded
  }
`;

const ProductDesc = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const SectionText = styled.p`
  margin: 10px;
  font-size: 18x;
  font-weight: 700;
`;

const PaymentBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 10px;
  gap: 15px;
`;

const PaymentBox = styled.p`
  width: 100%;
  padding: 10px 5px;
  border: 1px solid gray;
  color: gray;
  border-radius: 3px;
  text-align: center;
  font-size: 14px;
  line-height: 140%;
`;

const CheckWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 10px;
  gap: 10px;
`;

const CheckboxWrap = styled.div`
  display: flex;
`;

const ButtonWrap = styled.div`
  margin-top: ${props => (props.expanded ? '20px' : '40px')} 0;
`;

export default Order;

export const PAYMENT_METHOD = [
  { id: 1, name: '신용카드' },
  { id: 2, name: '계좌이체' },
  { id: 3, name: '무통장 입금' },
  { id: 4, name: '카카오페이' },
  { id: 5, name: '토스페이' },
  { id: 6, name: '네이버페이' },
];

export const PAYMENT_AGREEMENT = [
  { id: 1, label: '[필수] 개인정보 수집 및 이용 동의' },
  { id: 2, label: '[필수] 개인정보 제 3자 제공 동의' },
  { id: 3, label: '[필수] 전자결제대행 이용 동의' },
];
