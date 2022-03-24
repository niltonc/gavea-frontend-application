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
// $$$$$$$$$ TEXTO
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
// $$$$$$$$$ BUTTON
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
  margin-bottom: 15px;
`;
export const ButtonSecundary = styled.TouchableOpacity`
  border-color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

// $$$$$$$$$ CRIAR CONTA
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
  margin-top: 104px;
  background-color: #1227;
`;
export const TextInputContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  position: absolute;
  margin-top: 155px;
  background-color: #1352;
`;

export const TextInput = styled.TextInput`
  border-color: #b1bec2;
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  margin-bottom: 15px;
  margin: 15px;
`;
