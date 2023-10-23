import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NotHaveRoutine() {
  const navigate = useNavigate();
  const goToMakeRoutine = () => {
    //주소 추가하기
    navigate('/');
  };
  return (
    <ExerciseStartStyle>
      <PaddingContainer>
        <H1>내루틴</H1>
        <Container>
          <ContentWrapper>
            <ImageCotainer>
              <ArmImage
                alt="알통자랑"
                src="/images/NotHaveRoutine.png"
              ></ArmImage>
            </ImageCotainer>
            <FirstLineLetter>첫 번째 커스텀 운동을 만드세요</FirstLineLetter>
            <SecondLineLetter>나만의 루틴을 설정하세요</SecondLineLetter>
            <GoToStart onClick={goToMakeRoutine}>시작하러가기</GoToStart>
          </ContentWrapper>
        </Container>
      </PaddingContainer>
    </ExerciseStartStyle>
  );
}
export default NotHaveRoutine;

const ExerciseStartStyle = styled.div``;

const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
`;

const LetterForm = styled.p`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const H1 = styled(LetterForm)`
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: 70vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 185px;
  background-color: #efefef;
  border-radius: 50%;
`;
const ArmImage = styled.img`
  width: 110px;
  height: 110px;
`;

const FirstLineLetter = styled(LetterForm)`
  margin-top: 30px;
  font-size: 20px;
`;

const SecondLineLetter = styled(LetterForm)`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const GoToStart = styled.button`
  width: 85%;
  height: 50px;
  margin-top: 30px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.green};
  color: white;
`;
