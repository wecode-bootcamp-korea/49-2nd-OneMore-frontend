// import React from 'react';
// import { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
// import Carousel from 'react-bootstrap/Carousel';

// function Swiper() {
//   const [exerciseData, setExerciseData] = useState([]);

//   useEffect(() => {
//     fetch('/data/gyeongjae.json', {
//       method: 'GET',
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(result => {
//         setExerciseData(result.data[0].exercises);
//       });
//   }, []);

//   return (
//     <SwiperStyle indicators={false} interval={null}>
//       {exerciseData.map(card => (
//         <Carousel.Item>
//           <CarouselImg src="/images/다람쥐.jfif" alt="First slide" />
//           <div>${card.name}</div>
//         </Carousel.Item>
//       ))}
//     </SwiperStyle>
//   );
// }

// export default Swiper;

// const carouselBtn = css`
//   top: unset;
//   bottom: 5%;
//   width: 97px;
//   height: 47px;
//   border-radius: 10px;
//   background-color: #8bc34a;
//   opacity: 1;
//   position: absolute;
// `;

// const SwiperStyle = styled(Carousel)`
//   width: 100%;

//   &.carousel {
//     position: static;
//   }

//   .carousel-control-prev {
//     ${carouselBtn}
//     left: 5%;

//     &::after {
//       content: '이전';
//     }
//   }

//   .carousel-control-next {
//     ${carouselBtn}
//     right: 5%;

//     &::after {
//       content: '다음';
//     }
//   }

//   .carousel-control-prev-icon {
//     display: none;
//   }

//   .carousel-control-next-icon {
//     display: none;
//   }
// `;

// const CarouselImg = styled.img`
//   width: 100%;
//   height: 300px;
//   border-top-left-radius: 25px;
//   border-top-right-radius: 25px;
// `;

import React from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

function Swiper() {
  return (
    <SwiperStyle indicators={false} interval={null}>
      <Carousel.Item>
        <CarouselImg src="/images/다람쥐.jfif" alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImg src="/images/greenTea.jpg" alt="Second slide" />
      </Carousel.Item>
    </SwiperStyle>
  );
}

export default Swiper;

const carouselBtn = css`
  top: unset;
  bottom: 5%;
  width: 97px;
  height: 47px;
  border-radius: 10px;
  background-color: #8bc34a;
  opacity: 1;
  position: absolute;
`;

const SwiperStyle = styled(Carousel)`
  width: 100%;

  &.carousel {
    position: static;
  }

  .carousel-control-prev {
    ${carouselBtn}
    left: 5%;

    &::after {
      content: '이전';
    }
  }

  .carousel-control-next {
    ${carouselBtn}
    right: 5%;

    &::after {
      content: '다음';
    }
  }

  .carousel-control-prev-icon {
    display: none;
  }

  .carousel-control-next-icon {
    display: none;
  }
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 300px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
