import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RoutineThumbNail from '../RoutineThumbNail/RoutineThumbNail';
import BASE_API from '../../config';

const TodayRoutine = () => {
  const navigate = useNavigate();
  const [todayRoutineData, setTodayRoutineData] = useState({});
  const userNickName = localStorage.getItem('userNickname');

  const exerciseIdList =
    todayRoutineData.exercises?.map(({ exerciseId }) => exerciseId) || [];

  const getTodayRoutine = () => {
    fetch('/data/getTodayRoutine.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setTodayRoutineData(result.data);
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

  const token = localStorage.getItem('token');

  const postMakeTodayRoutine = () => {
    fetch(`${BASE_API}/routines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        token: token,
      },
      body: JSON.stringify({
        exercises: exerciseIdList,
        isCustom: false,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        if (result.message == 'SUCCESS') {
          navigate(`/exercise-start/${result.routineId}`);
          console.log('성공');
        } else console.log('실패');
      });
  };

  useEffect(() => {
    getTodayRoutine();
  }, []);

  if (Object.keys(todayRoutineData).length <= 0) return null;

  const {
    totalDurationInMinute,
    totalCalories,
    exercises,
    mostFrequent,
    isCompleted,
  } = todayRoutineData;

  const displayRoutineCounts = 3;
  const sliceData = exercises.slice(0, displayRoutineCounts);

  console.log(todayRoutineData);
  return (
    <StyledTodayRoutine>
      <TotalWrapper>
        <GreetingWrapper>
          <HowAbuotLetter>{userNickName}</HowAbuotLetter>
          {isCompleted ? (
            <HowAbuotLetter>님, 오늘 운동 고생했어요!</HowAbuotLetter>
          ) : (
            <HowAbuotLetter>
              님, 오늘은 {mostFrequent.category} 운동 어떠세요?
            </HowAbuotLetter>
          )}
        </GreetingWrapper>
        <MiddleWrapper>
          <MapWrapper>
            {sliceData?.map(product => {
              const { thumbnailURL, name, exerciseId } = product;
              return (
                <ExerciseWrapper key={exerciseId}>
                  <RoutineThumbNail alt={name} src={thumbnailURL} />
                  <ExerciseNameWrapper>{name}</ExerciseNameWrapper>
                </ExerciseWrapper>
              );
            })}
          </MapWrapper>
          <ButtonAndInfWrapper>
            <PlayButton
              alt="재생버튼"
              src="/images/playButton.png"
              onClick={postMakeTodayRoutine}
            />
            <TotalTime>
              <TimeLetterTitle>시간</TimeLetterTitle>
              <TimeLetter>{totalDurationInMinute} 분</TimeLetter>
            </TotalTime>
            <TotalCalorie>
              <CalorieLetterTitle>칼로리</CalorieLetterTitle>
              <CalorieLetter>{totalCalories}kcal</CalorieLetter>
            </TotalCalorie>
          </ButtonAndInfWrapper>
        </MiddleWrapper>
      </TotalWrapper>
    </StyledTodayRoutine>
  );
};

export default TodayRoutine;

const StyledTodayRoutine = styled.div`
  width: 100%;
  height: 250px;
  background-color: #fff;
`;

const CommonTextStyles = styled.span`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-style: normal;
  line-height: 18px;
`;
const TotalWrapper = styled.div`
  padding: 20px 15px 20px 15px;
  background-color: #fff;
  height: 100%;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const GreetingWrapper = styled.div``;

const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExerciseNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 85px;
  height: 30px;
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
`;

const HowAbuotLetter = styled(CommonTextStyles)`
  &:first-child {
    font-size: 20px;
    font-weight: 700;
  }
  &:last-child {
    font-size: 17px;
    font-weight: 400;
  }
`;

const ButtonAndInfWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const PlayButton = styled.img`
  margin-top: 15px;
  cursor: pointer;
  width: 55px;
  height: 55px;
`;

const TotalTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 8px;
  width: 65px;
  height: 40px;
`;

const TimeLetterTitle = styled(CommonTextStyles)`
  font-weight: 500;
`;

const TimeLetter = styled(CommonTextStyles)`
  font-weight: 600;
  &:first-child {
    font-size: 15px;
  }
  &:last-child {
    font-size: 15px;
    color: #8bc34a;
  }
`;

const TotalCalorie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 4px;
  width: 65px;
  height: 40px;
`;

const CalorieLetterTitle = styled(CommonTextStyles)`
  font-weight: 500;
`;

const CalorieLetter = styled(CommonTextStyles)`
  font-weight: 600;
  &:first-child {
    font-size: 15px;
  }
  &:last-child {
    font-size: 15px;
    color: #8bc34a;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
