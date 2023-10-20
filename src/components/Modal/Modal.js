import styled from 'styled-components';

const Modal = props => {
  const {
    handleLeftModalButton,
    handleRightModalButton,
    checkedExerciseArray,
    textSecondLine,
    textThirdLine,
    leftModalText,
    rightModalText,
  } = props;

  return (
    <PaddingContainer>
      <ModalContainer>
        <NotFinishedWrapper>
          <NotFinishedExercise>
            {checkedExerciseArray.map((text, index) => (
              <div key={index}>{text.name}</div>
            ))}
          </NotFinishedExercise>
          <div>
            <BottomText>{textSecondLine}</BottomText>
            <BottomText>{textThirdLine}</BottomText>
          </div>
        </NotFinishedWrapper>
        <ButtonWrapper>
          <YesButton onClick={handleLeftModalButton}>{leftModalText}</YesButton>
          <NoButton onClick={handleRightModalButton}>{rightModalText}</NoButton>
        </ButtonWrapper>
      </ModalContainer>
    </PaddingContainer>
  );
};

export default Modal;

const PaddingContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding: 0 15px 0 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: 35vh;
  border: 1px solid blue;
  flex-direction: column;
  gap: 20px;
`;

const NotFinishedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
`;
const NotFinishedExercise = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const BottomText = styled.p`
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const YesButton = styled.button`
  width: 97px;
  height: 47px;
  border-radius: 10px;
  background-color: #8bc34a;
  opacity: 1;
  color: white;
`;

const NoButton = styled.button`
  width: 97px;
  height: 47px;
  border-radius: 10px;
  background-color: #8bc34a;
  opacity: 1;
  color: white;
`;
