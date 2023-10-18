import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoutineThumbNail from '../RoutineThumbNail/RoutineThumbNail';

const TodayRoutine = () => {
  const [todayRoutineData, setTodayRoutineData] = useState({});
  const userNickName = localStorage.getItem('userNickname');

  useEffect(() => {
    fetch('/data/soonwoo.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setTodayRoutineData(result.data);
      });
  }, []);

  if (Object.keys(todayRoutineData).length <= 0) return null;

  const { routineId, totalDuration, totalCaloriesUsed, exercises } =
    todayRoutineData;

  const displayRoutineCounts = 3;
  const sliceData = exercises.slice(0, displayRoutineCounts);

  return (
    <StyledTodayRoutine>
      <TotalWrapper>
        <GreetingWrapper>
          <HowAbuotLetter>{userNickName}</HowAbuotLetter>
          <HowAbuotLetter>님, 오늘은 {routineId} 어떠세요?</HowAbuotLetter>
        </GreetingWrapper>
        <MiddleWrapper>
          <MapWrapper>
            {sliceData.map(product => {
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
            <PlayButton alt="재생버튼" src="/images/playButton.png" />
            <TotalTime>
              <TimeLetter>시간</TimeLetter>
              <TimeLetter>{totalDuration}</TimeLetter>
            </TotalTime>
            <TotalCalorie>
              <CalorieLetter>칼로리</CalorieLetter>
              <CalorieLetter>{totalCaloriesUsed}</CalorieLetter>
            </TotalCalorie>
          </ButtonAndInfWrapper>
        </MiddleWrapper>
      </TotalWrapper>
    </StyledTodayRoutine>
  );
};

export default TodayRoutine;

const StyledTodayRoutine = styled.div`
  width: 390px;
  height: 250px;
  border: 1px solid black;
`;

const CommonTextStyles = styled.span`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-style: normal;
  line-height: normal;
`;
const TotalWrapper = styled.div`
  margin: 0 15px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;
const GreetingWrapper = styled.div`
  margin-top: 20px;
`;

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
`;

const PlayButton = styled.img`
  margin-top: 15px;
  cursor: pointer;
`;

const TotalTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 8px;
  width: 65px;
  height: 30px;
`;
const TimeLetter = styled(CommonTextStyles)`
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
  margin-top: 8px;
  width: 65px;
  height: 30px;
`;
const CalorieLetter = styled.p`
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
