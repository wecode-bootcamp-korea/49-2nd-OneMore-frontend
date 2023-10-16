import React from 'react';
import styled from 'styled-components';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';

const StyledButton1 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-family: 'Pretendard';
  font-weight: 200;
`;
const StyledButton2 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-family: 'Pretendard';
  font-weight: 400;
`;
const StyledButton3 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-family: 'Pretendard';
  font-weight: 500;
`;
const StyledButton4 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-family: 'Pretendard';
  font-weight: 600;
`;
const StyledButton5 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-family: 'Pretendard';
  font-weight: 700;
`;
const StyledButton6 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-family: 'Pretendard';
  font-weight: 800;
`;
function Main(props) {
  return (
    <div>
      <StyledButton1>200</StyledButton1>
      <StyledButton2>400</StyledButton2>
      <StyledButton3>500</StyledButton3>
      <StyledButton4>600</StyledButton4>
      <StyledButton5>700</StyledButton5>
      <StyledButton6>800</StyledButton6>
      <ExerciseCard></ExerciseCard>
    </div>
  );
}

export default Main;
