import React from 'react';
import styled from 'styled-components';

function MainContainer({ children }) {
  return <MainContainerStyle>{children}</MainContainerStyle>;
}

export default MainContainer;

const MainContainerStyle = styled.div`
  background-color: #e6e6e6;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
