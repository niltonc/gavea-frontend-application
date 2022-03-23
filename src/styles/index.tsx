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
  top: 45px;
  left: 15px;
  position: absolute;
`;

export const WelcomeTxt = styled.Text`
  color: ${props => props.theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  width: 332px;
  height: 131px;
  left: 15px;
  top: 299px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  top: 475px;
  left: 15px;
`;

export const ButtonSingup = styled.TouchableOpacity`
  background-color: transparent;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.theme.colors.white};
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  top: 545px;
  left: 15px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.colors.white};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

export const Text2 = styled.Text`
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
