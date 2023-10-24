import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swiper from '../../components/Swiper/Swiper';
import styled from 'styled-components';
import BASE_API from '../../config';

function ExerciseStart() {
  const [exerciseList, setExerciseList] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);
  const [routineId, setRoutineId] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  // 머지되면 희진님 운동 완료 페이지로 이동
  const goToComplete = () => {
    navigate('/');
  };

  const handleComplete = id => {
    const hasId = completedIds.includes(id);

    if (hasId) {
      setCompletedIds(completedIds.filter(completedId => completedId !== id));
    } else {
      setCompletedIds(completedIds.concat(id));
    }
  };
  const token = localStorage.getItem('token');

  const updateCompletedExercise = () => {
    const completdIdSArray = localStorage.getItem('completedIds')
      ? localStorage.getItem('completedIds').split(',')
      : [];
    if (completdIdSArray.length === 0) {
      alert('완료한 운동이 없습니다');
      return;
    }

    fetch(`${BASE_API}/routines/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        token: token,
      },
      body: JSON.stringify({
        exercisesId: completdIdSArray.length ? completdIdSArray : [],
      }),
      keepalive: true,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'EXERCISE UPDATE SUCCESS') {
          goToComplete();
        }
      });
  };

  const getExerciseCardData = () => {
    // fetch('/data/gyeongjae.json', {
    fetch(`${BASE_API}/routines/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        token: token,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        const exerciseFilterList = result.data.exercises.filter(
          exercise => exercise.isCompleted === 1,
        );
        const resultIdList = exerciseFilterList.map(id => {
          return id.id;
        });

        setExerciseList(result.data.exercises);

        setCompletedIds(resultIdList);

        setRoutineId(result.data.routineId);
      });
  };

  useEffect(() => {
    getExerciseCardData();
  }, []);

  useEffect(() => {
    localStorage.setItem('completedIds', completedIds);
  }, [completedIds]);

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
            updateCompletedExercise={updateCompletedExercise}
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

//
