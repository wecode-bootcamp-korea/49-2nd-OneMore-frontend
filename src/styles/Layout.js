import React from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 390px;
    max-height: 844px;
  }
`;

function Layout({ children }) {
  return <LayoutBox>{children}</LayoutBox>;
}

export default Layout;
