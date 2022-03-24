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

export const WelcomeText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  width: 90%;
  height: 24%;
  margin-left: 5%;
  margin-top: 299px;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;
export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  margin-bottom: 15px;
`;
export const ButtonSingup = styled.TouchableOpacity`
  border-color: ${props => props.theme.colors.white};
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

export const TitleText = styled.Text`
  color: ${props => props.theme.colors.black};
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  width: 139px;
  height: 30px;
  top: 104px;
  left: 15px;
`;

export const TextInput = styled.TextInput`
  background-color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.black};
  border-radius: 4px;
  border-width: 1.5;
  width: 330px;
  height: 55px;
  left: 15px;
`;
