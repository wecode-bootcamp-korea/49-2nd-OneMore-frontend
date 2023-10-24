import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PrevButton = () => {
  const navigate = useNavigate();
  const handlePrevButton = () => {
    navigate(-1);
  };
  return <DefaultButton onClick={handlePrevButton} />;
};

const DefaultButton = styled.button`
  width: 26px;
  height: 26px;
  background-image: url(/images/icon_back.png);
  cursor: pointer;
`;

export default PrevButton;
