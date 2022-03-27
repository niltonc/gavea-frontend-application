import styled from 'styled-components/native';

export const Text = styled.TextInput`
  border-color: #b1bec2;
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  margin-bottom: 20px;
  padding-left: 35px;
`;
export const IconEmail = styled.Image`
  position: absolute;
  left: 12px;
  top: 20px;
`;
export const IconLock = styled(IconEmail)`
  left: 12px;
  top: 18px;
`;
export const Iconeye = styled(IconLock)`
  left: 13px;
`;

export const Click = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 55px;
  left: 280px;
`;
