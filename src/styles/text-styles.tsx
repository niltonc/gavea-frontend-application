import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const TextBold = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  ${Platform.select({
    ios: css`
      left: 40px;
      top: 50px;
    `,
    android: css`
      left: 15px;
    `,
  })};
`;
export const TitleBold = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  ${Platform.select({
    ios: css`
      left: 40px;
    `,
    android: css`
      left: 15px;
    `,
  })};
`;
export const TitleSemiBold = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  ${Platform.select({
    ios: css`
      left: 40px;
    `,
    android: css`
      left: 15px;
    `,
  })};
`;
export const TitleBoldSec = styled(TitleBold)`
  color: ${({ theme }) => theme.colors.black};
`;
export const TextSimple = styled.Text`
  font-style: normal;
  font-weight: 400;
  color: #748c94;
  font-size: 15px;
`;
export const TextPrimary = styled(TextSimple)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-left: 5px;
`;
export const TextClick = styled.TouchableOpacity``;

export const TextLeg = styled.Text`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  color: #b1bec2;
`;
