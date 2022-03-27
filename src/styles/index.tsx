import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerWelcome = styled.View`
  height: 150px;
  margin-top: 350px;
`;
export const ContainerButton = styled.View`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  ${Platform.select({
    ios: css`
      top: 550px; ;
    `,
    android: css`
      top: 500px; ;
    `,
  })};
`;
export const ContainerTextInput = styled.View`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  ${Platform.select({
    ios: css`
      top: 330px;
    `,
    android: css`
      top: 270px;
    `,
  })};
`;
export const ContainerTextInputSec = styled(ContainerTextInput)`
  position: absolute;
  height: 400px;
  ${Platform.select({
    ios: css``,
    android: css`
      top: -50px;
    `,
  })};
`;
export const ContainerText = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  ${Platform.select({
    ios: css`
      top: 700px;
    `,
    android: css`
      top: 635px;
    `,
  })};
`;
export const ContainerTitleBold = styled.View`
  position: absolute;
  width: 100%;
  height: 110px;
  ${Platform.select({
    ios: css`
      top: 200px;
    `,
    android: css`
      top: 145px;
    `,
  })};
`;
export const ContainerTitleSemiBold = styled.View`
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 40px;
  ${Platform.select({
    ios: css`
      top: 220px;
    `,
    android: css`
      top: 170px;
    `,
  })};
`;
export const ContainerLeg = styled.View`
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 450px;
  top: 218px;
`;
export const ContainerOrder = styled.View`
  align-items: center;
  width: 100%;
  height: 420px;
  top: 250px;
`;
export const View = styled.View`
  position: absolute;
  width: 100%;
  height: 150px;
  background: #01426a;
`;
export const SubtitleView = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  height: 30px;
  left: 75px;
`;
export const ContainerInput = styled.View``;

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
