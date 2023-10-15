import styled from 'styled-components';
import RoutineThumbNail from '../RoutineThumbNail/RoutineThumbNail';

const TodayRoutine = props => {
  const { nickName, routineId, name, totalDuration, totalCaloriesUsed } = props;

  return (
    <StyledTodayRoutine>
      <TotalWrapper>
        <GreetingWrapper>
          <HowAbuotLetter>{nickName}</HowAbuotLetter>
          <HowAbuotLetter>님, 오늘은 {routineId} 어떠세요?</HowAbuotLetter>
        </GreetingWrapper>
        <MiddleWrapper>
          <div>
            <ExerciseWrapper>
              <RoutineThumbNail alt={name} />
              <ExerciseNameWrapper>{name}</ExerciseNameWrapper>
            </ExerciseWrapper>
          </div>
          <ButtonAndInfWrapper>
            <PlayButton
              className="playButton"
              alt="재생버튼"
              src="/images/playButton.png"
            />
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
  /* cursor: pointer; */
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
