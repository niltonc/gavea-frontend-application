import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerWelcome = styled.View`
  height: 150px;
  margin-top: 350px;
  margin-left: 5%;
`;
export const ContainerButton = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  position: absolute;
  margin-top: 500px;
`;
export const ContainerTextInput = styled.View`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: 255px;
`;
export const ContainerTextInputSec = styled(ContainerTextInput)`
  margin-top: 155px;
  height: 400px;
`;
export const ContainerText = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  top: 611px;
`;
export const ContainerTitleBold = styled.View`
  position: absolute;
  width: 100%;
  height: 110px;
  left: 15px;
  top: 125px;
`;
export const ContainerTitleSemiBold = styled.View`
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 40px;
  top: 120px;
`;

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
export const LogoHome = styled(Logo)`
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;

export const TextBold = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  position: absolute;
`;
export const TitleBold = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;
export const TitleSemiBold = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  margin-left: 5%;
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

export const DesignView = styled.View`
  position: absolute;
  width: 375px;
  height: 150px;
  left: 0px;
  top: 0px;
  background: #01426a;
`;

export const OrderContainer = styled.View`
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 450px;
  top: 218px;
`;

export const SubtitleView = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 30px;
  left: 60px;
`;

export const SubtitleText = styled.Text`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: #b1bec2;
`;

export const OrderView = styled.View`
  align-items: center;
  width: 100%;
  height: 420px;
  top: 250px;
`;
