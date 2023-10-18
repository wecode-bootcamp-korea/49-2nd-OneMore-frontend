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
    fontSize: '16px',
  },
  large: {
    padding: '16px',
    fontSize: '20px',
  },
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
  border-radius: 10px;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  font-size: ${({ size }) => BUTTON_SIZE[size]?.height || '20px'};

  &:hover {
    background-color: #7daf42;
  }
  & [disabled] {
    background-color: #c4e0a2;
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
