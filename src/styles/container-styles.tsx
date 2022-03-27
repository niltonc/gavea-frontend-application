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
    ios: css`
      top: 260px;
    `,
    android: css`
      top: 200px;
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
      top: 215px;
    `,
    android: css`
      top: 150px;
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
