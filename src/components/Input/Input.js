import React from 'react';
import styled from 'styled-components';

function Input({
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  disabled,
  size = 'low',
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
      size={size}
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
  width: 100%;
  height: ${({ size }) => INPUT_HEIGHT[size].height};
  padding: 4px 10px;
  border-left: medium none;
  border-right: medium none;
  border-top: medium none;
  border-bottom: 1px solid
    ${({ isError, theme }) => (isError ? 'red' : theme.gray)}; // 에러 상태일 때 빨간색
  /* border-radius: 10px; */
  font-size: 15px;
  line-height: 1.5;
  outline: none;
  /* background-color: ${props =>
    props.backgroundColor || 'white'}; // 속성에서 받아온 배경 색상을 설정 */

  &::placeholder {
    color: #e0e0e0;
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid #8bc34a;
  }

  ${props => props.status === 'error' && 'border-color:red'};
  ${props => props.status === 'done' && 'border-color:blue'};
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
