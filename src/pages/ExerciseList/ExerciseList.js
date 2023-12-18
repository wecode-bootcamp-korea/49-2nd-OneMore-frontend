import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Filter from '../../components/Filter/Filter';
import CheckBox from '../../components/CheckBox/CheckBox';
import BASE_API from '../../config';
import RoutineThumbNail from '../../components/RoutineThumbNail/RoutineThumbNail';

function ExerciseList() {
  //로그인 확인
  const token = localStorage.getItem('token');

  //불러오는 데이터 갯수
  const dataLimit = 5;

  // 라이브러리 활용
  const navigate = useNavigate();
  const location = useLocation();

  //query Pameter
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const equipRequired = queryParams.get('equip-required');

  //State
  const [offset, setOffset] = useState(0);
  const [exerciseList, setExerciseList] = useState([]);
  const [subscriptionCheck, setSubscriptionCheck] = useState(false);
  const [exerciseListCheck, setExerciseListCheck] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [routineTitle, setRoutineTitle] = useState('');
  const [subscriptionState, setSubscriptionState] = useState(0);
  const [routineList, setRoutineList] = useState([]);

  // [백엔드 통신]
  // 운동 리스트 가져오기
  const getExerciseList = () => {
    fetch(
      `${BASE_API}/exercises?limit=${dataLimit}&offset=${offset}${
        category ? `&category=${category}` : ''
      }${equipRequired ? `&equipRequired=${equipRequired}` : ''}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        const newItems = result.data.exercises;
        setExerciseList(prevExerciseList =>
          offset ? [...prevExerciseList, ...newItems] : newItems,
        );
        setSubscriptionState(result.data.subscriptionState);
      });
  };

  // 운동으로 루틴 만들기
  const postExerciseList = () => {
    const idArray = routineList.map(item => item.id);
    if (!routineTitle) {
      const routineNaming = () => {
        if (!routineTitle) {
          alert('한 글자라도 입력해줘요!');
        }
      };
      return routineNaming();
    }

    fetch(`${BASE_API}/routines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        exercises: idArray,
        isCustom: 1,
        name: routineTitle,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate(
            `/exercise-start?routine-id=${result.routineId}&iscustomed=1`,
          );
        }
      });
  };

  // 운동 리스트 체크 목록
  const handleComplete = data => {
    // data.exerciseId와 일치하는 요소를 찾음
    const existingIndex = routineList.findIndex(
      item => item.id === data.exerciseId,
    );

    if (existingIndex !== -1) {
      // 일치하는 요소가 있으면 해당 요소를 제외한 배열을 생성하여 업데이트
      setRoutineList(prevRoutineList => [
        ...prevRoutineList.slice(0, existingIndex),
        ...prevRoutineList.slice(existingIndex + 1),
      ]);
    } else {
      // 일치하는 요소가 없으면 새로운 요소 추가
      setRoutineList(prevRoutineList => [
        ...prevRoutineList,
        {
          name: data.name,
          set: data.setCounts,
          id: data.exerciseId,
        },
      ]);
    }
  };

  // 체크박스 체크 로직
  const checkBoxCheck = parameter => {
    return routineList.some(item => item.id === parameter);
  };

  // 무한스크롤 로직
  const listBox = useRef();
  const handleScroll = () => {
    if (
      listBox.current.scrollHeight - listBox.current.scrollTop ===
      listBox.current.clientHeight
    ) {
      setOffset(prev => prev + dataLimit);
    }
  };

  // 구독 체크
  const SubscriptionClick = status => {
    setSubscriptionCheck(status);
  };

  // 운동 최소 선택 모달 닫기
  const AlertmodalCancle = () => {
    setExerciseListCheck(false);
  };

  // 루틴 만들기 버튼
  const clickMakeBtn = () => {
    //아무것도 체크 안했을 경우, 안내 모달
    if (routineList.length === 0) {
      return setExerciseListCheck(true);
    }
    setModalCheck(true);
  };

  // 루틴 모달 닫기
  const exitRoutineModal = () => {
    setModalCheck(false);
  };

  // 루틴 이름 짓기
  const handleName = e => {
    setRoutineTitle(e.target.value);
  };

  // 구독 하러 가기
  const goToInfoSubscription = () => {
    navigate('/subscription-orders');
  };

  //useEffect
  useEffect(() => {
    setOffset(0);
    getExerciseList();
  }, [searchParams]);

  useEffect(() => {
    if (offset === 0) {
      return;
    }
    getExerciseList(offset);
  }, [offset]);

  console.log(routineList);

  return (
    <ExerciseListStyle>
      <OutContainer>
        <FilterBox>
          <Filter category="equipRequired" />
          <Filter category="category" />
        </FilterBox>
        <ExerciseBox ref={listBox} onScroll={handleScroll}>
          {exerciseList.map(data => (
            <Container key={data.exerciseId}>
              <SubscriptionBack
                onClick={() => {
                  SubscriptionClick(true);
                }}
                $checked={!subscriptionState ? data.isPremium : false}
              />
              <SubscriptionLock
                onClick={() => {
                  SubscriptionClick(true);
                }}
                $checked={!subscriptionState ? data.isPremium : false}
              />
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
                onChange={() => {
                  handleComplete(data);
                }}
                checked={checkBoxCheck(data.exerciseId)}
              ></CheckBox>
            </Container>
          ))}
          <MakeButton
            onClick={() => {
              clickMakeBtn();
            }}
          >
            루틴 만들기
          </MakeButton>
        </ExerciseBox>
      </OutContainer>
      <SubscriptionModalBox>
        {subscriptionCheck && (
          <SubscriptionModal>
            <SubscriptionTitle>
              구독자 전용 영상이에요! 구독하시겠어요?
            </SubscriptionTitle>
            <SubscriptionBtnBox>
              <SubscriptionCancleBtn
                onClick={() => {
                  SubscriptionClick(false);
                }}
              >
                취소
              </SubscriptionCancleBtn>
              <SubsriptionGoBtn onClick={goToInfoSubscription}>
                구독하러 가기
              </SubsriptionGoBtn>
            </SubscriptionBtnBox>
          </SubscriptionModal>
        )}
      </SubscriptionModalBox>
      <AlertModalBox>
        {exerciseListCheck && (
          <AlertModal>
            <AlertModalTitle>
              최소 1개 이상의 운동을 선택해주세요.
            </AlertModalTitle>
            <AlertModalBtn onClick={AlertmodalCancle}>확인</AlertModalBtn>
          </AlertModal>
        )}
      </AlertModalBox>

      <ModalBackground $check={modalCheck} />
      <ExerciseListModal $check={modalCheck}>
        <RoutineNameBox
          onChange={handleName}
          placeholder="루틴이름을 지어주세요!"
        />
        {routineList.map(data => (
          <ModalContent key={data.id}>
            <ModalTitle>{data.name}</ModalTitle>
            <ModalSet>{data.set} set</ModalSet>
          </ModalContent>
        ))}
        <ModalBtnBox>
          <ModalCancleBtn
            onClick={() => {
              exitRoutineModal();
            }}
          >
            취소
          </ModalCancleBtn>
          <ModalOkBtn onClick={postExerciseList}>확인</ModalOkBtn>
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
  height: 630px;

  @media (max-width: 1024px) {
    position: static;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const SubscriptionBack = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.17);
  position: absolute;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.7;
  display: ${props => (props.$checked ? 'block' : 'none')};
`;

const SubscriptionLock = styled.div`
  width: 65px;
  height: 65px;
  background-image: url(/images/lock.png);
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: ${props => (props.$checked ? 'block' : 'none')};
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
  position: absolute;

  cursor: pointer;

  position: absolute;
  right: 25px;
  bottom: 25px;

  @media (max-width: 1024px) {
    position: fixed;
    bottom: 85px;
    right: 25px;
  }
`;

const SubscriptionModalBox = styled.div``;

const SubscriptionModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 200px;
  width: 320px;
  box-shadow: 5px 5px 5px 1px gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubscriptionTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 25px;
  width: 80%;
  word-break: keep-all;
  text-align: center;
  line-height: 1.2;
`;

const SubscriptionBtnBox = styled.div`
  display: flex;
  gap: 15px;
`;

const SubscriptionCancleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid #cccccc;
  cursor: pointer;
  width: 120px;
`;

const SubsriptionGoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #8bc34a;
  color: white;
  cursor: pointer;
  width: 120px;
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
  box-shadow: 5px 5px 5px 1px gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlertModalTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 25px;
`;
const AlertModalBtn = styled.div`
  width: 100px;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8bc34a;
  border-radius: 5px;
  cursor: pointer;
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
  cursor: pointer;
`;

const ModalOkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: #8bc34a;
  color: white;
  cursor: pointer;
`;
