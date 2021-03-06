import styled, { css } from 'styled-components/native';

export const View = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  ${(props) =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  ${(props) =>
    props.secundary &&
    css`
      border-color: ${({ theme }) => theme.colors.white};
      background-color: transparent;
      border-width: 1.5px;
      margin: 15px;
    `}
    ${(props) =>
    props.signin &&
    css`
      margin-top: 15px;
    `}
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;
