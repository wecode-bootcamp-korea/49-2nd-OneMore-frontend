import React from 'react';
import styled from 'styled-components';

function CheckBox({
  type = 'checkbox',
  name,
  value,
  onChange,
  checked,
  size,
  label,
}) {
  return (
    <CheckboxWrapper>
      <DefaultCheckBox
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        size={size}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  padding-left: 3px;
  font-size: 15px;
`;

const CHECKBOX_SIZE = {
  small: {
    width: '17px',
    height: '17px',
  },
  medium: {
    width: '24px',
    height: '24px',
  },
  large: {
    width: '208px',
    height: '80px',
  },
};

const DefaultCheckBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: ${({ size }) => (size ? CHECKBOX_SIZE[size]?.width : '20px')};
  height: ${({ size }) => (size ? CHECKBOX_SIZE[size]?.height : '20px')};
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  outline: none;
  background-color: #ffffff;

  &:checked {
    border: none;
    background-color: #8bc34a;
  }
  &::after {
    content: '';
    opacity: 0;
  }
  &:checked::after {
    opacity: 1;
  }
`;
export default CheckBox;

/*
props

type = [string] 입력 타입 / 기본값 : checkbox
name = [string] 식별을 위한 속성
value = [string] 입력값
onChange = [function] 입력시 변경 이벤트
size = [string] 체크박스의 사이즈
label = [string] 체크박스의 라벨

*/
