import React from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 390px;
    height: 844px;
  }
`;

function Layout(props) {
  return <LayoutBox />;
}

export default Layout;
