import React from 'react';
import styled from 'styled-components';

function IconButton({ type = 'button', name, size, onClick, ...props }) {
  return (
    <DefaultButton
      type={type}
      name={name}
      size={size}
      onClick={onClick}
      {...props}
    />
  );
}

const BUTTON_SIZE = {
  small: {
    width: '26px',
    height: '26px',
  },
  medium: {
    width: '46px',
    height: '46px',
  },
  large: {
    width: '55px',
    height: '55px',
  },
};

// const BUTTON_IMAGE = {
//   square: '10px',
//   round: '25px',
// };

const FLEX_CENTER = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled.button`
  ${FLEX_CENTER}
  width:${({ size }) => BUTTON_SIZE[size]?.width || BUTTON_SIZE.medium.width};
  height: ${({ size }) =>
    BUTTON_SIZE[size]?.height || BUTTON_SIZE.medium.height};
  /* background-image: url(${({ icon }) => icon || ''}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default IconButton;

/*
props

type = [string] 입력 타입 / 기본값 : button
name = [string] 식별을 위한 속성
onClick = [function] 클릭 변경 이벤트
disabled = [boolean] 비활성화 여부
*/
