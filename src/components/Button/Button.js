import React from 'react';
import styled from 'styled-components';

function Button({
  type = 'button',
  name,
  label,
  onClick,
  disabled,
  children,
  ...props
}) {
  return (
    <DefaultButton
      type={type}
      name={name}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </DefaultButton>
  );
}

const BUTTON_SIZE = {
  small: {
    padding: '8px',
    fontSize: '14px',
  },
  medium: {
    padding: '12px',
    fontSize: '15px',
  },
  large: {
    padding: '16px',
    fontSize: '20px',
  },
};

const SHAPE_BORDER_RADIUS = {
  square: '10px',
  round: '25px',
};

const FLEX_CENTER = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled.button`
  ${FLEX_CENTER}
  width: 100%;
  padding: ${({ size }) =>
    BUTTON_SIZE[size]?.padding || BUTTON_SIZE.medium.padding};
  border-radius: ${({ shape }) => SHAPE_BORDER_RADIUS[shape] || '10px'};
  border: 1px solid;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.green};
  color: ${({ theme, backgroundColor }) =>
    backgroundColor === 'white' ? theme.green : theme.white};
  font-size: ${({ size }) =>
    BUTTON_SIZE[size]?.height || BUTTON_SIZE.medium.font - size};
  line-height: 25px;

  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor === 'white' ? '' : '#7daf42'};
  }
  &:disabled {
    background-color: #bed7a0;
    cursor: not-allowed;
  }
`;

export default Button;

/*
props

type = [string] 입력 타입 / 기본값 : button
name = [string] 식별을 위한 속성
label = [string] 버튼 내부의 글자
onClick = [function] 클릭 변경 이벤트
disabled = [boolean] 비활성화 여부
*/
