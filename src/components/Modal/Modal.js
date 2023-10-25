import styled from 'styled-components';

const Modal = props => {
  const {
    handleLeftModalButton,
    handleRightModalButton,
    textFirstLine,
    textSecondLine,
    textThirdLine,
    leftModalText,
    rightModalText,
    titleGap,
    middleGap,
    buttonGap,
  } = props;

  return (
    <ModalContainer middleGap={middleGap}>
      <NotFinishedWrapper titleGap={titleGap}>
        <NotFinishedExercise>{textFirstLine}</NotFinishedExercise>
        <div>
          <BottomText>{textSecondLine}</BottomText>
          <BottomText>{textThirdLine}</BottomText>
        </div>
      </NotFinishedWrapper>
      <ButtonWrapper buttonGap={buttonGap}>
        <LeftButton onClick={handleLeftModalButton}>{leftModalText}</LeftButton>
        <RightButton onClick={handleRightModalButton}>
          {rightModalText}
        </RightButton>
      </ButtonWrapper>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: 30vh;
  border: 0.25px solid;
  flex-direction: column;
  gap: ${props => props.middleGap || 25}px; //내용과 버튼갭
`;

const NotFinishedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.titleGap || 25}px; //타이틀과 내용 갭
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
  gap: ${props => props.buttonGap || 25}px; //버튼 사이간격
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 35px;
  border-radius: 5px;
`;
const RightButton = styled(Button)`
  background-color: #8bc34a;
  color: white;
`;

const LeftButton = styled(Button)`
  color: black;
  border: 1px solid #cccccc;
`;
