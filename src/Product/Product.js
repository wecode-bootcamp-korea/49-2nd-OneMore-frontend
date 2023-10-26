import React from 'react';
import styled from 'styled-components';

const Product = () => {
  return (
    <ProductWrap>
      <ProductFilterWrap>
        <ProductFilter>필 터</ProductFilter>
        <ProductFilter>필 터2</ProductFilter>
        <ProductFilter>필 터3</ProductFilter>
      </ProductFilterWrap>
      {PRODUCT_INFO.map(({ id, img, title, price }) => (
        <ProductBox key={id}>
          <ProductImg src={img} />
          <ProductDesc>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{price}</ProductPrice>
          </ProductDesc>
        </ProductBox>
      ))}
    </ProductWrap>
  );
};

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  /* padding: 15px; */
`;

const ProductFilterWrap = styled.div`
  margin-bottom: 8px;
  background-color: white;
`;

const ProductFilter = styled.div`
  width: 100%;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  background-color: white;
`;

const ProductImg = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ProductTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 5px;
`;

const ProductPrice = styled.p`
  font-weight: 400;
  margin: 5px;
`;

export default Product;

export const PRODUCT_INFO = [
  {
    id: 1,
    img: '',
    title: 'SYNTHA 6',
    price: '360,000원',
  },
  {
    id: 2,
    img: '',
    title: '아령 2kg',
    price: '5,000원',
  },
  {
    id: 3,
    img: '',
    title: '닭가슴살볼',
    price: '4,800원',
  },
  {
    id: 4,
    img: '',
    title: '요가매트',
    price: '597,000원',
  },
  {
    id: 5,
    img: '',
    title: '당신의 미래',
    price: '0원',
  },
  {
    id: 6,
    img: '',
    title: '집',
    price: '300,000,000원',
  },
];
