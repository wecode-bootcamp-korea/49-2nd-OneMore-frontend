import React from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
//import { BASE_API } from '../../config';
import Button from '../../components/Button/Button';
import BASE_API from '../../config';

function Completed() {
  const navigate = useNavigate();

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(location.search);

  const isCustomed = queryParams.get('iscustomed');
  const routineId = queryParams.get('routineid');

  const goToMain = e => {
    e.preventDefault();
    searchParams.delete('iscustomed');
    navigate('/');
  };

  const goToMyRoutine = () => {
    // fetch(`${BASE_API}/routines/${routineId}/completed`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     //routineId: routineId,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    if (true) {
      searchParams.delete('iscustomed');
      searchParams.delete('routineid');
      navigate('/my-routine');
    }
    //     console.log(result);
    //     navigate('/my-routine');
    //   });
  };

  return (
    <Article>
      <CompletedImage src="/images/2.jpg" alt="운동완료" />
      <ButtonBox>
        <Button onClick={goToMain}>운동완료</Button>
      </ButtonBox>

      {isCustomed === '0' ? (
        <LinkBox>
          <Text>오늘의 루틴이 마음에 드셨다면?</Text>
          <MyRoutineLink onClick={goToMyRoutine}>
            내 루틴목록에 저장하기💪🏻
          </MyRoutineLink>
        </LinkBox>
      ) : null}
    </Article>
  );
}

const Article = styled.article`
  width: 90%;
  height: 75%;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    width: 360px;
    height: 634px;
  }
`;

const CompletedImage = styled.img`
  height: 60%;
`;

const ButtonBox = styled.div`
  width: 30%;
`;
const LinkBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Text = styled.span`
  font-size: 16px;
`;
const MyRoutineLink = styled.button`
  font-size: 16px;
  color: #8bc34a;
  font-weight: 600;
`;

export default Completed;
