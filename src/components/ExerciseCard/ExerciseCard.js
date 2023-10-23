import styled from 'styled-components';
import CheckBox from '../CheckBox/CheckBox';

const ExerciseCard = props => {
  const {
    alt,
    src,
    name,
    countsPerSet,
    setCounts,
    caloriesUsed,
    description,
    isCompleted,
    onClick,
  } = props;

  return (
    <TemporaryContainer>
      <ExerciseThumbNail
        alt={alt}
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <LetterContainer>
        <FirstLineWrapper>
          <ExerciseName>{name}</ExerciseName>
          <ExerciseExplanation>
            {countsPerSet}/{setCounts}세트
          </ExerciseExplanation>
        </FirstLineWrapper>
        <SecondLineWrapper>
          <ExerciseExplanation>{caloriesUsed}Kcal 소모</ExerciseExplanation>
        </SecondLineWrapper>
        <ThirdLineWrapper>
          <ExerciseExplanation>{description}</ExerciseExplanation>
        </ThirdLineWrapper>
      </LetterContainer>
      <ButtonWrapper>
        <CheckBox size="large" checked={isCompleted} onChange={onClick} />
      </ButtonWrapper>
    </TemporaryContainer>
  );
};

export default ExerciseCard;

const TemporaryContainer = styled.div``;

const ExerciseThumbNail = styled.iframe`
  width: 100%;
  height: 35vh;
  border-radius: 16px;
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

const ExerciseExplanation = styled(LetterForm)``;

const LetterContainer = styled.div`
  position: relative;
  top: -5px;
  margin: 0 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
