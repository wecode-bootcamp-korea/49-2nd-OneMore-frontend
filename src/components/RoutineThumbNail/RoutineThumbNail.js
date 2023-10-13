import styled from 'styled-components';

const RoutineThumbNail = props => {
  const { className, alt, src } = props;

  return (
    <StyledRoutineThumbNail>
      <StyledImage className={className} src={src} alt={alt} />
    </StyledRoutineThumbNail>
  );
};

export default RoutineThumbNail;

const StyledRoutineThumbNail = styled.div``;

const StyledImage = styled.img``;
