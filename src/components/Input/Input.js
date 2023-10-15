import React from 'react';
import styled from 'styled-components';

function Input({
  className,
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  disabled,
}) {
  return (
    <DefaultInput
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

const getInputStatus = ({ status, error, done }) => {
  if (status === 'error') {
    return `
      border-color: #FF3636; 
    `;
  } else if (status === 'done') {
    return `
      border-color: #2D71F7;
    `;
  } else {
    return `
    border-color: #E0E0E0; 
  `;
  }
};

const INPUT_SIZE = {
  default: {
    height: '42px',
  },
  login: {
    height: '50px',
  },
};

const DefaultInput = styled.input`
  width: ${({ size }) => (size ? INPUT_SIZE[size]?.width : '100%')};
  height: ${({ size }) => (size ? INPUT_SIZE[size]?.height : '50px')};
  padding: 4px 10px;
  border: 1px solid ${props => getInputStatus(props)};
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
`;

export default Input;

/*
props

className = [string] 클래스 이름
placeholder = [string] placeholder
type = [string] 입력 타입 / 기본값 : text
name = [string] 식별을 위한 속성
value = [string] 입력값
onChange = [function] 입력시 변경 이벤트
disabled = [boolean] 비활성화 여부
*/
