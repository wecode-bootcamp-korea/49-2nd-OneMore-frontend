import { createGlobalStyle } from 'styled-components';
import PretendardExtraLight from './Pretendard-ExtraLight.woff2';
import PretendardRegular from './Pretendard-Regular.woff2';
import PretendardMedium from './Pretendard-Medium.woff2';
import PretendardSemiBold from './Pretendard-SemiBold.woff2';
import PretendardBold from './Pretendard-Bold.woff2';
import PretendardExtraBold from './Pretendard-ExtraBold.woff2';

export default createGlobalStyle`
@font-face {
  font-family: "Pretendard";
  src: local("Pretendard"),
  url(${PretendardExtraLight}) format('woff2');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard";
  src: local("Pretendard"),
  url(${PretendardRegular}) format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard";
  src: local("Pretendard"),
  url(${PretendardMedium}) format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard";
  src: local("Pretendard"),
  url(${PretendardSemiBold}) format('woff2');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard";
  src: local("Pretendard"),
  url(${PretendardBold}) format('woff2');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard";
  src: local("Pretendard"),
  url(${PretendardExtraBold}) format('woff2');
  font-weight: 700;
  font-style: normal;
}
`;
