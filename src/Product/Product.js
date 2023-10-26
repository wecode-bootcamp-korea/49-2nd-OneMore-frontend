import React from 'react';
import styled from 'styled-components';

const Product = () => {
  return (
    <ProductWrap>
      <ProductFilterWrap>
        <ProductFilterAll>전체</ProductFilterAll>
        <ProductFilter>기구</ProductFilter>
        <ProductFilter>음식</ProductFilter>
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
`;

const ProductFilterWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  background-color: #f2f2f2;
`;

const ProductFilterAll = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  color: ${({ theme }) => theme.green};
`;

const ProductFilter = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin: 5px 0;
  width: 100%;
  border-radius: 10px;
  background-color: white;
`;

const ProductImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border-radius: 5px;
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
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SYNTHA 6',
    price: '360,000원',
  },
  {
    id: 2,
    img: 'https://img.freepik.com/free-photo/clean-and-empty-sauna-room_23-2149283631.jpg?w=1060&t=st=1698311690~exp=1698312290~hmac=8e8b0fabd8bb5cf1c73f46f472db734c7c8a22b79e26bf89111668cb798f18f4',
    title: '반신욕기',
    price: '650,000원',
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2016/02/14/10/39/chicken-1199243_1280.jpg',
    title: '닭가슴살볼',
    price: '4,800원',
  },
  {
    id: 4,
    img: 'https://img.freepik.com/free-photo/close-up-hand-with-bandage-of-muscular-man-training-kickboxing-on-black_155003-16799.jpg?w=1060&t=st=1698311915~exp=1698312515~hmac=2af19778e8873658d09d9df516ff477eb413873d98ab902debb8ca76c3febaa7',
    title: '리프팅스트랩',
    price: '9,900원',
  },
  {
    id: 5,
    img: 'https://ifh.cc/g/5YvcmT.jpg',
    title: '케틀벨',
    price: '15,000원',
  },
  {
    id: 6,
    img: 'https://ifh.cc/g/gqZ7ym.jpg',
    title: '자전거',
    price: '300,000원',
  },
  {
    id: 7,
    img: 'https://cdn.pixabay.com/photo/2019/11/24/18/48/yoga-4650150_1280.jpg',
    title: '요가매트',
    price: '597,000원',
  },
  {
    id: 8,
    img: 'https://img.freepik.com/free-photo/a-pair-of-trainers_144627-3800.jpg?w=1060&t=st=1698311780~exp=1698312380~hmac=7339eddc3b7297b237f7dc31d9ee2645eac58fced8c679fc01c32929465de846',
    title: '운동화',
    price: '119,000원',
  },
  {
    id: 9,
    img: 'https://ifh.cc/g/H3Jw2M.jpg',
    title: '아령 2kg',
    price: '5,000원',
  },
];
