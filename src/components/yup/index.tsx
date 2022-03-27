import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  font-size: 12px;
`;
export const Email = styled(Text)`
  ${Platform.select({
    ios: css`
      left: 45px; ;
    `,
    android: css`
      left: 20px; ;
    `,
  })};
  top: 70px;
`;
export const Pass = styled(Email)`
  top: 145px;
`;
export const ErrosFirebase = styled(Pass)`
  top: -3px;
`;
export const User = styled(ErrosFirebase)`
  top: 70px;
`;
export const EmailCad = styled(User)`
  top: 145px;
`;
export const PassCad = styled(EmailCad)`
  top: 220px;
`;
export const PassConfirm = styled(PassCad)`
  top: 295px;
`;
