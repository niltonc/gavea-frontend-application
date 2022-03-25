import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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

export const WelcomeContainer = styled.View`
  height: 150px;
  margin-top: 350px;
  margin-left: 5%;
`;
export const WelcomeText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  position: absolute;
`;
// ########### BUTTONS CONTAINER ##################
export const ContainerButton = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  position: absolute;
  margin-top: 500px;
`;
// ########### BUTTONS CONTAINER ##################

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  width: 139px;
  height: 30px;
  margin-left: 5%;
  margin-top: 140px;
`;
// ######### INPUTS ##################
export const TextInputContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  position: absolute;
  margin-top: 155px;
`;
// ######### INPUTS ##################

export const SimpleTextContainer = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  top: 611px;
`;

export const SimpleTextPrimary = styled.Text`
  font-style: normal;
  font-weight: 400;
  color: #748c94;
  font-size: 15px;
`;
export const SimpleTextSecundary = styled(SimpleTextPrimary)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-left: 5px;
`;

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
