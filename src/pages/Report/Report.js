import React from 'react';
import styled from 'styled-components';

function Report() {
  return (
    <ScrollWrapper>
      <H1>내운동 이력보기</H1>
      <DonutContainer />
      <CalenderContainer></CalenderContainer>
    </ScrollWrapper>
  );
}

export default Report;

const ScrollWrapper = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  height: auto;
  overflow-y: auto;
`;

const DonutContainer = styled.div`
  height: 400px; //임의로 정해놓은거
  margin-bottom: 20px;
  background-color: white;
  border-radius: 16px;
`;

const CalenderContainer = styled.div`
  height: 400px; //임의로 정해놓은거
  margin-bottom: 20px;
  background-color: white;
  border-radius: 16px;
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
  font-size: 20px;
`;
