import { useState } from 'react';
import styled from 'styled-components';

function MyCustomRoutine() {
  return (
    <ExerciseStartStyle>
      <PaddingContainer>
        <H1>내 루틴</H1>
        <ButtonWrapper></ButtonWrapper>
        <Container>
          <ContentWrapper></ContentWrapper>
        </Container>
      </PaddingContainer>
    </ExerciseStartStyle>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid;
`;
