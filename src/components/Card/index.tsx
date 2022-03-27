import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const User = styled.View`
  position: absolute;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 7px;
  width: 333px;
  height: 80px;
  top: 110px;
  ${Platform.select({
    ios: css`
      left: 40px;
      elevation: 5;
    `,
    android: css`
      left: 15px;
      elevation: 5;
    `,
  })};
`;
export const Avatar = styled.View`
  background: #5998c5;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  left: 15px;
  elevation: 5;
`;
export const AvatarText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  font-size: 25px;
  font-weight: 500;
  font-style: normal;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  left: 90px;
`;
export const UserSubtitle = styled(UserName)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #748c94;
  opacity: 0.8;
`;
