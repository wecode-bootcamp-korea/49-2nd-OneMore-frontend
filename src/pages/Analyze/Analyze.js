import styled from 'styled-components';
function Analyze() {
  return (
    <div>
      <PaddingContainer></PaddingContainer>
    </div>
  );
}
export default Analyze;

const PaddingContainer = styled.div`
  margin: 15px;

  padding: 0 15px 0 15px;
  height: 580px;
  overflow-y: auto; //스크롤 필요할때 열기
  background-color: white;
  border-radius: 16px;
`;
