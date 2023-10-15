import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;

const ContainerStyle = styled.div`
  margin: 15px 15px 15px 15px;
  padding: 15px 15px 15px 15px;
  border-radius: 25px;
  background-color: #fff;
`;
