import styled from 'styled-components';

const TodayRoutine = props => {
  const { nickName, exerciseArea } = props;

  return (
    <StyledTodayRoutine>
      <H1>
        {nickName}님, 오늘은 {exerciseArea} 어떠세요?
      </H1>
    </StyledTodayRoutine>
  );
};

export default TodayRoutine;

const StyledTodayRoutine = styled.div``;

const H1 = styled.h1``;
