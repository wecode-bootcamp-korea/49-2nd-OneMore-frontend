import React from 'react';
import styled from 'styled-components';
import Swiper from '../../components/Swiper/Swiper';
import Tab from '../../components/Tab/Tab';

function Report(props) {
  return (
    <ReportStyle>
      <Tab />
    </ReportStyle>
  );
}

export default Report;

const ReportStyle = styled.div`
  width: 390px;
  height: 844px;
  background-color: #e6e6e6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
`;
