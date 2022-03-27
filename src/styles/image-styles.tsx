import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const Logo = styled.Image`
  position: absolute;
  margin-top: 45px;
  margin-left: 5%;
`;
export const LogoHome = styled.Image`
  position: absolute;
  width: 99px;
  height: 45.66px;
  top: 45px;
  ${Platform.select({
    ios: css`
      left: 150px;
    `,
    android: css`
      left: 120px;
    `,
  })};
`;
