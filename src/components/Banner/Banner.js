import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const CustomCarouselControlPrev = styled.a`
  color: red;
  /* 이전 버튼에 대한 사용자 정의 스타일을 여기에 추가하세요 */
`;

const CustomCarouselControlNext = styled.a`
  color: red;
  /* 다음 버튼에 대한 사용자 정의 스타일을 여기에 추가하세요 */
`;

const Banner = () => {
  const [index, setIndex] = useState(0);

  // 슬라이드 간격 설정 (여기서는 3초로 설정)
  const interval = 3000;

  const handlePrev = () => {
    const nextIndex = (index - 1 + 3) % 3;
    setIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = (index + 1) % 3;
    setIndex(nextIndex);
  };

  // 자연스러운 슬라이드 전환을 위한 자동 슬라이드 함수
  const autoSlide = () => {
    const nextIndex = (index + 1) % 3;
    setIndex(nextIndex);
  };

  // 슬라이드를 자동으로 전환하기 위해 타이머 설정
  useEffect(() => {
    const slideTimer = setInterval(autoSlide, interval);

    return () => {
      clearInterval(slideTimer); // 컴포넌트가 언마운트될 때 타이머 제거
    };
  }, [index, interval]);
  //console.log(index);
  return (
    <>
      {/* <Carousel interval={2000} controls={false} activeIndex={index}> */}
      <Carousel
        controls={false}
        interval={2000}
        activeIndex={index}
        // onSelect={(selectedIndex, e) => setIndex(selectedIndex)}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner3.png"
            alt="third slide"
          />
        </Carousel.Item>

        {/* 추가 슬라이드를 필요에 따라 계속 추가할 수 있습니다. */}
      </Carousel>
      <div>
        <CustomCarouselControlPrev
          className="carousel-control-prev"
          href="#customCarousel"
          role="button"
          data-slide="prev"
          onClick={handlePrev}
        >
          &lt; 이전
        </CustomCarouselControlPrev>
        <CustomCarouselControlNext
          className="carousel-control-next"
          href="#customCarousel"
          role="button"
          data-slide="next"
          onClick={handleNext}
        >
          다음 &gt;
        </CustomCarouselControlNext>
      </div>
    </>
  );
};
export default Banner;
