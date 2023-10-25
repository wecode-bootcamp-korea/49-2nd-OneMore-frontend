import styled from 'styled-components';

const RoutineThumbNail = props => {
  const { alt, src } = props;

  return (
    <StyledRoutineThumbNail>
      <StyledImage src={src} alt={alt} />
    </StyledRoutineThumbNail>
  );
};

export default RoutineThumbNail;

const StyledRoutineThumbNail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  border-radius: 10px;
  border: 1px solid;
`;

const StyledImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;
