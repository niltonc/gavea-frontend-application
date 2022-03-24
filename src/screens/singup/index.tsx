import React from 'react';
import { RootStackScreenProps } from '../../types';
import * as S from '../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SingUp'>) {
  return (
    <S.Container>
      <S.TitleText>Criar Conta</S.TitleText>

      <S.TextInput placeholder="Nome completo" />
    </S.Container>
  );
}
