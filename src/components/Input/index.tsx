import styled from 'styled-components/native';

export const Input = styled.TextInput`
  border-color: #b1bec2;
  border-width: 1.5px;
  border-radius: 4px;
  width: 330px;
  height: 55px;
  margin-bottom: 20px;
  padding-left: 35px;
`;
export const Icon = styled.Image`
  position: absolute;
  left: 12px;
  top: 20px;
`;
export const IconLock = styled(Icon)`
  left: 12px;
  top: 18px;
`;
export const Iconeye = styled(IconLock)`
  left: 285px;
`;
