import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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
