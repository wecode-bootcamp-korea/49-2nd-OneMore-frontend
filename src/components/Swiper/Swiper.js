import { useRef, useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import ExerciseCard from '../ExerciseCard/ExerciseCard';

function Swiper({ list, checkedList, onClick }) {
  const ref = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleGoToNext = () => {
    if (currentSlide === list.length - 1) {
      alert('마지막페이지');
    } else {
      ref.current.next();
    }
  };

  const handleGoToPrev = () => {
    if (currentSlide > 0) {
      ref.current.prev();
    }
  };

  // const handleLastItemClick = () => {
  //   alert('마지막');
  // };
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
    <div>
      <SwiperStyle
        ref={ref}
        indicators={false}
        interval={null}
        onSelect={(index, e) => setCurrentSlide(index)}
      >
        {list.map(data => (
          <Carousel.Item key={data.id}>
            <ExerciseCard
              name={data.name}
              countsPerSet={data.countsPerSet}
              setCounts={data.setCounts}
              caloriesUsed={data.caloriesUsed}
              description={data.description}
              isCompleted={checkedList.includes(data.id)}
              alt={data.name}
              src={data.thumbnailURL}
              onClick={() => onClick(data.id)}
            />
          </Carousel.Item>
        ))}
      </SwiperStyle>
      <NextButton onClick={handleGoToNext}>
        {currentSlide === list.length - 1 ? '완료' : '다음'}
      </NextButton>
      {currentSlide === 0 ? null : (
        <BackButton onClick={handleGoToPrev}>이전</BackButton>
      )}
    </div>
  );
}

export default Swiper;

const SwiperStyle = styled(Carousel)`
  width: 100%;

  & .carousel-control-prev-icon,
  & .carousel-control-next-icon {
    display: none;
  }
  & .carousel-control-prev,
  & .carousel-control-next {
    pointer-events: none;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  width: 97px;
  height: 47px;
  border-radius: 10px;
  background-color: #8bc34a;
  opacity: 1;
  bottom: 5%;
  color: white;
`;
const NextButton = styled(CarouselButton)`
  right: 5%;
`;

const BackButton = styled(CarouselButton)`
  left: 5%;
`;
