import React from 'react';
import styled from 'styled-components';

function CheckBox({ type = 'checkbox', name, value, onChange, checked, text }) {
  return (
    <CheckboxWrapper>
      <DefaultCheckBox
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <CheckboxLabel>{text}</CheckboxLabel>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
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
  appearance: none;
  width: ${({ size }) => (size ? CHECKBOX_SIZE[size]?.width : '20px')};
  height: ${({ size }) => (size ? CHECKBOX_SIZE[size]?.height : '20px')};
  border: 1px solid gray;
  border-radius: 50%;
  outline: none;
  background-color: #ffffff;
  &:checked {
    border: none;
    background-color: #8bc34a;
  }
  &::after {
    content: '';
    position: absolute;
    opacity: 0;
  }
  &:checked::after {
    opacity: 1; /* 체크된 상태일 때 체크 마크 표시 */
  }
`;
export default CheckBox;

/*
props

type = [string] 입력 타입 / 기본값 : text
name = [string] 식별을 위한 속성
value = [string] 입력값
onChange = [function] 입력시 변경 이벤트
label = [string] 체크박스의 라벨

*/
