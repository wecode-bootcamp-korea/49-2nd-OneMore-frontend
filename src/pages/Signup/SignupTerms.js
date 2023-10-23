import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../../components/CheckBox/CheckBox';
import Signup from './Signup';
import Button from '../../components/Button/Button';

const SignupTerms = () => {
  const [signup, setSignup] = useState(false);

  // 각 체크박스의 상태를 관리
  const [checkBox, setCheckBox] = useState({
    selectAll: false,
    privacy: false,
    terms: false,
    age: false,
    marketing: false,
  });

  // 전체선택
  const handleSelectAll = () => {
    const updatedSelectAll = !checkBox.selectAll;
    setCheckBox({
      ...checkBox,
      selectAll: updatedSelectAll,
      privacy: updatedSelectAll,
      terms: updatedSelectAll,
      age: updatedSelectAll,
      marketing: updatedSelectAll,
    });
  };

  // 개별선택
  const handleCheckBoxChange = checkboxName => {
    setCheckBox(prevCheckBox => {
      const checkBoxStatus = {
        ...prevCheckBox,
        [checkboxName]: !prevCheckBox[checkboxName],
      };

      // 체크박스가 모두 선택되었는지 확인
      const allSelected = Object.values(checkBoxStatus).every(Boolean);

      // 모든 체크박스가 선택되었으면 전체동의도 선택
      checkBoxStatus.selectAll = allSelected;

      return checkBoxStatus;
    });
  };

  // 필수 체크박스의 목록
  const checkrequired = ['privacy', 'terms', 'age'];

  // 필수 체크박스가 모두 선택되었는지 확인
  const allChecked = checkrequired.every(checkbox => checkBox[checkbox]);

  return (
    <SignupWrap>
      {!signup ? (
        <div>
          <TextBox>
            서비스 이용을 위한
            <br />
            약관 동의
          </TextBox>
          <CheckBoxWrap>
            <CheckBox
              shape="round"
              size="small"
              label="전체동의"
              checked={checkBox.selectAll}
              onChange={handleSelectAll}
            />
            <hr />
            <CheckBox
              shape="round"
              size="small"
              label="[필수] 개인정보 수집 및 이용 동의"
              checked={checkBox.privacy}
              onChange={() => handleCheckBoxChange('privacy')}
            />
            <CheckBox
              shape="round"
              size="small"
              label="[필수] 이용약관 동의"
              checked={checkBox.terms}
              onChange={() => handleCheckBoxChange('terms')}
            />
            <CheckBox
              shape="round"
              size="small"
              label="[필수] 만 14세 이상입니다."
              checked={checkBox.age}
              onChange={() => handleCheckBoxChange('age')}
            />
            <CheckBox
              shape="round"
              size="small"
              label="[선택] 마케팅 정보 수신에 동의합니다"
              checked={checkBox.marketing}
              onChange={() => handleCheckBoxChange('marketing')}
            />
          </CheckBoxWrap>
          <ButtonWrap>
            <Button onClick={() => setSignup(true)} disabled={!allChecked}>
              다음
            </Button>
          </ButtonWrap>
        </div>
      ) : (
        <Signup />
      )}
    </SignupWrap>
  );
};

const SignupWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  background-color: #eeeeee;
`;

const TextBox = styled.p`
  padding: 40px 0;
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.darkgray};
  line-height: 140%;
`;

const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 200px;
  gap: 18px;
`;

const ButtonWrap = styled.div`
  margin: 0;
`;

export default SignupTerms;
