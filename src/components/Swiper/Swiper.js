import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Swiper() {
  return (
    <>
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src="/images/다람쥐.jfif" width="100%" height="500" />
          <div>ㅇㅇ</div>
          <div>ㅇㅇ</div>
          <div>ㅇㅇ</div>
          <input type="checkbox" />
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src="/images/greenTea.jpg" width="100%" height="500" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Swiper;

// const StyledButton2 = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;
//   font-family: 'Pretendard';
//   font-weight: 400;
// `;
// const StyledButton3 = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;
//   font-family: 'Pretendard';
//   font-weight: 500;
// `;
// const StyledButton4 = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;
//   font-family: 'Pretendard';
//   font-weight: 600;
// `;
// const StyledButton5 = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;
//   font-family: 'Pretendard';
//   font-weight: 700;
// `;
// const StyledButton6 = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;
//   font-family: 'Pretendard';
//   font-weight: 800;
// `;
