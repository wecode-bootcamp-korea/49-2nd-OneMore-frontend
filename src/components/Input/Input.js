import React from 'react';
import styled from 'styled-components';

function Input({
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  disabled,
  ...props
}) {
  return (
    <DefaultInput
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
}

const INPUT_HEIGHT = {
  low: {
    height: '42px',
  },
  high: {
    height: '50px',
  },
};

const DefaultInput = styled.input`
  width: 100%
  height: ${({ size }) => INPUT_HEIGHT[size]?.height || '50px'};
  padding: 4px 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.5;
  outline: none;

  &::placeholder {
    color: #e0e0e0;
  }

  &:hover,
  &:focus {
    border: 1px solid #8bc34a;
  }

  ${props => {
    if (props.status === 'error') {
      return `
      border-color: #FF3636; 

      `;
    } else if (props.status === 'done') {
      return `
        border-color : #2D71F7;
      `;
    } else {
      return `
      border-color : #E0E0E0; 
      `;
    }
  }}
`;

export default Input;

/*
props

placeholder = [string] placeholder
type = [string] 입력 타입 / 기본값 : text
name = [string] 식별을 위한 속성
value = [string] 입력값
onChange = [function] 입력시 변경 이벤트
disabled = [boolean] 비활성화 여부
*/
