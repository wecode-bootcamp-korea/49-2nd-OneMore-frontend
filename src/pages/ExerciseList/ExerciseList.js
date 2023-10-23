import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';
import BASE_API from '../../config';
import RoutineThumbNail from '../../components/RoutineThumbNail/RoutineThumbNail';

function ExerciseList(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [exerciseList, setExerciseList] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);
  const [routineId, setRoutineId] = useState();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const listBox = useRef();
  const getExerciseList = () => {
    fetch('/data/getExerciseList.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        // setCompletedIds(result.data.selected);
        const newItems = result.data.exercises;
        setExerciseList(prevExerciseList => [...prevExerciseList, ...newItems]);
        setPage(prevPage => prevPage + 1);
        setLoading(false);
      });
    // fetch(`${BASE_API}/exercises/recommended`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     token: token,
    //   },
    // })
    //   .then(response => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(result => {
    //     console.log(result.data);
    //     setTodayRoutineData(result.data);
    //   });
  };

  const handleComplete = id => {
    const hasId = completedIds.includes(id);

    if (hasId) {
      setCompletedIds(completedIds.filter(completedId => completedId !== id));
    } else {
      setCompletedIds(completedIds.concat(id));
    }
  };

  useEffect(() => {
    getExerciseList();
  }, []);

  const handleScroll = () => {
    if (
      listBox.current.scrollHeight - listBox.current.scrollTop ===
      listBox.current.clientHeight
    ) {
      getExerciseList();
    }
  };
  if (Object.keys(exerciseList).length <= 0) return null;

  return (
    <ExerciseListStyle>
      <OutContainer>
        <FilterBox>필터</FilterBox>
        <ExerciseBox ref={listBox} onScroll={handleScroll}>
          {exerciseList.map(data => (
            <Container key={data.exerciseId}>
              <ExerciseInfo>
                <RoutineThumbNail alt={data.name} src={data.thumbnailURL} />
                <ExerciseInfoBox>
                  <ExerciseTitle>{data.name}</ExerciseTitle>
                  <ExerciseDescription>{data.description}</ExerciseDescription>
                  <ExerciseTime>{data.durationInMinute}</ExerciseTime>
                  <ExerciseCaloriesUsed>
                    {data.caloriesUsed}
                  </ExerciseCaloriesUsed>
                </ExerciseInfoBox>
              </ExerciseInfo>
              <CheckBox
                size="medium"
                // checked={completedIds.includes(data.exerciseId)}
                onChange={() => {
                  handleComplete(data.exerciseId);
                }}
              ></CheckBox>
            </Container>
          ))}
        </ExerciseBox>
        {loading && <p>Loading...</p>}
      </OutContainer>
    </ExerciseListStyle>
  );
}
export default ExerciseList;

const ExerciseListStyle = styled.div``;

const OutContainer = styled.div`
  padding: 0 15px 0 15px;
`;

const FilterBox = styled.div`
  margin-top: 15px;
  border: 1px solid black;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExerciseBox = styled.div`
  margin-top: 15px;
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  height: 600px;
`;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
`;

const ExerciseInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ExerciseInfoBox = styled.div`
  margin-left: 15px;
`;

const ExerciseTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ExerciseDescription = styled.div``;

const ExerciseTime = styled.div``;

const ExerciseCaloriesUsed = styled.div``;
