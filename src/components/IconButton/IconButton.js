import React from 'react';
import styled from 'styled-components';

function IconButton({ type = 'button', name, size, icon, onClick, ...props }) {
  return (
    <DefaultButton
      type={type}
      name={name}
      size={size}
      $icon={icon}
      onClick={onClick}
      {...props}
    />
  );
}

const BUTTON_SIZE = {
  small: {
    width: '26px',
    height: '26px',
  },
  medium: {
    width: '46px',
    height: '46px',
  },
  large: {
    width: '55px',
    height: '55px',
  },
};

const BUTTON_IMAGE = {
  kakao: '/images/icon_kakao.png',
  google: '/images/icon_google.png',
  naver: '/images/icon_naver.png',
  play: '/images/icon_play.png',
  hamberger: '/images/icon_berger.png',
};

const FLEX_CENTER = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled.button`
  ${FLEX_CENTER}
  appearance: none;
  width: ${({ size }) => BUTTON_SIZE[size]?.width || BUTTON_SIZE.medium.width};
  height: ${({ size }) =>
    BUTTON_SIZE[size]?.height || BUTTON_SIZE.medium.height};
  background-image: url(${({ icon }) => BUTTON_IMAGE[icon] || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export default IconButton;
