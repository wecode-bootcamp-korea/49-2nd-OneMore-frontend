import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Filter from '../../components/Filter/Filter';
import CheckBox from '../../components/CheckBox/CheckBox';
import BASE_API from '../../config';
import RoutineThumbNail from '../../components/RoutineThumbNail/RoutineThumbNail';

function ExerciseList(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') || '1';
  const limit = queryParams.get('limit') || '10';
  const token = localStorage.getItem('token');

  const [exerciseList, setExerciseList] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);
  const [routineId, setRoutineId] = useState();
  const [exerciseListCheck, setExerciseListCheck] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [routineTitle, setRoutineTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const listBox = useRef();
  const getExerciseList = () => {
    fetch('/data/getExerciseList.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        const newItems = result.data.exercises;
        setExerciseList(prevExerciseList => [...prevExerciseList, ...newItems]);
        setLoading(false);
      });

    // fetch(`${BASE_API}/exercises/recommended?page=${parseInt(page)+1}&limit=${limit}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     token: token,
    //   },
    // })
    //   .then(response => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(result => {
    //     console.log(result.data);
    //     setTodayRoutineData(result.data);
    //   });
  };

  const postExerciseList = () => {
    fetch('/data/getExerciseList.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        const newItems = result.data.exercises;
        setExerciseList(prevExerciseList => [...prevExerciseList, ...newItems]);
        setLoading(false);
      });

    // fetch(`${BASE_API}/exercises/recommended?page=${parseInt(page)+1}&limit=${limit}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     token: token,
    //   },
    // })
    //   .then(response => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(result => {
    //     console.log(result.data);
    //     setTodayRoutineData(result.data);
    //   });
  };

  const handleComplete = id => {
    const hasId = completedIds.includes(id);

    if (hasId) {
      setCompletedIds(completedIds.filter(completedId => completedId !== id));
    } else {
      setCompletedIds(completedIds.concat(id));
    }
  };

  useEffect(() => {
    getExerciseList();
  }, []);

  const handleScroll = () => {
    if (
      listBox.current.scrollHeight - listBox.current.scrollTop ===
      listBox.current.clientHeight
    ) {
      getExerciseList();
    }
  };

  const modalCancle = status => {
    setExerciseListCheck(status);
  };

  const clickMakeBtn = status => {
    if (completedIds.length === 0) {
      return setExerciseListCheck(true);
    }
    setModalCheck(status);
  };

  let checkedEx = [...exerciseList];
  let arr = [];
  for (let i = 0; i < checkedEx.length; i++) {
    if (completedIds.indexOf(checkedEx[i].exerciseId) >= 0) {
      arr.push({
        name: checkedEx[i].name,
        set: checkedEx[i].set,
        id: checkedEx[i].exerciseId,
      });
    }
  }

  const handleName = e => {
    setRoutineTitle(e.target.value);
  };

  if (Object.keys(exerciseList).length <= 0) return null;

  console.log(routineTitle);
  return (
    <ExerciseListStyle>
      <OutContainer>
        <FilterBox>
          <Filter category="machine" />
          <Filter category="part" />
        </FilterBox>
        <ExerciseBox ref={listBox} onScroll={handleScroll}>
          {exerciseList.map((data, index) => (
            <Container key={index}>
              <ExerciseInfo>
                <ThumbnailBox>
                  <RoutineThumbNail alt={data.name} src={data.thumbnailURL} />
                </ThumbnailBox>
                <ExerciseInfoBox>
                  <ExerciseTitle>{data.name}</ExerciseTitle>
                  <ExerciseDescription>{data.description}</ExerciseDescription>
                  <ExerciseDetail>
                    <ExerciseTime>{data.durationInMinute}분</ExerciseTime>{' '}
                    &nbsp;/&nbsp;
                    <ExerciseCaloriesUsed>
                      {data.caloriesUsed}kcal
                    </ExerciseCaloriesUsed>
                  </ExerciseDetail>
                </ExerciseInfoBox>
              </ExerciseInfo>
              <CheckBox
                size="mediumToLarge"
                // checked={completedIds.includes(data.exerciseId)}
                onChange={() => {
                  handleComplete(data.exerciseId);
                }}
              ></CheckBox>
            </Container>
          ))}
        </ExerciseBox>
        {loading && <p>Loading...</p>}
        <MakeButton
          onClick={() => {
            clickMakeBtn(true);
          }}
        >
          루틴 만들기
        </MakeButton>
      </OutContainer>
      <AlertModalBox>
        {exerciseListCheck && (
          <AlertModal>
            <AlertModalTitle>
              최소 1개 이상의 운동을 선택해주세요.
            </AlertModalTitle>
            <AlertModalBtn>확인</AlertModalBtn>
          </AlertModal>
        )}
      </AlertModalBox>
      <ModalBackground $check={modalCheck} />
      <ExerciseListModal $check={modalCheck}>
        <RoutineNameBox
          onChange={handleName}
          placeholder="루틴이름을 지어주세요!"
        ></RoutineNameBox>
        <>
          {arr.map(data => (
            <ModalContent key={data.id}>
              <ModalTitle>{data.name}</ModalTitle>
              <ModalSet>{data.set} set</ModalSet>
            </ModalContent>
          ))}
        </>
        <ModalBtnBox>
          <ModalCancleBtn
            onClick={() => {
              clickMakeBtn(false);
            }}
          >
            취소
          </ModalCancleBtn>
          <ModalOkBtn>확인</ModalOkBtn>
        </ModalBtnBox>
      </ExerciseListModal>
    </ExerciseListStyle>
  );
}
export default ExerciseList;

