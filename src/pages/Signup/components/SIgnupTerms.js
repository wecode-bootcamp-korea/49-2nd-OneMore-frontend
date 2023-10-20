import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../../../components/CheckBox/CheckBox';

const SignupTerms = () => {
  // 각 체크박스의 상태를 관리
  const [checkBoxes, setCheckBoxes] = useState({
    selectAll: false,
    privacy: false,
    terms: false,
    age: false,
    marketing: false,
  });

  // 전체선택
  const handleSelectAll = () => {
    const updatedSelectAll = !checkBoxes.selectAll;
    setCheckBoxes({
      ...checkBoxes,
      selectAll: updatedSelectAll,
      privacy: updatedSelectAll,
      terms: updatedSelectAll,
      age: updatedSelectAll,
      marketing: updatedSelectAll,
    });
  };

  // 개별선택
  const handleCheckBoxChange = checkboxName => {
    setCheckBoxes(prevCheckBoxes => {
      const checkBoxStatus = {
        ...prevCheckBoxes,
        [checkboxName]: !prevCheckBoxes[checkboxName],
      };

      // 체크박스가 모두 선택되었는지 확인
      const allSelected = Object.values(checkBoxStatus).every(Boolean);

      // 모든 체크박스가 선택되었으면 전체동의도 선택
      checkBoxStatus.selectAll = allSelected;

      return checkBoxStatus;
    });
  };
  return (
    <CheckBoxWrap>
      <CheckBox
        shape="round"
        size="small"
        label="전체동의"
        checked={checkBoxes.selectAll}
        onChange={handleSelectAll}
      />
      &nbsp;
      <CheckBox
        shape="round"
        size="small"
        label="[필수] 개인정보 수집 및 이용 동의"
        checked={checkBoxes.privacy}
        onChange={() => handleCheckBoxChange('privacy')}
      />
      <CheckBox
        shape="round"
        size="small"
        label="[필수] 이용약관 동의"
        checked={checkBoxes.terms}
        onChange={() => handleCheckBoxChange('term')}
      />
      <CheckBox
        shape="round"
        size="small"
        label="[필수] 만 14세 이상입니다."
        checked={checkBoxes.age}
        onChange={() => handleCheckBoxChange('age')}
      />
      <CheckBox
        shape="round"
        size="small"
        label="마케팅 정보 수신에 동의합니다"
        checked={checkBoxes.marketing}
        onChange={() => handleCheckBoxChange('marketing')}
      />
    </CheckBoxWrap>
  );
};

const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 50px;
  gap: 8px;
  width: 100%;
  font-size: 14px;
`;

export default SignupTerms;
