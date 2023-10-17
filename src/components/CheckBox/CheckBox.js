import React from 'react';
import styled from 'styled-components';

function CheckBox({
  name,
  value,
  onChange,
  checked,
  size,
  label,
  shape = 'square',
}) {
  return (
    <CheckboxWrapper>
      <DefaultCheckBox
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        size={size}
        shape={shape}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
}

const CHECKBOX_SIZE = {
  small: {
    width: '17px',
    height: '17px',
    scale: 0.7,
  },
  medium: {
    width: '24px',
    height: '24px',
    scale: 1,
  },
  large: {
    width: '208px',
    height: '80px',
    scale: 4,
  },
};

const SHAPE_BORDER_RADIUS = {
  square: '4px',
  round: '50%',
};

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  padding-left: 3px;
  font-size: 15px;
`;

const DefaultCheckBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => CHECKBOX_SIZE[size]?.width || '20px'};
  height: ${({ size }) => CHECKBOX_SIZE[size]?.height || '20px'};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: ${({ shape }) => SHAPE_BORDER_RADIUS[shape] || 0};
  appearance: none;
  cursor: pointer;

  &:checked {
    padding-bottom: ${({ size }) => (size === 'large' ? '10px' : '2px')};
    border-color: ${({ theme }) => theme.green};
    background-color: ${({ theme }) => theme.green};

    &:after {
      content: '';
      height: 6px;
      width: 10px;
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg)
        ${({ size }) => `scale(${CHECKBOX_SIZE[size]?.scale || 1})`};
    }
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
shape = [string] 체크박스의 모양 / 기본값 : square

*/
