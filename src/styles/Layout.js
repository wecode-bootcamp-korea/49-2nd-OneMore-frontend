import React from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #e6e6e6;

  @media (min-width: 1024px) {
    width: 390px;
    height: 844px;
    background-color: #e6e6e6;
  }
`;

function Layout(props) {
  return <LayoutBox />;
}

export default Layout;
