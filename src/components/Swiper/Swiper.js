import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import BASE_API from '../../config';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

function Swiper() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    fetch('/data/gyeongjae.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setExerciseList(result.data.exercises);
      });
  }, []);

  // const ROUTINE-TEST = '6';

  // useEffect(() => {
  //   fetch(`${BASE_API}/routines/${ROUTINE-TEST}`, {
  //     method: 'GET',
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(result => {
  //       setExerciseList(result.data.exercises);
  //     });
  // }, []);

  return (
    <SwiperStyle indicators={false} interval={null}>
      {exerciseList.map(data => (
        <Carousel.Item key={data.id}>
          <ExerciseCard
            name={data.name}
            countsPerSet={data.countsPerSet}
            setCounts={data.setCounts}
            caloriesUsed={data.caloriesUsed}
            description={data.description}
            alt={data.name}
            src={data.thumbnailURL}
          />
        </Carousel.Item>
      ))}
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
