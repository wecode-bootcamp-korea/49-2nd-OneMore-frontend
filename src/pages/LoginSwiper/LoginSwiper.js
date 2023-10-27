import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const LoginSlider = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleSlideClick = () => {
    const activeIndex = swiperRef.current.swiper.realIndex;
    if (activeIndex === 4) {
      navigate('/login');
    }
  };

  return (
    <Swiper
      modules={[Pagination, EffectFade]}
      ref={swiperRef}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      effect="fade"
    >
      {PRODUCT_INFO.map(({ id, img, title }) => (
        <SwiperSlide key={id} onClick={handleSlideClick}>
          <SwiperImg src={img} alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SwiperImg = styled.img`
  width: 100%;
  height: 94vh;
  cursor: pointer;
`;

export default LoginSlider;

const PRODUCT_INFO = [
  {
    id: 1,
    img: 'https://ifh.cc/g/L3hRJ2.jpg',
  },
  {
    id: 2,
    img: 'https://ifh.cc/g/VALGcx.jpg',
  },
  {
    id: 3,
    img: 'https://ifh.cc/g/ySdMTq.jpg',
  },
  {
    id: 4,
    img: 'https://ifh.cc/g/kjlNmB.png',
  },
  {
    id: 5,
    img: 'https://ifh.cc/g/Ws3hRJ.jpg',
  },
];
