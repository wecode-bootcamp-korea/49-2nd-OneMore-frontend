import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const ExerciseCard = () => {
  const [exerciseData, setExerciseData] = useState({});

  useEffect(() => {
    fetch('/data/soonwooSecond.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setExerciseData(result.data);
      });
  }, []);

  // if (Object.keys(exerciseData).length <= 0) return null;

  const exerciseDetail = exerciseData.exercises;

  return (
    <TemporaryContainer>
      <ExerciseThumbNail
        key={exerciseDetail.exerciseId}
        alt={exerciseDetail.name}
        src={exerciseDetail.thumbnailURL}
      />
      <LetterContainer>
        <FirstLineWrapper>
          <ExerciseName>팔굽{exerciseDetail.name}</ExerciseName>
          <ExerciseCount>
            20회{exerciseDetail.counts}/3세트{exerciseDetail.setCount}
          </ExerciseCount>
        </FirstLineWrapper>
        <SecondLineWrapper>
          <ExerciseCalorie>
            20칼{exerciseDetail.caloriesUsed} 소모
          </ExerciseCalorie>
        </SecondLineWrapper>
        <ThirdLineWrapper>
          <ExerciseDescriotion>
            효과{exerciseDetail.description}
          </ExerciseDescriotion>
        </ThirdLineWrapper>
      </LetterContainer>
      <ButtonWrapper>
        <CheckButton>터치해서 체크하기!</CheckButton>
      </ButtonWrapper>
    </TemporaryContainer>
  );
};

export default ExerciseCard;

const TemporaryContainer = styled.div`
  width: 360px;
  height: 634px;
  border: 1px solid black;
  /* pr할때 테두리 없애기 */
`;

const ExerciseThumbNail = styled.img`
  width: 100%;
  height: 203px;
`;

const LetterWrapper = styled.div``;

const LetterForm = styled.span`
  color: #000;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  font-size: 20px;
  font-weight: 500;
`;
const FirstLineWrapper = styled(LetterWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
`;

const SecondLineWrapper = styled(LetterWrapper)`
  margin-top: 20px;
`;

const ThirdLineWrapper = styled(LetterWrapper)`
  margin-top: 20px;
`;
const ExerciseName = styled(LetterForm)`
  font-size: 24px;
  font-weight: 700;
`;

const ExerciseCount = styled(LetterForm)``;

const ExerciseCalorie = styled(LetterForm)``;

const ExerciseDescriotion = styled(LetterForm)``;

const LetterContainer = styled.div`
  position: relative;
  top: -5px;
  margin: 0 15px;
`;

const CheckButton = styled.button`
  width: 208px;
  height: 80px;
  border-radius: 5px;
  border: 3px solid #000;
  color: #000;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 127px;
`;
