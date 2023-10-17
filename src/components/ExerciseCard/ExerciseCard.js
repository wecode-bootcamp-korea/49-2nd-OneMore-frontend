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

  const {
    exerciseId,
    name,
    thumbnailURL,
    setCount,
    counts,
    caloriesUsed,
    description,
  } = exerciseDetail;

  return (
    <TemporaryContainer>
      <ExerciseThumbNail key={exerciseId} alt={name} src={thumbnailURL} />
      <LetterContainer>
        <FirstLineWrapper>
          <ExerciseName>{name}</ExerciseName>
          <ExerciseCount>
            {counts}/{setCount}
          </ExerciseCount>
        </FirstLineWrapper>
        <SecondLineWrapper>
          <ExerciseCalorie>{caloriesUsed}</ExerciseCalorie>
        </SecondLineWrapper>
        <ThirdLineWrapper>
          <ExerciseDescriotion>{description}</ExerciseDescriotion>
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

const LetterForm = styled.span`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  font-size: ${({ larger }) => (larger ? '24px' : '20px')};
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
`;
const FirstLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
`;

const SecondLineWrapper = styled.div`
  margin-top: 20px;
`;

const ThirdLineWrapper = styled.div`
  margin-top: 20px;
`;
const ExerciseName = styled(LetterForm)`
  font-size: larger;
  font-weight: bold;
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
