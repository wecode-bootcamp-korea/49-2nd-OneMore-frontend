import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NotHaveRoutine from '../NotHaveRoutine/NotHaveRoutine';
import Filter from '../../components/Filter/Filter';
import BASE_API from '../../config';

function MyRoutine() {
  const [myRoutineData, setMyRoutineData] = useState([]);
  const listBox = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') || '1';
  const limit = queryParams.get('limit') || '5';

  const goToMyRoutine = id => {
    navigate(`/exercise-start/${id}`);
  };

  const goToExerciseList = () => {
    navigate('/exercise-list');
  };
  const DataLength = myRoutineData.length;

  const handleNotHaveMyRoutine = DataLength === 0;

  const getMyRoutineList = () => {
    // const fetchURL = `${BASE_API}/routines/my?page=${page}&limit=${limit}`;

    const fetchURL = `/data/MyRoutine.json`;

    fetch(fetchURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        const newItems = result.data;
        setMyRoutineData(prevMyRoutineList => [
          ...prevMyRoutineList,
          ...newItems,
        ]);
      });
  };
  useEffect(() => {
    getMyRoutineList();
  }, []);

  const handleScroll = () => {
    if (
      listBox.current.scrollHeight - listBox.current.scrollTop ===
      listBox.current.clientHeight
    ) {
      getMyRoutineList();
      navigate(`/My-routine?page=${parseInt(page) + 1}&limit=${limit}`);
    }
  };

  return (
    <div>
      {handleNotHaveMyRoutine ? (
        <NotHaveRoutine />
      ) : (
        <ExerciseStartStyle>
          <H1>내 루틴</H1>
          <FilterWrapper>
            <Filter category="routine"></Filter>
          </FilterWrapper>
          <PaddingContainer ref={listBox} onScroll={handleScroll}>
            {myRoutineData.map(product => {
              const {
                routineId,
                routineName,
                totalDuration,
                exerciseNames,
                exerciseSetCount,
                createDate,
              } = product;

              return (
                <Container
                  key={routineId}
                  onClick={() => {
                    goToMyRoutine(routineId);
                  }}
                >
                  <div>
                    <ContentWrapper>
                      <RoutineNameWrapper>
                        <RoutineName>{routineName}</RoutineName>
                        <MenuImg alt="점점점" src="/images/Group.png"></MenuImg>
                      </RoutineNameWrapper>
                      <DeleteAndModify>
                        <HowMany></HowMany>
                      </DeleteAndModify>
                      <ExerciseContainer>
                        <FirstExerciseNameWrapper>
                          {exerciseNames.map(exerciseName => (
                            <FirstExercise>{exerciseName}</FirstExercise>
                          ))}
                        </FirstExerciseNameWrapper>
                        <SecondExerciseNameWrapper>
                          {exerciseSetCount.map(setCount => (
                            <SetCount>{setCount} set</SetCount>
                          ))}
                        </SecondExerciseNameWrapper>
                      </ExerciseContainer>
                      <LastPlayWrapper>
                        <LastPlay>Last play : {createDate}</LastPlay>
                        <TotalDuration>
                          <TotalTime>총 시간</TotalTime>
                          <TotalTimeNumber>{totalDuration}</TotalTimeNumber>
                        </TotalDuration>
                      </LastPlayWrapper>
                    </ContentWrapper>
                  </div>
                </Container>
              );
            })}
          </PaddingContainer>
          <MakeRoutineButton onClick={goToExerciseList}>
            루틴 만들기
          </MakeRoutineButton>
        </ExerciseStartStyle>
      )}
    </div>
  );
}
export default MyRoutine;

const ExerciseStartStyle = styled.div``;

const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  height: 613px;
  overflow: auto;
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
  margin-top: 30px;
  margin-left: 15px;
  font-size: 20px;
`;
const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: auto;
  position: relative;
  margin-bottom: 15px;
  cursor: pointer;
`;

const FilterWrapper = styled.div`
  width: 100%;
  margin: 12px 0;
  margin-left: 15px;
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
  font-size: 24px;
`;

const TotalDuration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const MenuImg = styled.img`
  width: 4px;
  height: 15px;
`;

const DeleteAndModify = styled(WrapperForm)``;

const HowMany = styled(LetterForm)`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
`;

const FirstExerciseNameWrapper = styled(WrapperForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FirstExercise = styled(LetterForm)`
  font-size: 16px;
  font-weight: 500;
`;

const SecondExerciseNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TotalTimeNumber = styled(LetterForm)`
  font-size: 16px;
`;

const ExerciseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const LastPlayWrapper = styled(WrapperForm)`
  margin-top: 12px;
`;

const LastPlay = styled.p`
  display: flex;
  align-items: flex-end;
  color: #999;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TotalTime = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.green};
`;

const MakeRoutineButton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.green};
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  position: absolute;
  right: 25px;
  bottom: 20px;
  top: calc(100% - 60px);
  right: 25px;
`;

const SetCount = styled(LetterForm)`
  font-size: 18px;
`;
