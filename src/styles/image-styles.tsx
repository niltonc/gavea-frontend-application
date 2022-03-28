import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const Logo = styled.View`
  position: absolute;
  margin-top: 50px;
  margin-left: 6%;
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
