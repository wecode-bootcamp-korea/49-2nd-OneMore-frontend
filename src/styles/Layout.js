import React from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: pink;

  /* @media (min-width: 1024px) {
    width: 390px;
    height: 844px;
    background-color: #fff;
  } */
`;

function Layout(props) {
  return <LayoutBox />;
}

export default Layout;
