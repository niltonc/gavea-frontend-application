import styled from 'styled-components/native';

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  width: 333px;
  height: 50px;
  border-radius: 4px;
  elevation: 3;
  margin-bottom: 8px;
  border-left-color: ${(props) => props.borderLeftColor};
  border-left-width: 5px;
`;
export const Icon = styled.Image`
  position: absolute;
  left: 15px;
`;
export const TextPart = styled.Text`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #748c94;
  font-size: 15px;
  left: 55px;
`;
export const TextPag = styled(TextPart)`
  left: 155px;
`;

export const TextTon = styled(TextPag)`
  left: 220px;
`;
export const TextValue = styled(TextTon)`
  left: 270px;
`;
