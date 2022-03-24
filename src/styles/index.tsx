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

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  position: absolute;
  margin-top: 500px;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 330px;
  height: 55px;
`;

export const ButtonSecundary = styled(ButtonPrimary)`
  border-color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-width: 1.5px;
  margin: 15px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

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
export const TextInputContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  position: absolute;
  margin-top: 155px;
`;
export const TextInput = styled.TextInput`
  border-color: #b1bec2;
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  margin-bottom: 15px;
  padding: 15px;
`;

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