const ExerciseListStyle = styled.div``;

const OutContainer = styled.div`
  padding: 0 15px 0 15px;
`;

const FilterBox = styled.div`
  margin-top: 15px;
  gap: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const ExerciseBox = styled.div`
  margin-top: 15px;
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  height: 560px;
  @media (max-width: 1024px) {
    height: 650px;
    margin-bottom: 15px;
  }
  @media (max-height: 915px) {
    height: 550px;
  }
  @media (max-height: 815px) {
    height: 430px;
  }
  @media (max-height: 715px) {
    height: 350px;
  }
  @media (max-height: 615px) {
    height: 260px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
`;

const ExerciseInfo = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: flex-start;
`;

const ThumbnailBox = styled.div``;

const ExerciseInfoBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const ExerciseTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ExerciseDescription = styled.div`
  margin-bottom: 15px;
`;

const ExerciseDetail = styled.div`
  display: flex;
`;

const ExerciseTime = styled.div``;

const ExerciseCaloriesUsed = styled.div``;

const MakeButton = styled.div`
  width: 130px;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #8bc34a;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 10px;
  right: 15px;
  margin-left: auto;
  cursor: pointer;
  margin-top: 15px;
`;

const AlertModalBox = styled.div``;

const AlertModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 200px;
  width: 320px;
  box-shadow: 5px 5px 5px 3px gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlertModalTitle = styled.div``;
const AlertModalBtn = styled.div`
  width: 150px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExerciseListModal = styled.div`
  padding: 20px 40px 20px 40px;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: ${props => (props.$check ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #c0c0c0;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ModalTitle = styled.div`
  font-weight: 700;
`;

const ModalSet = styled.div`
  color: #999999;
`;

const ModalBackground = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: ${props => (props.$check ? 'block' : 'none')};
`;

const RoutineNameBox = styled.input`
  width: 200px;
  padding: 15px 5px;
  text-align: center;
  outline: none;
  margin-bottom: 35px;
  border: none;
  border-bottom: 1px solid black;
`;

const ModalBtnBox = styled.div`
  display: flex;
  gap: 30px;
`;

const ModalCancleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid #cccccc;
`;

const ModalOkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: #8bc34a;
  color: white;
`;
