import React, { useEffect, useState } from 'react';
import Swiper from '../../components/Swiper/Swiper';
import styled from 'styled-components';
import BASE_API from '../../config';

function ExerciseStart() {
  const [exerciseList, setExerciseList] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);
  // const params = useParams();

  const handleComplete = id => {
    const hasId = completedIds.includes(id);

    if (hasId) {
      setCompletedIds(completedIds.filter(completedId => completedId !== id));
    } else {
      setCompletedIds(completedIds.concat(id));
    }
  };

  const updateCompletedExercise = () => {
    fetch('API', {
      method: 'POST',
      body: JSON.stringify({
        completedIds,
      }),
    })
      .then()
      .then();
  };

  useEffect(() => {
    fetch('/data/gyeongjae.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setExerciseList(result.data.exercises);
        setCompletedIds(result.data.completedExerciseIds);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`${BASE_API}/routines/${params}`, {
  //     method: 'GET',
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(result => {
  //       setExerciseList(result.data.exercises);
  //       setCompletedIds(result.data.completedExerciseIds);
  //     });
  // }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', updateCompletedExercise);

    return () => {
      window.removeEventListener('beforeunload', updateCompletedExercise);
    };
  }, []);

  return (
    <ExerciseStartStyle>
      <PaddingContainer>
        <Container>
          <Swiper
            list={exerciseList}
            checkedList={completedIds}
            onClick={handleComplete}
          />
        </Container>
      </PaddingContainer>
    </ExerciseStartStyle>
  );
}
export default ExerciseStart;

const ExerciseStartStyle = styled.div``;

const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
`;

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: 70vh;
  position: relative;
`;
