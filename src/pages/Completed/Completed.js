import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

function Completed(props) {
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <Article>
      <CompletedImage src="/images/2.jpg" alt="운동완료" />
      <Button children="운동완료!" onClick={goToMain} />
    </Article>
  );
}

const Article = styled.article`
  width: 90%;
  height: 75%;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    width: 360px;
    height: 634px;
  }
`;

const CompletedImage = styled.img`
  height: 80%;
`;
export default Completed;
