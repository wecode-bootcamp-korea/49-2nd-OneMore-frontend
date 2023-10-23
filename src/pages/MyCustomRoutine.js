import { useState, useEffect } from 'react';
import styled from 'styled-components';

function MyCustomRoutine() {
  const [myRoutineData, setMyRoutineData] = useState({});

  const NotHaveMyRoutine = myRoutineData.length === 0;

  useEffect(() => {
    fetch('/data/MyRoutine.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setMyRoutineData(result.data);
      });
  }, []);

  console.log(myRoutineData.routineName, 'ssss');
  return (
    //<MapWrapper>
    //   {sliceData.map(product => {
    //     const { thumbnailURL, name, exerciseId } = product;
    //     return (
    //       <ExerciseWrapper key={exerciseId}>
    //         <RoutineThumbNail alt={name} src={thumbnailURL} />
    //         <ExerciseNameWrapper>{name}</ExerciseNameWrapper>
    //       </ExerciseWrapper>
    //     );
    //   })}
    // </MapWrapper>
    <div>
      {NotHaveMyRoutine ? (
        <NotHaveMyRoutine />
      ) : (
        <ExerciseStartStyle>
          <PaddingContainer>
            <H1>내 루틴</H1>
            <ButtonWrapper>필터들어올 부분</ButtonWrapper>
            <Container>
              <ContentWrapper>
                <RoutineNameWrapper>
                  <RoutineName>순우의 근우 만들기 </RoutineName>
                  <MenuImg alt="점점점" src="/images/Group.png"></MenuImg>
                </RoutineNameWrapper>
                <DeleteAndModify>
                  <HowMany>운동 {}개</HowMany>
                </DeleteAndModify>
                <ExerciseContainer>
                  {/* {myRoutineData.map(product=>)} */}
                  <FirstExerciseNameWrapper>
                    <FirstExercise>글루틴 햄 레이즈</FirstExercise>
                    <SetCount>set</SetCount>
                  </FirstExerciseNameWrapper>
                  <SecondExerciseNameWrapper>
                    <FirstExercise>2번째 운동</FirstExercise>
                    <SetCount>set</SetCount>
                  </SecondExerciseNameWrapper>
                </ExerciseContainer>
              </ContentWrapper>
            </Container>
          </PaddingContainer>
        </ExerciseStartStyle>
      )}
    </div>
  );
}
export default MyCustomRoutine;

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
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: auto;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid;
`;

const ContentWrapper = styled.div`
  padding-top: 15px;
  margin: 0 15px;
`;

const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoutineNameWrapper = styled(WrapperForm)``;

const RoutineName = styled(LetterForm)`
  font-size: 16px;
`;

const MenuImg = styled.img``;

const DeleteAndModify = styled(WrapperForm)``;

const HowMany = styled(LetterForm)`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
`;

const FirstExerciseNameWrapper = styled(WrapperForm)`
  margin-top: 38px;
`;

const FirstExercise = styled(LetterForm)`
  font-size: 15px;
  font-weight: 500;
`;

const SecondExerciseNameWrapper = styled(WrapperForm)``;
const SetCount = styled(LetterForm)`
  font-size: 14px;
`;

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
