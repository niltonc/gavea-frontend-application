import styled from 'styled-components/native';

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-around;
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

export const Icon = styled.Image``;
