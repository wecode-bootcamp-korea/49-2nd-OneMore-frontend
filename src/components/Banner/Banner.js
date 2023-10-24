import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Banner(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <CarouselBox activeIndex={index} onSelect={handleSelect}>
        {BANNER_IMAGE.map(banner => (
          <Carousel.Item key={banner.id}>
            <BannerBox>
              <BannerImage src={banner.path} alt={banner.alt} />
            </BannerBox>
          </Carousel.Item>
        ))}
      </CarouselBox>
    </div>
  );
}

const CarouselBox = styled(Carousel)`
  .carousel-indicators > button {
    display: none;
  }

  .carousel-control-prev-icon {
    display: none;
  }

  .carousel-control-next-icon {
    display: none;
  }
`;

const BannerBox = styled.div`
  width: 100%;
`;
const BannerImage = styled.img`
  width: 100%;
`;

export default Banner;

const BANNER_IMAGE = [
  {
    id: 1,
    path: '/images/banner1.png',
    alt: '배너1',
  },
  {
    id: 2,
    path: '/images/banner2.png',
    alt: '배너2',
  },
  {
    id: 3,
    path: '/images/banner3.png',
    alt: '배너3',
  },
];
